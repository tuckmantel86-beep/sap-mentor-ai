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
  titulo: 'Sua Primeira Vez no SAP GUI 770',
  subtitulo: 'Navegando na tela inicial e entendendo a interface clássica',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Entender a estrutura visual do SAP GUI 770, identificar os elementos principais da tela inicial e navegar entre menus com segurança.',
  descricao_curta: 'Conheça a interface do SAP GUI 770: tela inicial, barra de menus e campo de comando.',
  prints_necessarios: 3,
  proxima_aula_id: 'ACAD-N1-002',
  tags: ['navegação', 'interface', 'tela inicial', 'SAP Easy Access', 'básico'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O que você vai aprender nesta aula',
      conteudo: 'Ao abrir o SAP pela primeira vez, muita gente se sente perdida — são menus, botões e códigos por todo lado. Mas calma! Essa aula vai te mostrar que a lógica do SAP é bem estruturada. Você vai aprender onde estão os controles mais importantes, como se localizar na tela e nunca mais travar logo no início.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 A tela que você vai ver ao fazer login',
      conteudo: 'Após inserir seu usuário e senha no SAP Logon, você cai na tela chamada SAP Easy Access. Ela é o "painel de controle" de tudo. É daqui que você acessa todas as transações do sistema.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-01',
        instrucao_capture: '',
        imagem_url: '/academia/aula1/print-01-tela-inicial.png',
        legenda: 'A tela inicial do SAP GUI 770 — chamada de SAP Easy Access. Repare nos 4 elementos marcados: ① Campo de Comando (onde você digita T-Codes), ② Barra de Ferramentas (atalhos rápidos), ③ Barra de Menu superior, ④ Árvore de navegação com Favoritos e Menu SAP.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '🗺️ Os 4 elementos que você precisa conhecer',
      conteudo: 'Observe a tela com atenção. Existem 4 áreas que você vai usar todos os dias:',
      lista: [
        '① Campo de Comando — a caixinha no canto superior esquerdo. É aqui que você digita os códigos das transações (chamados T-Codes) para ir direto onde quer, sem precisar navegar por menus.',
        '② Barra de Ferramentas — os botões com ícones abaixo da barra de menus. Os mais usados: ✔ (Enter/confirmar), a seta verde para voltar, e o "X" para fechar a tela sem salvar.',
        '③ Barra de Menu — onde ficam as opções Sistema, Ajuda, etc. Você raramente vai precisar dela no dia a dia, mas é útil para configurações.',
        '④ Árvore de Navegação — o painel à esquerda. Tem duas pastas principais: Favoritos (suas transações salvas) e Menu SAP (todos os módulos do sistema).',
      ],
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: '💡 Dica de ouro: o Campo de Comando é sua via rápida',
      conteudo: 'Profissionais SAP experientes raramente navegam pelos menus — eles digitam direto o T-Code no Campo de Comando e dão Enter. É como digitar um endereço no Google Maps em vez de ficar girando pelo mapa. Quanto antes você criar esse hábito, mais rápido vai trabalhar.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-02',
        instrucao_capture: '',
        imagem_url: '/academia/aula1/print-02-campo-comando.png',
        legenda: 'O Campo de Comando com o cursor ativo. É aqui que toda a magia acontece: você digita o T-Code desejado e pressiona Enter para ir direto à tela certa, sem passar por menus.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'teoria',
      titulo: '🧭 A Barra de Status: seu GPS dentro do SAP',
      conteudo: 'Na parte de baixo da tela fica a Barra de Status. Ela parece discreta, mas é muito útil: mostra em qual tela (transação) você está no momento, mensagens de erro ou confirmação do sistema (em vermelho ou verde), e o nome do servidor e cliente SAP conectado. Sempre que algo der errado, olhe primeiro para a Barra de Status — a mensagem de erro aparece ali.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-001-03',
        instrucao_capture: '',
        imagem_url: '/academia/aula1/print-03-barra-status.png',
        legenda: 'A Barra de Status do SAP GUI 770. À esquerda aparece o nome da transação atual (SESSION_MANAGER). No centro, as mensagens do sistema (em verde = sucesso, em vermelho = erro). À direita, informações do servidor e cliente.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 1',
      conteudo: 'Você aprendeu os fundamentos da interface do SAP GUI 770:',
      lista: [
        'A tela inicial chama-se SAP Easy Access e é o ponto de partida para tudo no sistema.',
        'O Campo de Comando é o atalho profissional: você digita o T-Code e dá Enter.',
        'A Barra de Ferramentas tem os atalhos mais usados no dia a dia.',
        'A Barra de Status (parte de baixo) mostra onde você está e mensagens do sistema.',
        'A Árvore de Navegação tem Favoritos (seus atalhos salvos) e o Menu SAP completo.',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Antes de avançar para a próxima aula, faça este exercício no seu SAP real:',
      lista: [
        '1. Abra o SAP GUI 770 e faça login normalmente.',
        '2. Identifique e aponte (com o dedo ou cursor) os 4 elementos: Campo de Comando, Barra de Ferramentas, Barra de Menu, Árvore de Navegação.',
        '3. Clique no Campo de Comando e perceba o cursor aparecer nele.',
        '4. Observe a Barra de Status e anote: qual transação/tela está exibida ali?',
        '🏆 BÔNUS: Passe o mouse sobre cada botão da Barra de Ferramentas devagar — um tooltip (dica) vai aparecer mostrando o nome de cada botão.',
      ],
    },
  ],
}

