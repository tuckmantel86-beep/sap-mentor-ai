// Tipos da Academia - definidos aqui para evitar problemas de import no Vite

export type ModuloAcademia = 'MM' | 'FI' | 'SD' | 'CO' | 'HCM' | 'GERAL'
export type TipoSecao = 'teoria' | 'print' | 'destaque' | 'dica' | 'atencao' | 'pratica' | 'resumo' | 'exercicio'
export type NivelCarreiraAcad = 'estagiario' | 'junior' | 'pleno' | 'senior' | 'consultor'

export interface PlaceholderPrint {
  id: string
  instrucao_capture: string
  legenda: string
  imagem_url?: string
}

export interface SecaoAula {
  id: string
  ordem: number
  tipo: TipoSecao
  titulo?: string
  conteudo?: string
  placeholder?: PlaceholderPrint
  lista?: string[]
}

export interface Aula {
  id: string
  titulo: string
  subtitulo: string
  nivel: NivelCarreiraAcad
  modulo: ModuloAcademia
  transacoes: string[]
  tempo_estimado_minutos: number
  objetivo: string
  descricao_curta: string
  secoes: SecaoAula[]
  prints_necessarios: number
  proxima_aula_id?: string
  aula_anterior_id?: string
  tags: string[]
  concluida?: boolean
}

export interface TrilhaAcademia {
  id: string
  nivel: NivelCarreiraAcad
  titulo: string
  subtitulo: string
  descricao: string
  cor_primaria: string
  cor_badge: string
  emoji: string
  aulas: Aula[]
  total_horas_estimadas: number
  prerequisito?: string
}


// TRILHA 1 INICIANTE (Estagi rio)


export const AULA_N1_001: Aula = {
  id: 'ACAD-N1-001',
  titulo: 'Entrando no SAP: Logon 760 e Tela Inicial',
  subtitulo: 'Do SAP Logon até o SAP Easy Access — seu ponto de partida no sistema',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Aprender a abrir o SAP Logon 760, selecionar o sistema correto (ECC ou S/4HANA), fazer login com usuário e senha, e reconhecer a tela inicial SAP Easy Access.',
  descricao_curta: 'Do zero: abra o SAP Logon 760, escolha o sistema, faça login e conheça o SAP Easy Access.',
  prints_necessarios: 3,
  proxima_aula_id: 'ACAD-N1-002',
  tags: ['SAP Logon 760', 'login', 'SAP Easy Access', 'ECC', 'S4HANA', 'estagiário'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🚀 Tudo começa no SAP Logon 760',
      conteudo: 'Antes de ver qualquer tela do SAP, você passa pelo SAP Logon — o programa de conexão. Ele funciona como um "catálogo" de sistemas SAP disponíveis na sua empresa. Ao abri-lo, você verá uma lista com os servidores configurados. Cada linha representa um sistema SAP diferente (ECC, S/4HANA, Desenvolvimento, Produção etc.).',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-01',
        instrucao_capture: '',
        legenda: 'O SAP Logon 760 mostrando dois sistemas disponíveis: SAP ECC (SID: EH8) e SAP S4 (SID: S4H), ambos no servidor keyusersap.ddns.net. Clique duas vezes sobre o sistema desejado para iniciar a conexão. O sistema ECC é o clássico SAP R/3; o S/4HANA é a versão mais moderna.',
      },
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'destaque',
      titulo: '📌 SAP ECC vs. SAP S/4HANA — qual a diferença?',
      conteudo: 'Na lista do SAP Logon você verá dois tipos comuns de sistema. O SAP ECC (SID: EH8) é o SAP clássico — também chamado de SAP R/3. A maioria das empresas brasileiras ainda usa esta versão. O SAP S/4HANA (SID: S4H) é a versão mais nova, com interface mais moderna (Fiori). Neste treinamento usamos o SAP ECC. Ao dar duplo clique no sistema, a tela de login se abre.',
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-02',
        instrucao_capture: '',
        legenda: 'Tela de login do SAP ECC. Os três campos obrigatórios são: Mandante (número do cliente SAP, ex: 800), Usuário (seu login, ex: KEY00932) e Senha. O campo Idioma define o idioma das telas — "PT" para português. Após preencher, pressione Enter ou clique no botão verde para entrar.',
      },
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'teoria',
      titulo: '🔑 Os campos da tela de login',
      conteudo: 'A tela de login tem três campos que você precisa conhecer bem:',
      lista: [
        'Mandante — Um número de 3 dígitos (ex: 800) que identifica o "cliente" dentro do servidor SAP. Uma empresa pode ter vários mandantes: um para produção (PRD), outro para testes (DEV/QAS). Sempre confirme com seu supervisor qual mandante usar.',
        'Usuário — Seu login pessoal no SAP (ex: KEY00932). É case-insensitive — pode digitar em maiúsculo ou minúsculo.',
        'Senha — Sua senha de acesso. Na primeira vez, o SAP vai pedir para trocar a senha temporária.',
        'Idioma — "PT" para português ou "EN" para inglês. Se deixar em branco, o SAP usa o idioma padrão do perfil.',
      ],
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: '💡 Dica: Campo de Comando é sua via rápida',
      conteudo: 'Após fazer login, você cai no SAP Easy Access. A área mais importante é o Campo de Comando — a caixa branca no canto superior esquerdo da tela. Profissionais experientes raramente usam os menus: eles digitam direto o código da transação (T-Code) no Campo de Comando e dão Enter. Quanto antes você criar esse hábito, mais rápido vai trabalhar.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-03',
        instrucao_capture: '',
        legenda: 'O SAP Easy Access — tela inicial após o login. À esquerda fica a árvore de navegação com as pastas SAP Menu e Favoritos. No topo, o Campo de Comando (caixa branca) onde você digita os T-Codes. A barra de ferramentas tem os botões mais usados: Enter (verde), Gravar (disquete), Voltar (seta), Finalizar e Cancelar.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 1',
      conteudo: 'Você já sabe como entrar no SAP:',
      lista: [
        'O SAP Logon 760 lista os sistemas disponíveis — dê duplo clique para conectar.',
        'SAP ECC (EH8) = sistema clássico; SAP S/4HANA (S4H) = versão moderna.',
        'Na tela de login preencha: Mandante (ex: 800), Usuário e Senha.',
        'Após login, o SAP Easy Access é a tela inicial — ponto de partida para tudo.',
        'O Campo de Comando (canto superior esquerdo) é o atalho profissional: digite o T-Code e Enter.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Faça no seu SAP real:',
      lista: [
        '1. Abra o SAP Logon 760 e identifique quantos sistemas estão listados.',
        '2. Dê duplo clique no sistema SAP ECC (ou no indicado pelo seu supervisor).',
        '3. Preencha Mandante, Usuário e Senha — pressione Enter para entrar.',
        '4. Na tela SAP Easy Access, localize o Campo de Comando (canto superior esquerdo).',
        '5. Digite MM03 no Campo de Comando e pressione Enter — a tela de Exibir Material deve abrir.',
        '🏆 BÔNUS: Pressione F11 para ver as informações do sistema — anote o SID e o número do Mandante.',
      ],
    },
  ],
}

export const AULA_N1_002: Aula = {
  id: 'ACAD-N1-002',
  titulo: 'Sua Primeira Consulta: MM03 Exibir Material',
  subtitulo: 'Navegue pelo registro mestre de um material e entenda as visões do SAP',
  nivel: 'estagiario',
  modulo: 'MM',
  transacoes: ['MM03', 'MMBE'],
  tempo_estimado_minutos: 25,
  objetivo: 'Executar a transação MM03 para consultar os dados de um material, selecionar visões e navegar entre abas. Ao final, acessar a MMBE para conferir o estoque do mesmo material.',
  descricao_curta: 'Use a MM03 para consultar o material MP1-00: acesse a 1ª tela, selecione a visão Compras e confira o estoque na MMBE.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N1-001',
  proxima_aula_id: 'ACAD-N1-003',
  tags: ['MM03', 'MMBE', 'Exibir material', 'visões', 'Compras', 'módulo MM', 'estagiário'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Por que começar pela MM03?',
      conteudo: 'A MM03 é a transação de Exibir Material — ela permite consultar todos os dados de um produto ou insumo no SAP sem risco de alterar nada. Como estagiário, é a transação mais segura para começar: campos em modo leitura, sem botão Gravar. O material que vamos usar neste treinamento é o MP1-00 (Matéria Prima - Comprada), cadastrado na planta BR60.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 A 1ª tela da MM03: onde você informa o material',
      conteudo: 'Ao digitar MM03 no Campo de Comando e pressionar Enter, o SAP abre a tela "Exibir material (1ª tela)". Esta tela tem três abas no topo: Seleção de visões, Níveis organizacion. e Dados. Você começa preenchendo o campo Material com o código do item que deseja consultar.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-01',
        instrucao_capture: '',
        legenda: 'A 1ª tela da transação MM03 (Exibir material) com o código MP1-00 digitado no campo Material. A partir desta tela você escolhe quais Visões quer consultar. O SAP organiza os dados do material em diferentes perspectivas (Compras, MRP, Contabilidade etc.) para facilitar o acesso por departamento.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '📂 A tela de Seleção de Visões: escolha o que quer ver',
      conteudo: 'Após digitar o código do material e pressionar Enter, o SAP apresenta um popup "Seleção de visões". Cada visão representa a perspectiva de um departamento diferente sobre o material. As principais visões são:',
      lista: [
        'Dados básicos 1 e 2 — Descrição, unidade de medida, peso e dimensões. Visível para todos.',
        'Compras — Grupo de compradores, UM de pedido, tolerâncias. Usado pelo time de Compras.',
        'MRP 1/2/3/4 — Parâmetros de planejamento: estoque mínimo, tipo de reposição.',
        'Texto de SD e SD: dados org.vendas — Dados para o processo de vendas (módulo SD).',
        'Dds.gerais centro/armazen. — Informações de armazenagem no depósito.',
      ],
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-02',
        instrucao_capture: '',
        legenda: 'A tela de Seleção de visões da MM03 mostrando todas as visões disponíveis para o material. A visão "Compras" está destacada (selecionada). Para abrir uma visão, clique sobre ela para marcar e depois clique em "Níveis organizacion." para informar Centro e Depósito. Você pode selecionar várias visões de uma vez.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-03',
        instrucao_capture: '',
        legenda: 'A visão Compra do material MP1-00 (Matéria-prima) na MM03. Centro BR60, Planta FABRIL. Os campos mais importantes: UM básica = PEÇ (Peças), Grupo de compradores = BR0, Grupo de mercadorias = 001. A seta vermelha aponta para o ícone de informações (i) no campo da descrição. Esta visão é usada pelo time de Compras para gerar pedidos.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'dica',
      titulo: '💡 Dica: MM01, MM02, MM03 — a lógica dos 3 tipos',
      conteudo: 'No SAP existe um padrão para transações de Dados Mestre: MM01 = CRIAR material (requer autorização especial), MM02 = MODIFICAR material (requer autorização), MM03 = EXIBIR material (somente leitura — qualquer usuário pode usar). Como estagiário, a MM03 é a sua ferramenta principal. Veremos mais sobre este padrão na Aula 4.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-04',
        instrucao_capture: '',
        legenda: 'A tela de seleção da MMBE (Visão geral de estoques: empresa/centro/depósito/lote) com Material = MP1-00 e Centro = BR60. A MMBE é a transação de consulta de estoque — mostra quanto deste material existe em cada depósito. O campo "Sem linhas de estoque zero" filtra para mostrar só onde há quantidade.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 2',
      conteudo: 'Você realizou sua primeira consulta de material no SAP:',
      lista: [
        'MM03 = Exibir Material — somente leitura, use sem medo.',
        'A 1ª tela pede o código do material (ex: MP1-00) e abre o popup de Seleção de Visões.',
        'Cada visão representa uma perspectiva departamental: Compras, MRP, Contabilidade etc.',
        'A visão Compras mostra: UM básica, Grupo de compradores e Grupo de mercadorias.',
        'MMBE = consulta de estoque — use após a MM03 para ver quanto há em estoque.',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Pratique no seu SAP real:',
      lista: [
        '1. Abra a MM03 pelo Campo de Comando (digite MM03 + Enter).',
        '2. Informe o material MP1-00, pressione Enter e selecione a visão "Dados básicos 1".',
        '3. Anote: qual é a Unidade de Medida Base do material?',
        '4. Volte e selecione a visão "Compras". Qual é o Grupo de compradores?',
        '5. Pressione /nMMBE no Campo de Comando para ir direto para o estoque do mesmo material.',
        '🏆 BÔNUS: Na MMBE, deixe o campo Material em branco e preencha só o Centro = BR60. Execute e veja todos os materiais com estoque nesta planta.',
      ],
    },
  ],
}

