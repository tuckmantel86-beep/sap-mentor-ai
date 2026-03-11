#!/usr/bin/env python3
"""
Script: processar-todos-pdfs.py
Extrai imagens de todos os PDFs do curso, aplica frame dark no estilo do site
e salva em public/academia/<slug>/img-XX.png

Estilo do frame:
  - Background do container: #0f172a (slate-900)
  - Borda: 2px solid #334155 (slate-600)
  - Header com badge colorido por nivel
  - Padding ao redor da imagem
  - Footer com legenda numerada
"""

import os, sys, re
from pathlib import Path
from io import BytesIO

try:
    import pdfplumber
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
    import fitz  # PyMuPDF
except ImportError as e:
    print(f"Dependencia faltando: {e}")
    print("Execute: pip install pdfplumber Pillow pymupdf --break-system-packages")
    sys.exit(1)

# ─── Configuracoes de cor do site ───────────────────────────────────────────
DARK_BG        = (15, 23, 42)      # slate-900
DARKER_BG      = (2, 6, 23)        # slate-950
BORDER_COLOR   = (51, 65, 85)      # slate-700
HEADER_TEXT    = (148, 163, 184)   # slate-400
WHITE          = (255, 255, 255)
SAP_BLUE       = (59, 130, 246)    # blue-500

# Cores de badge por nível
BADGE_COLORS = {
    'N1': (16, 185, 129),   # emerald-500
    'N2': (59, 130, 246),   # blue-500
    'N3': (139, 92, 246),   # violet-500
    'N4': (249, 115, 22),   # orange-500
    'N5': (234, 179, 8),    # yellow-500
}

NIVEL_LABEL = {
    'N1': 'Nível 1 · Estagiário',
    'N2': 'Nível 2 · Júnior',
    'N3': 'Nível 3 · Pleno',
    'N4': 'Nível 4 · Sênior',
    'N5': 'Nível 5 · Consultor',
}

BASE = Path(__file__).parent.parent  # pasta raiz do projeto
PDF_DIR = BASE / "pdfs-curso"
OUT_BASE = BASE / "public/academia"


def sanitize_slug(name: str) -> str:
    name = name.lower()
    name = re.sub(r'[àáâãä]', 'a', name)
    name = re.sub(r'[èéêë]', 'e', name)
    name = re.sub(r'[ìíîï]', 'i', name)
    name = re.sub(r'[òóôõö]', 'o', name)
    name = re.sub(r'[ùúûü]', 'u', name)
    name = re.sub(r'[ç]', 'c', name)
    name = re.sub(r'[^a-z0-9]+', '-', name)
    name = name.strip('-')
    return name[:60]


def is_decorative(img: Image.Image) -> bool:
    """Detecta imagens muito pequenas ou logos decorativas."""
    w, h = img.size
    if w < 100 or h < 60:
        return True
    # Imagens quase totalmente brancas (logo SAP, cabeçalhos)
    if img.mode != 'RGB':
        img_rgb = img.convert('RGB')
    else:
        img_rgb = img
    pixels = list(img_rgb.getdata())
    white_count = sum(1 for r, g, b in pixels if r > 240 and g > 240 and b > 240)
    ratio = white_count / len(pixels)
    if ratio > 0.97 and (w * h) < 50000:
        return True
    return False