export const AULA_N1_002: Aula = {
  id: 'ACAD-N1-002',
  titulo: 'Comandos de Navegação: /n e /o',
  subtitulo: 'Como trocar de tela e abrir múltiplas sessões como um profissional',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Dominar os comandos de navegação do Campo de Comando (/n e /o) para trocar de transação e trabalhar com múltiplas telas simultaneamente.',
  descricao_curta: 'Aprenda os comandos /n e /o para navegar entre telas e abrir sessões paralelas no SAP.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N1-001',
  proxima_aula_id: 'ACAD-N1-003',
  tags: ['/n', '/o', 'navegação', 'múltiplas sessões', 'T-Code', 'campo de comando'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O que você vai aprender',
      conteudo: 'Agora que você já conhece a tela inicial, é hora de aprender a se mover pelo SAP como um profissional. Os comandos /n e /o são os mais usados no dia a dia — qualquer analista SAP experiente os usa centenas de vezes por dia.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 O comando /n — Navegar para outra tela',
      conteudo: 'Quando você está em qualquer tela do SAP e quer ir para outra transação, basta ir ao Campo de Comando, digitar /n seguido do T-Code desejado e pressionar Enter.\n\nExemplo: você está na tela MMBE (estoque) e quer ir para ME23N (pedido de compra). Digita /nME23N e dá Enter. Simples assim.\n\n⚠️ O /n fecha a tela atual antes de abrir a nova. Se tiver dados não salvos, o SAP vai perguntar se quer sair mesmo assim.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-01',
        instrucao_capture: 'Abra qualquer transação do SAP (pode ser MM03 ou MMBE). Em seguida, clique no Campo de Comando e digite /nMM03 (sem espaço entre /n e o T-Code). ANTES de pressionar Enter, tire um print mostrando o Campo de Comando com o texto "/nMM03" digitado. Use uma seta vermelha para destacar o campo.',
        legenda: 'O comando /n digitado no Campo de Comando. O formato correto é sempre: /n + T-Code, sem espaço. Ao pressionar Enter, o SAP vai fechar a tela atual e abrir a MM03 (Exibir Material).',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'destaque',
      titulo: '📌 O comando /o — Abrir uma NOVA sessão paralela',
      conteudo: 'O /o é ainda mais poderoso: ele abre uma janela completamente nova do SAP, sem fechar a que você está. Isso é essencial quando você precisa consultar uma informação em outra tela enquanto mantém o que está fazendo.\n\nExemplo: você está digitando um pedido de compra (ME21N) e precisa consultar o estoque (MMBE) sem perder o que digitou. Digita /oMMBE e dá Enter — abre uma sessão paralela com o estoque, e o pedido continua aberto na outra janela.\n\n💡 O SAP permite até 6 sessões simultâneas por usuário.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-02',
        instrucao_capture: 'Na tela inicial do SAP (ou em qualquer transação aberta), clique no Campo de Comando, digite /oMMBE e pressione Enter. O SAP vai abrir uma nova janela. Tire um print mostrando as DUAS janelas do SAP abertas na barra de tarefas do Windows (na parte inferior da tela) — deve aparecer dois ícones do SAP. Dê um zoom na barra de tarefas para ficar visível.',
        legenda: 'Duas sessões do SAP abertas simultaneamente graças ao comando /o. Na barra de tarefas do Windows você vê dois ícones SAP ativos. Isso permite consultar informações em paralelo sem perder o trabalho em andamento.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'teoria',
      titulo: '📋 Tabela de comandos essenciais do Campo de Comando',
      conteudo: 'Além de /n e /o, existem outros comandos úteis que você vai usar no dia a dia:',
      lista: [
        '/nXXXX — Vai para a transação XXXX fechando a tela atual (ex: /nMM03)',
        '/oXXXX — Abre a transação XXXX em uma NOVA sessão paralela (ex: /oMMBE)',
        '/nend — Encerra a sessão atual do SAP (faz logout)',
        '/nex — Encerra TODAS as sessões do SAP e faz logout completo',
        '/i — Fecha a sessão atual sem fechar as outras abertas',
        'XXXX (só o código) — Funciona igual ao /n, mas só a partir da tela inicial',
      ],
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'atencao',
      titulo: '⚠️ Atenção: diferença entre /n e digitar só o T-Code',
      conteudo: 'Se você estiver na tela inicial e digitar só o T-Code (ex: MM03) no Campo de Comando, funciona normalmente. Mas se você já estiver dentro de uma transação e digitar só o T-Code sem o /n, o SAP pode não reconhecer o comando e exibir erro. O hábito correto é SEMPRE usar /n antes do T-Code quando estiver dentro de uma transação.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-03',
        instrucao_capture: 'Abra qualquer tela de transação no SAP (ex: MM03). Com ela aberta, vá ao Campo de Comando e tente digitar apenas "MMBE" (sem o /n) e pressione Enter. O SAP deve exibir uma mensagem de erro na Barra de Status. Tire um print mostrando a mensagem de erro na parte inferior da tela. Destaque a Barra de Status com uma caixa ou seta vermelha.',
        legenda: 'Exemplo de erro ao tentar navegar sem o prefixo /n dentro de uma transação. A Barra de Status exibe uma mensagem em vermelho. Para evitar isso, sempre use /n + T-Code quando estiver dentro de uma tela.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-002-04',
        instrucao_capture: 'Agora faça o correto: com a mesma transação aberta, vá ao Campo de Comando, digite /nMMBE e pressione Enter. O SAP vai navegar para a tela MMBE corretamente. Tire um print da tela MMBE após abrir, mostrando que a navegação funcionou. Opcional: adicione uma seta verde apontando para o Campo de Comando mostrando "/nMMBE".',
        legenda: 'Navegação correta com /nMMBE: o SAP fechou a tela anterior e abriu a MMBE (Estoque por Depósito) sem erros. O Campo de Comando agora mostra o T-Code da tela atual.',
      },
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 2',
      conteudo: 'Você dominou os comandos de navegação mais usados no SAP:',
      lista: [
        '/n + T-Code: navega para outra transação fechando a atual (ex: /nMM03)',
        '/o + T-Code: abre a transação em uma nova sessão paralela sem fechar a atual (ex: /oMMBE)',
        '/nend: encerra a sessão atual',
        '/nex: encerra TODAS as sessões e faz logout completo',
        'Dentro de uma transação, sempre use /n antes do T-Code para evitar erros.',
      ],
    },
    {
      id: 's11',
      ordem: 11,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Pratique no seu SAP real:',
      lista: [
        '1. Na tela inicial, digite MM03 no Campo de Comando e pressione Enter.',
        '2. Na tela MM03, use /nMMBE para ir para o estoque (sem fechar sessão).',
        '3. Na tela MMBE, use /oME23N para abrir um pedido de compra em NOVA sessão.',
        '4. Alterne entre as duas sessões clicando nos ícones na barra de tarefas do Windows.',
        '5. Feche a sessão paralela com /i no Campo de Comando.',
        '🏆 BÔNUS: Tente /nend e veja o que acontece (vai pedir confirmação antes de fechar).',
      ],
    },
  ],
}