export const AULA_N1_003: Aula = {
  id: 'ACAD-N1-003',
  titulo: 'Favoritos: Organize Seus Atalhos no SAP',
  subtitulo: 'Crie pastas de favoritos e acesse qualquer transação com um duplo clique',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Criar uma pasta de Favoritos no SAP Easy Access, adicionar transações via menu de contexto e organizar os atalhos do dia a dia para acesso rápido sem precisar digitar T-Codes.',
  descricao_curta: 'Crie a pasta "Compras - MM" nos Favoritos e adicione as transações de MM que você vai usar todo dia.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-002',
  proxima_aula_id: 'ACAD-N1-004',
  tags: ['favoritos', 'atalhos', 'Compras MM', 'SAP Easy Access', 'produtividade', 'organização'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Para que servem os Favoritos?',
      conteudo: 'No dia a dia de trabalho, você vai acessar as mesmas transações centenas de vezes. Ficar digitando o T-Code toda vez é perda de tempo. Os Favoritos do SAP funcionam exatamente como os favoritos do seu navegador de internet: salve uma vez, acesse sempre com duplo clique. Você pode criar pastas para organizar por módulo ou por processo.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Criando uma pasta: "Compras - MM"',
      conteudo: 'Na árvore de navegação do SAP Easy Access, a pasta Favoritos fica logo abaixo do SAP Menu. Para criar uma subpasta dentro dela: clique com o botão direito sobre "Favoritos" → "Inserir pasta" → Informe o nome da pasta no campo "Nome da pasta" (ex: Compras - MM) → clique no botão verde de confirmação (✓).',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-01',
        instrucao_capture: '',
        legenda: 'O diálogo "Criar uma pasta na lista de favoritos" com o nome "Compras - MM" digitado. No fundo você vê a árvore de navegação com o SAP Menu e a pasta Favoritos. Clique no ✓ verde para confirmar a criação. Essa pasta vai aparecer dentro de Favoritos na árvore da esquerda.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '➕ Adicionando transações à pasta',
      conteudo: 'Com a pasta criada, agora você pode adicionar as transações. Clique com o botão direito sobre a pasta "Compras - MM" na árvore de Favoritos. Um menu de contexto aparece com as opções: Expandir pasta, Modificar favoritos, Eliminar favoritos, Inserir pasta, Inserir transação e Inserir outros objetos. Clique em "Inserir transação" e informe o T-Code desejado.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-02',
        instrucao_capture: '',
        legenda: 'Menu de contexto (botão direito) sobre a pasta "Compras - MM" nos Favoritos. A seta vermelha destaca a opção "Inserir transação". Este menu também permite: Inserir pasta (subpasta), Modificar favoritos (renomear), Eliminar favoritos (apagar) e Inserir outros objetos (URL, relatórios etc.).',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: '💡 Organize como um profissional: pastas por módulo',
      conteudo: 'Olhando os Favoritos de analistas SAP experientes, você vai ver uma organização por módulo: uma pasta "Compras - MM" com as transações de Materials Management, uma "PM" para Plant Maintenance, outra "Gestão de material" com transações de estoque. Essa estrutura poupa minutos toda vez que você precisa de uma transação — e no final do dia, isso soma horas.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-03',
        instrucao_capture: '',
        legenda: 'Lista de Favoritos organizada por pastas: Compras-MM, PM e Gestão de material. Dentro de "Gestão de material" há transações como ME31L, ME5A, ME2M, ME2L, ME28, ME55, ME54N, MIR6, MIGO, MIRO, ME23N, ME22N, ME21N e outras. Há ainda um atalho de URL "Formação key user" mostrando que os Favoritos aceitam links web também.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 3',
      conteudo: 'Agora você sabe organizar seus atalhos no SAP:',
      lista: [
        'Favoritos ficam na árvore esquerda do SAP Easy Access, abaixo do SAP Menu.',
        'Para criar pasta: botão direito em Favoritos → Inserir pasta → informe o nome.',
        'Para adicionar transação: botão direito na pasta → Inserir transação → informe o T-Code.',
        'Duplo clique no favorito abre a transação diretamente — sem digitar no Campo de Comando.',
        'Organize por módulo: uma pasta MM, uma FI, uma SD etc. para encontrar tudo rápido.',
        'Favoritos aceitam também URLs — útil para salvar links de documentação ou sistemas externos.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Monte seus Favoritos agora no SAP real:',
      lista: [
        '1. Crie a pasta "Compras - MM" dentro dos Favoritos.',
        '2. Adicione estas transações na pasta: MM03, MMBE, ME23N, ME21N, MIGO.',
        '3. Crie uma segunda pasta "Gestão de material".',
        '4. Adicione nela: MB51, MB03, MIRO, MIR6.',
        '5. Dê duplo clique em MM03 nos Favoritos — a transação deve abrir diretamente.',
        '🏆 BÔNUS: Clique com botão direito em um favorito → Modificar favoritos — renomeie "MM03" para "MM03 - Consultar Material" para facilitar a identificação.',
      ],
    },
  ],
}

export const AULA_N1_004: Aula = {
  id: 'ACAD-N1-004',
  titulo: 'O Padrão 01/02/03: Criar, Modificar e Exibir',
  subtitulo: 'A lógica universal do SAP que se repete em todos os módulos',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: ['MM01', 'MM02', 'MM03', 'FS00'],
  tempo_estimado_minutos: 20,
  objetivo: 'Compreender o padrão de transações 01/02/03 do SAP (Criar/Modificar/Exibir) usando MM01, MM02 e MM03 como exemplo, e reconhecer o mesmo padrão na FS00 (Conta do Razão).',
  descricao_curta: 'Entenda o padrão universal do SAP: MM01 Cria, MM02 Modifica, MM03 Exibe. Este padrão se repete em todo o sistema.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N1-003',
  proxima_aula_id: 'ACAD-N1-005',
  tags: ['MM01', 'MM02', 'MM03', 'FS00', 'padrão 01/02/03', 'criar modificar exibir', 'dados mestre'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 A lógica universal do SAP',
      conteudo: 'O SAP segue um padrão consistente em praticamente todos os módulos: para cada tipo de dado mestre existe sempre uma transação para CRIAR, uma para MODIFICAR e uma para EXIBIR. Quando você aprende esse padrão, consegue intuir a transação certa mesmo sem ter estudado ela antes. Basta saber o prefixo!',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 MM01: Criar material (1ª tela)',
      conteudo: 'A MM01 abre a tela "Criar material (1ª tela)" com os campos: Material (código a ser criado), SetoIndustrial (segmento da empresa), Tipo material (ROH, FERT, HAWA etc.) e Nº modificação. Na parte inferior há uma seção "Modelo" com campo Material para copiar de um material existente. A seta vermelha na tela aponta para a palavra "Criar" no título — confirmando que esta transação cria um novo registro.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-01',
        instrucao_capture: '',
        legenda: 'A 1ª tela da MM01 (Criar material) com a seta vermelha apontando para o título "Criar". Esta tela tem mais campos que a MM03 pois exige informações para criar o novo registro: SetoIndustrial e Tipo material são obrigatórios. O campo "Modelo / Material" permite copiar dados de um material similar já cadastrado.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-02',
        instrucao_capture: '',
        legenda: 'A 1ª tela da MM02 (Modificar material). O título "Modificar" confirma o modo de edição. Esta tela é mais simples que a MM01 — pede apenas o código do Material (que já existe) e o Nº modificação (opcional). O ícone de lupa (checkbox) ao lado do Material indica que você pode pesquisar o código via F4.',
      },
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-03',
        instrucao_capture: '',
        legenda: 'A 1ª tela da MM03 (Exibir material). O título "Exibir" confirma o modo somente leitura — nenhuma alteração pode ser salva aqui. A tela é idêntica à MM02, mas sem risco. Como estagiário, a MM03 é sua aliada: use-a livremente para consultar qualquer material.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'teoria',
      titulo: '📋 O padrão se repete em todo o SAP',
      conteudo: 'Veja como a mesma lógica aparece em outros módulos:',
      lista: [
        'Material — MM01 (Criar), MM02 (Modificar), MM03 (Exibir)',
        'Fornecedor Contábil — FK01 (Criar), FK02 (Modificar), FK03 (Exibir)',
        'Fornecedor Compras — XK01 (Criar), XK02 (Modificar), XK03 (Exibir)',
        'Cliente Contábil — FD01 (Criar), FD02 (Modificar), FD03 (Exibir)',
        'Pedido de Compras — ME21N (Criar), ME22N (Modificar), ME23N (Exibir)',
        'Centro de Custo — KS01 (Criar), KS02 (Modificar), KS03 (Exibir)',
      ],
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'atencao',
      titulo: '⚠️ Atenção: nem sempre é 01/02/03',
      conteudo: 'Algumas transações do SAP não seguem exatamente o sufixo 01/02/03, mas ainda têm os três modos. A FS00 (Conta do Razão) é um bom exemplo: é uma única transação com três botões na própria tela para alternar entre os modos Visualiza, Edita e Cria. Veja o próximo print.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-04',
        instrucao_capture: '',
        legenda: 'A transação FS00 (Conta do Razão Processar: Central) mostrando a Conta do Razão 6161310 da Empresa BR00. As setas vermelhas apontam para os três botões na barra de ferramentas: "Visualiza" (ícone de lupa — somente leitura), "Edita" (ícone de lápis — modo edição) e "Cria" (ícone de página nova — criação). Aqui o padrão Criar/Modificar/Exibir está integrado em uma única transação.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 4',
      conteudo: 'O padrão 01/02/03 é a base do SAP:',
      lista: [
        'MM01 = CRIAR — tem mais campos (SetoIndustrial, Tipo material). Requer autorização.',
        'MM02 = MODIFICAR — pede só o código do material existente. Requer autorização.',
        'MM03 = EXIBIR — somente leitura, sem risco. Use livremente como estagiário.',
        'O padrão se repete: FK01/02/03 para Fornecedor, FD01/02/03 para Cliente, KS01/02/03 para Centro de Custo.',
        'Algumas transações (como FS00) têm os 3 modos integrados em uma só tela com botões.',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Explore o padrão no SAP real:',
      lista: [
        '1. Abra MM01 — leia o título "Criar material". Quais campos aparecem que não existem na MM03?',
        '2. Abra MM02 — leia o título "Modificar material". Tente informar um material e perceba que os campos ficam editáveis.',
        '3. Abra MM03 — confirme que é modo leitura. O botão Gravar (disquete) está ativo?',
        '4. Abra FS00 — localize os três botões Visualiza, Edita e Cria na barra de ferramentas.',
        '5. Sem abrir, adivinhe: qual seria a transação para EXIBIR um fornecedor no módulo FI? (Dica: usa o padrão FK0X)',
        '🏆 BÔNUS: Abra FK03 e consulte um fornecedor — você vai ver que a tela tem a mesma lógica de visões da MM03.',
      ],
    },
  ],
}

export const AULA_N1_005: Aula = {
  id: 'ACAD-N1-005',
  titulo: 'MMBE: Consultando Estoque por Depósito',
  subtitulo: 'Veja quanto tem em estoque, onde está e qual a disponibilidade real',
  nivel: 'estagiario',
  modulo: 'MM',
  transacoes: ['MMBE', 'MM60'],
  tempo_estimado_minutos: 20,
  objetivo: 'Usar a transação MMBE para consultar o estoque do material MP1-00 na planta BR50, interpretando a árvore de resultados e identificando o estoque "De utiliz.livre". Conhecer também a MM60 como relatório complementar.',
  descricao_curta: 'Use a MMBE para consultar o estoque de MP1-00 na planta BR50/Almoxarifado 0001 e interprete os resultados da lista básica.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-004',
  proxima_aula_id: 'ACAD-N1-006',
  tags: ['MMBE', 'MM60', 'estoque', 'depósito', 'lista básica', 'módulo MM', 'MP1-00', 'BR50'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 MMBE: a pergunta mais comum do dia a dia',
      conteudo: 'A MMBE (Visão geral de estoques: empresa/centro/depósito/lote) responde à pergunta mais frequente em qualquer operação: "Quanto temos desse material e onde está?" É uma das transações mais acessadas por profissionais de Compras, Logística e Supply Chain. O resultado é exibido em uma árvore hierárquica: Empresa → Centro → Depósito → Lote.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 A tela de seleção da MMBE',
      conteudo: 'A MMBE tem uma tela de seleção com vários filtros antes de mostrar o resultado. Os campos principais são: Material (código do item), Centro (planta, ex: BR50), Depósito (almoxarifado, ex: 0001) e Lote (número do lote, quando aplicável). Você pode preencher só o Material e deixar os demais em branco para ver o estoque consolidado de todas as plantas.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-01',
        instrucao_capture: '',
        legenda: 'Tela de seleção da MMBE com Material = MP1-00, Centro = BR50 e Depósito = 0001. As setas vermelhas apontam para os três campos preenchidos. Na seção "Seleção tipo estoque" estão marcados "Selec.junto estoques especiais" e "Selec.junto estoques abertos". A opção "Sem linhas de estoque zero" evita que depósitos vazios apareçam no resultado.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '📦 Entendendo as colunas da lista básica',
      conteudo: 'Após executar a MMBE, o sistema exibe a "Visão geral de estoques: lista básica" com colunas de estoque. As colunas mais importantes são:',
      lista: [
        'De utiliz.livre — Estoque disponível para uso imediato. É a quantidade que você pode consumir, vender ou transferir sem restrição.',
        'Ctrl.qualidade — Material recebido que ainda está em inspeção. Não pode ser usado até aprovação pelo time de qualidade.',
        'Reservado — Quantidade reservada por uma ordem de produção ou requisição. Contabilmente existe mas já tem destino.',
        'Reserva entradas — Pedidos de compra abertos (esperados). Ainda não chegou mas já está no sistema.',
        'Estoque em pedido — Total de pedidos de compra em aberto para este material.',
      ],
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-02',
        instrucao_capture: '',
        legenda: 'Resultado da MMBE para o material MP1-00 (Matéria Prima - Comprada, ROH, unidade PEÇ). A coluna "De utiliz.livre" mostra 998.000 peças no total. A árvore hierárquica exibe: Total 998.000 → BR00 Empresa BR00 → BR50 Planta - BR50 → 0001 Almoxarifado com 997.000 peças. O campo "Estoque em pedido" de 1.000 indica um pedido de compra em aberto.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: '💡 Dica: De utiliz.livre é o estoque que realmente importa',
      conteudo: 'Quando alguém pergunta "quanto temos em estoque?", na prática quer saber o estoque "De utiliz.livre" — disponível imediatamente. Os outros tipos têm restrições: Ctrl.qualidade ainda está sendo inspecionado, Reservado já tem destino garantido. Se um cliente pede 1.000 peças e você tem 998.000 em livre utilização, você pode atender com folga.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-03',
        instrucao_capture: '',
        legenda: 'A transação MM60 (Índice de materiais) com o campo Centro = BR60. A seta vermelha aponta para o campo Centro preenchido. A MM60 é um relatório complementar à MMBE — lista todos os materiais de um centro com estoque avaliado. É útil para obter uma visão consolidada de todo o inventário de uma planta.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 5',
      conteudo: 'Você sabe consultar estoque no SAP:',
      lista: [
        'MMBE = Visão geral de estoques — hierarquia Empresa → Centro → Depósito → Lote.',
        'Na tela de seleção: informe Material e Centro (ex: MP1-00 + BR50) para filtrar.',
        '"De utiliz.livre" = disponível para uso imediato — o número que todos perguntam.',
        '"Ctrl.qualidade" = material recebido ainda em inspeção, não disponível ainda.',
        '"Reservado" = quantidade já comprometida com ordens ou requisições.',
        'MM60 = Índice de materiais — lista todos os materiais avaliados de um centro.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Consulte estoque no SAP real:',
      lista: [
        '1. Abra a MMBE e consulte o material MP1-00 com Centro = BR50 e Depósito = 0001.',
        '2. Qual o estoque total "De utiliz.livre"? Expanda a árvore para ver por Almoxarifado.',
        '3. Existe alguma quantidade em "Ctrl.qualidade" ou "Reservado"?',
        '4. Agora consulte outro material deixando o campo Depósito em branco — o que muda?',
        '5. Abra a MM60 e informe Centro = BR60. Execute e veja a lista de todos os materiais desta planta.',
        '🏆 BÔNUS: Na MMBE, clique com botão direito em qualquer linha → "Exibição detalhada" para ver informações completas daquele lote/depósito.',
      ],
    },
  ],
}


