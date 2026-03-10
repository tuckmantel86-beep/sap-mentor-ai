import type { Missao } from '../types'

export const MISSOES_P2P: Missao[] = [
  {
    id: 'MM-P2P-001',
    titulo: 'Criar Requisição de Compra (ME51N)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Assistente de Compras',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 15,
    contexto: 'Você trabalha no departamento de compras da Metalúrgica Paulista. O gerente de produção solicitou a compra de 500 kg de Aço Inox 304 para a fabricação de peças especiais do mês.',
    objetivo: 'Criar uma requisição de compra no SAP para solicitar o material ao departamento de Compras',
    transacao_principal: 'ME51N',
    transacoes_secundarias: [],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Acessar a transação ME51N',
        instrucao: 'No SAP GUI, pressione Ctrl+K (ou clique no ícone de transação) e digite ME51N. Pressione Enter.',
        explicacao_negocio: 'ME51N é a transação para criar requisições de compra (Purchase Requisition). Ela inicia o processo de compra no SAP.',
        dica: 'Você também pode acessar por: Menu SAP > Logística > Compras > Documento > Requisição de Compra > Criar'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Selecionar tipo de documento',
        instrucao: 'Na tela inicial, deixe o campo "Tipo de Documento" com "NB" (Requisição Normal). Clique em "Criar".',
        explicacao_negocio: 'NB é o tipo padrão para requisições normais. Existem outros tipos como "LB" (requisição sem estoque) e "CB" (requisição aberta).'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Preencher cabeçalho da requisição',
        instrucao: 'Preencha os seguintes campos no cabeçalho:\n- Org. Compra: 1000 (Metalúrgica Paulista)\n- Grupo Compra: 001\n- Emitida por: deixe com seu usuário\n- Data da requisição: hoje',
        explicacao_negocio: 'O cabeçalho contém informações gerais da requisição. A Organização de Compras define qual departamento faz a requisição.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Adicionar item de material',
        instrucao: 'Na seção de itens, clique em "Criar Item" ou use a linha vazia. Preencha:\n- Material: RM-4582\n- Quantidade: 500\n- Unidade: KG\n- Centro: 1000\n- Local: deixe em branco',
        explicacao_negocio: 'Material é o código do produto (Aço Inox 304). Quantidade é 500 kg. Centro é onde o material será recebido (fábrica principal).'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Preencher informações do fornecedor (opcional)',
        instrucao: 'No item criado, você pode preencher "Fornec. Designado": 100023 (Aço Inox Sul Ltda). Mas isso é opcional nesta etapa.',
        explicacao_negocio: 'Designar um fornecedor já na requisição ajuda o departamento de compras a criar a ordem mais rápido. Se deixar em branco, o comprador escolhe.'
      },
      {
        id: 'passo-6',
        ordem: 6,
        titulo: 'Revisar e salvar',
        instrucao: 'Clique em "Salvar" (Ctrl+S) ou no ícone de disquete. O SAP gerará um número de requisição automaticamente.',
        explicacao_negocio: 'Ao salvar, o SAP registra a requisição no banco de dados e a torna visível para o departamento de compras processar.'
      }
    ],
    erros_comuns: [
      'Deixar campos obrigatórios em branco (Material, Quantidade, Centro)',
      'Usar centro ou material que não existem no sistema',
      'Confundir ME51N (criar) com ME52N (alterar) ou ME53N (visualizar)'
    ],
    exercicio: {
      titulo: 'Exercício Prático: Criar Requisição de Compra',
      enunciado: 'Crie uma requisição de compra para 200 kg de Embalagem Plástica (MAT-00234) do fornecedor Embalagens Brasil S.A. (300012). Use sua organização de compras (1000) e center (1000).',
      dados: {
        material: 'MAT-00234',
        quantidade: '200',
        unidade: 'KG',
        fornecedor: '300012',
        centro: '1000'
      }
    },
    competencias_treinadas: [
      'Navegação no SAP GUI',
      'Transação ME51N',
      'Criação de requisição de compra',
      'Operações básicas (salvar, navegar)'
    ],
    proxima_missao_id: 'MM-P2P-002'
  },
  {
    id: 'MM-P2P-002',
    titulo: 'Criar Ordem de Compra (ME21N)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Comprador',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 20,
    contexto: 'Você é comprador na Metalúrgica Paulista. Recebeu a requisição de compra para 500 kg de Aço Inox 304 da produção. Agora precisa criar a ordem de compra (PO) para o fornecedor Aço Inox Sul Ltda.',
    objetivo: 'Criar uma ordem de compra no SAP com base na requisição recebida',
    transacao_principal: 'ME21N',
    transacoes_secundarias: ['ME23N'],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Acessar a transação ME21N',
        instrucao: 'No SAP GUI, digite ME21N e pressione Enter. Você está criando uma nova ordem de compra (Purchase Order).',
        explicacao_negocio: 'ME21N é a transação para criar ordens de compra (PO). Uma PO é o pedido oficial que o comprador faz ao fornecedor.',
        dica: 'ME21N = Make (Criar) Einkauf (Compra) 21 (versão) N (novo)'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Selecionar tipo de documento',
        instrucao: 'Deixe "Tipo de Documento" como "NB" (Ordem Normal). Clique em "Criar".',
        explicacao_negocio: 'NB é o tipo padrão para ordens normais de compra.'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Preencher dados do cabeçalho',
        instrucao: 'Preencha:\n- Fornecedor: 100023 (Aço Inox Sul Ltda)\n- Org. Compra: 1000\n- Grupo Compra: 001\n- Moeda: BRL\n- Data da Ordem: hoje',
        explicacao_negocio: 'O fornecedor é o vendedor. A Organização de Compra define a política de compra. BRL é a moeda brasileira.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Referenciar a requisição de compra',
        instrucao: 'Clique em "Referência" e digite o número da requisição (da missão anterior). Pressione Enter. O SAP pré-preenche o material e quantidade.',
        explicacao_negocio: 'Referenciar a requisição cria um vínculo entre a requisição e a PO. Isso facilita rastrear todo o processo P2P.',
        erro_comum: 'Esquecer de referenciar a requisição e digitar manualmente o material'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Confirmar dados do item',
        instrucao: 'Verifique o item criado:\n- Material: RM-4582\n- Quantidade: 500 KG\n- Preço unitário: deixe o SAP preencher com a tabela de preços (se existir)\n- Centro: 1000',
        explicacao_negocio: 'O SAP busca automaticamente a tabela de preços (info record) do fornecedor para preencher o preço.'
      },
      {
        id: 'passo-6',
        ordem: 6,
        titulo: 'Definir condições de entrega',
        instrucao: 'Na aba "Cronograma", verifique:\n- Data de Entrega: 10 dias a partir de hoje (ou conforme acordado)\n- Quantidade: 500 KG',
        explicacao_negocio: 'O cronograma define quando e quanto o fornecedor deve entregar. Pode ter entregas parciais se configurado.'
      },
      {
        id: 'passo-7',
        ordem: 7,
        titulo: 'Salvar a ordem de compra',
        instrucao: 'Clique em "Salvar" (Ctrl+S). O SAP gera um número de PO (ex: 4500001234) automaticamente.',
        explicacao_negocio: 'Ao salvar, a PO é criada no sistema e o fornecedor pode ser notificado sobre o pedido.'
      }
    ],
    erros_comuns: [
      'Fornecedor inválido ou bloqueado',
      'Material sem tabela de preços cadastrada',
      'Data de entrega no passado',
      'Usar ME22N (alterar) ou ME23N (visualizar) em vez de ME21N (criar)'
    ],
    exercicio: {
      titulo: 'Exercício Prático: Criar Ordem de Compra',
      enunciado: 'Crie uma PO para 200 kg de Embalagem Plástica (MAT-00234) do fornecedor Embalagens Brasil S.A. (300012). Use data de entrega em 5 dias. Organize suas compras em 1000, grupo 001.',
      dados: {
        fornecedor: '300012',
        material: 'MAT-00234',
        quantidade: '200',
        dias_entrega: '5',
        org_compra: '1000',
        grupo_compra: '001'
      }
    },
    competencias_treinadas: [
      'Transação ME21N',
      'Criação de ordem de compra',
      'Referenciamento de requisição',
      'Cronograma de entrega',
      'Condições comerciais'
    ],
    proxima_missao_id: 'MM-P2P-003'
  },
  {
    id: 'MM-P2P-003',
    titulo: 'Registrar Recebimento de Mercadoria (MIGO)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Recebedor',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 15,
    contexto: 'Você trabalha no departamento de recebimento. A mercadoria de Aço Inox (500 kg) chegou do fornecedor. Precisa registrar o recebimento no SAP para que o estoque seja atualizado.',
    objetivo: 'Registrar o recebimento de mercadoria usando a transação MIGO',
    transacao_principal: 'MIGO',
    transacoes_secundarias: ['GR (Goods Receipt)'],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Acessar a transação MIGO',
        instrucao: 'No SAP GUI, digite MIGO e pressione Enter. Ou acesse: Logística > Gestão de Materiais > Recebimento de Bens > Entrada de Mercadoria.',
        explicacao_negocio: 'MIGO é a transação para registrar chegada de materiais (Goods Receipt / GR). Atualiza o estoque no sistema.',
        dica: 'MIGO = Material Goods In Observation'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Selecionar tipo de movimento',
        instrucao: 'Na tela inicial, selecione:\n- Tipo de Movimento: 101 (Recebimento de Bens para PO)\n- Clique em "Criar"',
        explicacao_negocio: 'O tipo de movimento 101 é para recebimento em relação a uma PO. Existem outros tipos para ordens de produção, transferências, etc.'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Preencher número da PO',
        instrucao: 'No campo "Pedido", digite o número da ordem de compra criada na missão anterior (ex: 4500001234). Pressione Enter.',
        explicacao_negocio: 'Ao informar a PO, o SAP busca automaticamente todos os itens pendentes daquela ordem.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Confirmar itens a receber',
        instrucao: 'O SAP lista os itens da PO. Você verá:\n- Material: RM-4582\n- PO Quantity: 500 KG\n- Received Qty: deixe como 500 KG (aceitar quantidade completa)',
        explicacao_negocio: 'Você pode receber a quantidade total ou parcial. Neste caso, receberemos 500 kg (quantidade total).'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Inspecionar qualidade (opcional)',
        instrucao: 'Se houver controle de qualidade, você pode adicionar informações na aba "Qualidade". Neste exercício, deixe como padrão (sem controle).',
        explicacao_negocio: 'Alguns materiais requerem inspeção. O SAP pode bloquear itens até aprovação de qualidade.'
      },
      {
        id: 'passo-6',
        ordem: 6,
        titulo: 'Definir local de armazenagem',
        instrucao: 'No campo "Local" (Bin), você pode deixar em branco para que o SAP coloque em local padrão, ou especificar um local.',
        explicacao_negocio: 'O local de armazenagem (bin/rack) define onde o material será guardado no depósito.'
      },
      {
        id: 'passo-7',
        ordem: 7,
        titulo: 'Salvar o recebimento',
        instrucao: 'Clique em "Salvar" (Ctrl+S). O SAP gera um número de GR (Goods Receipt) e atualiza o estoque.',
        explicacao_negocio: 'Ao salvar, o sistema cria o documento de recebimento. O estoque do material RM-4582 aumenta em 500 kg.'
      }
    ],
    erros_comuns: [
      'PO número incorreto',
      'Quantidade recebida maior que quantidade da PO',
      'Esquecer de registrar qualidade (bloqueando estoque)',
      'Confundir MIGO com MB1C (outro tipo de movimento) ou MBBS (entrada manual)',
      'Local de armazenagem inválido'
    ],
    exercicio: {
      titulo: 'Exercício Prático: Receber Mercadoria',
      enunciado: 'Registre o recebimento de 180 kg (de 200 kg) da Embalagem Plástica (MAT-00234) na PO que você criou anteriormente. Deixe 20 kg para receber depois (recebimento parcial).',
      dados: {
        material: 'MAT-00234',
        quantidade_total: '200',
        quantidade_receber: '180',
        po_number: '[número da PO anterior]'
      }
    },
    competencias_treinadas: [
      'Transação MIGO',
      'Recebimento de bens (Goods Receipt)',
      'Atualização de estoque',
      'Recebimento parcial',
      'Controle de qualidade básico'
    ],
    proxima_missao_id: 'MM-P2P-004'
  },
  {
    id: 'MM-P2P-004',
    titulo: 'Registrar Fatura do Fornecedor (MIRO)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'intermediario',
    cargo: 'Contador de Contas a Pagar',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 20,
    contexto: 'Você trabalha na área de Contas a Pagar. Recebeu a nota fiscal do fornecedor Aço Inox Sul Ltda (NF nº 50234) em relação à compra de 500 kg de Aço Inox 304. Precisa registrar a fatura no SAP para que seja aprovada para pagamento.',
    objetivo: 'Registrar a fatura do fornecedor usando a transação MIRO',
    transacao_principal: 'MIRO',
    transacoes_secundarias: ['FB60', 'MIR4'],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Acessar a transação MIRO',
        instrucao: 'No SAP GUI, digite MIRO e pressione Enter. Ou: Logística > Compras > Fatura > Registrar.',
        explicacao_negocio: 'MIRO é a transação para registrar faturas de fornecedores (Supplier Invoice Registration). Cria um documento de contas a pagar.',
        dica: 'MIRO = Material Invoice Registration & Overproof'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Preencher dados básicos da fatura',
        instrucao: 'Na tela inicial, preencha:\n- Fornecedor: 100023 (Aço Inox Sul Ltda)\n- Nº da Fatura: 50234\n- Data da Fatura: data que você recebeu o documento\n- Data de Lançamento: hoje',
        explicacao_negocio: 'Esses dados identificam a fatura. A data da fatura é quando o fornecedor emitiu. Data de lançamento é quando você registra no SAP.'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Buscar PO para matching',
        instrucao: 'Clique em "Buscar POs" ou "Processar". O SAP busca POs abertas do fornecedor. Selecione a PO que você criou (ex: 4500001234).',
        explicacao_negocio: 'O SAP faz 3-way matching: PO x Goods Receipt x Invoice. Verifica se as quantidades e preços combinam.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Confirmar itens da fatura',
        instrucao: 'A PO é carregada. Verifique:\n- Material: RM-4582\n- Quantidade: 500 KG\n- Preço PO: valor que você definiu\n- Quantidade Fatura: 500 KG (deve corresponder ao GR)',
        explicacao_negocio: 'Se quantidade ou preço da fatura diferem da PO, você pode aceitar (com variações permitidas) ou rejeitar.'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Revisar totalizações',
        instrucao: 'O SAP calcula:\n- Subtotal: 500 KG x preço unitário\n- Impostos (ICMS, IPI): se configurado\n- Total da Fatura\nVerifique se está correto segundo a NF recebida.',
        explicacao_negocio: 'O cálculo correto é essencial. Variações pequenas entre SAP e NF podem ser toleradas (depending on configuration).'
      },
      {
        id: 'passo-6',
        ordem: 6,
        titulo: 'Verificar bloqueios',
        instrucao: 'O SAP verifica automaticamente:\n- Bloqueio por variação de preço\n- Bloqueio por variação de quantidade\n- Bloqueio por data\nSe houver bloqueio, você pode aprovar com justificativa.',
        explicacao_negocio: 'Bloqueios protegem contra fraudes. Mas podem ser sobrescritos com permissão apropriada.'
      },
      {
        id: 'passo-7',
        ordem: 7,
        titulo: 'Registrar observações (opcional)',
        instrucao: 'Você pode adicionar observações no campo "Texto". Ex: "NF recebida intacta", "Verificado com emissão do GR".',
        explicacao_negocio: 'As observações ajudam auditoria a rastrear o processo e decisões tomadas.'
      },
      {
        id: 'passo-8',
        ordem: 8,
        titulo: 'Salvar a fatura',
        instrucao: 'Clique em "Salvar" (Ctrl+S). O SAP registra a fatura e cria um documento de contas a pagar. A fatura fica pronta para pagamento.',
        explicacao_negocio: 'Ao salvar, a fatura entra no fluxo de aprovação e later será paga no prazo estipulado.'
      }
    ],
    erros_comuns: [
      'Fornecedor ou número de fatura incorreto',
      'PO não encontrada (verifique se o número está correto)',
      'Quantidade da fatura não coincide com GR',
      'Preço muito diferente da PO (variação acima do permitido)',
      'Confundir MIRO com MIR4 (visualizar) ou FB60 (fatura manual sem PO)'
    ],
    exercicio: {
      titulo: 'Exercício Prático: Registrar Fatura',
      enunciado: 'Registre a fatura NF nº 40156 do fornecedor Embalagens Brasil (300012) em 12/03/2026 para a PO de 200 kg de Embalagem Plástica (MAT-00234). A quantidade faturada é 180 kg (recebido anteriormente).',
      dados: {
        fornecedor: '300012',
        nf_numero: '40156',
        data_fatura: '2026-03-12',
        material: 'MAT-00234',
        quantidade: '180',
        po_number: '[PO anterior]'
      }
    },
    competencias_treinadas: [
      'Transação MIRO',
      'Registração de faturas',
      '3-way matching (PO x GR x Invoice)',
      'Controle de variações',
      'Contas a pagar',
      'Aprovação de faturas'
    ],
    proxima_missao_id: 'MM-P2P-005'
  },
  {
    id: 'MM-P2P-005',
    titulo: 'Consultar Estoque (MMBE)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Analista de Estoque',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 10,
    contexto: 'Você é analista de estoque. Precisa verificar a quantidade atual de Aço Inox 304 (RM-4582) em estoque para confirmar que as 500 kg do recebimento foram registradas corretamente.',
    objetivo: 'Consultar dados de estoque usando a transação MMBE',
    transacao_principal: 'MMBE',
    transacoes_secundarias: ['MB51', 'MMBE_BOM'],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Acessar a transação MMBE',
        instrucao: 'No SAP GUI, digite MMBE e pressione Enter. Ou: Logística > Gestão de Materiais > Informações > Estoque > Consulta de Estoque.',
        explicacao_negocio: 'MMBE é a transação para consultar estoque (Stock Inquiry). Mostra quantidade em tempo real por depósito e local.',
        dica: 'MMBE = Material Management Balance Evaluation'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Preencher critérios de busca',
        instrucao: 'Preencha:\n- Material: RM-4582\n- Centro: 1000\n- Deixe outros campos em branco\nClique em "Executar".',
        explicacao_negocio: 'O material é o código do produto. O centro é a unidade de negócio (fábrica). A busca retorna estoque daquele material naquele local.'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Analisar resultados',
        instrucao: 'O SAP mostra:\n- Quantidade Irrestrita (unrestricted): 500 KG\n- Quantidade Restrita: 0 KG (se houver bloqueios de qualidade)\n- Quantidade em Trânsito: 0 KG\n- Quantidade Reservada: 0 KG\nO total deve corresponder ao que foi recebido.',
        explicacao_negocio: 'Irrestrita = estoque livre para uso. Restrita = bloqueada (qualidade, etc). Reservada = já alocada para ordens.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Verificar depósitos',
        instrucao: 'Clique em "Depósitos" ou "Bins" para ver onde o material está guardado. Você verá o local/rack específico do armazenamento.',
        explicacao_negocio: 'O SAP organiza estoque em depósitos (warehouses) e locais (bins/racks) para rastreabilidade física.'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Consultar movimentos (opcional)',
        instrucao: 'Se quiser ver histórico, use MB51 (Movimentos de Material) com filtro de data. Verá todas as entradas e saídas do material.',
        explicacao_negocio: 'MB51 complementa MMBE. MMBE mostra posição atual. MB51 mostra histórico de movimentos.'
      }
    ],
    erros_comuns: [
      'Material não encontrado (verifique código)',
      'Centro incorreto (material pode estar em outro centro)',
      'Confundir MMBE (estoque atual) com MB51 (movimentos históricos)'
    ],
    exercicio: {
      titulo: 'Exercício Prático: Consultar Estoque',
      enunciado: 'Consulte o estoque atual de Embalagem Plástica (MAT-00234) no centro 1000. Verifique se os 180 kg recebidos estão registrados corretamente. Se houver, clique em "Depósitos" para ver localização física.',
      dados: {
        material: 'MAT-00234',
        centro: '1000'
      }
    },
    competencias_treinadas: [
      'Transação MMBE',
      'Consulta de estoque',
      'Análise de quantidades',
      'Depósitos e locais',
      'Transação MB51 (complementar)',
      'Rastreabilidade de material'
    ],
    proxima_missao_id: 'MM-P2P-006'
  },
  {
    id: 'MM-P2P-006',
    titulo: 'Fluxo Completo P2P (ME51N → ME21N → MIGO → MIRO)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'avancado',
    cargo: 'Gerente de Compras',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 60,
    contexto: 'Você é Gerente de Compras. Um novo projeto especial foi aprovado. Você precisa adquirir 1000 kg de Aço Inox 316 (material especial) de um novo fornecedor (Inox Premium Ltda, código 400045) para iniciar a fabricação em uma semana.',
    objetivo: 'Executar o fluxo P2P completo do início ao fim: Requisição → Ordem de Compra → Recebimento → Faturamento',
    transacao_principal: 'ME51N, ME21N, MIGO, MIRO',
    transacoes_secundarias: ['MM01 (criar material)', 'XK01 (criar fornecedor)'],
    passos: [
      {
        id: 'passo-1',
        ordem: 1,
        titulo: 'Criar Requisição de Compra (ME51N)',
        instrucao: 'Execute ME51N:\n1. Tipo Doc: NB\n2. Org Compra: 1000, Grupo: 001\n3. Material: RM-4582 (Aço Inox 316)\n4. Quantidade: 1000 KG\n5. Centro: 1000\n6. Salvee anote o número da requisição.',
        explicacao_negocio: 'Esta é a fase de solicitação. O departamento de compras receberá a requisição para processar.'
      },
      {
        id: 'passo-2',
        ordem: 2,
        titulo: 'Criar Ordem de Compra (ME21N)',
        instrucao: 'Execute ME21N:\n1. Tipo Doc: NB\n2. Fornecedor: 400045 (Inox Premium Ltda)\n3. Clique em "Referência" e escolha a requisição criada\n4. Data entrega: 7 dias de hoje\n5. Salve e anote o número da PO.',
        explicacao_negocio: 'A PO é o contrato com o fornecedor. Compramos agora, recebemos em 7 dias.'
      },
      {
        id: 'passo-3',
        ordem: 3,
        titulo: 'Simular recebimento de mercadoria (MIGO)',
        instrucao: 'Após 7 dias (ou para este exercício, simule hoje):\n1. Execute MIGO\n2. Tipo Mov: 101\n3. PO: número que você criou\n4. Quantidade: 1000 KG (recebimento completo)\n5. Salve e anote o número do GR.',
        explicacao_negocio: 'O GR (Goods Receipt) confirma a chegada. O estoque aumenta em 1000 kg.'
      },
      {
        id: 'passo-4',
        ordem: 4,
        titulo: 'Registrar Fatura (MIRO)',
        instrucao: 'Quando receber a NF:\n1. Execute MIRO\n2. Fornecedor: 400045\n3. NF nº: 80125 (simulada)\n4. Data: hoje\n5. Procure PO, selecione a PO criada\n6. Verifique 3-way matching\n7. Salve.',
        explicacao_negocio: 'A MIRO fecha o fluxo. A fatura agora está pronta para pagamento no prazo negociado.'
      },
      {
        id: 'passo-5',
        ordem: 5,
        titulo: 'Consultar estoque final (MMBE)',
        instrucao: 'Para confirmar:\n1. Execute MMBE\n2. Material: RM-4582\n3. Centro: 1000\n4. Verifique se quantidade irrestrita = 1000 KG',
        explicacao_negocio: 'Confirma que todo o processo foi executado corretamente e o material está disponível.'
      },
      {
        id: 'passo-6',
        ordem: 6,
        titulo: 'Documentar dados do fluxo',
        instrucao: 'Anote:\n- Número da Requisição\n- Número da PO\n- Número do GR\n- Número da Fatura\nEsses números rastreiam todo o fluxo P2P.',
        explicacao_negocio: 'A rastreabilidade completa é essencial para auditoria, conformidade e investigação de problemas.'
      }
    ],
    erros_comuns: [
      'Não referenciar a requisição na PO (quebra rastreabilidade)',
      'Quantidade do GR diferente da PO',
      'Fatura não encontra PO correspondente (verificar números)',
      'Falha no 3-way matching (variações muito grandes)',
      'Não usar o mesmo centro/depósito em todo o fluxo'
    ],
    exercicio: {
      titulo: 'Exercício Final: Fluxo P2P Completo',
      enunciado: 'Você é o Gerente de Compras. Um novo cliente especial exige compra de 500 kg de aço premium (RM-4582). Use o novo fornecedor Inox Premium (400045). Execute todo o fluxo P2P: crie requisição → crie PO → simule recebimento → registre fatura (NF 80125, data hoje). Documente todos os números.',
      dados: {
        material: 'RM-4582',
        quantidade: '500',
        fornecedor: '400045',
        nf_numero: '80125',
        dias_entrega: '7',
        org_compra: '1000'
      }
    },
    competencias_treinadas: [
      'Transação ME51N (Requisição)',
      'Transação ME21N (Ordem)',
      'Transação MIGO (Recebimento)',
      'Transação MIRO (Fatura)',
      'Fluxo P2P completo',
      '3-way matching',
      'Rastreabilidade fim-a-fim',
      'Integração logística',
      'Gestão de processos'
    ]
  }
]

export const TODAS_MISSOES: Missao[] = [...MISSOES_P2P]