def apply_dark_frame(img: Image.Image, index: int, aula_id: str, nivel: str, tcode: str = '') -> Image.Image:
    """
    Aplica o frame dark no estilo do site ao redor da imagem SAP.
    Retorna nova imagem com o frame aplicado.
    """
    badge_color = BADGE_COLORS.get(nivel, SAP_BLUE)
    nivel_text = NIVEL_LABEL.get(nivel, 'Academia SAP')

    # Tamanho
    IMG_MAX_W = 900
    img_w, img_h = img.size
    scale = min(IMG_MAX_W / img_w, 1.0)
    new_w = int(img_w * scale)
    new_h = int(img_h * scale)
    img_resized = img.resize((new_w, new_h), Image.LANCZOS)

    # Layout do frame
    PAD = 16
    HEADER_H = 44
    FOOTER_H = 36
    BORDER = 1

    total_w = new_w + PAD * 2 + BORDER * 2
    total_h = new_h + HEADER_H + FOOTER_H + PAD * 2 + BORDER * 2

    frame = Image.new('RGB', (total_w, total_h), DARKER_BG)
    draw = ImageDraw.Draw(frame)

    # Borda externa
    draw.rectangle(
        [0, 0, total_w - 1, total_h - 1],
        outline=BORDER_COLOR, width=BORDER
    )

    # Header bar
    draw.rectangle(
        [BORDER, BORDER, total_w - 1 - BORDER, HEADER_H],
        fill=DARK_BG
    )
    # Separador header
    draw.line(
        [(BORDER, HEADER_H), (total_w - 1 - BORDER, HEADER_H)],
        fill=BORDER_COLOR, width=1
    )

    # Badge nivel (bolinha colorida)
    badge_x = 12
    badge_y = HEADER_H // 2
    badge_r = 5
    draw.ellipse(
        [badge_x - badge_r, badge_y - badge_r, badge_x + badge_r, badge_y + badge_r],
        fill=badge_color
    )

    # Texto header
    try:
        font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 11)
        font_bold = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 11)
    except:
        font_small = ImageFont.load_default()
        font_bold = font_small

    header_label = f"SAP Mentor AI  ·  {nivel_text}"
    if tcode:
        header_label += f"  ·  {tcode}"
    draw.text((badge_x + badge_r + 8, badge_y - 6), header_label, fill=HEADER_TEXT, font=font_small)

    # Número da imagem no canto direito do header
    num_text = f"#{index:02d}"
    try:
        bbox = draw.textbbox((0, 0), num_text, font=font_bold)
        num_w = bbox[2] - bbox[0]
    except:
        num_w = 20
    draw.text((total_w - num_w - 12, badge_y - 6), num_text, fill=badge_color, font=font_bold)

    # Área da imagem (fundo branco para o print SAP)
    img_x = BORDER + PAD
    img_y = HEADER_H + PAD
    # Fundo branco para o print
    draw.rectangle(
        [img_x - 2, img_y - 2, img_x + new_w + 2, img_y + new_h + 2],
        fill=(255, 255, 255)
    )
    frame.paste(img_resized, (img_x, img_y))

    # Borda ao redor da imagem
    draw.rectangle(
        [img_x - 2, img_y - 2, img_x + new_w + 2, img_y + new_h + 2],
        outline=BORDER_COLOR, width=1
    )

    # Footer
    footer_y = img_y + new_h + PAD
    draw.line(
        [(BORDER, footer_y), (total_w - 1 - BORDER, footer_y)],
        fill=BORDER_COLOR, width=1
    )
    footer_text = f"SAP ECC 6.0  ·  {aula_id}  ·  Imagem {index:02d}"
    draw.text((12, footer_y + 10), footer_text, fill=HEADER_TEXT, font=font_small)

    return frame


def extract_images_from_pdf(pdf_path: Path, out_dir: Path, aula_id: str, nivel: str, tcode: str = '') -> list:
    """
    Extrai imagens de um PDF usando PyMuPDF (melhor qualidade).
    Aplica frame dark e salva em out_dir.
    Retorna lista de caminhos relativos das imagens salvas.
    """
    out_dir.mkdir(parents=True, exist_ok=True)
    saved = []
    img_count = 0

    try:
        doc = fitz.open(str(pdf_path))
    except Exception as e:
        print(f"  [ERRO] Abrindo {pdf_path.name}: {e}")
        return saved

    for page_num in range(len(doc)):
        page = doc[page_num]
        img_list = page.get_images(full=True)

        for img_index, img_info in enumerate(img_list):
            xref = img_info[0]
            try:
                base_image = doc.extract_image(xref)
                img_bytes = base_image["image"]
                img_ext = base_image["ext"]

                img = Image.open(BytesIO(img_bytes))
                if img.mode == 'CMYK':
                    img = img.convert('RGB')
                elif img.mode == 'RGBA':
                    bg = Image.new('RGB', img.size, (255, 255, 255))
                    bg.paste(img, mask=img.split()[3])
                    img = bg
                elif img.mode != 'RGB':
                    img = img.convert('RGB')

                if is_decorative(img):
                    continue

                img_count += 1
                framed = apply_dark_frame(img, img_count, aula_id, nivel, tcode)
                out_path = out_dir / f"img-{img_count:02d}.png"
                framed.save(str(out_path), 'PNG', optimize=True)

                # Caminho relativo para uso no web
                rel = str(out_path).replace(str(BASE / "public"), "")
                saved.append(rel)
                print(f"  ✓ {out_path.name} ({img.size[0]}x{img.size[1]}px)")

            except Exception as e:
                print(f"  [AVISO] Img {img_index} p.{page_num}: {e}")
                continue

    doc.close()
    return saved