export const AULA_N1_003: Aula = {
  id: 'ACAD-N1-003',
  titulo: 'Favoritos: Seus Atalhos Personalizados',
  subtitulo: 'Crie uma pasta de favoritos no SAP para acessar tudo em segundos',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Criar e organizar Favoritos no SAP Easy Access para acessar as transações mais usadas sem precisar memorizar T-Codes.',
  descricao_curta: 'Monte sua pasta de Favoritos no SAP e acesse suas transações mais usadas com um duplo clique.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-002',
  proxima_aula_id: 'ACAD-N1-004',
  tags: ['favoritos', 'atalhos', 'personalização', 'SAP Easy Access', 'produtividade'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O que você vai aprender',
      conteudo: 'Você vai aprender a criar sua pasta de Favoritos no SAP — uma lista personalizada das transações que você mais usa. É como salvar sites nos favoritos do navegador. Com isso, você não precisará memorizar todos os T-Codes do zero: basta dar um duplo clique no favorito e a tela abre.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Onde ficam os Favoritos?',
      conteudo: 'Na tela inicial do SAP Easy Access, o painel à esquerda tem uma árvore de navegação. A pasta "Favoritos" fica no topo dessa árvore. Inicialmente ela está vazia — você vai preenchê-la com as transações que usar no seu trabalho diário.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-01',
        instrucao_capture: 'Na tela inicial do SAP Easy Access, tire um print do painel esquerdo (árvore de navegação) mostrando a pasta "Favoritos" (provavelmente vazia) e abaixo dela a pasta "Menu SAP". Use uma seta vermelha apontando especificamente para a pasta "Favoritos".',
        legenda: 'A pasta Favoritos na árvore de navegação do SAP Easy Access. Inicialmente vazia, ela vai se tornar o seu painel de acesso rápido às transações que você mais utiliza no dia a dia.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '➕ Como adicionar uma transação aos Favoritos',
      conteudo: 'Existem duas formas de adicionar transações aos Favoritos. A mais rápida: clique com o botão direito do mouse na pasta "Favoritos" na árvore de navegação e escolha "Inserir transação". Na caixa que abrir, digite o T-Code desejado (ex: MM03) e confirme com Enter ou OK.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-02',
        instrucao_capture: 'Clique com o botão direito do mouse sobre a pasta "Favoritos" na árvore esquerda do SAP. Vai aparecer um menu de contexto com opções como "Inserir transação", "Inserir pasta", etc. ANTES de clicar em qualquer opção, tire um print mostrando esse menu de contexto aberto. Use uma seta ou destaque na opção "Inserir transação".',
        legenda: 'Menu de contexto do botão direito sobre a pasta Favoritos. A opção "Inserir transação" permite adicionar qualquer T-Code aos seus atalhos pessoais. Você pode também "Inserir pasta" para organizar por categorias (ex: uma pasta "MM", outra "FI").',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: '💡 Dica: Organize por módulo ou função',
      conteudo: 'Em vez de colocar todos os favoritos numa lista só, crie subpastas para organizar. Por exemplo: uma pasta "📦 MM - Materiais" com MM03, MMBE, ME23N, e outra pasta "💰 FI - Financeiro" com FB03, FBL1N. Para criar subpastas, clique com botão direito em Favoritos e escolha "Inserir pasta".',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-003-03',
        instrucao_capture: 'Adicione ao menos 3 transações aos seus Favoritos (sugestão: MM03, MMBE, ME23N). Depois tire um print do painel esquerdo mostrando a pasta Favoritos expandida com as transações adicionadas. Use seta verde para destacar as transações nos Favoritos.',
        legenda: 'Favoritos configurados com 3 transações do módulo MM: MM03 (Exibir Material), MMBE (Estoque por Depósito) e ME23N (Exibir Pedido de Compra). A partir de agora, basta um duplo clique em qualquer um deles para abrir a transação instantaneamente.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 3',
      conteudo: 'Agora você sabe como personalizar sua área de trabalho no SAP:',
      lista: [
        'A pasta Favoritos fica na parte superior da árvore de navegação do SAP Easy Access.',
        'Para adicionar: botão direito em Favoritos → Inserir transação → digitar o T-Code.',
        'Para organizar: crie subpastas com botão direito → Inserir pasta.',
        'Para usar: duplo clique no favorito abre a transação diretamente.',
        'Para remover: botão direito no item do Favorito → Apagar.',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Monte seus Favoritos no SAP real:',
      lista: [
        '1. Crie uma pasta chamada "📦 MM - Compras" dentro de Favoritos.',
        '2. Adicione nessa pasta: MM03, MMBE, ME23N, ME51N, ME53N.',
        '3. Crie uma segunda pasta "🔍 Consultas Gerais".',
        '4. Adicione nela: SU01 (usuários), SPRO (customizing — só para ver), SM30 (tabelas).',
        '5. Teste: feche o SAP, abra novamente e veja se os Favoritos continuam salvos.',
        '🏆 BÔNUS: Renomeie um favorito clicando com botão direito → Renomear — e coloque um nome mais descritivo, tipo "MM03 — Consultar Material".',
      ],
    },
  ],
}

export const AULA_N1_004: Aula = {
  id: 'ACAD-N1-004',
  titulo: 'Sua Primeira Consulta: Visualizando um Material (MM03)',
  subtitulo: 'Como consultar dados de um material sem risco de alterar nada',
  nivel: 'estagiario',
  modulo: 'MM',
  transacoes: ['MM03'],
  tempo_estimado_minutos: 25,
  objetivo: 'Executar a transação MM03 para consultar os dados de um material no SAP, entendendo as visões (views) e a lógica dos dados mestre.',
  descricao_curta: 'Aprenda a usar a MM03 para consultar qualquer material no SAP com segurança e sem risco de alteração.',
  prints_necessarios: 4,
  aula_anterior_id: 'ACAD-N1-003',
  proxima_aula_id: 'ACAD-N1-005',
  tags: ['MM03', 'material', 'dados mestre', 'consulta', 'módulo MM', 'iniciante'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 Por que começar pela MM03?',
      conteudo: 'A MM03 é a transação de Exibir Material — ela permite consultar todos os dados de um produto/material no SAP sem alterar nada. É a transação mais segura para começar: você não pode salvar nenhuma mudança aqui. Perfeita para um estagiário aprender a ler as informações do sistema.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: '📌 Dados Mestre de Material: o coração do módulo MM',
      conteudo: 'No SAP, cada produto, insumo, ou item comprado/vendido é chamado de Material e tem um registro central chamado Dados Mestre de Material. Esse registro contém tudo: descrição, unidade de medida, peso, preço, estoque mínimo, dados de compras, dados contábeis e muito mais. A MM03 é a "janela de consulta" desses dados.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-01',
        instrucao_capture: 'No Campo de Comando do SAP, digite /nMM03 e pressione Enter. Vai abrir a tela inicial da MM03 pedindo o número do Material, Centro e Depósito. Tire um print desta tela de seleção. Destaque com uma seta o campo "Material" onde você vai digitar o código.',
        legenda: 'Tela de entrada da transação MM03 (Exibir Material). Preencha o campo "Material" com o código do item que deseja consultar. O campo "Centro" identifica a filial/planta da empresa. Deixe "Depósito" em branco por enquanto — você pode preencher depois.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'teoria',
      titulo: '📂 Visões do Material: por que existem tantas abas?',
      conteudo: 'Após informar o código do material, o SAP apresenta uma tela perguntando quais "Visões" (Views) você quer consultar. Isso porque os dados de um material são divididos em diferentes perspectivas. As principais visões que você vai usar são:',
      lista: [
        'Dados Básicos 1 e 2 — Descrição, unidade de medida, peso, volume. Válido para todos.',
        'Compras — Dados de pedido de compra: grupo de compras, tolerâncias, prazo de entrega.',
        'Contabilidade 1 — Preço e valorização do material (usado pelo financeiro).',
        'MRP 1, 2, 3 — Planejamento de necessidades: estoque mínimo, tipo de reposição.',
        'Depósito Geral — Informações de armazenagem: tipo de estocagem, peso máximo.',
      ],
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-02',
        instrucao_capture: 'Após digitar o código de um material na MM03 e pressionar Enter, vai aparecer a tela de seleção de Visões. Tire um print dessa tela mostrando a lista de visões disponíveis (Dados Básicos 1, Compras, Contabilidade 1, etc.). Use setas ou caixas coloridas para destacar as 3 principais visões mencionadas acima: Dados Básicos 1, Compras e Contabilidade 1.',
        legenda: 'Tela de seleção de Visões da MM03. Cada visão representa uma perspectiva diferente dos dados do material. Para uma consulta geral, selecione "Dados Básicos 1" e clique em OK. Você pode selecionar múltiplas visões de uma vez segurando Ctrl e clicando.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-03',
        instrucao_capture: 'Selecione a visão "Dados Básicos 1" na tela de seleção e pressione Enter ou clique em OK. Vai abrir a tela com os dados do material. Tire um print desta tela mostrando os campos principais: Descrição do Material, Grupo de Mercadorias, Unidade de Medida Base, Peso Bruto e Peso Líquido. Adicione setas numeradas indicando cada campo.',
        legenda: 'Visão "Dados Básicos 1" da MM03 — os dados fundamentais do material. Você vê: ① Descrição do material, ② Grupo de Mercadorias (categoria), ③ Unidade de medida base (UN, KG, L...), ④ Peso bruto e líquido, ⑤ Volume. Esses dados são visíveis para todos os departamentos.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'dica',
      titulo: '💡 Dica: MM01, MM02 e MM03 — qual a diferença?',
      conteudo: 'No SAP, as transações de Dados Mestre de Material seguem um padrão de numeração: MM01 = CRIAR Material (requer autorização), MM02 = MODIFICAR Material (requer autorização), MM03 = EXIBIR Material (só leitura — todos podem usar). Como estagiário, a MM03 é a sua principal ferramenta de consulta. MM01 e MM02 geralmente são usadas por analistas seniores ou o time de cadastro.',
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-004-04',
        instrucao_capture: 'Ainda na MM03, clique na aba "Compras" ou navegue para ela (se selecionou múltiplas visões, use as abas no topo). Tire um print da visão de Compras mostrando campos como: Grupo de Compras, Prazo de Entrega Previsto, Tolerância de Remessa. Destaque o campo "Grupo de Compras" pois ele indica qual equipe de compradores cuida desse material.',
        legenda: 'Visão de Compras do material na MM03. O campo "Grupo de Compras" identifica o time responsável pelas compras desse item. O "Prazo de Entrega Previsto" indica quantos dias o fornecedor leva para entregar. Esses dados são usados para gerar pedidos de compra automaticamente no processo P2P.',
      },
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 4',
      conteudo: 'Você realizou sua primeira consulta de Dados Mestre no SAP:',
      lista: [
        'A MM03 é a transação de Exibir Material — somente leitura, sem risco de alteração.',
        'Cada material tem Visões que organizam os dados por departamento/finalidade.',
        'A visão Dados Básicos 1 tem a descrição, unidade de medida e peso.',
        'A visão Compras tem grupo de compras, prazo de entrega e tolerâncias.',
        'A visão Contabilidade 1 tem o preço e valorização usados pelo financeiro.',
        'MM01 = Criar, MM02 = Modificar, MM03 = Exibir (use sempre a MM03 para consultas).',
      ],
    },
    {
      id: 's10',
      ordem: 10,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Pratique no SAP real:',
      lista: [
        '1. Abra a MM03 pelo Campo de Comando (/nMM03).',
        '2. Consulte 3 materiais diferentes da sua empresa (peça os códigos para seu supervisor).',
        '3. Para cada material, veja as visões: Dados Básicos 1 e Compras.',
        '4. Anote: Descrição, Unidade de Medida e Grupo de Compras de cada um.',
        '5. Tente navegar entre as abas das visões usando o teclado (Ctrl+PgDn = próxima aba).',
        '🏆 BÔNUS: Abra a visão Contabilidade 1 e veja o preço do material. Qual é o tipo de controle de preço: "S" (preço standard) ou "V" (preço médio móvel)?',
      ],
    },
  ],
}

