// Academia Images Map — mapeamento correto baseado nas imagens reais dos PDFs
// Cada placeholder_id aponta para a imagem mais relevante da pasta correspondente

export const ACADEMIA_IMAGES: Record<string, string> = {

  // ── N1-001: Login e SAP Logon 760 ────────────────────────────────────────────
  // Pasta: SAP Logon, tela de login, SAP Easy Access
  'print-n1-001-01': '/academia/n1-001-login-tela-inicial/img-03.png', // SAP Logon 760 — dois sistemas (SAP ECC EH8 e SAP S4H)
  'print-n1-001-02': '/academia/n1-001-login-tela-inicial/img-04.png', // Tela de login — Mandante 800, Usuário KEY00932
  'print-n1-001-03': '/academia/n1-001-login-tela-inicial/img-05.png', // SAP Easy Access — menu principal após login

  // ── N1-002: MM03 Exibir Material ─────────────────────────────────────────────
  // Pasta: MM03 1ª tela, Seleção de visões, visão Compras, MMBE
  'print-n1-002-01': '/academia/n1-002-navegando-sap/img-06.png', // MM03 — Exibir material (1ª tela) com campo Material
  'print-n1-002-02': '/academia/n1-002-navegando-sap/img-11.png', // MM03 — Seleção de visões com "Compras" destacada
  'print-n1-002-03': '/academia/n1-002-navegando-sap/img-13.png', // MM03 — Visão Compra do MP1-00 (Matéria-prima)
  'print-n1-002-04': '/academia/n1-002-navegando-sap/img-19.png', // MMBE — Visão geral de estoques (tela de seleção)

  // ── N1-003: Favoritos ─────────────────────────────────────────────────────────
  // Pasta: criar pasta, inserir transação, lista de favoritos
  'print-n1-003-01': '/academia/n1-003-favoritos/img-04.png', // Criar pasta "Compras - MM" nos favoritos
  'print-n1-003-02': '/academia/n1-003-favoritos/img-06.png', // Menu contexto > "Inserir transação" destacado
  'print-n1-003-03': '/academia/n1-003-favoritos/img-18.png', // Lista completa de favoritos com T-codes do MM

  // ── N1-004: Padrão 01/02/03 das Transações ───────────────────────────────────
  // Pasta: MM01 Criar, MM02 Modificar, MM03 Exibir, FS00 com 3 botões
  'print-n1-004-01': '/academia/n1-004-mm03/img-03.png', // MM01 — Criar material (1ª tela) com seta em "Criar"
  'print-n1-004-02': '/academia/n1-004-mm03/img-04.png', // MM02 — Modificar material (1ª tela)
  'print-n1-004-03': '/academia/n1-004-mm03/img-05.png', // MM03 — Exibir material (1ª tela)
  'print-n1-004-04': '/academia/n1-004-mm03/img-08.png', // FS00 — Conta do Razão com botões Visualiza/Edita/Cria

  // ── N1-005: MMBE Consulta de Estoque ─────────────────────────────────────────
  // Pasta: MMBE tela seleção, MMBE lista básica, MM60 Índice de materiais
  'print-n1-005-01': '/academia/n1-005-mmbe/img-02.png', // MMBE — tela de seleção (Material MP1-00, Centro BR50)
  'print-n1-005-02': '/academia/n1-005-mmbe/img-04.png', // MMBE — lista básica com tipos de estoque
  'print-n1-005-03': '/academia/n1-005-mmbe/img-11.png', // MM60 — Índice de materiais com Centro BR60

  // ── N1-006: Comandos /N, /O, /I ──────────────────────────────────────────────
  // Pasta: /N no campo de comando, duas sessões abertas, /I fechando sessão
  'print-n1-006-01': '/academia/n1-006-comandos/img-05.png', // Campo de Comando com "/N" digitado dentro de ME21N
  'print-n1-006-02': '/academia/n1-006-comandos/img-07.png', // SAP Easy Access + janela "Exibir documento" via /O
  'print-n1-006-03': '/academia/n1-006-comandos/img-08.png', // Campo de Comando com "/I" digitado em Exibir documento

  // ── N1-007: MM01 Criando Material ────────────────────────────────────────────
  // Pasta: MM01 com seta Criar, FK01 Fornecedor criar, SE38 Exibir/Modificar
  'print-n1-007-01': '/academia/n1-007-tipos-transacao/img-03.png', // MM01 — Criar material (1ª tela) com seta
  'print-n1-007-02': '/academia/n1-007-tipos-transacao/img-09.png', // SE38 — botões Exibir e Modificar

  // ── N1-008: SEARCH_SAP_MENU ───────────────────────────────────────────────────
  // Pasta: popup de pesquisa, resultado com lista de T-codes
  'print-n1-008-01': '/academia/n1-008-search-menu/img-03.png', // Popup "Entrada código transação ou texto menu" com "ORDEM"
  'print-n1-008-02': '/academia/n1-008-search-menu/img-04.png', // Resultado: lista de T-codes encontrados (SAPPO/PPO2, ME92F etc.)

  // ── N1-009: Personalização SAP GUI ───────────────────────────────────────────
  // Pasta: Easy Access com tema colorido, SAP GUI Options (Scripting)
  'print-n1-009-01': '/academia/n1-009-personalizar/img-05.png', // SAP Easy Access com tema rosa/personalizado
  'print-n1-009-02': '/academia/n1-009-personalizar/img-16.png', // SAP GUI Options — EH8 (Accessibility & Scripting)

  // ── N1-010: Terminologia SAP Inglês x Português ───────────────────────────────
  // Pasta: MIRO em inglês, Customer Display, Vendor Line Item + Get Variant
  'print-n1-010-01': '/academia/n1-010-primeiros-dias/img-06.png', // "Customer Display" com anotações Customer=Cliente
  'print-n1-010-02': '/academia/n1-010-primeiros-dias/img-08.png', // "Vendor Line Item Display" com "Get Variant" = Selecionar Variante

  // ── N2-001: Tipos de Material ─────────────────────────────────────────────────
  'print-n2-001-01': '/academia/n2-001-tipos-material/img-02.png',
  'print-n2-001-02': '/academia/n2-001-tipos-material/img-08.png',

  // ── N2-002: MM01 Cadastro ─────────────────────────────────────────────────────
  'print-n2-002-01': '/academia/n2-002-mm01-cadastro/img-03.png',
  'print-n2-002-02': '/academia/n2-002-mm01-cadastro/img-05.png',
  'print-n2-002-03': '/academia/n2-002-mm01-cadastro/img-07.png',
  'print-n2-002-04': '/academia/n2-002-mm01-cadastro/img-24.png',

  // ── N2-003: Fluxo P2P ─────────────────────────────────────────────────────────
  'print-n2-003-01': '/academia/n2-003-fluxo-p2p/img-02.png',
  'print-n2-003-02': '/academia/n2-003-fluxo-p2p/img-04.png',

  // ── N2-004: MIGO Entrada de Mercadoria ───────────────────────────────────────
  'print-n2-004-01': '/academia/n2-004-migo-entrada/img-03.png',
  'print-n2-004-02': '/academia/n2-004-migo-entrada/img-04.png',
  'print-n2-004-03': '/academia/n2-004-migo-entrada/img-03.png',
  'print-n2-004-04': '/academia/n2-005-mb03-documento/img-02.png',

  // ── N2-005: MB03 Documento de Material ───────────────────────────────────────
  'print-n2-005-01': '/academia/n2-005-mb03-documento/img-03.png',
  'print-n2-005-02': '/academia/n2-005-mb03-documento/img-09.png',

  // ── N2-006: MB51 Relatório ────────────────────────────────────────────────────
  'print-n2-006-01': '/academia/n2-006-mb51-relatorio/img-03.png',
  'print-n2-006-02': '/academia/n2-006-mb51-relatorio/img-04.png',

  // ── N3-001: Layout ALV ────────────────────────────────────────────────────────
  'print-n3-001-01': '/academia/n3-001-layout-alv/img-05.png',
  'print-n3-001-02': '/academia/n3-001-layout-alv/img-07.png',
  'print-n3-001-03': '/academia/n3-001-layout-alv/img-09.png',

  // ── N3-002: Variantes de Seleção ──────────────────────────────────────────────
  'print-n3-002-01': '/academia/n3-002-variantes/img-04.png',
  'print-n3-002-02': '/academia/n3-002-variantes/img-08.png',

  // ── N3-003: Exportar para Excel ───────────────────────────────────────────────
  'print-n3-003-01': '/academia/n3-003-exportar-excel/img-03.png',
  'print-n3-003-02': '/academia/n3-003-exportar-excel/img-06.png',
}

export function getAulaImage(placeholderId: string): string | undefined {
  return ACADEMIA_IMAGES[placeholderId]
}
