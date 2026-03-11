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
  total_horas_estimadas: 5,
  aulas: [
    AULA_N1_001,
    AULA_N1_002,
    AULA_N1_003,
    AULA_N1_004,
    AULA_N1_005,
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
  total_horas_estimadas: 10,
  prerequisito: 'Nível 1 — Iniciante',
  aulas: [], // será preenchido nas próximas iterações
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
  aulas: [],
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