export const AULA_N1_005: Aula = {
  id: 'ACAD-N1-005',
  titulo: 'Consultando o Estoque: MMBE na Prática',
  subtitulo: 'Veja quanto tem em estoque, onde está e em qual status',
  nivel: 'estagiario',
  modulo: 'MM',
  transacoes: ['MMBE'],
  tempo_estimado_minutos: 20,
  objetivo: 'Usar a transação MMBE para consultar o estoque de materiais por depósito, entendendo os diferentes tipos de estoque (livre utilização, bloqueado, qualidade).',
  descricao_curta: 'Use a MMBE para consultar estoque por depósito e entender as diferentes categorias de estoque do SAP.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-004',
  proxima_aula_id: 'ACAD-N1-006',
  tags: ['MMBE', 'estoque', 'depósito', 'consulta', 'módulo MM'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: '🎯 O que você vai aprender',
      conteudo: 'A MMBE (Estoque por Depósito) é uma das transações mais consultadas no dia a dia de qualquer profissional que trabalha com Supply Chain, Compras ou Logística. Ela responde a pergunta mais comum: "Quantas unidades temos em estoque e onde estão?"',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-01',
        instrucao_capture: 'Abra a transação MMBE pelo Campo de Comando (/nMMBE). Tire um print da tela de entrada da MMBE mostrando os campos de filtro: Material, Centro, Depósito de Armazenagem. Use uma seta para indicar onde digitar o código do material.',
        legenda: 'Tela de entrada da MMBE (Estoque por Depósito). Informe o código do Material no primeiro campo e pressione Enter. Você pode deixar Centro e Depósito em branco para ver o estoque consolidado de todas as filiais.',
      },
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'teoria',
      titulo: '📦 Os tipos de estoque que você vai encontrar',
      conteudo: 'O SAP não mostra apenas "quantidade total". Ele segrega o estoque em categorias que têm significados diferentes para o negócio:',
      lista: [
        '✅ Livre Utilização (Unrestricted) — Disponível para uso imediato. Este é o estoque "pronto para usar".',
        '🔍 Controle de Qualidade — Material chegou mas ainda está sendo inspecionado. Não pode ser usado até ser aprovado.',
        '🚫 Bloqueado — Material com problema, retido, ou aguardando decisão. Não pode ser consumido.',
        '🚚 Em Trânsito — Material que foi despachado pelo fornecedor mas ainda não chegou ao depósito.',
        '📋 Pedido (em andamento) — Quantidade que já foi pedida ao fornecedor mas ainda não entrou no estoque.',
      ],
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-02',
        instrucao_capture: 'Após inserir um código de material e pressionar Enter na MMBE, vai aparecer a tela de resultado com a árvore de estoques. Tire um print desta tela expandida, mostrando pelo menos os tipos: Livre Utilização e Controle de Qualidade (se houver). Use setas numeradas para identificar cada tipo de estoque na tela.',
        legenda: 'Resultado da consulta MMBE para um material. A árvore mostra o estoque segmentado por tipo: ① Livre Utilização (disponível imediatamente), ② Em Controle de Qualidade (aguardando inspeção), ③ Bloqueado (com restrição de uso). Expanda cada nó clicando no "+" para ver o detalhamento por depósito.',
      },
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: '💡 Dica: estoque "Livre Utilização" é o que importa no dia a dia',
      conteudo: 'Quando alguém pergunta "quanto temos em estoque?", na prática quer saber o estoque de Livre Utilização — o que realmente está disponível para ser retirado, usado ou vendido. Os outros tipos existem mas têm restrições. Se um cliente pede 100 unidades e você tem 80 em Livre Utilização + 40 em Controle de Qualidade, você só pode garantir 80 imediatamente.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-005-03',
        instrucao_capture: 'Na tela de resultado da MMBE, clique no "+" ao lado de "Livre Utilização" para expandir e ver o detalhamento por Depósito (ex: Depósito 0001, 0002, etc.). Tire um print mostrando a árvore expandida com os diferentes depósitos e suas quantidades. Destaque um depósito específico com seta.',
        legenda: 'Estoque de Livre Utilização detalhado por Depósito na MMBE. Cada linha mostra um depósito físico diferente e sua quantidade disponível. Isso é importante quando a empresa tem múltiplos armazéns: você vê exatamente onde cada unidade está localizada.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: '✅ Resumo da Aula 5',
      conteudo: 'Você sabe consultar estoque no SAP como um profissional:',
      lista: [
        'A MMBE mostra o estoque de qualquer material por depósito, segmentado por tipo.',
        'Livre Utilização = disponível para uso imediato (o número que importa no dia a dia).',
        'Controle de Qualidade = chegou mas ainda está sendo inspecionado.',
        'Bloqueado = tem algum problema ou restrição e não pode ser consumido.',
        'Em Trânsito = a caminho do fornecedor (ainda não chegou ao estoque físico).',
        'Expanda os nós da árvore clicando no "+" para ver o detalhe por depósito.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: '🎯 Exercício de Fixação',
      conteudo: 'Consulte estoque no SAP real:',
      lista: [
        '1. Abra a MMBE (/nMMBE) e consulte os mesmos 3 materiais da aula anterior (MM03).',
        '2. Para cada material, anote: quantidade em Livre Utilização e se há estoque Bloqueado ou em Controle de Qualidade.',
        '3. Expanda a árvore para ver quais depósitos têm o material.',
        '4. Tente deixar o campo Material em branco e preencher apenas o Centro — o SAP mostrará todos os materiais daquele centro. Atenção: pode demorar em ambientes com muito estoque!',
        '🏆 BÔNUS: Clique com o botão direito em qualquer linha do resultado → Selecionar Layout → veja as configurações de colunas disponíveis.',
      ],
    },
  ],
}


