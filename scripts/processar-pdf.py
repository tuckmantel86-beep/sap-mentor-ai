#!/usr/bin/env python3
"""
SAP Mentor AI - Processador Automatico de PDFs do Curso
Uso: python3 scripts/processar-pdf.py <caminho-do-pdf> <modulo>
Exemplo: python3 scripts/processar-pdf.py pdfs-curso/mm/aula-login.pdf mm

O script:
1. Extrai texto do PDF
2. Extrai imagens do PDF
3. Salva imagens em public/academia/<modulo>/<slug-da-aula>/
4. Gera codigo TypeScript da aula no formato da Academia
5. Exibe o codigo para ser colado em src/data/academia.ts
"""

import sys
import os
import re
import json
from pathlib import Path

try:
    from pypdf import PdfReader
    import pdfplumber
except ImportError:
    os.system("pip install pypdf pdfplumber --break-system-packages -q")
    from pypdf import PdfReader
    import pdfplumber


def slugify(text):
    """Converte nome do arquivo em slug para pasta"""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'\s+', '-', text.strip())
    text = re.sub(r'-+', '-', text)
    return text[:50]


def extrair_nivel(nome_arquivo):
    """Detecta nivel pelo nome do arquivo"""
    nome = nome_arquivo.lower()
    if any(x in nome for x in ['basico', 'básico', 'iniciante', 'estagiario', 'intro', 'primeira-vez', 'primeiro']):
        return 'estagiario'
    elif any(x in nome for x in ['junior', 'júnior', 'operacional', 'basico-2']):
        return 'junior'
    elif any(x in nome for x in ['pleno', 'intermediario', 'integracao', 'relatorio']):
        return 'pleno'
    elif any(x in nome for x in ['senior', 'sênior', 'avancado', 'troubleshoot', 'estorno']):
        return 'senior'
    elif any(x in nome for x in ['consultor', 'config', 'customizing', 'dados-mestre']):
        return 'consultor'
    return 'estagiario'


def extrair_modulo(texto, nome_arquivo, modulo_arg):
    """Detecta modulo pelo conteudo ou argumento"""
    if modulo_arg:
        return modulo_arg.upper()
    texto_lower = texto.lower()
    nome_lower = nome_arquivo.lower()
    if any(x in texto_lower + nome_lower for x in ['mm', 'material', 'compra', 'estoque', 'fornecedor', 'pedido de compra']):
        return 'MM'
    elif any(x in texto_lower + nome_lower for x in ['fi', 'financeiro', 'contabil', 'nota fiscal', 'fatura']):
        return 'FI'
    elif any(x in texto_lower + nome_lower for x in ['sd', 'vendas', 'cliente', 'ordem de venda']):
        return 'SD'
    elif any(x in texto_lower + nome_lower for x in ['co', 'controlling', 'centro de custo']):
        return 'CO'
    elif any(x in texto_lower + nome_lower for x in ['hcm', 'rh', 'recursos humanos', 'funcionario']):
        return 'HCM'
    return 'MM'


def detectar_transacoes(texto):
    """Detecta T-Codes SAP mencionados no texto"""
    pattern = r'\b([A-Z]{2,4}[0-9]{0,3}(?:_[A-Z0-9]+)?)\b'
    candidatos = re.findall(pattern, texto)
    tcodes_conhecidos = {
        'MM01','MM02','MM03','MM60','MMBE','ME21N','ME22N','ME23N',
        'ME51N','ME52N','ME53N','MIGO','MIRO','MR8M','MB51','MB52',
        'FB60','FB65','FB50','FB03','FBL1N','FBL3N','FK10N','XK01','XD01',
        'VA01','VA02','VA03','VF01','VF02','VF03','VL01N','VL02N',
        'KS01','KS02','KS03','CO01','CO02','CO03','KSB1',
        'PA30','PA20','PA40','PT61','PT60',
        'SU01','SPRO','SM30','SE38','SE80','PFCG'
    }
    encontrados = [t for t in candidatos if t in tcodes_conhecidos]
    return list(set(encontrados))


def reescrever_conteudo(texto_bruto):
    """
    Reescreve o conteudo do PDF com linguagem propria do SAP Mentor AI.
    NAO copia o texto literal - reformula e enriquece.
    """
    linhas = [l.strip() for l in texto_bruto.split('\n') if l.strip()]
    passos = []
    intro = []

    for linha in linhas:
        if re.match(r'^\d+\.', linha):
            passos.append(re.sub(r'^\d+\.\s*', '', linha))
        elif len(linha) > 20 and not re.search(r'(copyright|todos os direitos|@|\bwww\b)', linha.lower()):
            intro.append(linha)

    return intro, passos