# ─── Mapeamento: PDF → {aula_id, nivel, slug, tcode} ────────────────────────
PDF_MAP = [
    # NIVEL 1
    {
        'pdfs': ['SAP ECC - Entrando no SAP pela primeira vez .pdf',
                 'SAP ECC - Barra de comando no SAP (1).pdf'],
        'aula_id': 'ACAD-N1-001', 'nivel': 'N1',
        'slug': 'n1-001-login-tela-inicial', 'tcode': ''
    },
    {
        'pdfs': ['SAP ECC - Navegando pelo SAP.pdf'],
        'aula_id': 'ACAD-N1-002', 'nivel': 'N1',
        'slug': 'n1-002-navegando-sap', 'tcode': 'MM01/MM03/FK01'
    },
    {
        'pdfs': ['SAP ECC - Favoritos no SAP.pdf'],
        'aula_id': 'ACAD-N1-003', 'nivel': 'N1',
        'slug': 'n1-003-favoritos', 'tcode': 'Favoritos'
    },
    {
        'pdfs': ['SAP ECC - Transações no SAP (1).pdf'],
        'aula_id': 'ACAD-N1-004', 'nivel': 'N1',
        'slug': 'n1-004-mm03', 'tcode': 'MM03'
    },
    {
        'pdfs': ['Consulta de estoque X Relatório de cadastro.pdf'],
        'aula_id': 'ACAD-N1-005', 'nivel': 'N1',
        'slug': 'n1-005-mmbe', 'tcode': 'MMBE'
    },
    {
        'pdfs': ['SAP ECC - Comandos do SAP.pdf'],
        'aula_id': 'ACAD-N1-006', 'nivel': 'N1',
        'slug': 'n1-006-comandos', 'tcode': '/N /O /I /H'
    },
    {
        'pdfs': ['SAP ECC - Transações no SAP (1).pdf'],
        'aula_id': 'ACAD-N1-007', 'nivel': 'N1',
        'slug': 'n1-007-tipos-transacao', 'tcode': 'MM01/02/03'
    },
    {
        'pdfs': ['SAP ECC - Dica para encontrar Transação.pdf'],
        'aula_id': 'ACAD-N1-008', 'nivel': 'N1',
        'slug': 'n1-008-search-menu', 'tcode': 'SEARCH_SAP_MENU'
    },
    {
        'pdfs': ['Cor, Tamanho da fonte e Som.pdf',
                 'Habilitando SAP Script e Lupa de pesquisa.pdf'],
        'aula_id': 'ACAD-N1-009', 'nivel': 'N1',
        'slug': 'n1-009-personalizar', 'tcode': 'Options'
    },
    {
        'pdfs': ['Cheguei na empresa e agora.pdf', 'Primeiros Passos.pdf'],
        'aula_id': 'ACAD-N1-010', 'nivel': 'N1',
        'slug': 'n1-010-primeiros-dias', 'tcode': ''
    },
    # NIVEL 2
    {
        'pdfs': ['Tipo de Material.pdf'],
        'aula_id': 'ACAD-N2-001', 'nivel': 'N2',
        'slug': 'n2-001-tipos-material', 'tcode': 'MM03'
    },
    {
        'pdfs': ['MM01 - Cadastro de Material.pdf',
                 'Cadastrando seu primeiro material.pdf'],
        'aula_id': 'ACAD-N2-002', 'nivel': 'N2',
        'slug': 'n2-002-mm01-cadastro', 'tcode': 'MM01'
    },
    {
        'pdfs': ['Processo de compras.pdf',
                 'Anexar arquivos no SAP na Transação ME23N.pdf'],
        'aula_id': 'ACAD-N2-003', 'nivel': 'N2',
        'slug': 'n2-003-fluxo-p2p', 'tcode': 'ME21N/ME23N'
    },
    {
        'pdfs': ['SAP MM - Recebimento Físico.pdf',
                 'SAP MM - Recebimento da Invoice.pdf'],
        'aula_id': 'ACAD-N2-004', 'nivel': 'N2',
        'slug': 'n2-004-migo-entrada', 'tcode': 'MIGO'
    },
    {
        'pdfs': ['MB03.pdf', 'Visualização de Documento de Material.pdf'],
        'aula_id': 'ACAD-N2-005', 'nivel': 'N2',
        'slug': 'n2-005-mb03-documento', 'tcode': 'MB03'
    },
    {
        'pdfs': ['MB51 - Consulta de Movimento de Estoque.pdf', 'MB51.pdf'],
        'aula_id': 'ACAD-N2-006', 'nivel': 'N2',
        'slug': 'n2-006-mb51-relatorio', 'tcode': 'MB51'
    },
    # NIVEL 3
    {
        'pdfs': ['SAP ECC - Layout ALV.pdf', 'Habilitando Chaves de listagem.pdf'],
        'aula_id': 'ACAD-N3-001', 'nivel': 'N3',
        'slug': 'n3-001-layout-alv', 'tcode': 'FBL1N/ALV'
    },
    {
        'pdfs': ['SAP ECC - Variantes.pdf',
                 'Variantes avançadas e Jobs automáticos.pdf'],
        'aula_id': 'ACAD-N3-002', 'nivel': 'N3',
        'slug': 'n3-002-variantes', 'tcode': 'FBL1N/Variantes'
    },
    {
        'pdfs': ['SAP  ECC - Exportar dados p_ Excel.pdf',
                 'SAP ECC - Seleção dinâmica e múltipla.pdf'],
        'aula_id': 'ACAD-N3-003', 'nivel': 'N3',
        'slug': 'n3-003-exportar-excel', 'tcode': 'ALV/Excel'
    },
]