// ===========================================================
// NIVEL 1 - AULAS 6 A 10 (Navegacao Avancada e Orientacao)
// ===========================================================

export const AULA_N1_006: Aula = {
  id: 'ACAD-N1-006',
  titulo: 'Comandos do SAP: /N, /O, /I e Outros',
  subtitulo: 'Navegue entre transações como um profissional usando a barra de comandos',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 20,
  objetivo: 'Dominar os principais comandos da barra de comando do SAP para abrir, fechar e alternar entre transações com agilidade.',
  descricao_curta: 'Aprenda os comandos essenciais /N, /O, /I e /H que todo usuário SAP precisa conhecer.',
  prints_necessarios: 3,
  aula_anterior_id: 'ACAD-N1-005',
  proxima_aula_id: 'ACAD-N1-007',
  tags: ['comandos', 'barra de comando', '/N', '/O', 'navegação', 'básico'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'A Barra de Comando: o volante do SAP',
      conteudo: 'No canto superior esquerdo da tela do SAP existe um campo aparentemente simples, mas que é a ferramenta mais poderosa de navegação do sistema: a Barra de Comando. Com ela você pode abrir qualquer transação, criar novas janelas e fechar sessões — tudo sem usar o mouse. Profissionais experientes raramente usam o menu; eles digitam direto na barra de comando.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Os 5 Comandos que Você Precisa Memorizar',
      conteudo: 'Estes comandos funcionam em qualquer transação do SAP. Você pode combiná-los com T-Codes para ir direto ao destino:',
      lista: [
        '/N — Abre uma transação na MESMA janela. Ex: /NME21N abre o pedido de compras na janela atual.',
        '/O — Abre uma transação em uma NOVA janela (sessão separada). Ex: /OFB03 abre FB03 em nova janela.',
        '/I — FECHA a janela atual. Use quando quiser eliminar uma sessão.',
        '/H — Ativa o modo DEBUG (rastreamento). Só para usuários avançados e consultores.',
        '/NEX — Fecha TODAS as janelas abertas de uma vez. Útil na saída rápida ao fim do dia.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-01',
        instrucao_capture: 'No campo de comando do SAP (canto superior esquerdo), digite /NME21N e pressione Enter. Vai abrir a tela do Pedido de Compras ME21N. Tire um print desta tela mostrando claramente: ① o campo de comando onde você digitou o código, ② a tela que abriu. Adicione uma seta apontando para o campo de comando.',
        legenda: 'Usando o comando /N para navegar até a transação ME21N diretamente. O /N é o comando mais usado no SAP — ele substitui o ato de fechar e reabrir transações. Digite /N + o código da transação e pressione Enter.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Praticando: abrindo sessões paralelas com /O',
      conteudo: 'Uma das situações mais comuns no trabalho com SAP é precisar consultar uma informação em uma transação enquanto preenche outra. Para isso usamos o /O para abrir uma segunda janela. Por exemplo: você está preenchendo um pedido (ME21N) e precisa consultar o estoque (MMBE) ao mesmo tempo — use /OMMBE para abrir o estoque em nova janela sem fechar o pedido.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-02',
        instrucao_capture: 'Com o SAP aberto na tela principal, digite /OFB03 no campo de comando e pressione Enter. Isso vai abrir uma segunda janela do SAP com a transação FB03. Tire um print mostrando as DUAS janelas abertas na barra de tarefas do Windows (ou Alt+Tab). Destaque que são duas sessões SAP independentes.',
        legenda: 'O comando /O abre uma segunda janela (sessão) do SAP. Você pode ter até 6 janelas abertas simultaneamente — uma para cada tarefa. Cada janela é independente: fechar uma não afeta as outras. Para fechar uma janela específica, use /I naquela janela.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'atencao',
      titulo: 'Cuidado com o /NEX',
      conteudo: 'O comando /NEX fecha TODAS as janelas do SAP de uma vez, sem pedir confirmação. Use com cuidado: se você tiver trabalhos não salvos em outras janelas, você vai perdê-los. Antes de usar o /NEX, certifique-se de ter salvo tudo nas demais janelas abertas.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-006-03',
        instrucao_capture: 'Com o SAP aberto em qualquer transação, pressione os botões da barra de ferramentas: o botão verde (seta para esquerda = Voltar), o botão laranja/amarelo (seta para cima = Finalizar/Sair da transação) e o botão vermelho (X = Cancelar). Tire um print destacando estes três botões na barra de ferramentas. Adicione rótulos indicando o que cada um faz.',
        legenda: 'Os três botões de navegação universal do SAP: ① Verde (Voltar) — retorna uma tela sem perder o trabalho, ② Laranja/Amarelo (Finalizar/Sair) — encerra a transação atual e volta ao menu, ③ Vermelho (Cancelar) — cancela a operação corrente sem salvar.',
      },
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'resumo',
      titulo: 'Resumo: Comandos de Navegação',
      conteudo: 'Você agora conhece os comandos fundamentais do SAP:',
      lista: [
        '/N + TCode — Abre transação na janela atual. Ex: /NMM03',
        '/O + TCode — Abre transação em nova janela. Ex: /OMMBE',
        '/I — Fecha a janela atual sem fechar outras sessões.',
        '/NEX — Fecha todas as janelas. Use com cuidado.',
        '/H — Modo debug. Só para consultores e usuários avançados.',
        'Botão Verde = Voltar | Amarelo = Finalizar | Vermelho = Cancelar',
      ],
    },
    {
      id: 's9',
      ordem: 9,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Pratique a navegação por comandos:',
      lista: [
        '1. Abra o SAP. Na barra de comando, digite /NMM03 e pressione Enter. Confirme que a MM03 abriu.',
        '2. Agora, sem fechar, digite /OMMBE. Confirme que abriu uma NOVA janela com a MMBE.',
        '3. Na janela da MMBE, feche usando /I. Confirme que voltou à janela da MM03.',
        '4. Na MM03, clique no botão Amarelo (Finalizar) para sair da transação e voltar ao Menu.',
        '5. BONUS: Tente /NFB03 e veja o que acontece (vai pedir login ou abrir tela de documentos financeiros).',
      ],
    },
  ],
}

