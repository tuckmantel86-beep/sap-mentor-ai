// Academia Images Map — gerado automaticamente
// Mapeia placeholder_id → URL da imagem extraída dos PDFs do curso

export const ACADEMIA_IMAGES: Record<string, string> = {
  'print-n1-001-01': '/academia/n1-001-login-tela-inicial/img-03.png',
  'print-n1-001-02': '/academia/n1-001-login-tela-inicial/img-04.png',
  'print-n1-006-01': '/academia/n1-006-comandos/img-04.png',
  'print-n1-006-02': '/academia/n1-006-comandos/img-07.png',
  'print-n1-006-03': '/academia/n1-006-comandos/img-08.png',
  'print-n1-007-01': '/academia/n1-007-tipos-transacao/img-03.png',
  'print-n1-007-02': '/academia/n1-007-tipos-transacao/img-08.png',
  'print-n1-008-01': '/academia/n1-008-search-menu/img-04.png',
  'print-n1-008-02': '/academia/n1-008-search-menu/img-03.png',
  'print-n1-009-01': '/academia/n1-009-personalizar/img-04.png',
  'print-n1-009-02': '/academia/n1-009-personalizar/img-15.png',
  'print-n1-010-01': '/academia/n1-010-primeiros-dias/img-01.png',
  'print-n1-010-02': '/academia/n1-010-primeiros-dias/img-03.png',
  'print-n2-001-01': '/academia/n2-001-tipos-material/img-02.png',
  'print-n2-001-02': '/academia/n2-001-tipos-material/img-08.png',
  'print-n2-002-01': '/academia/n2-002-mm01-cadastro/img-03.png',
  'print-n2-002-02': '/academia/n2-002-mm01-cadastro/img-05.png',
  'print-n2-002-03': '/academia/n2-002-mm01-cadastro/img-07.png',
  'print-n2-002-04': '/academia/n2-002-mm01-cadastro/img-24.png',
  'print-n2-003-01': '/academia/n2-003-fluxo-p2p/img-02.png',
  'print-n2-003-02': '/academia/n2-003-fluxo-p2p/img-04.png',
  'print-n2-004-01': '/academia/n2-004-migo-entrada/img-03.png',
  'print-n2-004-02': '/academia/n2-004-migo-entrada/img-04.png',
  'print-n2-004-03': '/academia/n2-004-migo-entrada/img-03.png',
  'print-n2-004-04': '/academia/n2-005-mb03-documento/img-02.png',
  'print-n2-005-01': '/academia/n2-005-mb03-documento/img-03.png',
  'print-n2-005-02': '/academia/n2-005-mb03-documento/img-09.png',
  'print-n2-006-01': '/academia/n2-006-mb51-relatorio/img-03.png',
  'print-n2-006-02': '/academia/n2-006-mb51-relatorio/img-04.png',
  'print-n3-001-01': '/academia/n3-001-layout-alv/img-05.png',
  'print-n3-001-02': '/academia/n3-001-layout-alv/img-07.png',
  'print-n3-001-03': '/academia/n3-001-layout-alv/img-09.png',
  'print-n3-002-01': '/academia/n3-002-variantes/img-04.png',
  'print-n3-002-02': '/academia/n3-002-variantes/img-08.png',
  'print-n3-003-01': '/academia/n3-003-exportar-excel/img-03.png',
  'print-n3-003-02': '/academia/n3-003-exportar-excel/img-06.png',
}

export function getAulaImage(placeholderId: string): string | undefined {
  return ACADEMIA_IMAGES[placeholderId]
}