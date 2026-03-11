# Plano de Construcao da Academia SAP - SAP Mentor AI

## Estrutura de Modulos

| Modulo | Pasta PDFs | Pasta Imagens | Status |
|--------|-----------|---------------|--------|
| MM - Materials Management | pdfs-curso/mm/ | public/academia/mm/ | Em andamento |
| FI - Financial Accounting | pdfs-curso/fi/ | public/academia/fi/ | Aguardando PDFs |
| SD - Sales & Distribution | pdfs-curso/sd/ | public/academia/sd/ | Aguardando PDFs |
| CO - Controlling | pdfs-curso/co/ | public/academia/co/ | Aguardando PDFs |
| HCM - Human Capital Mgmt | pdfs-curso/hcm/ | public/academia/hcm/ | Aguardando PDFs |

---

## Como Processar um PDF

```bash
cd sap-mentor-ai
python3 scripts/processar-pdf.py "pdfs-curso/mm/nome-da-aula.pdf" MM
```

O script faz automaticamente:
1. Extrai texto do PDF
2. Extrai imagens reais do SAP (descartando decorativas)
3. Salva imagens em public/academia/mm/<slug>/
4. Gera codigo TypeScript base em scripts/gerado/<slug>.ts
5. Marca trechos [ADAPTAR] para revisao manual

---

## Etapas de Trabalho por Lote

### ETAPA 1 - Modulo MM Nivel 1 (Estagiario)
- Aulas de navegacao basica, login, tela inicial
- Meta: 5-8 aulas
- Transacoes: MM03, MMBE, ME51N, ME53N, ME23N

### ETAPA 2 - Modulo MM Nivel 2 (Junior)
- Operacoes diarias: entradas, requisicoes, pedidos
- Meta: 8-12 aulas
- Transacoes: MIGO, ME21N, ME22N, MIRO

### ETAPA 3 - Modulo MM Nivel 3 (Pleno)
- Integracao e relatorios
- Meta: 8-10 aulas
- Transacoes: MB51, MM60, ME2M, ME80FN

### ETAPA 4 - Modulo MM Nivel 4 (Senior)
- Troubleshooting, estornos, situacoes excepcionais
- Meta: 5-8 aulas
- Transacoes: MR8M, MIGO (estorno), MB1B

### ETAPA 5 - Modulo MM Nivel 5 (Consultor)
- Customizing e dados mestre
- Meta: 5-8 aulas
- Transacoes: MM01, XK01, OMSY, OMB3

---

## Regras de Adaptacao de Conteudo

Para nao copiar o conteudo original:
1. **Reescreva** cada passo com linguagem propria e contexto corporativo
2. **Adicione** "Você esta na empresa X como analista Y e precisa..."
3. **Enriqueca** com explicacoes do PORQUE de cada acao
4. **Inclua** dicas de pegadinhas que o PDF nao menciona
5. **Crie** exercicios de fixacao adicionais
6. **Use** as imagens do PDF (prints do SAP sao factuais, nao protegidos)

---

## Progresso

- [x] Estrutura de pastas criada
- [x] Script processador criado e testado
- [x] PDF de amostra processado
- [ ] PDFs MM Nivel 1 (aguardando upload)
- [ ] PDFs MM Nivel 2
- [ ] PDFs MM Nivel 3
- [ ] PDFs MM Nivel 4
- [ ] PDFs MM Nivel 5
- [ ] Modulo FI
- [ ] Modulo SD
- [ ] Modulo CO
- [ ] Modulo HCM