export const AULA_N1_007: Aula = {
  id: 'ACAD-N1-007',
  titulo: 'Entendendo os Tipos de Transação no SAP',
  subtitulo: 'Criar, Alterar e Visualizar: a lógica que se repete em todos os módulos',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: ['MM01', 'MM02', 'MM03'],
  tempo_estimado_minutos: 20,
  objetivo: 'Compreender o padrão de transações do SAP (criação/alteração/visualização) e identificar quais transações um estagiário pode usar com segurança.',
  descricao_curta: 'Entenda o padrão 01/02/03 de transações SAP: MM01 cria, MM02 altera, MM03 visualiza. Este padrão se repete em todo o sistema.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-006',
  proxima_aula_id: 'ACAD-N1-008',
  tags: ['transações', 'MM01', 'MM02', 'MM03', 'tipos', 'padrão SAP'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'A Lógica Universal do SAP: 01, 02, 03',
      conteudo: 'O SAP segue um padrão consistente em todos os módulos: para cada tipo de dado mestre (material, fornecedor, cliente, centro de custo...), existem três transações principais. Aprender esse padrão te permite intuir a transação certa mesmo sem ter estudado ela antes.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'O Padrão nas Principais Transações',
      conteudo: 'Veja como o mesmo padrão se repete para diferentes tipos de cadastro:',
      lista: [
        'Material — MM01 (Criar), MM02 (Alterar), MM03 (Visualizar)',
        'Fornecedor Contábil — FK01 (Criar), FK02 (Alterar), FK03 (Visualizar)',
        'Fornecedor Compras — XK01 (Criar), XK02 (Alterar), XK03 (Visualizar)',
        'Cliente Contábil — FD01 (Criar), FD02 (Alterar), FD03 (Visualizar)',
        'Pedido de Compras — ME21N (Criar), ME22N (Alterar), ME23N (Visualizar)',
        'Centro de Custo — KS01 (Criar), KS02 (Alterar), KS03 (Visualizar)',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-007-01',
        instrucao_capture: 'Abra a transação MM01 (/NMM01). No canto superior esquerdo, vai aparecer "Criar Material". Depois feche e abra MM02. Aparece "Alterar Material". Feche e abra MM03 — aparece "Exibir Material". Tire um print da transação MM03 aberta, destacando o texto "Exibir Material" no canto superior esquerdo com uma seta ou caixa.',
        legenda: 'A transação MM03 com o texto "Exibir Material" no topo — indica que é uma transação de VISUALIZAÇÃO. No SAP, sempre leia o título da transação (canto superior esquerdo) para confirmar se está em modo de criação, alteração ou exibição.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'atencao',
      titulo: 'Qual transação o estagiário pode usar?',
      conteudo: 'Como regra geral no início da carreira: transações de VISUALIZAÇÃO (terminadas em 3 ou com "Exibir" no título) são seguras — você não pode alterar nada. Transações de CRIAÇÃO e ALTERAÇÃO geralmente exigem autorização especial e afetam dados reais da empresa. Como estagiário, foque em MM03, MMBE, ME23N, FK03, FBL1N para consultas. Sempre peça autorização antes de usar MM01, MM02, ME21N.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-007-02',
        instrucao_capture: 'Abra a transação ME23N (/NME23N). Vai abrir a tela de Exibição do Pedido de Compras. Tire um print mostrando a barra superior com o texto "Exibir Pedido de Compras" e os campos típicos (número do pedido, fornecedor, etc.). Destaque com uma seta que o botão Gravar está desabilitado ou não existe — confirmando que é modo leitura.',
        legenda: 'A transação ME23N permite consultar pedidos de compras sem risco de alteração. Note que o botão Gravar não está disponível — isso confirma que é modo exibição. Como estagiário, ME23N é sua principal ferramenta para acompanhar o status de pedidos.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'dica',
      titulo: 'Dica: Como saber se você está em modo de visualização?',
      conteudo: 'Três indicadores de que você está em modo seguro (somente leitura): ① O título no canto superior esquerdo diz "Exibir..." ou "Visualizar...". ② O botão Gravar (disquete) está cinza ou ausente. ③ Os campos da tela estão com fundo cinza (não editáveis). Se qualquer campo estiver editável (fundo branco), você está em modo de edição — seja cuidadoso.',
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Padrão de Transações',
      conteudo: 'O padrão 01/02/03 do SAP:',
      lista: [
        'XX01 = CRIAR — Requer autorização. Cria um novo registro.',
        'XX02 = ALTERAR — Requer autorização. Modifica um registro existente.',
        'XX03 = VISUALIZAR — Seguro. Apenas leitura, sem risco de alteração.',
        'Transações "N" (ME21N, ME22N, ME23N) seguem o mesmo padrão: criação, alteração e exibição.',
        'Como estagiário: use sempre as transações de exibição (03/N). Peça autorização para as demais.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Identifique o tipo de transação:',
      lista: [
        '1. Abra MM03 — confirme que é "Exibir Material". Tente digitar no campo Material e pressionar Enter.',
        '2. Abra ME23N — confirme que é "Exibir Pedido". O botão Gravar está disponível?',
        '3. Abra FK03 — identifique que tipo de transação é esta e para qual cadastro serve.',
        '4. Sem abrir, qual seria a transação para CRIAR um cliente na área contábil? (Dica: use o padrão FD0X).',
        'BONUS: Abra SEARCH_SAP_MENU, pesquise pela palavra "Exibir" e veja quantas transações de visualização existem no sistema.',
      ],
    },
  ],
}

export const AULA_N1_008: Aula = {
  id: 'ACAD-N1-008',
  titulo: 'Como Encontrar Qualquer Transação no SAP',
  subtitulo: 'Use SEARCH_SAP_MENU para descobrir transações por palavra-chave',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Usar a transação SEARCH_SAP_MENU para encontrar qualquer transação do SAP usando palavras-chave, sem precisar memorizar todos os códigos.',
  descricao_curta: 'Nunca mais fique travado sem saber o código de uma transação — aprenda a usar a busca do próprio SAP.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-007',
  proxima_aula_id: 'ACAD-N1-009',
  tags: ['SEARCH_SAP_MENU', 'busca', 'transações', 'navegação', 'produtividade'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O Google do SAP',
      conteudo: 'Um dos maiores medos de quem começa no SAP é não saber o código da transação que precisa. A boa notícia: o SAP tem sua própria ferramenta de busca. A transação SEARCH_SAP_MENU permite pesquisar por palavras-chave e encontrar qualquer funcionalidade do sistema — igual a uma busca no Google.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Usando a SEARCH_SAP_MENU',
      conteudo: 'Para acessar: no campo de comando, digite SEARCH_SAP_MENU e pressione Enter. Será aberta uma tela de pesquisa simples com apenas um campo. Digite uma palavra que descreva o que você está procurando — por exemplo, "estoque", "fatura", "pedido", "material" — e clique em Avançar. O SAP listará todas as transações relacionadas à sua palavra.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-008-01',
        instrucao_capture: 'Abra a transação SEARCH_SAP_MENU. Na tela de pesquisa, digite a palavra "estoque" no campo de busca e clique em Avançar. Tire um print do RESULTADO da pesquisa, mostrando a lista de transações relacionadas a estoque que o SAP retornou. Destaque duas ou três transações relevantes (MMBE, MB51, etc.) com setas.',
        legenda: 'Resultado da SEARCH_SAP_MENU com a palavra "estoque". O SAP lista todas as transações do menu que contêm essa palavra. Cada linha mostra o caminho do menu e o código da transação. Clique duas vezes em qualquer resultado para ir direto para aquela transação.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'dica',
      titulo: 'Outras formas de encontrar transações',
      conteudo: 'Além da SEARCH_SAP_MENU, você pode: ① Usar a lupa de pesquisa (SE16N → campo Tabela → digitar TSTCT para ver todos os T-Codes), ② Perguntar ao seu gestor ou consultor, ③ Navegar pelo menu SAP (árvore de navegação à esquerda) expandindo as pastas do módulo, ④ Usar a tecla F1 em qualquer campo do SAP para ver informações técnicas, inclusive o nome da transação atual.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-008-02',
        instrucao_capture: 'Na tela de navegação do SAP (Menu SAP à esquerda), clique no + ao lado de "Logística" para expandir. Depois expanda "Administração de materiais" e veja as subpastas. Tire um print mostrando a estrutura expandida do menu de Logística com pelo menos 3 subpastas visíveis. Adicione uma seta indicando onde estão as transações de Estoque.',
        legenda: 'Estrutura do Menu SAP na área de Logística / Administração de Materiais. O menu é organizado por processo: Mestre de materiais, Compras, Gestão de estoques, etc. Navegar por este menu é uma boa forma de descobrir transações relacionadas a um processo que você ainda não conhece.',
      },
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'resumo',
      titulo: 'Resumo: Encontrando Transações',
      conteudo: 'Você nunca mais ficará perdido sem saber o código de uma transação:',
      lista: [
        'SEARCH_SAP_MENU — Digite uma palavra-chave e o SAP lista as transações relacionadas.',
        'Menu SAP (árvore à esquerda) — Navegue por módulo/processo para descobrir transações.',
        'Botão de lupa na barra de ferramentas — Pesquisa integrada no próprio campo de comando.',
        'F1 em qualquer campo — Mostra informações técnicas, incluindo o programa/transação atual.',
      ],
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Use a SEARCH_SAP_MENU para descobrir:',
      lista: [
        '1. Pesquise "pedido de compras" — qual transação aparece para criar um pedido? (Deverá aparecer ME21N)',
        '2. Pesquise "fornecedor" — quantas transações aparecem? Anote as 3 mais relevantes.',
        '3. Pesquise "inventário" — encontre a transação para criar um documento de inventário físico.',
        '4. Pesquise "fatura" — encontre a transação para lançar fatura de fornecedor.',
        'BONUS: Experimente usar a SEARCH_SAP_MENU com palavras em inglês (ex: "invoice", "vendor") — veja se traz resultados diferentes.',
      ],
    },
  ],
}