// ===========================================================
// NIVEL 1 - AULAS 6 A 10 (Navegacao Avancada e Orientacao)
// ===========================================================

export const AULA_N1_006: Aula = {
  id: 'ACAD-N1-006',
  titulo: 'Comandos /N, /O e /I: Navegue Como um Profissional',
  subtitulo: 'Abra, troque e feche transações com o Campo de Comando sem usar o mouse',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Dominar os comandos /N, /O e /I do Campo de Comando do SAP para navegar entre transações, abrir sessões paralelas e fechar janelas com agilidade — sem depender de menus.',
  descricao_curta: 'Aprenda /N (trocar transação), /O (abrir sessão paralela) e /I (fechar sessão) com exemplos reais do ME21N e FB03.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-005',
  proxima_aula_id: 'ACAD-N1-007',
  tags: ['/N', '/O', '/I', 'comandos', 'Campo de Comando', 'sessões paralelas', 'navegação'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O Campo de Comando é o volante do SAP',
      conteudo: 'Você já sabe que o Campo de Comando serve para abrir transações digitando o T-Code. Mas ele faz muito mais: com pequenos prefixos (/N, /O, /I) você controla janelas e sessões inteiras. Esses comandos são usados centenas de vezes por dia por qualquer analista SAP. Dominar eles é a diferença entre trabalhar rápido e ficar perdido clicando nos menus.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 /N — Trocar de transação na mesma janela',
      conteudo: 'O comando /N fecha a transação atual e abre uma nova, tudo na mesma janela. Você está dentro da ME21N (Criar Pedido) e precisa verificar uma informação na MM03? Digite /N no Campo de Comando e o SAP fica pronto para você digitar o próximo T-Code. Neste momento o Campo de Comando mostra apenas "/N" esperando o T-Code.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-01',
        instrucao_capture: '',
        legenda: 'O Campo de Comando mostrando "/N" dentro da transação ME21N (Criar pedido). A caixa vermelha destaca o campo com "/N" digitado. Ao fundo vemos a tela do pedido de compra com os campos: Org.compras = BR00 (Purchase Orga. BR00), Grp.compradores = BR0, Empresa = CABB (Training). Após digitar /N você informa o T-Code desejado e dá Enter para navegar.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'destaque',
      titulo: '📌 /O — Abrir uma NOVA sessão paralela',
      conteudo: 'O /O é ainda mais poderoso: ele abre uma segunda janela do SAP sem fechar a que você está. Isso é essencial no dia a dia: você está digitando um pedido de compra (ME21N) e precisa consultar o estoque (MMBE) sem perder o que preencheu. O SAP permite até 6 sessões abertas simultaneamente. Cada sessão é independente — fechar uma não afeta as outras.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-02',
        instrucao_capture: '',
        legenda: 'Resultado do comando /O: uma janela "Exibir documento: 1ª tela" aberta sobre o SAP Easy Access. A nova janela flutuante tem sua própria barra de ferramentas e Campo de Comando independentes. A janela principal (SAP Easy Access com a árvore de menus) continua aberta ao fundo. Os campos da nova janela são: Nº documento, Empresa = BR00 e Exercício.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'destaque',
      titulo: '📌 /I — Fechar a sessão atual',
      conteudo: 'O /I fecha a janela (sessão) atual sem afetar as demais. Se você abriu uma segunda janela com /O para consultar uma informação e terminou, digita /I no Campo de Comando dessa janela e ela se fecha. A janela principal continua aberta normalmente. É diferente de clicar no X do Windows, que pode fechar tudo dependendo da configuração.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-03',
        instrucao_capture: '',
        legenda: 'O comando "/I" digitado no Campo de Comando da janela "Exibir documento: 1ª tela". A caixa vermelha destaca o campo. Ao pressionar Enter, esta janela vai se fechar e o SAP retorna à janela anterior (SAP Easy Access). Use /I sempre que quiser fechar uma sessão sem fechar o SAP inteiro.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'teoria',
      titulo: '📋 Tabela completa de comandos essenciais',
      conteudo: 'Resumo de todos os comandos do Campo de Comando que você vai usar:',
      lista: [
        '/N — Limpa o Campo de Comando para digitar novo T-Code (navega na mesma janela)',
        '/NXXXX — Vai direto para a transação XXXX fechando a atual (ex: /NMM03)',
        '/OXXXX — Abre a transação XXXX em uma NOVA janela paralela (ex: /OMMBE)',
        '/I — Fecha a janela/sessão atual sem afetar as outras',
        '/NEND — Faz logout da sessão atual',
        '/NEX — Fecha TODAS as sessões do SAP (cuidado: perde dados não salvos)',
        '/H — Ativa modo DEBUG — somente para consultores técnicos',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 6',
      conteudo: 'Você domina navegação avançada com o Campo de Comando:',
      lista: [
        '/N = navegar para outra transação na mesma janela',
        '/O = abrir nova sessão paralela (até 6 simultâneas)',
        '/I = fechar sessão atual sem afetar as demais',
        '/NEX = fechar TODAS as sessões — use com cuidado!',
        'Combine os prefixos com T-Codes: /NMM03, /OMMBE, /NFB03...',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Pratique os comandos no SAP real:',
      lista: [
        '1. Na tela inicial, vá para MM03 com /NMM03. Consulte o material MP1-00.',
        '2. Dentro da MM03, use /OMMBE para abrir o estoque em uma NOVA janela paralela.',
        '3. Na janela da MMBE, consulte o estoque do MP1-00. Anote a quantidade livre.',
        '4. Feche a janela da MMBE usando /I no Campo de Comando.',
        '5. Confirme que voltou para a janela da MM03 com os dados ainda visíveis.',
        '🏆 BÔNUS: Tente /NEX e observe a mensagem de confirmação do SAP antes de fechar tudo.',
      ],
    },
  ],
}

export const AULA_N1_007: Aula = {
  id: 'ACAD-N1-007',
  titulo: 'Transações de Criação: MM01 e SE38',
  subtitulo: 'Conheça a tela de criação de materiais e veja como o SAP diferencia Exibir de Modificar',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: ['MM01', 'SE38'],
  tempo_estimado_minutos: 20,
  objetivo: 'Conhecer a transação MM01 (Criar material) identificando seus campos específicos de criação, e entender a SE38 como exemplo de transação que separa explicitamente os botões Exibir e Modificar.',
  descricao_curta: 'Explore a MM01 para entender a tela de criação de material, e conheça a SE38 onde os botões Exibir/Modificar ficam separados visualmente.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-006',
  proxima_aula_id: 'ACAD-N1-008',
  tags: ['MM01', 'SE38', 'criar material', 'Exibir', 'Modificar', 'transações', 'ABAP'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Revisitando a MM01: a transação de criação',
      conteudo: 'Nas aulas anteriores estudamos a MM03 (Exibir) e vimos a MM01 como parte do padrão 01/02/03. Agora vamos explorar a MM01 com mais atenção — entender o que ela tem de diferente é importante para quando você precisar criar materiais no futuro, e para reconhecer quando alguém está criando vs. apenas consultando.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 MM01: campos exclusivos da tela de criação',
      conteudo: 'A 1ª tela da MM01 tem campos que não existem na MM02 ou MM03: SetoIndustrial (obrigatório — define o segmento da empresa, ex: M para Mechanical Engineering) e Tipo material (obrigatório — ROH, HALB, FERT etc.). Na parte inferior há uma seção "Modelo / Material" para copiar configurações de um material já existente. A seta vermelha na tela aponta para a palavra "Criar" no título.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-007-01',
        instrucao_capture: '',
        legenda: 'A 1ª tela da MM01 (Criar material) com a seta vermelha apontando para o título "Criar". Os campos obrigatórios são: SetoIndustrial (dropdown) e Tipo material (dropdown). O campo "Modelo / Material" na parte inferior permite copiar dados de um material já cadastrado — economiza tempo e garante consistência no cadastro.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '🔧 A SE38: transação com botões Exibir e Modificar separados',
      conteudo: 'Nem sempre o padrão 01/02/03 aparece como transações separadas. A SE38 (Editor ABAP — usada por programadores SAP) é um exemplo onde ambos os modos ficam na mesma tela: dois botões distintos no rodapé — "Exibir" (ícone de lupa, modo leitura) e "Modificar" (ícone de lápis, modo edição). Isso deixa visualmente claro que você está escolhendo o modo de acesso.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-007-02',
        instrucao_capture: '',
        legenda: 'A transação SE38 com o campo Programa = ZMESSAGE_GENERATOR e os dois botões de modo de acesso na parte inferior: "Exibir" (ícone de lupa com fundo laranja — somente leitura) e "Modificar" (ícone de lápis — modo edição). Na seção Subobjetos você escolhe o que quer ver: Texto fonte, Variantes, Características, Documentação ou Elementos de texto.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'atencao',
      titulo: '⚠️ Como saber se você está em modo de edição?',
      conteudo: 'Três indicadores de que você está em modo de edição (e deve ter cuidado): ① O título da tela começa com "Criar" ou "Modificar". ② O botão Gravar (disquete) na barra de ferramentas está ativo (não cinza). ③ Os campos têm fundo branco ou amarelo (editáveis). Se os campos têm fundo cinza e o botão Gravar está desabilitado, você está em modo leitura — seguro.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'dica',
      titulo: '💡 Dica: quais transações o estagiário pode usar?',
      conteudo: 'Regra de ouro para o início da carreira: transações com "Exibir" ou "Visualizar" no título são seguras. Transações com "Criar" ou "Modificar" exigem cuidado e geralmente requerem autorização. Boas transações para começar: MM03 (Exibir Material), MMBE (Consulta estoque), ME23N (Exibir Pedido), MB03 (Exibir Documento), FK03 (Exibir Fornecedor FI).',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 7',
      conteudo: 'Você entende os modos de acesso das transações SAP:',
      lista: [
        'MM01 tem campos exclusivos de criação: SetoIndustrial e Tipo material (obrigatórios).',
        'A seção "Modelo / Material" na MM01 permite copiar de um material existente.',
        'SE38 mostra os botões Exibir e Modificar separados visualmente — padrão didático.',
        'Modo leitura: título "Exibir", campos cinza, botão Gravar desabilitado.',
        'Modo edição: título "Criar/Modificar", campos brancos/amarelos, Gravar ativo.',
        'Como estagiário: use sempre transações de exibição. Peça autorização para criar/modificar.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Pratique no SAP real:',
      lista: [
        '1. Abra MM01 — identifique os campos SetoIndustrial e Tipo material. Clique no dropdown de Tipo material e veja as opções disponíveis.',
        '2. Abra MM03 — confirme que não tem os campos SetoIndustrial e Tipo material na 1ª tela.',
        '3. Abra SE38 — localize os botões "Exibir" e "Modificar" no rodapé da tela.',
        '4. Tente abrir um programa com SE38 clicando em "Exibir" — você consegue ver o código sem autorização?',
        '5. Abra FK03 — é uma transação de criação ou exibição de fornecedor?',
        '🏆 BÔNUS: Compare a 1ª tela de MM01 com a de FK01 (Criar Fornecedor) — quais campos são diferentes?',
      ],
    },
  ],
}

export const AULA_N1_008: Aula = {
  id: 'ACAD-N1-008',
  titulo: 'SEARCH_SAP_MENU: O Google do SAP',
  subtitulo: 'Encontre qualquer transação digitando uma palavra-chave, sem precisar memorizar T-Codes',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Usar a transação SEARCH_SAP_MENU para buscar transações SAP por palavras-chave (ex: "ORDEM"), interpretar os resultados com código de transação e caminho do menu, e acessar diretamente uma transação encontrada.',
  descricao_curta: 'Use SEARCH_SAP_MENU para buscar transações por palavra-chave — exemplo prático buscando "ORDEM" e encontrando /SAPPO/PP02, /SAPPO/PP03 e ME92F.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-007',
  proxima_aula_id: 'ACAD-N1-009',
  tags: ['SEARCH_SAP_MENU', 'busca', 'T-Codes', 'ORDEM', '/SAPPO/PP02', 'ME92F', 'produtividade'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O medo de não saber o T-Code',
      conteudo: 'Quem está começando no SAP vive um dilema: precisa acessar uma tela, sabe o que precisa fazer, mas não lembra o código da transação. A boa notícia: o SAP tem sua própria ferramenta de busca. A SEARCH_SAP_MENU é o "Google" do SAP — você digita uma palavra relacionada ao processo e o sistema lista todas as transações que contêm aquela palavra no nome ou caminho do menu.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Como abrir a SEARCH_SAP_MENU',
      conteudo: 'Acesse pelo Campo de Comando: digite SEARCH_SAP_MENU e pressione Enter. Uma caixa de diálogo simples vai aparecer com apenas um campo chamado "Entrada texto pesqui" (Entrada texto de pesquisa). Digite a palavra-chave que descreve o que você está procurando e clique no botão verde de confirmação (✓).',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-008-01',
        instrucao_capture: '',
        legenda: 'O diálogo da SEARCH_SAP_MENU com a palavra "ORDEM" digitada no campo "Entrada texto pesqui". A busca não é case-sensitive — pode digitar em maiúsculo ou minúsculo. Clique no ✓ verde para executar a pesquisa. O SAP vai procurar em todos os títulos de menu e nomes de transação.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '📋 Lendo os resultados da pesquisa',
      conteudo: 'O resultado é exibido em uma tela chamada "Procurar código de transação ou título de menu" com três colunas. Para cada transação encontrada, o SAP mostra o caminho hierárquico do menu (Nó → Nó precedente) até a transação. Entender esse caminho é muito útil pois revela em qual módulo/processo a transação pertence.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-008-02',
        instrucao_capture: '',
        legenda: 'Resultado da busca por "ORDEM" na SEARCH_SAP_MENU. Os resultados mostram: sem T-Code = "Ordem de processamento posterior" (item de menu); /SAPPO/PP02 = "Processar ordem procmto.posterior" (caminho: Postprocessing Office → Componentes válidos para várias aplicações); /SAPPO/PP03 = "Exibir ordem de processamento posterior"; ME92F = "Monitorização de confirmação da ordem" (caminho: Mensagens → Pedido → Compras → Administração de materiais → Logística). Duplo clique em qualquer linha abre a transação.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: '💡 Dicas para pesquisas mais eficientes',
      conteudo: 'Algumas dicas para usar bem a SEARCH_SAP_MENU: Use palavras em português pois o SAP está configurado em PT-BR (ex: "estoque", "fatura", "pedido", "ordem"). Palavras mais genéricas trazem mais resultados — palavras específicas filtram melhor. Se não encontrar com uma palavra, tente sinônimos: "nota fiscal" e "fatura" e "NF" podem dar resultados diferentes. Para transações do módulo FI tente palavras como "documento", "lançamento", "conta".',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 8',
      conteudo: 'Você nunca mais ficará travado sem saber o T-Code:',
      lista: [
        'SEARCH_SAP_MENU = busca de transações por palavra-chave — o "Google" do SAP.',
        'Acesse pelo Campo de Comando digitando SEARCH_SAP_MENU.',
        'O resultado mostra: código da transação + título + caminho no menu.',
        'Duplo clique em qualquer resultado abre a transação diretamente.',
        'Use palavras em português: "estoque", "pedido", "fatura", "ordem", "material".',
        'O caminho do menu revela em qual módulo/processo a transação pertence.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Use a SEARCH_SAP_MENU para descobrir T-Codes:',
      lista: [
        '1. Busque "estoque" — quantas transações aparecem? Identifique o código da MMBE na lista.',
        '2. Busque "pedido de compras" — encontre a transação ME21N (Criar Pedido de Compras).',
        '3. Busque "fatura" — encontre a transação MIRO (Lançar fatura de fornecedor).',
        '4. Busque "ORDEM" como no exemplo — anote os 3 T-Codes que aparecem.',
        '5. Dê duplo clique em ME92F nos resultados — a transação abre diretamente?',
        '🏆 BÔNUS: Busque "inventário" — qual T-Code aparece para fazer inventário físico?',
      ],
    },
  ],
}

export const AULA_N1_009: Aula = {
  id: 'ACAD-N1-009',
  titulo: 'Personalizando o SAP GUI: Tema e Scripting',
  subtitulo: 'Mude a cor do ambiente para não confundir DEV/PRD e habilite o Scripting para automação',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Personalizar o tema visual do SAP GUI (exemplo: tema rosa) para diferenciar ambientes, e configurar as opções de SAP GUI Options no sistema EH8 — especialmente habilitar o Scripting para automações futuras.',
  descricao_curta: 'Altere o tema do SAP GUI para diferenciar ambientes e habilite o Scripting no SAP GUI Options - EH8.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-008',
  proxima_aula_id: 'ACAD-N1-010',
  tags: ['personalização', 'tema', 'SAP GUI Options', 'Scripting', 'cores', 'EH8', 'automação'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Por que personalizar o SAP GUI?',
      conteudo: 'A maioria das empresas tem pelo menos três ambientes SAP: Desenvolvimento (DEV), Qualidade (QAS) e Produção (PRD). É muito comum confundir os ambientes e executar operações reais pensando estar em teste — o que pode gerar movimentos financeiros ou de estoque errados. Mudar a COR de cada ambiente é uma dica de ouro que profissionais experientes usam desde o primeiro dia.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Como o SAP Easy Access fica com um tema personalizado',
      conteudo: 'Na tela SAP Easy Access você pode perceber quando um tema visual personalizado está ativo — o fundo da barra de título, a tela e os ícones mudam de cor. No exemplo desta aula, o sistema está com um tema rosa/rosé. Isso indica que este ambiente recebeu uma personalização visual — útil para distinguir visualmente de outros ambientes da empresa.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-009-01',
        instrucao_capture: '',
        legenda: 'O SAP Easy Access com o tema visual personalizado (cor rosa/rosé). A tela mostra o SAP Menu expandido com as pastas principais: Agricultural Contract Management, Financial Services Network Connector, Office, Cross-Application Components, Logistics, Accounting, Human Resources etc. Na seção Favoritos estão organizadas pastas por módulo: SAP QM, SAP PM, SAP PS, SAP EWM, SAP WM, SAP MM, SAP HR, SAP PP, SAP CO, SAP FI. A personalização visual ajuda a identificar o ambiente rapidamente.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: '🛠️ Como alterar o tema: passo a passo',
      conteudo: 'Para acessar as configurações visuais do SAP GUI: clique no botão "Customize Local Layout" (ícone de chave de fenda no canto superior direito da tela) → selecione "Options..." → no painel esquerdo expanda "Visual Design" → clique em "Color Settings" → escolha o tema desejado → clique em "Apply" → "OK". Recomendação profissional: use cores diferentes para DEV (verde), QAS (laranja) e PRD (azul padrão).',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'teoria',
      titulo: '⚙️ SAP GUI Options: o painel de configurações completo',
      conteudo: 'O SAP GUI Options é o painel central de configurações do cliente SAP instalado no seu computador. Ele é identificado pelo título "SAP GUI Options - EH8" (onde EH8 é o SID do sistema). As configurações são organizadas em pastas: Visual Design (cores e temas), Interaction Design (comportamento da interface), Accessibility & Scripting (acessibilidade e automação), Multilingual Settings, Local Data, Traces e Security.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-009-02',
        instrucao_capture: '',
        legenda: 'O SAP GUI Options - EH8 na seção Accessibility & Scripting > Scripting. A seção "Installation" mostra "Scripting is installed" (confirmando que o módulo está disponível). Na seção "User Settings": o checkbox "Enable scripting" está marcado (✓), "Notify when a script attaches to SAP GUI" marcado, "Notify when a script opens a connection" marcado, "Show native Microsoft Windows dialogs" desmarcado. Com o Scripting habilitado, ferramentas de automação e upload de dados podem se conectar ao SAP.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'dica',
      titulo: '💡 Por que habilitar o Scripting?',
      conteudo: 'O SAP Scripting (também chamado de SAP GUI Scripting) permite que ferramentas externas se conectem ao SAP para automatizar tarefas repetitivas. Exemplos de uso: upload de lançamentos em massa via Excel, geração automática de pedidos de compra, extração de relatórios para análise. Analistas mais experientes usam isso com ferramentas como VBA no Excel ou Python. Habilitar é o primeiro passo.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 9',
      conteudo: 'Você sabe personalizar o SAP GUI:',
      lista: [
        'Tema visual: Customize Local Layout → Options → Visual Design → Color Settings.',
        'Use cores diferentes para DEV, QAS e PRD — nunca mais confundirá os ambientes.',
        'SAP GUI Options - EH8: painel central de configurações identificado pelo SID do sistema.',
        'Accessibility & Scripting → Scripting → "Enable scripting" = habilita automações.',
        'Com Scripting ativado, ferramentas como Excel VBA e Python podem se conectar ao SAP.',
        'As configurações são salvas localmente — cada computador tem seu próprio perfil.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Configure o SAP GUI no seu computador:',
      lista: [
        '1. Clique no ícone "Customize Local Layout" (chave de fenda) no canto superior direito.',
        '2. Vá em Options → Visual Design → Color Settings → escolha uma cor diferente da padrão.',
        '3. Clique em Apply e OK. O SAP deve mudar de cor imediatamente.',
        '4. Agora vá em Options → Accessibility & Scripting → Scripting.',
        '5. Verifique se "Enable scripting" está marcado. Se não estiver, marque e clique Apply/OK.',
        '🏆 BÔNUS: Na pasta "Local Data" das Options, veja onde o SAP salva logs e dados temporários no seu computador.',
      ],
    },
  ],
}

export const AULA_N1_010: Aula = {
  id: 'ACAD-N1-010',
  titulo: 'SAP em Inglês: Terminologia Bilíngue do Dia a Dia',
  subtitulo: 'Customer, Vendor, Match Code, Get Variant — traduza os termos ingleses que aparecem no SAP',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Reconhecer os principais termos em inglês que aparecem nas telas SAP mesmo em ambientes configurados em português, entendendo as traduções: Customer=Cliente, Vendor=Fornecedor, Match Code=Pesquisa, Get Variant=Selecionar Variante.',
  descricao_curta: 'Desvende os termos em inglês que aparecem nas telas SAP: Customer=Cliente, Vendor=Fornecedor, Match Code=Pesquisa F4, Get Variant=Selecionar Variante.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-009',
  proxima_aula_id: 'ACAD-N2-001',
  tags: ['terminologia', 'inglês', 'Customer', 'Vendor', 'Match Code', 'Get Variant', 'bilíngue', 'primeiros dias'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Por que o SAP mistura inglês e português?',
      conteudo: 'Mesmo com o SAP configurado em português, você vai encontrar termos em inglês com frequência. Isso acontece porque: algumas transações são de módulos que não foram totalmente traduzidos, relatórios ALV mantêm termos técnicos em inglês, e alguns botões e campos de configuração usam nomenclatura inglesa original. Saber as traduções corretas evita confusão e acelera o aprendizado.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Customer = Cliente: a 1ª tradução essencial',
      conteudo: 'Em transações do módulo FI/SD, o termo "Customer" aparece frequentemente onde em português você esperaria "Cliente". A tela "Customer Display: Initial Screen" é a tela de consulta de dados de cliente. O campo "Customer" é onde você digita o código do cliente (ex: 1700000). Ao lado do campo há um ícone de binoculares — este é o "Match Code" (a lupa de pesquisa F4).',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-010-01',
        instrucao_capture: '',
        legenda: 'A tela "Customer Display: Initial Screen" com as anotações em vermelho: "Customer"=Cliente (apontando para o campo Customer com o código 1700000) e "Match Code"=Pesquisa (apontando para o ícone de binoculares ao lado do campo). O Company Code é o código da empresa. Match Code é o termo SAP para a pesquisa por F4 — o ícone de lupa/binoculares que aparece ao lado dos campos para buscar registros.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '📋 Glossário bilíngue SAP: termos essenciais',
      conteudo: 'Os termos em inglês que você mais vai encontrar no SAP do dia a dia:',
      lista: [
        'Customer = Cliente — aparece em transações FD01/FD02/FD03, relatórios de vendas SD',
        'Vendor = Fornecedor — aparece em FK01/FK02/FK03, MIRO, FBL1N, relatórios de AP',
        'Company Code = Código da empresa — campo que identifica a empresa, ex: BR00',
        'Plant = Centro — unidade produtiva ou filial, ex: BR50, BR60',
        'Match Code = Pesquisa F4 — o ícone de binoculares que abre a lista de valores possíveis',
        'Get Variant = Selecionar Variante — botão para carregar uma configuração de tela salva',
        'Line Item = Item de linha — cada linha de um documento (pedido, fatura, lançamento)',
      ],
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-010-02',
        instrucao_capture: '',
        legenda: 'A tela "Vendor Line Item Display" com um tooltip mostrando "Get Variant... (Shift+F5)" ao passar o mouse sobre o botão de variante. A anotação em vermelho aponta para o botão e escreve "Selecionar Variante". O campo "Vendor account" (= Conta do Fornecedor) e "Company code" (= Código da empresa) estão visíveis. A seção "Selection using search help" = Seleção por ajuda de pesquisa.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'teoria',
      titulo: '🔤 Variantes: o que são e por que importam?',
      conteudo: 'Variante (Variant / Get Variant) é uma configuração salva de tela — como um "preset" de filtros e colunas. Em relatórios ALV como "Vendor Line Item Display" ou "Customer Line Item Display", você pode salvar seu conjunto preferido de filtros (empresa, período, conta) como uma variante e reutilizar. O botão "Get Variant" (Shift+F5) carrega uma variante salva. Analistas usam muito esse recurso para padronizar consultas rotineiras.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'dica',
      titulo: '💡 Dica: use F1 para traduzir qualquer campo',
      conteudo: 'Quando encontrar um campo em inglês que não conhece, pressione F1 com o cursor naquele campo. O SAP abre uma janela de ajuda com a explicação do campo — geralmente em português se o sistema estiver configurado em PT-BR. É o recurso de ajuda integrado do SAP e funciona em qualquer transação.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 10 e do Nível 1',
      conteudo: 'Você concluiu o Nível 1 — Estagiário! Terminologia bilíngue dominada:',
      lista: [
        'Customer = Cliente | Vendor = Fornecedor | Company Code = Código da empresa',
        'Match Code = a lupa/binoculares (F4) que abre a lista de valores pesquisáveis',
        'Get Variant (Shift+F5) = Selecionar Variante — carrega configuração salva de tela',
        'Line Item = item de linha de um documento SAP',
        'Ao encontrar campo desconhecido em inglês: pressione F1 para ver a ajuda em português',
        '🎓 Parabéns! Você completou o Nível 1. Próximo passo: Nível 2 — Júnior (Módulo MM)',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício Final do Nível 1',
      conteudo: 'Revise o aprendizado do Nível 1 completo:',
      lista: [
        '1. Abra o SAP Logon 760 — quantos sistemas estão disponíveis? Identifique o SID de cada um.',
        '2. Faça login no SAP ECC e acesse a MM03. Consulte o material MP1-00 — quais visões você já conhece?',
        '3. Na MMBE, consulte o estoque do MP1-00 no Centro BR50. Qual o estoque "De utiliz.livre"?',
        '4. Use a SEARCH_SAP_MENU para encontrar a transação "FBL1N" pesquisando "Vendor Line Item".',
        '5. Abra a FBL1N — identifique os campos em inglês e suas traduções: Vendor account, Company code, Open items.',
        '🏆 BÔNUS: Crie nos Favoritos uma pasta "Nível 1 — Revisão" com todas as transações estudadas: MM03, MMBE, SEARCH_SAP_MENU, FBL1N.',
      ],
    },
  ],
}


// ===========================================================
// NIVEL 2 - JUNIOR (Operacoes MM do Dia a Dia)
// ===========================================================

export const AULA_N2_001: Aula = {
  id: 'ACAD-N2-001',
  titulo: 'Tipos de Material no SAP: ROH, HALB, FERT e Mais',
  subtitulo: 'Entenda as categorias de material e por que essa classificação importa para todos',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['MM03'],
  tempo_estimado_minutos: 20,
  objetivo: 'Compreender os principais tipos de material do SAP (ROH, HALB, FERT, HAWA, ERSA, DIEN) e como identificar o tipo de um material usando a transação MM03.',
  descricao_curta: 'Aprenda os tipos de material do SAP: matéria prima (ROH), semi-acabado (HALB), produto acabado (FERT) e mercadoria para revenda (HAWA).',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-010',
  proxima_aula_id: 'ACAD-N2-002',
  tags: ['tipos de material', 'ROH', 'HALB', 'FERT', 'HAWA', 'MM03', 'dados mestre'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'Por que os Tipos de Material Existem?',
      conteudo: 'No SAP, nem todo item é tratado da mesma forma. Uma matéria-prima (ROH) tem processos de compra e controle de estoque diferentes de um produto acabado (FERT). O Tipo de Material define quais visões de dados mestre estão disponíveis, quais movimentos de estoque são permitidos e como o item é valorizado contabilmente. É um dos campos mais importantes do cadastro de material.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Os Tipos de Material Mais Comuns',
      conteudo: 'Cada empresa pode ter tipos personalizados, mas estes são os padrões SAP que você encontrará na maioria dos projetos:',
      lista: [
        'ROH — Matéria Prima (Raw Material): tudo que a empresa compra para usar na fabricação. Tem MRP e é controlado por estoque.',
        'HALB — Semi-Acabado (Semi-Finished): material em processo de produção. Não é vendido diretamente.',
        'FERT — Produto Acabado (Finished Product): produto final, pronto para venda. Controlado por PP e SD.',
        'HAWA — Mercadoria para Revenda (Trading Goods): a empresa compra e revende sem fabricar. Igual ao varejo.',
        'ERSA — Peça de Reposição (Spare Part): usado em manutenção. Controlado junto com PM (Plant Maintenance).',
        'DIEN — Serviço (Service): itens intangíveis. Não tem controle de estoque físico.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-001-01',
        instrucao_capture: 'Abra a transação MM03 (/NMM03). Digite o código de um material de Matéria Prima (ROH) na sua empresa ou use MP1-00 se disponível. Selecione a visão "Dados Básicos 1" e pressione Enter. Na tela que abrir, clique no ícone de informações (i) no topo — vai mostrar o Tipo de Material. Tire um print desta tela destacando o campo Tipo de Material e seu valor (ex: ROH).',
        legenda: 'Dados Básicos 1 da MM03 mostrando o Tipo de Material. Este campo determina todo o comportamento do material no SAP: quais transações podem ser usadas, quais movimentos de estoque são permitidos e como o material aparece nos relatórios. Você pode filtrar materiais por tipo usando F4 no campo de pesquisa.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Como Pesquisar por Tipo de Material na MM03',
      conteudo: 'Para listar todos os materiais de um tipo específico: abra a MM03, deixe o campo Material em branco e pressione F4 (ou clique na lupa). Na tela de pesquisa que abrir, clique na aba que mostra opções de filtro. Você verá um campo chamado "Tipo de Material" — preencha com ROH, FERT ou qualquer outro tipo e pressione Enter. O SAP listará todos os materiais daquele tipo cadastrados na empresa.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-001-02',
        instrucao_capture: 'Na transação MM03, deixe o campo Material vazio e pressione F4. Na tela de pesquisa que abrir, encontre o campo "Tipo de Material" e preencha com "FERT". Pressione Enter ou clique em Executar. Tire um print da lista de resultados mostrando os materiais do tipo FERT (Produto Acabado) cadastrados na empresa. Destaque a coluna "Tipo" para mostrar que todos são FERT.',
        legenda: 'Lista de materiais do tipo FERT (Produto Acabado) obtida via pesquisa F4 na MM03. Esta pesquisa é muito útil para analistas que precisam trabalhar com uma categoria específica de materiais. Note que cada tipo tem um prefixo ou padrão de codificação diferente nas empresas.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: 'Dica: Tipos Customizados Z',
      conteudo: 'Muitas empresas criam seus próprios tipos de material começando com a letra Z (convenção SAP para customizações). Por exemplo: ZMAT (material customizado), ZSVC (serviço customizado). Se você encontrar um tipo que não reconhece, consulte o Key User ou o time de MM para entender o que ele representa na sua empresa.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Tipos de Material',
      conteudo: 'Os tipos de material definem o comportamento do item no SAP:',
      lista: [
        'ROH = Matéria Prima — comprado para fabricação',
        'HALB = Semi-Acabado — em processo de produção',
        'FERT = Produto Acabado — pronto para venda',
        'HAWA = Revenda — comprado e revendido sem fabricação',
        'ERSA = Peça de Reposição — usado em manutenção',
        'DIEN = Serviço — intangível, sem estoque físico',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Explore os tipos de material na sua empresa:',
      lista: [
        '1. Use a MM03 para consultar 5 materiais diferentes. Para cada um, anote o Tipo de Material.',
        '2. Identifique quantos tipos diferentes você encontrou entre os 5 materiais.',
        '3. Pesquise no F4 da MM03 por materiais do tipo HAWA (Revenda). Eles existem na sua empresa?',
        '4. Existe algum material do tipo DIEN (Serviço)? Se sim, abra-o e tente encontrar visões de estoque — elas existem para serviços?',
        'BONUS: Pergunte ao Key User de MM quais tipos de material são usados na sua empresa e qual é a diferença de processo entre eles.',
      ],
    },
  ],
}

export const AULA_N2_002: Aula = {
  id: 'ACAD-N2-002',
  titulo: 'Cadastrando um Novo Material com MM01',
  subtitulo: 'Crie o registro mestre de um material do zero — o processo completo',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['MM01', 'MM03'],
  tempo_estimado_minutos: 35,
  objetivo: 'Executar a transação MM01 para criar um novo material no SAP, preenchendo as visões essenciais (Dados Básicos, MRP, Contabilidade) com os dados corretos.',
  descricao_curta: 'Aprenda a criar um material novo no SAP usando a MM01 — preencha as visões, defina o tipo de material e salve o registro com sucesso.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N2-001',
  proxima_aula_id: 'ACAD-N2-003',
  tags: ['MM01', 'cadastro', 'material', 'dados mestre', 'criar material', 'júnior'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'Antes de Criar: Consulte um Material Similar',
      conteudo: 'Profissionais experientes raramente criam materiais do zero. A técnica mais eficiente é usar um material similar já cadastrado como referência. No SAP isso é chamado de "Material de Referência" ou "Copy From". Ao informar um material de referência na MM01, o SAP copia automaticamente todas as configurações padrão, deixando você apenas ajustar os dados específicos do novo material. Isso evita erros e garante consistência no cadastro.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Os Campos Obrigatórios da Tela Inicial (MM01)',
      conteudo: 'Ao abrir a MM01, o primeiro passo é preencher a tela de entrada antes de chegar nas visões de dados. Os campos desta tela definem o "esqueleto" do material:',
      lista: [
        'Material — O código único do material. Pode ser numérico ou alfanumérico dependendo da configuração da empresa.',
        'Industry Sector (Setor Industrial) — Define o segmento da empresa. Mais comum: "M" = Mechanical Engineering.',
        'Material Type (Tipo de Material) — ROH, HALB, FERT, HAWA etc. Determina as visões disponíveis.',
        'Copy From (Copiar de) — Código do material de referência. Use um material similar já cadastrado para agilizar.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-002-01',
        instrucao_capture: 'Abra a transação MM01 (/NMM01). Vai aparecer a tela inicial com campos: Material, Industry Sector, Material Type e Copy From. Tire um print desta tela vazia. Depois, preencha os campos: Material = MP12-00 (ou próximo número disponível), Industry Sector = M (Mechanical Engineering), Material Type = ROH (Matéria Prima). Adicione setas indicando cada campo preenchido.',
        legenda: 'Tela inicial da MM01 com os campos obrigatórios. O campo "Copy From" é opcional mas altamente recomendado — preencha com o código de um material similar para copiar as configurações base. Após preencher todos os campos, pressione Enter para avançar para a seleção de visões.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Selecionando as Visões Corretas',
      conteudo: 'Após pressionar Enter na tela inicial, o SAP abre a tela de seleção de Visões (Views). Para um material ROH básico, selecione no mínimo: Dados Básicos 1 (dados gerais, descrição, unidade de medida), MRP 1 e MRP 2 (parâmetros de reposição de estoque), Compras (dados para pedidos de compra), Contabilidade 1 (valorização e preço). Clique no botão "Selecionar Tudo" se quiser configurar todas as visões disponíveis. Clique em OK para avançar.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-002-02',
        instrucao_capture: 'Na tela de seleção de visões da MM01, selecione ao menos: Dados Básicos 1, MRP 1, MRP 2, Compras e Contabilidade 1. Tire um print desta tela mostrando as visões selecionadas (marcadas). Destaque as 5 visões mencionadas acima com setas numeradas ou caixas coloridas.',
        legenda: 'Seleção de visões na MM01. As visões selecionadas determinam quais abas de dados vão aparecer para preenchimento. Para materiais de estoque (ROH, FERT), as visões mínimas são: Dados Básicos 1, MRP 1/2, Compras e Contabilidade 1. Selecione conforme os processos que envolvem este material.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'pratica',
      titulo: 'Dados Básicos 1: Os Campos Fundamentais',
      conteudo: 'Na aba Dados Básicos 1, preencha os campos essenciais: Descrição do Material (nome claro e padronizado, ex: "PARAFUSO M6 X 12 INOX"), Grupo de Mercadorias (categoria, ex: 001), Unidade de Medida Base (UN = unidade, KG = quilograma, L = litro, M = metro), Peso Bruto e Peso Líquido (em KG), Volume (se aplicável). A descrição é fundamental — ela aparece em todos os relatórios e documentos da empresa. Use um padrão de nomenclatura consistente.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-002-03',
        instrucao_capture: 'Na aba Dados Básicos 1 da MM01, preencha: Descrição = nome do material (invente um exemplo como "PARAFUSO M6 X 12 INOX"), Unidade de Medida Base = UN, Peso Bruto = 0.05. Tire um print desta aba com os campos preenchidos. Destaque com setas os 3 campos mais importantes: Descrição, Unidade de Medida e Peso.',
        legenda: 'Visão Dados Básicos 1 da MM01 preenchida. A Descrição deve ser clara e seguir o padrão de nomenclatura da empresa (normalmente: TIPO + ESPECIFICAÇÃO + MATERIAL + MEDIDA). A Unidade de Medida Base define como o estoque é contado — mude com cuidado após o primeiro movimento de estoque.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'atencao',
      titulo: 'Cuidado: Nivéis Organizacionais',
      conteudo: 'Ao avançar entre visões, o SAP pode pedir os "Níveis Organizacionais": Centro (Plant) e Depósito (Storage Location). Esses dados definem em qual filial/armazém o material será usado. Preencha com os códigos corretos da sua empresa. Atenção: errar o Centro significa que o material será cadastrado para a filial errada — um erro que pode ser difícil de corrigir depois.',
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-002-04',
        instrucao_capture: 'Após preencher todas as visões necessárias na MM01, clique no botão Gravar (disquete) na barra de ferramentas. O SAP vai mostrar uma mensagem de confirmação na barra de status (parte inferior da tela) com o número do material criado. Tire um print desta mensagem de confirmação na barra inferior, destacando o texto de sucesso.',
        legenda: 'Mensagem de confirmação na barra de status após salvar o material com MM01. O SAP confirma que o material foi criado com sucesso e mostra o número gerado. Anote este número — você vai precisar dele para consultar (MM03), alterar (MM02) ou fazer movimentos de estoque com este material.',
      },
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'resumo',
      titulo: 'Resumo: Criando Materiais com MM01',
      conteudo: 'O processo completo de criação de material:',
      lista: [
        'MM01 = Criar Material. Use um material similar no campo "Copy From" para agilizar.',
        'Preencha: Industry Sector (M) + Material Type (ROH/FERT/etc) na tela inicial.',
        'Selecione as visões mínimas: Dados Básicos 1, MRP 1/2, Compras, Contabilidade 1.',
        'Na aba Dados Básicos 1: descrição clara, unidade de medida correta, peso.',
        'Informe o Centro e Depósito corretos quando solicitado.',
        'Salve com o disquete — anote o número gerado para uso futuro.',
      ],
    },
    {
      id: 's11',
      ordem: 11,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Pratique o cadastro de material:',
      lista: [
        '1. Abra MM03 para verificar qual é o último código de material MP* cadastrado na empresa.',
        '2. Abra MM01 e crie um novo material usando o código sequencial encontrado.',
        '3. Use um material existente no campo Copy From para copiar as configurações base.',
        '4. Preencha a descrição, unidade de medida e pelo menos um campo de MRP 1.',
        '5. Salve e anote o número. Depois abra MM03 com este número para confirmar que foi criado.',
        'BONUS: Tente alterar a descrição usando MM02 — qual é a diferença em relação à MM01?',
      ],
    },
  ],
}

export const AULA_N2_003: Aula = {
  id: 'ACAD-N2-003',
  titulo: 'O Fluxo de Compras do Zero: P2P na Prática',
  subtitulo: 'Do pedido à fatura — entenda o processo completo de Procure-to-Pay',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['ME51N', 'ME21N', 'ME23N', 'MIGO', 'MIRO'],
  tempo_estimado_minutos: 30,
  objetivo: 'Compreender o fluxo completo de compras no SAP (P2P): Requisição → Pedido → Entrada de Mercadoria → Fatura, entendendo o papel de cada documento no processo.',
  descricao_curta: 'Entenda o processo Procure-to-Pay (P2P) do SAP: como uma compra começa com a requisição e termina com o pagamento ao fornecedor.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N2-002',
  proxima_aula_id: 'ACAD-N2-004',
  tags: ['P2P', 'processo de compras', 'ME51N', 'ME21N', 'MIGO', 'MIRO', 'fluxo'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O que é Procure-to-Pay (P2P)?',
      conteudo: 'Procure-to-Pay (P2P) é o nome do processo que começa quando uma área da empresa precisa comprar algo e termina quando o fornecedor recebe o pagamento. É um dos processos mais críticos de qualquer empresa e envolve múltiplos departamentos: Produção/Usuário (quem pediu), Compras (quem negocia e emite o pedido), Almoxarifado/Logística (quem recebe a mercadoria) e Financeiro/Contas a Pagar (quem paga a fatura).',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Os 4 Documentos do Fluxo P2P',
      conteudo: 'Cada etapa do P2P gera um documento no SAP. Esses documentos estão encadeados — cada um referencia o anterior:',
      lista: [
        '① Requisição de Compras (ME51N) — Número: 10XXXXXXX. Criada pela área requisitante (produção, manutenção). É o "pedido interno" solicitando a compra.',
        '② Pedido de Compras (ME21N) — Número: 45XXXXXXXX. Criado pelo time de Compras com base na requisição. É o contrato comercial com o fornecedor.',
        '③ Entrada de Mercadoria (MIGO) — Número: 50XXXXXXXXX. Criado pelo Almoxarifado quando a mercadoria chega fisicamente. Credita o estoque.',
        '④ Fatura do Fornecedor (MIRO) — Número: 51XXXXXXXXX. Criado pelo Financeiro quando a nota fiscal chega. Gera a conta a pagar.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-003-01',
        instrucao_capture: 'Abra a transação ME23N (Exibir Pedido de Compras). Abra qualquer pedido de compras que exista na empresa. Tire um print da tela de cabeçalho do pedido, mostrando: número do pedido, fornecedor, data, itens. Adicione setas numeradas indicando ① o número do pedido, ② o fornecedor, ③ um item do pedido.',
        legenda: 'Pedido de Compras visualizado na ME23N. O cabeçalho mostra o fornecedor e condições comerciais. As linhas mostram os itens: material, quantidade, preço, data de entrega. O número do pedido (45XXXXXXX) é o documento central do processo — ele é referenciado na entrada de mercadoria (MIGO) e na fatura (MIRO).',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-003-02',
        instrucao_capture: 'Crie um diagrama manual em papel (pode ser simples) mostrando o fluxo: Requisição (ME51N) → Pedido (ME21N) → Entrada (MIGO) → Fatura (MIRO). Fotografe ou tire screenshot de um slide/apresentação que mostre este fluxo. Alternativamente: em qualquer pedido aberto na ME23N, clique na aba "Histórico de Pedido" e tire um print mostrando os documentos vinculados (MIGO e MIRO).',
        legenda: 'Histórico de um Pedido de Compras mostrando os documentos vinculados. A aba "Histórico" na ME23N mostra o número de todos os documentos gerados com base neste pedido: Entradas de Mercadoria (MIGO), Faturas (MIRO) e estornos. Isso permite rastrear o status completo de uma compra em um único lugar.',
      },
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'pratica',
      titulo: 'Acompanhando um Pedido de Ponta a Ponta',
      conteudo: 'Habilidade essencial de qualquer analista de Compras ou MM: acompanhar o status de um pedido. Abra ME23N, informe o número do pedido. Na aba "Histórico de Pedido" (ou "Purchase Order History") você vê: quantas entradas já foram feitas, se a fatura já foi lançada e se houve estornos. No item, a coluna "Qtd Entregue" vs "Qtd Pedido" mostra se a entrega está completa. Vermelho/amarelo = atenção necessária.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: 'Dica: Bloqueio de Fatura (3-Way Match)',
      conteudo: 'O SAP executa automaticamente uma validação chamada 3-Way Match (confronto de 3 documentos): Pedido x Entrada x Fatura. Se os valores ou quantidades não batem, a fatura fica bloqueada para pagamento. O analista financeiro precisa investigar a diferença. Como analista de MM, você pode precisar explicar por que a entrada foi feita com quantidade diferente do pedido — sempre documente bem suas ações.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Fluxo P2P',
      conteudo: 'O Procure-to-Pay em 4 etapas e 4 documentos:',
      lista: [
        'Requisição (ME51N) — Área interna pede a compra. Número: 10xxxxxxxx.',
        'Pedido (ME21N) — Compras formaliza com o fornecedor. Número: 45xxxxxxxx.',
        'Entrada (MIGO) — Almoxarifado recebe a mercadoria. Número: 50xxxxxxxxx.',
        'Fatura (MIRO) — Financeiro registra o pagamento. Número: 51xxxxxxxxx.',
        'Use ME23N para acompanhar o status completo de qualquer pedido.',
        '3-Way Match: SAP valida Pedido x Entrada x Fatura automaticamente.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Rastreie um pedido completo:',
      lista: [
        '1. Abra ME23N e consulte um pedido de compras em aberto na empresa.',
        '2. Na aba Histórico de Pedido: verifique se existe entrada de mercadoria (MIGO) e/ou fatura (MIRO) vinculadas.',
        '3. Se houver uma entrada (5xxxxxxxxxx), clique no número para abrir o documento de entrada na MIGO.',
        '4. Verifique a quantidade entregue vs quantidade do pedido — está completo ou parcial?',
        'BONUS: Pesquise a transação ME2M — ela permite listar pedidos por material. Use-a para ver todos os pedidos de um material específico.',
      ],
    },
  ],
}

export const AULA_N2_004: Aula = {
  id: 'ACAD-N2-004',
  titulo: 'Entrada de Mercadoria com MIGO',
  subtitulo: 'Registre a chegada física de materiais no estoque usando a transação MIGO',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['MIGO', 'MB03'],
  tempo_estimado_minutos: 30,
  objetivo: 'Executar a transação MIGO para registrar uma entrada de mercadoria com referência a um pedido de compras, verificando os campos obrigatórios e confirmando o documento gerado.',
  descricao_curta: 'Use a MIGO para registrar a chegada de materiais no estoque — o passo mais crítico do processo de compras para o módulo MM.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N2-003',
  proxima_aula_id: 'ACAD-N2-005',
  tags: ['MIGO', 'entrada de mercadoria', 'estoque', 'recebimento', 'movimento 101', 'MM'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O que é a MIGO e por que ela é tão importante?',
      conteudo: 'A MIGO (Goods Movement) é a transação responsável por todos os movimentos físicos de estoque no SAP: entradas, saídas, transferências e estornos. Para um analista de MM ou Almoxarifado, a MIGO é a transação mais usada no dia a dia. Quando a mercadoria chega na empresa e é conferida pelo almoxarife, o próximo passo é registrar essa chegada na MIGO — só depois o estoque é atualizado e a fatura pode ser processada.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Movimento 101: o mais importante para iniciantes',
      conteudo: 'No SAP, cada tipo de movimento de estoque tem um código numérico chamado Tipo de Movimento. Os mais comuns que você vai usar:',
      lista: [
        '101 — Entrada de Mercadoria com Referência a Pedido de Compras. O mais usado no dia a dia.',
        '102 — Estorno de Entrada de Mercadoria (desfaz o 101). Use quando houve erro na entrada.',
        '201 — Saída de Mercadoria para Centro de Custo (consumo interno).',
        '261 — Saída para Ordem de Produção (Módulo PP).',
        '301 — Transferência entre Centros.',
        '541/543 — Subcontratação: envio/retorno de material para fornecedor parceiro.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-004-01',
        instrucao_capture: 'Abra a transação MIGO (/NMIGO). Na tela principal da MIGO, localize os campos do cabeçalho: Action (Ação = "A01 - Entrada de Mercadoria"), Reference (Referência = "R10 - Pedido de Compras"). Tire um print da tela MIGO vazia mostrando estes dois campos. Adicione setas indicando onde cada um está.',
        legenda: 'Tela principal da MIGO. Os dois campos mais importantes do cabeçalho são: ① Action (Ação) = define o que você vai fazer (entrada, saída, transferência, estorno), ② Reference (Referência) = define com base em qual documento você está operando (pedido, ordem, reserva). Para uma entrada comum: Action = A01 (Goods Receipt) + Reference = R10 (Purchase Order).',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Passo a Passo: Registrando uma Entrada',
      conteudo: 'Para registrar uma entrada de mercadoria (Movimento 101): ① Abra MIGO. ② Em Action, selecione "A01 - Goods Receipt" (Entrada de Mercadoria). ③ Em Reference, selecione "R10 - Purchase Order" (Pedido de Compras). ④ Informe o número do Pedido de Compras (45xxxxxxxxx) no campo ao lado. ⑤ Pressione Enter. ⑥ O SAP vai carregar os itens do pedido automaticamente. ⑦ Verifique a quantidade recebida (campo "Qty in UnE" ou "Qtd em UME"). ⑧ Marque "Item OK" para cada linha conferida. ⑨ Clique em "Post" (Gravar/Lançar) para confirmar.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-004-02',
        instrucao_capture: 'Na MIGO, após informar o número de um pedido de compras e pressionar Enter, o SAP vai carregar os itens. Tire um print desta tela mostrando os itens do pedido carregados, com os campos: Material, Descrição, Quantidade, Depósito. Destaque o campo "Item OK" (checkbox no canto esquerdo de cada linha) com uma seta, indicando que deve ser marcado.',
        legenda: 'Itens do Pedido de Compras carregados na MIGO. Para cada linha, verifique: Material correto, Quantidade recebida (ajuste se necessário — entrega parcial é comum), Depósito de destino. Marque "Item OK" apenas depois de conferir fisicamente que a mercadoria está correta. Deixar "Item OK" desmarcado impede o lançamento.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'atencao',
      titulo: 'Atenção: Campos que Você Não Pode Errar',
      conteudo: 'Na MIGO, dois campos críticos que causam problemas quando errados: ① Depósito (Storage Location) — define onde físicamente o material vai ficar. Se errar, o estoque fica em lugar errado no sistema e a equipe de inventário não encontra. ② Delivery Note (Nota de Entrega/Número da NF) — muitas empresas exigem informar o número da nota fiscal do fornecedor neste campo para rastreabilidade. Confirme com seu gestor se é obrigatório na sua empresa.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-004-03',
        instrucao_capture: 'Após clicar em "Post" (Gravar) na MIGO, o SAP mostra uma mensagem de confirmação na barra inferior com o número do documento de material gerado (número 50xxxxxxxxxx). Tire um print desta mensagem de confirmação. Destaque o número do documento na mensagem.',
        legenda: 'Confirmação de lançamento da MIGO: "Material Document 5XXXXXXXXXX posted". Este é o documento de material que prova que a entrada foi registrada. Anote sempre este número — você vai precisar dele para consultar (MB03), estornar (MIGO com movimento 102) ou anexar à documentação do processo.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-004-04',
        instrucao_capture: 'Após lançar a entrada na MIGO, abra a transação MMBE (/NMMBE) e consulte o estoque do material que você acabou de dar entrada. Tire um print mostrando o estoque atualizado, destacando a quantidade em Livre Utilização aumentada após a entrada.',
        legenda: 'Estoque do material na MMBE após o lançamento da entrada na MIGO. Note que a quantidade em "Livre Utilização" aumentou exatamente o que foi lançado na MIGO. Esta confirmação é boa prática após qualquer entrada — garante que o movimento foi registrado corretamente no depósito certo.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: 'Resumo: Entrada de Mercadoria na MIGO',
      conteudo: 'O processo de entrada de mercadoria:',
      lista: [
        'Abra MIGO → Action: A01 Goods Receipt → Reference: R10 Purchase Order.',
        'Informe o número do Pedido de Compras → pressione Enter.',
        'Confira os itens: material, quantidade, depósito. Ajuste se necessário (entrega parcial).',
        'Marque "Item OK" para cada item conferido.',
        'Clique em Post (Lançar/Gravar) → anote o número do documento gerado.',
        'Confirme no MMBE que o estoque foi atualizado no depósito correto.',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Pratique a entrada de mercadoria:',
      lista: [
        '1. Abra ME23N e encontre um pedido de compras que ainda tenha entrega pendente (Qtd Entregue < Qtd Pedida).',
        '2. Anote o número do pedido, material e quantidade pendente.',
        '3. Abra MIGO com Action A01 + Reference R10, informe o número do pedido e carregue os itens.',
        '4. Confira os dados e marque "Item OK". Se for ambiente de treinamento, lance com Post.',
        '5. Após lançar, confirme no MMBE que o estoque do material aumentou.',
        'BONUS: Abra MB03 com o número do documento gerado e explore as abas disponíveis.',
      ],
    },
  ],
}

export const AULA_N2_005: Aula = {
  id: 'ACAD-N2-005',
  titulo: 'Visualizando Documentos de Material (MB03)',
  subtitulo: 'Consulte qualquer movimentação de estoque e entenda o que cada campo significa',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['MB03', 'MB51'],
  tempo_estimado_minutos: 20,
  objetivo: 'Usar a transação MB03 para consultar documentos de material (entradas, saídas, transferências) e entender os campos principais do documento de movimento de estoque.',
  descricao_curta: 'Use a MB03 para consultar qualquer movimentação de estoque — entenda o que cada campo do documento de material significa.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N2-004',
  proxima_aula_id: 'ACAD-N2-006',
  tags: ['MB03', 'documento de material', 'movimentação', 'estoque', 'consulta'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O que é um Documento de Material?',
      conteudo: 'Toda movimentação de estoque no SAP gera um Documento de Material — é o registro auditável de que algo aconteceu com o estoque. Entrada de mercadoria, saída, transferência, estorno — tudo vira um documento com número único, data, hora, usuário que fez e dados do material. Esses documentos são fundamentais para auditoria, inventário e resolução de problemas.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Consultando com a MB03',
      conteudo: 'Para consultar um documento de material: abra a transação MB03, informe o número do Documento de Material (gerado na MIGO, começa com 50...), o Ano do Documento e clique em Executar (ou pressione Enter). O SAP vai exibir o documento completo com todas as informações do movimento.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-005-01',
        instrucao_capture: 'Abra a transação MB03. Preencha o campo "Material Document" com um número de documento que você lançou anteriormente na MIGO (número 50xxxxxxxxx) e o Ano correspondente. Clique em Executar. Tire um print do documento de material aberto, mostrando os campos do cabeçalho: número do documento, data de lançamento, tipo de movimento (101), usuário.',
        legenda: 'Documento de Material na MB03. O cabeçalho mostra: ① Número do Documento de Material (50xxxxxxxxx), ② Data do Lançamento (quando foi feito), ③ Tipo de Movimento (101 = entrada de mercadoria), ④ Usuário que fez o lançamento. Este documento é a prova do movimento de estoque e não pode ser alterado — apenas estornado.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'dica',
      titulo: 'Campos em Inglês que Você Vai Encontrar',
      conteudo: 'Muitos documentos SAP têm campos em inglês (o SAP foi originalmente desenvolvido na Alemanha e adaptado em inglês). Os mais comuns no MB03: Posting Date = Data de Lançamento, Material = Material (código), Plant = Centro (filial), Storage Location = Depósito, Quantity = Quantidade, Base Unit = Unidade de Medida, Movement Type = Tipo de Movimento, Fiscal Year = Ano Fiscal, Document Number = Número do Documento.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-005-02',
        instrucao_capture: 'No documento aberto na MB03, clique em uma das linhas de item para expandir os detalhes. Tire um print mostrando os detalhes da linha: material, quantidade, depósito, tipo de movimento e, se visível, o número do Pedido de Compras referenciado. Adicione setas indicando cada campo importante.',
        legenda: 'Detalhes da linha do Documento de Material na MB03. Você pode ver o material movimentado, a quantidade, o depósito de destino/origem e o documento de referência (número do Pedido de Compras ou Ordem). Esses detalhes permitem rastrear exatamente por que o movimento aconteceu e com qual autorização.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'teoria',
      titulo: 'Documentos Contábeis Vinculados',
      conteudo: 'Todo movimento de estoque valorizado (com impacto financeiro) gera também um Documento Contábil além do Documento de Material. Dentro do MB03, na aba "Accounting Documents" ou "Documentos Contábeis", você verá o número do documento contábil (FI) que foi gerado junto. Este documento atualiza as contas contábeis de estoque no módulo FI. Em auditorias, os times de FI frequentemente pedem o número do Documento Contábil vinculado à entrada.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: MB03 e Documentos de Material',
      conteudo: 'Para consultar movimentos de estoque:',
      lista: [
        'MB03 = Visualizar Documento de Material. Use o número gerado pela MIGO.',
        'Campos principais: Data de Lançamento, Tipo de Movimento, Material, Depósito, Quantidade.',
        'Aba "Accounting Documents" mostra o documento FI vinculado ao movimento.',
        'Documentos de material NÃO podem ser alterados, apenas estornados.',
        'Anote sempre o número do documento após uma MIGO — você vai precisar para rastreamento.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Explore documentos de material:',
      lista: [
        '1. Abra MB03 com o número de um documento gerado anteriormente na MIGO.',
        '2. Anote: data, tipo de movimento, material, quantidade e depósito.',
        '3. Clique na aba Accounting Documents — qual é o número do documento contábil vinculado?',
        '4. Use o botão de navegação para ir ao documento contábil — que contas foram debitadas/creditadas?',
        'BONUS: Abra a transação MB51. Informe um material e um período (ex: mês atual) e execute — você verá todos os movimentos deste material no período.',
      ],
    },
  ],
}

export const AULA_N2_006: Aula = {
  id: 'ACAD-N2-006',
  titulo: 'Relatório de Movimentação de Estoque (MB51)',
  subtitulo: 'Consulte o histórico completo de movimentos de qualquer material com filtros avançados',
  nivel: 'junior',
  modulo: 'MM',
  transacoes: ['MB51'],
  tempo_estimado_minutos: 20,
  objetivo: 'Usar a transação MB51 para gerar relatórios de movimentação de estoque, filtrando por material, centro, tipo de movimento e período.',
  descricao_curta: 'Use a MB51 para ver o histórico completo de movimentos de qualquer material — entradas, saídas, transferências — em qualquer período.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N2-005',
  proxima_aula_id: 'ACAD-N3-001',
  tags: ['MB51', 'relatório', 'movimentação', 'estoque', 'histórico', 'MM'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'Por que a MB51 é uma das transações mais úteis?',
      conteudo: 'Toda vez que algo entra, sai ou se move no estoque, o SAP registra um documento de material. A MB51 é o relatório que permite consultar TODOS esses movimentos de uma vez, com filtros poderosos. É a transação que você vai usar quando alguém pergunta: "Quanto entrou deste material no último mês?", "Quais movimentos foram feitos no depósito 0001 hoje?", ou "Por que o estoque diminuiu inesperadamente?"',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Como Usar a MB51',
      conteudo: 'Abra a transação MB51 (/NMB51). A tela de seleção tem vários filtros. Os mais importantes: Material (código único ou faixa: 100000 a 999999), Centro/Plant (filtre por filial), Depósito (opcional, filtre por armazém específico), Tipo de Movimento (filtre por tipo: 101 = entradas, 201 = saídas, deixe em branco para ver tudo), Data de Lançamento (período: ex: 01.01.2024 a 31.01.2024). Após preencher os filtros, clique no botão Executar (relógio) ou pressione F8.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-006-01',
        instrucao_capture: 'Abra a transação MB51. Na tela de seleção, preencha: Material = código de um material da empresa, Data de Lançamento = primeiro dia do mês atual até hoje. Tire um print desta tela de seleção preenchida antes de executar. Destaque com setas os campos: Material, Tipo de Movimento e Data de Lançamento.',
        legenda: 'Tela de seleção da MB51 com filtros preenchidos. Você pode deixar o campo Material em branco para ver todos os materiais de um centro/período, mas isso pode gerar resultados muito grandes. Para análises específicas, sempre filtre pelo material ou tipo de movimento de interesse.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'print',
      placeholder: {
        id: 'print-n2-006-02',
        instrucao_capture: 'Após executar a MB51, vai aparecer uma lista de movimentos em formato ALV. Tire um print desta lista de resultados mostrando pelo menos 5-10 linhas, com as colunas: Documento de Material, Data, Tipo de Movimento (Mv), Material, Descrição, Quantidade, Depósito. Destaque a coluna "Mv" (Tipo de Movimento) para mostrar como os diferentes tipos aparecem.',
        legenda: 'Resultado da MB51 em formato ALV. Cada linha representa um movimento de estoque. As colunas mais importantes: Nro.doc.material (clique para abrir na MB03), Data de lançamento, Tp.mv (Tipo de Movimento: 101=entrada, 201=saída, etc.), Material, Quantidade e Depósito. Você pode ordenar, filtrar e exportar para Excel diretamente desta tela.',
      },
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: 'Dica: Navegando pelo Resultado da MB51',
      conteudo: 'No resultado da MB51, você pode: ① Clicar no número do documento de material para abrir os detalhes na MB03. ② Usar o filtro ALV (ícone de funil) para refinar ainda mais os resultados. ③ Exportar para Excel clicando em Lista → Exportar → Planilha. ④ Totalizar quantidades por material ou tipo de movimento (selecione a coluna e clique em Totalizar). Estas habilidades de manipulação de resultados ALV são aplicáveis em TODOS os relatórios SAP.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'resumo',
      titulo: 'Resumo: Relatório de Movimentação MB51',
      conteudo: 'Use a MB51 para consultar o histórico de movimentos:',
      lista: [
        'MB51 = Relatório de Documentos de Material. Filtra por material, centro, tipo, período.',
        'Tipo de Movimento 101 = entradas. 201 = saídas internas. 261 = saídas para produção.',
        'Clique em qualquer número de documento no resultado para abrir na MB03.',
        'Exporte para Excel via Lista → Exportar → Planilha.',
        'Deixe "Tipo de Movimento" em branco para ver todos os movimentos do período.',
      ],
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Use a MB51 para análises reais:',
      lista: [
        '1. Execute a MB51 para um material específico nos últimos 30 dias. Quantos movimentos houve?',
        '2. Filtre somente o tipo de movimento 101 (entradas). Qual foi a quantidade total de entradas?',
        '3. Agora filtre o tipo 201 (saídas). Compare com as entradas — o estoque deve ter aumentado ou diminuído?',
        '4. Clique em um documento do resultado e confirme que abre os detalhes na MB03.',
        'BONUS: Execute a MB51 sem filtro de material, apenas com o Centro e o dia de hoje — veja todos os movimentos do dia na empresa.',
      ],
    },
  ],
}


// ===========================================================
// NIVEL 3 - PLENO (Relatorios, ALV e Produtividade)
// ===========================================================

export const AULA_N3_001: Aula = {
  id: 'ACAD-N3-001',
  titulo: 'Dominando o Layout ALV: Personalize Seus Relatórios',
  subtitulo: 'Customize, salve e compartilhe layouts de relatórios SAP como um profissional',
  nivel: 'pleno',
  modulo: 'GERAL',
  transacoes: ['FBL1N', 'MB51'],
  tempo_estimado_minutos: 30,
  objetivo: 'Personalizar layouts ALV (adicionar/remover colunas, ordenar, filtrar, totalizar) e salvar layouts customizados para reuso próprio ou compartilhado com a equipe.',
  descricao_curta: 'Aprenda a criar, salvar e usar layouts personalizados em qualquer relatório ALV do SAP — habilidade que separa analistas comuns de especialistas.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N2-006',
  proxima_aula_id: 'ACAD-N3-002',
  tags: ['ALV', 'layout', 'relatório', 'personalização', 'filtro', 'exportar', 'pleno'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O que é o Layout ALV?',
      conteudo: 'ALV (ABAP List Viewer) é o framework de relatórios do SAP — praticamente todos os relatórios tabulares do sistema usam ALV. Aprender a manipular layouts ALV é uma habilidade multiplicadora: tudo que você aprender aqui funciona em MB51, FBL1N, ME2M, ME80FN e qualquer outro relatório SAP. É uma das habilidades mais valorizadas em analistas de nível Pleno.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Acessando o Layout: Modificar Colunas',
      conteudo: 'Para personalizar o layout de um relatório ALV: execute o relatório normalmente (ex: MB51). Com o resultado na tela, clique no ícone "Modificar Layout" (ou ícone de colunas) na barra de ferramentas ALV. Uma janela vai abrir com duas colunas: "Colunas Ocultas" (à esquerda) e "Colunas Exibidas" (à direita). Para adicionar uma coluna: selecione na lista da esquerda e clique na seta para a direita. Para remover: selecione na lista da direita e clique na seta para a esquerda. Clique em Aceitar para aplicar.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-001-01',
        instrucao_capture: 'Execute a transação FBL1N (ou MB51) e gere um resultado ALV. Na barra de ferramentas do resultado, clique no ícone "Modificar Layout" (ícone com colunas). Tire um print da janela de personalização de layout que abriu, mostrando as duas listas: colunas ocultas (esquerda) e colunas visíveis (direita), com as setas no centro.',
        legenda: 'Janela de personalização de layout ALV. Do lado esquerdo estão as colunas disponíveis mas não exibidas. Do lado direito, as colunas atualmente visíveis no relatório. Use as setas no centro para mover colunas entre os lados. Após configurar, clique em Aceitar para aplicar. Use Gravar para salvar esta configuração como um layout nomeado.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Salvando seu Layout Personalizado',
      conteudo: 'Após customizar as colunas, salve o layout para não precisar reconfigurar toda vez: clique no ícone "Gravar Layout" (ou Gravar Como...) na barra de ferramentas ALV. Dê um nome ao layout (ex: /MINHA_VISAO ou /COMPRAS_PADRAO). Se marcar "Layout Padrão", este layout será carregado automaticamente toda vez que você executar o relatório. Se marcar "Para Todos os Usuários", seus colegas também poderão usar.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-001-02',
        instrucao_capture: 'Após modificar o layout, clique no ícone "Gravar Como..." na barra ALV. Vai abrir uma janela pedindo Nome do Layout e opções (Layout Padrão, Para Todos os Usuários). Tire um print desta janela de Gravar Layout com os campos visíveis. Destaque o campo Nome e as opções de compartilhamento.',
        legenda: 'Janela de salvamento de Layout ALV. O nome deve começar com "/" para layouts específicos do usuário, ou sem "/" para layouts globais (requer autorização especial). "Layout Padrão" faz este layout ser carregado automaticamente. "Para todos os usuários" compartilha com toda a equipe — use com cuidado para não sobrescrever layouts de outros.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'pratica',
      titulo: 'Outras Funções Essenciais do ALV',
      conteudo: 'Além de personalizar colunas, o ALV oferece recursos poderosos que todo analista Pleno deve dominar: ① Ordenação: clique no cabeçalho de uma coluna para ordenar por ela (crescente/decrescente). ② Filtro: selecione uma coluna e clique em "Definir Filtro" — filtre por valor específico. ③ Totalização: selecione uma coluna de valores numéricos e clique em "Totalizar Valores" — SAP soma automaticamente. ④ Drill-down: clique duplo em qualquer valor numérico para ver o detalhe do documento.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-001-03',
        instrucao_capture: 'No resultado ALV de qualquer relatório (MB51, FBL1N etc.), selecione uma coluna de valores numéricos (ex: Quantidade) e clique no botão "Totalizar Valores" na barra ALV. O SAP vai mostrar a soma na linha de rodapé. Tire um print mostrando a tabela com o total calculado na parte inferior, destacando o valor total com uma seta.',
        legenda: 'Totalização de coluna no ALV. O SAP calcula automaticamente a soma de todos os valores da coluna selecionada e exibe no rodapé da lista. Você pode totalizar múltiplas colunas ao mesmo tempo. Esta função é muito usada para conferir totais rápidos sem exportar para Excel.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: 'Resumo: Dominando o Layout ALV',
      conteudo: 'Habilidades ALV que todo analista Pleno deve ter:',
      lista: [
        'Modificar Layout — Adicione/remova colunas. Ícone de colunas na barra ALV.',
        'Gravar Layout — Salve sua configuração com um nome. Defina como padrão.',
        'Ordenar — Clique no cabeçalho da coluna para ordenar crescente/decrescente.',
        'Filtrar — Selecione coluna → Definir Filtro → filtre por valor.',
        'Totalizar — Selecione coluna numérica → Totalizar Valores → veja a soma.',
        'Drill-down — Duplo clique em qualquer valor para abrir o documento de detalhe.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Domine o ALV na prática:',
      lista: [
        '1. Execute a MB51 para o último mês. Modifique o layout para adicionar a coluna "Referência" (número do pedido).',
        '2. Salve o layout com o nome /MB51_COMPRAS e marque como Layout Padrão.',
        '3. Feche e reabra a MB51. Confirme que seu layout carregou automaticamente.',
        '4. Selecione a coluna Quantidade e use Totalizar Valores. Qual é o total movimentado no período?',
        '5. Adicione um Filtro na coluna Tipo de Movimento para exibir apenas entradas (101). O total muda?',
        'BONUS: Exporte o resultado para Excel (Lista → Exportar → Planilha) e compare com os totais no SAP.',
      ],
    },
  ],
}

export const AULA_N3_002: Aula = {
  id: 'ACAD-N3-002',
  titulo: 'Variantes de Seleção: Salve seus Filtros Favoritos',
  subtitulo: 'Crie e reutilize configurações de filtro em qualquer relatório SAP',
  nivel: 'pleno',
  modulo: 'GERAL',
  transacoes: ['FBL1N', 'MB51'],
  tempo_estimado_minutos: 20,
  objetivo: 'Criar, salvar e reutilizar Variantes de Seleção em relatórios SAP, eliminando o trabalho repetitivo de preencher os mesmos filtros toda vez.',
  descricao_curta: 'Aprenda a criar Variantes de Seleção para salvar filtros usados com frequência e executar relatórios com um clique.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N3-001',
  proxima_aula_id: 'ACAD-N3-003',
  tags: ['variantes', 'seleção', 'filtros', 'produtividade', 'FBL1N', 'relatórios'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O que são Variantes de Seleção?',
      conteudo: 'Nas telas de seleção de relatórios SAP (aquelas telas com vários filtros antes de executar), você frequentemente preenche os mesmos campos toda vez: mesmo centro, mesmo período, mesmos tipos de movimento. As Variantes de Seleção permitem salvar esses filtros com um nome e reutilizá-los com um clique — como templates de pesquisa. Analistas Pleno e Sênior usam variantes para relatórios diários, semanais e mensais recorrentes.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Criando uma Variante',
      conteudo: 'Para criar uma variante: abra um relatório (ex: MB51 ou FBL1N). Preencha os filtros da tela de seleção como deseja. Na barra de ferramentas ou menu (Ir para → Variantes → Gravar como Variante), clique em Gravar Variante. Insira um nome (ex: ENTRADAS_MES_ATUAL), um significado (descrição) e, se quiser, marque "Proteger Variantes" para que outros usuários não possam editar. Clique em Gravar.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-002-01',
        instrucao_capture: 'Abra a transação FBL1N (ou MB51). Preencha os filtros (ex: Vendor Account com um intervalo, Data de Lançamento do mês atual). Clique em Gravar Variante (via menu ou ícone). Na janela de salvamento, preencha o Nome da Variante e o Significado. Tire um print desta janela de Gravar Variante com os campos preenchidos.',
        legenda: 'Janela de criação de Variante de Seleção. O Nome da Variante é o código que você vai usar para chamá-la. O Significado é a descrição legível. "Proteger Variantes" impede que outros usuários sobrescrevam. "Somente para execução em background" útil para variantes de Jobs automáticos.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Chamando uma Variante Salva',
      conteudo: 'Para usar uma variante já criada: abra o relatório. Na tela de seleção (ainda vazia), clique em "Chamar Variante..." ou pressione F8 no campo de variante (geralmente no rodapé da tela de seleção). Vai aparecer uma lista com todas as variantes disponíveis. Clique duas vezes na variante desejada. Os filtros serão preenchidos automaticamente. Agora é só clicar em Executar.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-002-02',
        instrucao_capture: 'No relatório FBL1N ou MB51 (tela de seleção vazia), clique em "Chamar Variante..." ou pressione F4 no campo de Variante. Vai aparecer a lista de variantes. Tire um print desta lista mostrando pelo menos 2-3 variantes disponíveis. Destaque a variante que você criou anteriormente na lista.',
        legenda: 'Lista de variantes disponíveis para o relatório. Clique duas vezes em qualquer variante para carregar seus filtros automaticamente. As variantes podem ser criadas para uso pessoal ("/") ou compartilhadas com toda a equipe. Variantes com "@" no início geralmente são variantes técnicas criadas pelo time de TI ou consultores.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: 'Variante de Execução Automática (Jobs)',
      conteudo: 'Variantes são a base para Jobs automáticos no SAP (transação SM37). Um Job é uma execução programada de um relatório em horário específico — por exemplo, gerar o relatório de movimentação toda noite às 23h e enviar por email. Para criar um Job, você precisa de uma variante com os filtros configurados. Isso é feito pelo time de Basis, mas o analista precisa criar e fornecer a variante correta. Tópico de nível Sênior/Consultor.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Variantes de Seleção',
      conteudo: 'Economize tempo com variantes:',
      lista: [
        'Variante = template de filtros. Salve uma vez, reutilize infinitas vezes.',
        'Criar: Preencha os filtros → Gravar Variante → Nome + Significado → Gravar.',
        'Usar: Abra o relatório → Chamar Variante → Clique duas vezes na variante.',
        'Variantes são base para Jobs automáticos de relatórios periódicos.',
        'Funciona em praticamente todos os relatórios com tela de seleção no SAP.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Automatize suas pesquisas com variantes:',
      lista: [
        '1. Abra MB51. Preencha com: Material = todos, Centro = seu centro, Tipo Mv = 101, Data = mês atual.',
        '2. Salve como Variante com o nome "ENTRADAS_MES" e significado "Entradas do mês corrente".',
        '3. Feche a tela de seleção. Abra novamente a MB51 e chame a variante que criou.',
        '4. Execute o relatório — os filtros devem estar preenchidos automaticamente.',
        'BONUS: Crie uma segunda variante "SAIDAS_MES" com Tipo de Movimento = 201. Agora você tem dois templates de relatório prontos para uso diário.',
      ],
    },
  ],
}

export const AULA_N3_003: Aula = {
  id: 'ACAD-N3-003',
  titulo: 'Exportando Dados SAP para Excel',
  subtitulo: 'Leve qualquer relatório SAP para uma planilha em segundos',
  nivel: 'pleno',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Exportar resultados de relatórios ALV do SAP para planilhas Excel usando os métodos mais eficientes: exportação nativa e SAP Script.',
  descricao_curta: 'Exporte qualquer tabela do SAP para Excel — habilidade indispensável para analistas que trabalham com análise de dados e conciliações.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N3-002',
  tags: ['Excel', 'exportar', 'ALV', 'planilha', 'dados', 'produtividade'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'Por que Exportar para Excel?',
      conteudo: 'Apesar do SAP ter recursos excelentes de filtragem e análise, muitas situações exigem trabalhar com os dados em Excel: cruzar com dados de outros sistemas, criar gráficos, fazer análises personalizadas, compartilhar com gestores que não têm acesso SAP ou preparar relatórios formatados para apresentação. A exportação é um dos pedidos mais frequentes que analistas SAP recebem.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Método 1: Exportação Nativa do ALV',
      conteudo: 'Este é o método mais simples e funciona em qualquer relatório ALV. Com o resultado do relatório na tela: ① Clique no menu "Lista" (ou "List") na barra de menus superior. ② Clique em "Exportar" → "Planilha" (ou "Spreadsheet"). ③ Uma janela vai perguntar o formato. Selecione "Formato de Planilha XXL" ou simplesmente "Excel" e clique em OK. ④ O Excel vai abrir automaticamente com os dados. ⑤ Salve o arquivo no seu computador.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-003-01',
        instrucao_capture: 'Execute qualquer relatório ALV (ex: MB51) e clique no menu "Lista" na barra superior. Vai aparecer um submenu. Tire um print mostrando o menu "Lista" expandido com a opção "Exportar" → "Planilha" visível. Destaque o caminho: Lista → Exportar → Planilha com setas.',
        legenda: 'Caminho para exportação nativa no menu Lista do ALV. Este método funciona em qualquer relatório SAP que use o framework ALV. O formato "Planilha XXL" gera um arquivo .xls compatível com o Excel moderno. Você também pode usar "Arquivo local" para salvar como texto delimitado por tabs.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Método 2: Ctrl+Shift+F7 (Atalho Direto)',
      conteudo: 'Existe também um atalho de teclado mais rápido para exportar: com o resultado ALV na tela, pressione Ctrl+Shift+F7 (em alguns sistemas é Ctrl+F8). Isso abre diretamente a janela de exportação sem precisar navegar pelo menu. Muito útil quando você exporta dados com frequência e quer acelerar o processo.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: 'Método 3: SAP Script para Uploads e Downloads Complexos',
      conteudo: 'Para exportações maiores ou automatizadas, o SAP Script (que você habilitou na Aula 9) permite gravar e reproduzir ações no SAP. Analistas avançados usam o SAP Script para criar macros que: executam um relatório com filtros específicos e exportam para Excel automaticamente. Para habilitar: Customize Local Layout → Options → Accessibility & Scripting → Enable Scripting. Após habilitar, use a ferramenta de gravação (Script Recording/Playback) para capturar os passos.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n3-003-02',
        instrucao_capture: 'Execute MB51 ou outro relatório, exporte para Excel pelo menu Lista → Exportar → Planilha. Quando o Excel abrir com os dados, tire um print da planilha Excel com os dados do SAP já importados, mostrando as colunas e pelo menos 5-10 linhas de dados. Destaque que os dados estão formatados com colunas separadas.',
        legenda: 'Dados do SAP exportados para Excel. Note que cada coluna do relatório ALV vira uma coluna na planilha. Os cabeçalhos de coluna são preservados. A partir daqui você pode usar todas as funções do Excel: filtros, PROCV, tabelas dinâmicas, gráficos. Esta é a base para a maioria das análises que gestores e auditores solicitam.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Exportando para Excel',
      conteudo: 'Três formas de exportar dados SAP:',
      lista: [
        'Método 1: Menu Lista → Exportar → Planilha. Funciona em qualquer ALV.',
        'Método 2: Atalho Ctrl+Shift+F7 para exportação rápida.',
        'Método 3: SAP Script para exportações automatizadas recorrentes.',
        'Dica: Antes de exportar, use os filtros e layouts ALV para trazer apenas os dados que precisa — não exporte tudo e filtre no Excel.',
        'Dados exportados mantêm a formatação de colunas — facilitam análises.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Exporte e analise dados:',
      lista: [
        '1. Execute a MB51 para o último mês e exporte para Excel usando Lista → Exportar → Planilha.',
        '2. No Excel, crie uma tabela dinâmica (Inserir → Tabela Dinâmica) com: Linhas = Tipo de Movimento, Valores = Soma da Quantidade.',
        '3. Quais tipos de movimento geraram mais volume no período?',
        '4. Adicione um filtro no Excel para mostrar apenas entradas (Tipo 101). Compare o total com o que o SAP mostrava.',
        'BONUS: Exporte o resultado da FBL1N (Relatório de Contas a Pagar) e crie um gráfico mostrando os pagamentos por fornecedor.',
      ],
    },
  ],
}


// TRILHAS DE CARREIRA DA ACADEMIA


export const TRILHA_INICIANTE: TrilhaAcademia = {
  id: 'trilha-iniciante',
  nivel: 'estagiario',
  titulo: 'Nível 1 — Iniciante',
  subtitulo: 'Estagiário SAP',
  descricao: 'Do zero absoluto ao primeiro dia produtivo. Você vai aprender a se mover pelo SAP GUI 770, executar transações de consulta e nunca mais travar na tela inicial.',
  cor_primaria: 'from-emerald-500 to-teal-600',
  cor_badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  emoji: '🌱',
  total_horas_estimadas: 8,
  aulas: [
    AULA_N1_001,
    AULA_N1_002,
    AULA_N1_003,
    AULA_N1_004,
    AULA_N1_005,
    AULA_N1_006,
    AULA_N1_007,
    AULA_N1_008,
    AULA_N1_009,
    AULA_N1_010,
  ],
}

export const TRILHA_JUNIOR: TrilhaAcademia = {
  id: 'trilha-junior',
  nivel: 'junior',
  titulo: 'Nível 2 — Júnior',
  subtitulo: 'Analista Júnior SAP',
  descricao: 'Transações operacionais do dia a dia: entradas de mercadoria, faturas, ordens de venda. Você começa a executar tarefas reais com supervisão.',
  cor_primaria: 'from-blue-500 to-indigo-600',
  cor_badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  emoji: '📈',
  total_horas_estimadas: 12,
  prerequisito: 'Nível 1 — Iniciante',
  aulas: [
    AULA_N2_001,
    AULA_N2_002,
    AULA_N2_003,
    AULA_N2_004,
    AULA_N2_005,
    AULA_N2_006,
  ],
}

export const TRILHA_PLENO: TrilhaAcademia = {
  id: 'trilha-pleno',
  nivel: 'pleno',
  titulo: 'Nível 3 — Pleno',
  subtitulo: 'Analista Pleno SAP',
  descricao: 'Integração entre módulos, relatórios analíticos e fluxos end-to-end. Você executa processos completos P2P, O2C e R2R com autonomia.',
  cor_primaria: 'from-violet-500 to-purple-600',
  cor_badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  emoji: '⚡',
  total_horas_estimadas: 15,
  prerequisito: 'Nível 2 — Júnior',
  aulas: [
    AULA_N3_001,
    AULA_N3_002,
    AULA_N3_003,
  ],
}

export const TRILHA_SENIOR: TrilhaAcademia = {
  id: 'trilha-senior',
  nivel: 'senior',
  titulo: 'Nível 4 — Sênior',
  subtitulo: 'Analista Sênior SAP',
  descricao: 'Troubleshooting avançado, estornos, bloqueios e situações excepcionais. Você resolve problemas críticos e lidera outros analistas.',
  cor_primaria: 'from-orange-500 to-red-600',
  cor_badge: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  emoji: '🔥',
  total_horas_estimadas: 20,
  prerequisito: 'Nível 3 — Pleno',
  aulas: [],
}

export const TRILHA_CONSULTOR: TrilhaAcademia = {
  id: 'trilha-consultor',
  nivel: 'consultor',
  titulo: 'Nível 5 — Consultor',
  subtitulo: 'Consultor SAP',
  descricao: 'Configuração do sistema, customizing, criação de dados mestre e visão de implementação. Você atua como especialista em projetos SAP.',
  cor_primaria: 'from-yellow-500 to-amber-600',
  cor_badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  emoji: '👑',
  total_horas_estimadas: 30,
  prerequisito: 'Nível 4 — Sênior',
  aulas: [],
}

export const TODAS_TRILHAS: TrilhaAcademia[] = [
  TRILHA_INICIANTE,
  TRILHA_JUNIOR,
  TRILHA_PLENO,
  TRILHA_SENIOR,
  TRILHA_CONSULTOR,
]

export const TODAS_AULAS: Aula[] = TODAS_TRILHAS.flatMap(t => t.aulas)

export function getAulaPorId(id: string): Aula | undefined {
  return TODAS_AULAS.find(a => a.id === id)
}

export function getTrilhaPorNivel(nivel: string): TrilhaAcademia | undefined {
  return TODAS_TRILHAS.find(t => t.nivel === nivel)
}