def main():
    print("\n🚀 SAP Mentor AI — Processador de PDFs em Lote")
    print("=" * 60)

    all_results = {}  # aula_id -> [img_paths]

    for entry in PDF_MAP:
        aula_id = entry['aula_id']
        nivel = entry['nivel']
        slug = entry['slug']
        tcode = entry['tcode']
        out_dir = OUT_BASE / slug

        print(f"\n📚 {aula_id} → {slug}/")

        images_for_aula = []
        for pdf_name in entry['pdfs']:
            pdf_path = PDF_DIR / pdf_name
            if not pdf_path.exists():
                print(f"  [SKIP] Não encontrado: {pdf_name}")
                continue
            print(f"  📄 {pdf_name}")
            imgs = extract_images_from_pdf(pdf_path, out_dir, aula_id, nivel, tcode)
            images_for_aula.extend(imgs)

        all_results[aula_id] = images_for_aula

        if images_for_aula:
            print(f"  → {len(images_for_aula)} imagem(ns) salva(s) em public/academia/{slug}/")
        else:
            print(f"  → Nenhuma imagem útil encontrada")

    # Gera arquivo de mapeamento JSON
    import json
    map_file = BASE / "scripts/imagens_por_aula.json"
    with open(map_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Concluído! Mapeamento salvo em scripts/imagens_por_aula.json")
    print("\nResumo:")
    for aula_id, imgs in all_results.items():
        print(f"  {aula_id}: {len(imgs)} imagens")


if __name__ == '__main__':
    os.chdir(str(BASE))
    main()