export const AULA_N1_009: Aula = {
  id: 'ACAD-N1-009',
  titulo: 'Personalizando o SAP: Cores, Fonte e Layout',
  subtitulo: 'Ajuste o sistema ao seu gosto e melhore sua produtividade',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: [],
  tempo_estimado_minutos: 15,
  objetivo: 'Personalizar a aparência do SAP GUI (cores, tamanho de fonte) e habilitar recursos úteis como o SAP Script e a lupa de pesquisa.',
  descricao_curta: 'Configure o SAP do seu jeito: altere cores para diferenciar ambientes, ajuste a fonte e habilite recursos que aumentam a produtividade.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-008',
  proxima_aula_id: 'ACAD-N1-010',
  tags: ['personalização', 'interface', 'cores', 'fonte', 'SAP Script', 'configuração'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'Por que personalizar o SAP?',
      conteudo: 'A maioria das empresas tem pelo menos dois ambientes SAP: Desenvolvimento (DEV), Qualidade (QAS) e Produção (PRD). É muito comum o usuário ficar confuso e trabalhar no ambiente errado — causando movimentos reais quando pensava estar em teste. Mudar a COR do ambiente é uma dica de ouro para evitar esse problema. Além disso, ajustar o tamanho da fonte pode fazer uma grande diferença na produtividade diária.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'pratica',
      titulo: 'Passo a Passo: Alterando a Cor do Ambiente',
      conteudo: 'Para alterar a cor do SAP: clique no botão "Customize Local Layout" (ícone de chave/configurações, canto superior direito da tela) → Options → Visual Design → Colors in System → escolha a cor desejada → Apply → OK. Feche o SAP e abra novamente para ver a mudança. Dica profissional: use Azul para Produção (PRD) e outra cor para ambientes de teste — assim você nunca confunde.',
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-009-01',
        instrucao_capture: 'Clique no botão Customize Local Layout (ícone de configurações, canto superior direito). Vá em Options → Visual Design → Colors in System. Tire um print desta tela mostrando as opções de cores disponíveis. Destaque a opção selecionada atualmente e mostre onde está o botão "Apply".',
        legenda: 'Tela de configuração de Cores no SAP. Cada cor representa um tema visual diferente para a interface. É uma boa prática usar cores diferentes para cada ambiente (DEV/QAS/PRD) para evitar operações acidentais no sistema de produção.',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Ajustando o Tamanho da Fonte',
      conteudo: 'Para alterar o tamanho da fonte: Customize Local Layout → Options → Font Settings → Select → escolha o tamanho → OK → Apply → OK. Usuários com telas maiores ou dificuldades de visão geralmente preferem fontes maiores. Esta configuração fica salva no perfil local do computador.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: 'Habilitando o SAP Script e a Lupa de Pesquisa',
      conteudo: 'Dois recursos que vale habilitar logo no começo: ① SAP Script (Customize Local Layout → Options → Accessibility & Scripting → Scripting → Enable Scripting → Apply/OK): permite automatizar tarefas repetitivas no SAP e usar o copiador de dados para Excel. ② Lupa de Pesquisa Melhorada (Customize Local Layout → Options → Interaction Design → Visualization 2 → Show Enhanced Search automatically → Apply/OK): melhora a pesquisa em campos Matchcode.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-009-02',
        instrucao_capture: 'Abra Customize Local Layout → Options → Accessibility & Scripting → Scripting. Tire um print desta tela mostrando a opção "Enable Scripting" (pode estar como checkbox). Destaque o checkbox com uma seta indicando onde ele está.',
        legenda: 'Tela de habilitação do SAP Script. Marque "Enable Scripting" e clique em Apply/OK para ativar. Com o Script habilitado, você pode usar gravadores de macro SAP e ferramentas de upload de dados — recursos usados por analistas e consultores para automatizar processos.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Personalizações Essenciais',
      conteudo: 'Configurações que valem a pena fazer no primeiro dia:',
      lista: [
        'Altere a cor do ambiente — Use cores diferentes para DEV, QAS e PRD para não confundir.',
        'Ajuste a fonte — Font Settings para o tamanho que conforta sua visão.',
        'Habilite o SAP Script — Accessibility & Scripting → Enable Scripting.',
        'Habilite a Lupa Melhorada — Visualization 2 → Show Enhanced Search automatically.',
        'Todas as configurações ficam em: Customize Local Layout (ícone de chave) → Options.',
      ],
    },
  ],
}