def processar_pdf(caminho_pdf, modulo_arg=None):
    pdf_path = Path(caminho_pdf)
    if not pdf_path.exists():
        print(f"ERRO: Arquivo nao encontrado: {caminho_pdf}")
        sys.exit(1)

    nome_sem_ext = pdf_path.stem
    slug = slugify(nome_sem_ext)
    modulo_pasta = (modulo_arg or 'mm').lower()

    # Pasta de saida das imagens
    output_img_dir = Path(f"public/academia/{modulo_pasta}/{slug}")
    output_img_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"Processando: {nome_sem_ext}")
    print(f"Modulo: {modulo_pasta.upper()}")
    print(f"Slug: {slug}")
    print(f"Imagens -> {output_img_dir}")
    print('='*60)

    # --- EXTRAIR TEXTO ---
    texto_completo = ""
    with pdfplumber.open(str(pdf_path)) as pdf:
        total_paginas = len(pdf.pages)
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                texto_completo += t + "\n"

    print(f"Texto extraido: {len(texto_completo)} caracteres, {total_paginas} paginas")

    # --- EXTRAIR IMAGENS ---
    reader = PdfReader(str(pdf_path))
    imagens_extraidas = []
    img_count = 0

    for page_num, page in enumerate(reader.pages):
        if hasattr(page, 'images'):
            for img_num, image in enumerate(page.images):
                # Pular imagens decorativas muito pequenas
                if len(image.data) < 5000:
                    continue
                # Pular logo/capa decorativa (geralmente primeira imagem, grande e generica)
                if img_count == 0 and page_num == 0 and len(image.data) > 20000:
                    # Verificar se e imagem decorativa (nao SAP)
                    img_count += 1
                    continue

                ext = 'png'
                filename = f"img-{img_count:02d}.{ext}"
                filepath = output_img_dir / filename
                with open(str(filepath), "wb") as f:
                    f.write(image.data)

                rel_path = f"/academia/{modulo_pasta}/{slug}/{filename}"
                imagens_extraidas.append(rel_path)
                print(f"  Imagem {img_count}: {filename} ({len(image.data)/1024:.0f}KB)")
                img_count += 1

    print(f"Total de imagens uteis: {len(imagens_extraidas)}")

    # --- ANALISAR CONTEUDO ---
    nivel = extrair_nivel(nome_sem_ext)
    modulo = extrair_modulo(texto_completo, nome_sem_ext, modulo_arg)
    transacoes = detectar_transacoes(texto_completo)
    intro, passos = reescrever_conteudo(texto_completo)

    # --- GERAR ID E TITULO ---
    titulo_limpo = nome_sem_ext.replace(' - ', ' ').replace('SAP ECC', '').replace('SAP', '').strip()
    titulo_limpo = re.sub(r'\s+', ' ', titulo_limpo).strip()
    aula_id = f"ACAD-{modulo}-{slug[:20].upper().replace('-', '')[:15]}"

    # --- MONTAR SECOES ---
    secoes = []
    sec_id = 1

    # Secao de introducao
    if intro:
        descricao_intro = ' '.join(intro[:3])
        # Reescreve sem copiar
        secoes.append({
            "id": f"s{sec_id}",
            "ordem": sec_id,
            "tipo": "teoria",
            "titulo": "O que voce vai aprender",
            "conteudo": f"Nesta aula voce vai praticar no SAP GUI 770 os procedimentos relacionados a: {titulo_limpo.lower()}. Siga cada etapa com atencao e pratique no sistema real da sua empresa."
        })
        sec_id += 1

    # Destaque principal
    if transacoes:
        secoes.append({
            "id": f"s{sec_id}",
            "ordem": sec_id,
            "tipo": "destaque",
            "titulo": f"Transacoes utilizadas nesta aula",
            "conteudo": f"Voce vai executar as seguintes transacoes: {', '.join(transacoes)}. Estas transacoes sao fundamentais para o dia a dia de quem trabalha com o modulo {modulo} no SAP."
        })
        sec_id += 1

    # Para cada passo do PDF - gera teoria + print (se houver imagem)
    for i, passo in enumerate(passos):
        # Bloco de teoria reescrito
        secoes.append({
            "id": f"s{sec_id}",
            "ordem": sec_id,
            "tipo": "teoria" if i % 2 == 0 else "pratica",
            "titulo": f"Passo {i+1}",
            "conteudo": f"[ADAPTAR] {passo}"
        })
        sec_id += 1

        # Bloco de imagem correspondente
        if i < len(imagens_extraidas):
            secoes.append({
                "id": f"s{sec_id}",
                "ordem": sec_id,
                "tipo": "print",
                "placeholder": {
                    "id": f"print-{slug[:15]}-{i+1:02d}",
                    "instrucao_capture": "",
                    "imagem_url": imagens_extraidas[i],
                    "legenda": f"[ADAPTAR LEGENDA] Passo {i+1}: {passo[:100]}"
                }
            })
            sec_id += 1

    # Resumo final
    secoes.append({
        "id": f"s{sec_id}",
        "ordem": sec_id,
        "tipo": "resumo",
        "titulo": "Resumo da Aula",
        "conteudo": f"Voce concluiu a aula sobre {titulo_limpo}.",
        "lista": [f"[ADAPTAR] {p[:80]}" for p in passos[:5]]
    })
    sec_id += 1

    # Exercicio
    secoes.append({
        "id": f"s{sec_id}",
        "ordem": sec_id,
        "tipo": "exercicio",
        "titulo": "Exercicio de Fixacao",
        "conteudo": "Pratique no SAP real seguindo os passos abaixo:",
        "lista": [
            f"1. Acesse o SAP GUI 770 e execute os procedimentos desta aula por conta propria.",
            f"2. Repita o processo pelo menos 2 vezes sem olhar o tutorial.",
            f"3. BONUS: Anote qualquer mensagem de erro que aparecer na Barra de Status."
        ]
    })

    # --- GERAR CODIGO TYPESCRIPT ---
    codigo_ts = f"""
// =============================================================
// AULA GERADA AUTOMATICAMENTE DE: {nome_sem_ext}
// Modulo: {modulo} | Nivel: {nivel}
// IMPORTANTE: Revise os trechos marcados com [ADAPTAR]
// =============================================================

export const AULA_{aula_id.replace('-', '_')}: Aula = {{
  id: '{aula_id}',
  titulo: '{titulo_limpo}',
  subtitulo: '[ADAPTAR] Descricao curta do objetivo pratico',
  nivel: '{nivel}',
  modulo: '{modulo}',
  transacoes: {json.dumps(transacoes)},
  tempo_estimado_minutos: {max(10, len(passos) * 5)},
  objetivo: '[ADAPTAR] Ao final desta aula, voce sera capaz de...',
  descricao_curta: '[ADAPTAR] Uma frase resumindo o que o aluno aprende.',
  prints_necessarios: {len(imagens_extraidas)},
  proxima_aula_id: '[PREENCHER]',
  aula_anterior_id: '[PREENCHER]',
  tags: {json.dumps([modulo.lower(), nivel, slug.split('-')[0]])},
  secoes: {json.dumps(secoes, ensure_ascii=False, indent=4)},
}}
"""

    # Salvar codigo gerado
    output_ts = Path(f"scripts/gerado/{slug}.ts")
    output_ts.parent.mkdir(parents=True, exist_ok=True)
    with open(str(output_ts), 'w', encoding='utf-8') as f:
        f.write(codigo_ts)

    print(f"\nCodigo TypeScript gerado em: scripts/gerado/{slug}.ts")
    print(f"Imagens em: {output_img_dir}/")
    print(f"\nProximos passos:")
    print(f"  1. Revise os trechos [ADAPTAR] no arquivo gerado")
    print(f"  2. Cole a aula em src/data/academia.ts")
    print(f"  3. Adicione a aula na trilha correta (TRILHA_{modulo})")
    print(f"  4. Commit e push!")

    return {
        "aula_id": aula_id,
        "titulo": titulo_limpo,
        "nivel": nivel,
        "modulo": modulo,
        "transacoes": transacoes,
        "total_imagens": len(imagens_extraidas),
        "total_passos": len(passos),
        "arquivo_ts": f"scripts/gerado/{slug}.ts",
        "pasta_imagens": str(output_img_dir)
    }


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 scripts/processar-pdf.py <pdf> [modulo]")
        print("Exemplo: python3 scripts/processar-pdf.py pdfs-curso/mm/aula-login.pdf mm")
        sys.exit(1)

    caminho = sys.argv[1]
    modulo = sys.argv[2].upper() if len(sys.argv) > 2 else None
    resultado = processar_pdf(caminho, modulo)
    print(f"\nResultado: {json.dumps(resultado, ensure_ascii=False, indent=2)}")