export const AULA_N1_010: Aula = {
  id: 'ACAD-N1-010',
  titulo: 'Cheguei na Empresa: Guia de Sobrevivência SAP',
  subtitulo: 'Terminologia, configurações iniciais e como se orientar nos primeiros dias',
  nivel: 'estagiario',
  modulo: 'GERAL',
  transacoes: ['MM03'],
  tempo_estimado_minutos: 25,
  objetivo: 'Entender os termos técnicos mais usados no dia a dia SAP corporativo, saber como solicitar acesso ao sistema e navegar com confiança desde o primeiro dia de trabalho.',
  descricao_curta: 'Terminologia básica, como pedir acesso ao TI, e os primeiros passos práticos para qualquer profissional que acaba de entrar em uma empresa com SAP.',
  prints_necessarios: 2,
  aula_anterior_id: 'ACAD-N1-009',
  proxima_aula_id: 'ACAD-N2-001',
  tags: ['primeiros passos', 'terminologia', 'empresa', 'módulos', 'ambientes', 'iniciante'],
  secoes: [
    {
      id: 's1',
      ordem: 1,
      tipo: 'teoria',
      titulo: 'O Mapa do SAP na sua Empresa',
      conteudo: 'Entrar em uma empresa que usa SAP pode ser intimidante no começo. Mas a boa notícia é que o SAP tem uma estrutura universal: os mesmos módulos, a mesma lógica de navegação e os mesmos tipos de transação em todas as empresas do mundo. O que muda são os dados: empresa, clientes, fornecedores e materiais específicos de cada negócio.',
    },
    {
      id: 's2',
      ordem: 2,
      tipo: 'destaque',
      titulo: 'Terminologia Essencial do Primeiro Dia',
      conteudo: 'Estes são os termos que você vai ouvir com frequência nos seus primeiros dias:',
      lista: [
        'Company Code (Código da Empresa) — Ex: BR00. Identifica a empresa dentro do SAP. Cada filial pode ter um código diferente.',
        'Centro / Plant — Identifica uma unidade de negócio ou fábrica. Ex: BR60. Controla estoque, produção e compras.',
        'Mandante — Número do cliente/sistema SAP. Junto com o servidor e o sistema, define onde você está logado.',
        '3 Ambientes — DEV (Desenvolvimento, testes livres), QAS (Qualidade, testes controlados), PRD (Produção, dados reais).',
        'T-Code / Transação — O código de 4-6 caracteres que abre uma tela específica do SAP. Ex: MM03, MIGO, MIRO.',
        'Dados Mestre — Registros permanentes: Material (MM01), Fornecedor (XK01), Cliente (XD01). São a base de todos os processos.',
      ],
    },
    {
      id: 's3',
      ordem: 3,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-010-01',
        instrucao_capture: 'Na tela inicial do SAP (SAP Easy Access), olhe para o canto inferior direito — lá aparecem informações do sistema: Client (Mandante), System ID e Instance. Tire um print desta área inferior, destacando estes três campos com setas numeradas. Se a barra inferior não estiver visível, clique na seta da Barra Inferior para habilitá-la.',
        legenda: 'Barra de status do SAP GUI mostrando: Client (Mandante — número do sistema), System ID (identificador do servidor, ex: EWM ou PRD) e Instance. Esses dados identificam exatamente em qual ambiente você está logado. Antes de fazer qualquer operação importante, confirme que está no ambiente correto (PRD = produção real).',
      },
    },
    {
      id: 's4',
      ordem: 4,
      tipo: 'pratica',
      titulo: 'Como Solicitar Acesso ao TI',
      conteudo: 'Em toda empresa, o acesso ao SAP é controlado pelo time de TI ou pelo Key User (usuário-chave do módulo). Para solicitar acesso: ① Identifique quem é o Key User do seu módulo (pergunte ao seu gestor). ② Solicite via chamado de TI ou email especificando: seu nome completo, departamento, módulo necessário (MM, FI, SD...), tipo de acesso (visualização ou transação). ③ O TI vai criar seu usuário na transação SU01 e associar um perfil de autorização. Você receberá um login e senha temporária.',
    },
    {
      id: 's5',
      ordem: 5,
      tipo: 'dica',
      titulo: 'Dica de Ouro: Como Copiar Texto no SAP',
      conteudo: 'O SAP não funciona como um editor normal — você não pode simplesmente Ctrl+C para copiar texto de campos. A solução é o atalho Ctrl+Y: ele ativa o modo de seleção de texto no SAP. Após pressionar Ctrl+Y, o cursor vira uma cruz — arraste sobre o texto que quer copiar e depois use Ctrl+C. Esse atalho é um dos mais usados no dia a dia por analistas SAP.',
    },
    {
      id: 's6',
      ordem: 6,
      tipo: 'print',
      placeholder: {
        id: 'print-n1-010-02',
        instrucao_capture: 'Abra a transação MM03, pesquise qualquer material e abra a visão Dados Básicos 1. Na tela com os dados do material, pressione Ctrl+Y. O cursor vai mudar de forma. Tire um print mostrando a tela MM03 com o cursor em modo de seleção (cursor de "+"  ou "crosshair"). Adicione uma legenda explicando que o Ctrl+Y está ativo.',
        legenda: 'A transação MM03 com o modo Ctrl+Y ativo. Com o cursor em forma de "+" você pode selecionar qualquer texto na tela e copiar com Ctrl+C. Este recurso é fundamental no dia a dia: números de materiais, descrições, valores — todos podem ser copiados para outras janelas ou para o Excel.',
      },
    },
    {
      id: 's7',
      ordem: 7,
      tipo: 'resumo',
      titulo: 'Resumo: Primeiros Dias com SAP',
      conteudo: 'Você está pronto para o primeiro dia produtivo:',
      lista: [
        'Company Code = código da empresa | Centro = planta/filial | Mandante = sistema SAP.',
        '3 ambientes: DEV (teste livre) / QAS (homologação) / PRD (produção real — cuidado!)',
        'Solicite acesso via TI especificando módulo e tipo de permissão necessária.',
        'Ctrl+Y = modo de cópia de texto no SAP (não funciona Ctrl+C diretamente).',
        'Transações de visualização são seguras: MM03, MMBE, ME23N, FK03.',
        'Dúvida sobre qual transação usar? Use SEARCH_SAP_MENU com palavras-chave.',
      ],
    },
    {
      id: 's8',
      ordem: 8,
      tipo: 'exercicio',
      titulo: 'Exercício de Fixação',
      conteudo: 'Explore o ambiente SAP da sua empresa:',
      lista: [
        '1. Identifique o System ID e o Mandante na barra inferior do SAP — você está em DEV, QAS ou PRD?',
        '2. Abra MM03 e pesquise um material digitando MP* no campo Material (asterisco = curinga, traz todos que começam com MP).',
        '3. Na tela de dados do material, use Ctrl+Y para selecionar e copiar a descrição do material para um bloco de notas.',
        '4. Abra o Favoritos e crie uma pasta chamada "Nível 1 - Consultas". Adicione MM03, MMBE e ME23N.',
        'BONUS: Encontre o Key User de MM na sua empresa e pergunte quais são as 5 transações que você mais vai usar.',
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
