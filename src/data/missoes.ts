import type { Missao } from '../types'

// ═══════════════════════════════════════════════════════
// NÍVEL 1 — ESTAGIÁRIO SAP (SAP GUI 770, Módulo MM)
// Prompt Mestre: foco em zero conhecimento, GUI 770 clássico
// ═══════════════════════════════════════════════════════
export const MISSOES_NIVEL1_MM: Missao[] = [
  {
    id: 'MM-N1-001',
    titulo: 'Primeiros Passos: Conhecendo a Tela Inicial do SAP GUI 770',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Estagiário de Suprimentos',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 15,
    contexto: 'É o seu primeiro dia como estagiário no setor de Suprimentos da Metalúrgica Paulista. Seu supervisor, Eduardo Matsuda, acaba de lhe entregar o login e a senha do SAP e disse: "Antes de mexer em qualquer coisa, preciso que você entenda como o sistema funciona. Explore a tela inicial e me diga o que encontrou no menu Logística > Administração de Materiais."',
    objetivo: 'Aprender a navegar pela tela inicial do SAP GUI 770 (SAP Easy Access), dominar o campo de comando, a árvore de menus, a barra de ferramentas e a barra de status. Ao final, você saberá acessar qualquer transação de duas formas diferentes.',
    transacao_principal: 'SAP Easy Access',
    transacoes_secundarias: [],
    passos: [
      {
        id: 'MM-N1-001-p1',
        ordem: 1,
        titulo: 'Abrir o SAP Logon 770',
        instrucao: 'Na área de trabalho do Windows, dê duplo clique no ícone "SAP Logon". Na lista de conexões, selecione o servidor da empresa (ex: "PRD - Produção") e clique em "Logon".',
        explicacao_negocio: 'O SAP Logon conecta seu computador ao servidor SAP da empresa. Cada linha na lista representa um ambiente diferente (Produção, Qualidade, Desenvolvimento). No dia a dia, você usará o ambiente de Produção para tarefas reais.'
      },
      {
        id: 'MM-N1-001-p2',
        ordem: 2,
        titulo: 'Fazer Login no SAP',
        instrucao: 'Na tela de login do SAP GUI 770, preencha: campo "Client" (Mandante) com 100, campo "User" com seu usuário e campo "Password" com sua senha. Pressione Enter ou clique no ícone de tick verde (✓) para confirmar.',
        explicacao_negocio: 'O Mandante (Client) é como um "apartamento" dentro do mesmo prédio SAP — cada mandante tem dados independentes. O mandante 100 geralmente é de treinamento. Sua empresa definirá qual usar.',
        dica: 'Se aparecer a tela de Idioma, selecione "Português".'
      },
      {
        id: 'MM-N1-001-p3',
        ordem: 3,
        titulo: 'Conhecer os 4 elementos da tela SAP Easy Access',
        instrucao: 'Após o login, você está na tela SAP Easy Access. Observe: (1) CAMPO DE COMANDO — caixa de texto no canto superior esquerdo onde você digita T-Codes. (2) BARRA DE FERRAMENTAS — ícones como disquete (salvar), seta (voltar), impressora. (3) ÁRVORE DE MENUS — estrutura de pastas no centro. (4) BARRA DE STATUS — parte inferior, exibe mensagens em verde (sucesso), amarelo (aviso) ou vermelho (erro).',
        explicacao_negocio: 'Entender estes 4 elementos é essencial porque TODA operação no SAP começa por aqui. O campo de comando é o atalho mais rápido — consultores experientes raramente usam o menu, preferem digitar o T-Code direto.',
        dica: 'Se o campo de comando não estiver visível no tema Belize, clique na setinha (▼) na barra de ferramentas ou pressione Ctrl+/.'
      },
      {
        id: 'MM-N1-001-p4',
        ordem: 4,
        titulo: 'Navegar até Administração de Materiais pelo menu',
        instrucao: 'Na árvore de menus (centro da tela), clique na pasta "Logística" para expandir. Dentro dela, clique em "Administração de materiais". Observe as subpastas: "Requisição de compra", "Pedido", "Administração de estoques", "Verificação de faturas".',
        explicacao_negocio: 'A pasta "Administração de Materiais" é o módulo MM (Materials Management). É aqui que vivem todas as transações do processo P2P. Como estagiário de suprimentos, esta será sua "casa" no SAP.'
      },
      {
        id: 'MM-N1-001-p5',
        ordem: 5,
        titulo: 'Acessar transação pelo campo de comando',
        instrucao: 'No campo de comando (canto superior esquerdo), digite /nMMBE e pressione Enter. Uma nova tela se abrirá — é a transação MMBE. Não se preocupe com os campos por agora, apenas observe que a tela mudou.',
        explicacao_negocio: 'O prefixo "/n" significa "abrir na mesma janela". Também existe "/o" para abrir em nova janela. Digitar T-Codes é MUITO mais rápido que navegar pelo menu — um consultor experiente memoriza dezenas de T-Codes.',
        dica: 'O campo de comando aceita o T-Code com ou sem o prefixo /n. Sempre use /n para garantir navegação limpa.'
      },
      {
        id: 'MM-N1-001-p6',
        ordem: 6,
        titulo: 'Voltar para a tela inicial',
        instrucao: 'Para voltar ao SAP Easy Access, digite /n no campo de comando e pressione Enter. Alternativamente, clique na seta verde (←) na barra de ferramentas ou pressione F3.',
        explicacao_negocio: 'Saber voltar é tão importante quanto avançar. "/n" sozinho leva ao Easy Access. F3 volta uma tela. Esc cancela a operação atual. Você usará esses atalhos centenas de vezes por dia.',
        erro_comum: 'NUNCA use /nex se tiver dados não salvos — este comando fecha a sessão SEM PERGUNTAR e você perde tudo que digitou.'
      },
      {
        id: 'MM-N1-001-p7',
        ordem: 7,
        titulo: 'Abrir transação em nova janela',
        instrucao: 'Digite /oMMBE no campo de comando e pressione Enter. Uma NOVA janela do SAP se abrirá. Observe que agora você tem DUAS janelas. Feche a janela extra digitando /nex nela.',
        explicacao_negocio: 'O "/o" abre uma nova sessão, útil para consultar dados em uma tela enquanto preenche outra. O SAP permite até 6 sessões simultâneas.'
      },
      {
        id: 'MM-N1-001-p8',
        ordem: 8,
        titulo: 'Adicionar transação aos Favoritos',
        instrucao: 'De volta ao Easy Access, localize a pasta "Favoritos" no topo da árvore de menus. Clique com o botão direito em "Favoritos" e escolha "Inserir transação". No pop-up, digite MMBE e confirme. A transação agora aparece nos Favoritos.',
        explicacao_negocio: 'Com o tempo, você terá 5 a 10 transações que usa todos os dias. Adicioná-las aos Favoritos economiza tempo — é como montar sua mesa de trabalho personalizada dentro do SAP.',
        dica: 'Cada usuário tem seus próprios favoritos. Organize por frequência de uso.'
      }
    ],
    erros_comuns: [
      'Usar /nex com dados não salvos — fecha sem confirmar e você perde todo o trabalho',
      'Digitar T-Code sem o prefixo /n dentro de uma transação — pode pedir confirmação de saída',
      'Não ver o campo de comando (tema Belize): pressione Ctrl+/ para expandir',
      'Fechar o SAP pelo X quando travar — use sempre /n ou Sistema > Finalizar transação'
    ],
    exercicio: {
      titulo: 'Agora é sua vez!',
      enunciado: 'Sem olhar as instruções, execute: (1) Abra ME51N pelo campo de comando. (2) Volte ao Easy Access com F3. (3) Abra ME23N em NOVA janela com /o. (4) Feche a janela extra com /nex. (5) Adicione ME51N aos Favoritos. (6) Navegue pelo menu até encontrar MIGO (Logística > Adm. Materiais > Adm. de Estoques).',
      dados: {
        tcode_1: 'ME51N',
        tcode_2: 'ME23N',
        tcode_favorito: 'ME51N',
        tcode_localizar: 'MIGO'
      }
    },
    competencias_treinadas: [
      'Navegação no SAP GUI 770',
      'Campo de comando e T-Codes',
      'Atalhos /n, /o e /nex',
      'Árvore de menus SAP Easy Access',
      'Barra de status (mensagens)',
      'Favoritos pessoais'
    ],
    proxima_missao_id: 'MM-N1-002'
  },
  {
    id: 'MM-N1-002',
    titulo: 'Consultando o Estoque: Sua Primeira Pesquisa no SAP',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Estagiário de Suprimentos',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 15,
    contexto: 'Ainda na sua primeira semana, seu supervisor Eduardo Matsuda te chamou: "A produção está reclamando que não tem Aço Inox 304 Chapa 3mm suficiente para a ordem de fabricação de amanhã. Preciso que você entre no SAP e me diga AGORA quanto temos em estoque no depósito geral e no depósito de insumos. Me passa os números antes do almoço." Esta é sua primeira tarefa real no SAP.',
    objetivo: 'Acessar a transação MMBE (Resumo de Estoques) no SAP GUI 770, pesquisar o estoque do material Aço Inox 304 (código 200-001) e informar ao supervisor a quantidade disponível em cada depósito da planta São Paulo.',
    transacao_principal: 'MMBE',
    transacoes_secundarias: [],
    passos: [
      {
        id: 'MM-N1-002-p1',
        ordem: 1,
        titulo: 'Acessar a transação MMBE',
        instrucao: 'No campo de comando no canto superior esquerdo da tela SAP Easy Access, digite /nMMBE e pressione Enter. A tela "Resumo de Estoques" se abrirá.',
        explicacao_negocio: 'MMBE é a transação mais usada para consultar rapidamente quanto de um material existe em cada depósito. Todo profissional de suprimentos usa essa transação diariamente para responder à pergunta: "Temos estoque suficiente?"'
      },
      {
        id: 'MM-N1-002-p2',
        ordem: 2,
        titulo: 'Informar o código do Material',
        instrucao: 'No campo "Material" (primeiro campo da tela), digite 200-001 e pressione Tab. Se não souber o código exato, pressione F4 neste campo para abrir a janela de busca (Matchcode) onde você pode pesquisar por descrição.',
        explicacao_negocio: 'No SAP, todo material tem um código único. O F4 (Help de busca) é seu melhor amigo quando não sabe o código — ele funciona em praticamente todos os campos do SAP GUI 770.',
        dica: 'No F4, você pode digitar *inox* no campo de descrição para buscar por palavra-chave.'
      },
      {
        id: 'MM-N1-002-p3',
        ordem: 3,
        titulo: 'Informar o Centro (Plant)',
        instrucao: 'No campo "Centro", digite 1000 (Planta São Paulo). Pressione Tab para avançar.',
        explicacao_negocio: 'O Centro (Plant) representa a localização física — fábrica, filial ou CD. O estoque é controlado POR CENTRO, então você precisa especificar onde quer consultar.',
        erro_comum: 'Se deixar o Centro em branco e executar, o SAP mostrará estoque de TODOS os centros da empresa — pode confundir se você só precisa de uma planta.'
      },
      {
        id: 'MM-N1-002-p4',
        ordem: 4,
        titulo: 'Executar a pesquisa com F8',
        instrucao: 'Clique no ícone de relógio com tick (Execute) na barra de ferramentas ou pressione F8. A tela de resultados será exibida mostrando o estoque do material em cada depósito.',
        explicacao_negocio: 'F8 é o atalho universal de "Executar" no SAP. Sempre que você preencher uma tela de seleção e quiser ver os resultados, pressione F8.',
        erro_comum: 'Executar (F8) sem preencher o campo Material — o SAP tenta listar TODOS os materiais do centro e pode travar.'
      },
      {
        id: 'MM-N1-002-p5',
        ordem: 5,
        titulo: 'Ler os resultados por depósito',
        instrucao: 'Nos resultados, observe a estrutura hierárquica: Material 200-001 > Centro 1000 > Depósitos (0001 - Geral, 0010 - Insumos). Para cada depósito, observe as colunas: "Utilização livre" (disponível para uso), "Em controle qualidade" (retido para aprovação) e "Bloqueado".',
        explicacao_negocio: '"Utilização livre" é o que pode ser consumido pela produção imediatamente. "Controle de qualidade" precisa aprovação do QA. "Bloqueado" tem algum problema. Seu supervisor quer o número da coluna "Utilização livre".'
      },
      {
        id: 'MM-N1-002-p6',
        ordem: 6,
        titulo: 'Expandir detalhes do depósito',
        instrucao: 'Clique no ícone "+" ao lado do depósito 0001 (Depósito Geral) para expandir e ver detalhes como lote, data de entrada. Para recolher, clique no "-".',
        explicacao_negocio: 'Expandir o depósito mostra detalhes por lote e por fornecedor — importante para rastreabilidade de materiais.'
      },
      {
        id: 'MM-N1-002-p7',
        ordem: 7,
        titulo: 'Anotar os números e voltar',
        instrucao: 'Anote a quantidade de "Utilização livre" de cada depósito. Exemplo: Depósito 0001 = 450 KG, Depósito 0010 = 120 KG, Total = 570 KG. Após anotar, pressione F3 para voltar ao Easy Access.',
        explicacao_negocio: 'Sempre anote os números antes de sair — o SAP não mantém histórico de consultas. Para situações críticas, imprima a tela (Ctrl+P) ou faça screenshot.',
        dica: 'Para reportar ao supervisor: "Material 200-001 (Aço Inox 304), Centro 1000: Depósito Geral 450 KG, Depósito Insumos 120 KG, total 570 KG de utilização livre."'
      }
    ],
    erros_comuns: [
      'Executar sem Material — SAP tenta listar todos os materiais e pode travar',
      'Confundir "Utilização livre" com "Estoque total" — 500 KG total com 200 KG bloqueados = só 300 KG disponíveis',
      'Não especificar o Centro — mostra todos os centros e confunde a leitura',
      'Navegar para outra tela sem anotar os números'
    ],
    exercicio: {
      titulo: 'Agora é sua vez!',
      enunciado: 'Sem olhar as instruções, consulte os estoques abaixo e anote os resultados: (1) Material 100-456 (Resma Papel A4) no centro 1000. (2) Material 200-045 (Parafuso Sextavado M8x30) no centro 1000. (3) Tente executar SEM preencher o centro e observe o que acontece. (4) Use F4 no campo Material para buscar um material pela descrição.*',
      dados: {
        material_1: '100-456',
        material_2: '200-045',
        centro: '1000'
      }
    },
    competencias_treinadas: [
      'Transação MMBE',
      'Tela de seleção (Selection Screen) + F8',
      'Estrutura Material > Centro > Depósito',
      'Diferença Utilização Livre / Qualidade / Bloqueado',
      'F4 Help de busca por descrição'
    ],
    proxima_missao_id: 'MM-N1-003'
  },
  {
    id: 'MM-N1-003',
    titulo: 'Criando Sua Primeira Requisição de Compra (ME51N)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Estagiário de Suprimentos',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 20,
    contexto: 'Após consultar o estoque, você descobriu que as Resmas de Papel A4 no depósito geral estão zeradas. Seu supervisor Eduardo Matsuda disse: "Muito bem, você já sabe consultar estoque. Agora crie uma Requisição de Compra para 50 caixas de Resma de Papel A4. Preencha os dados e salve. O comprador vai transformar essa requisição em pedido." Esta é a primeira vez que você vai CRIAR um documento no SAP.',
    objetivo: 'Criar uma Requisição de Compra (Purchase Requisition) na transação ME51N para 50 caixas de Resma de Papel A4, com todos os dados organizacionais corretos (centro, depósito, grupo de compradores).',
    transacao_principal: 'ME51N',
    transacoes_secundarias: ['ME53N'],
    passos: [
      {
        id: 'MM-N1-003-p1',
        ordem: 1,
        titulo: 'Acessar a transação ME51N',
        instrucao: 'No campo de comando no canto superior esquerdo, digite /nME51N e pressione Enter. A tela "Criar Requisição de Compra" se abrirá.',
        explicacao_negocio: 'ME51N cria Requisições de Compra (Purchase Requisitions). A PR é o primeiro documento formal do P2P — é um "pedido interno" onde um departamento solicita ao setor de compras que adquira algo. Sem PR aprovada, não há compra autorizada.'
      },
      {
        id: 'MM-N1-003-p2',
        ordem: 2,
        titulo: 'Verificar o Tipo de Documento',
        instrucao: 'Na parte superior da tela, verifique o campo "Tipo de Documento". Ele deve estar com "NB" (Requisição Normal). Se estiver diferente, clique no campo e selecione "NB".',
        explicacao_negocio: '"NB" é o tipo padrão para requisições de compra normais. Outros tipos como "SERV" (serviços) têm regras diferentes. Como estagiário, você quase sempre usará NB.',
        dica: 'O campo Doc. Type geralmente já vem com NB como padrão. Apenas confirme antes de prosseguir.'
      },
      {
        id: 'MM-N1-003-p3',
        ordem: 3,
        titulo: 'Informar o Material na linha de item',
        instrucao: 'Na tabela de itens (parte inferior da tela), clique na primeira linha vazia da coluna "Material". Digite 100-456 e pressione Tab. O SAP preencherá automaticamente a descrição "Resma Papel A4 75g/m² 500fls" e a unidade de medida "CX".',
        explicacao_negocio: 'Ao informar o código do material, o SAP busca TODOS os dados cadastrados no Mestre de Materiais: descrição, unidade, grupo de mercadorias e dados de compra. Isso evita erros manuais.',
        erro_comum: 'Se a descrição não aparecer ao pressionar Tab, o código pode estar errado ou o material não existe no sistema. Use F4 para buscar.'
      },
      {
        id: 'MM-N1-003-p4',
        ordem: 4,
        titulo: 'Informar a Quantidade',
        instrucao: 'No campo "Quantidade de requisição" da linha do item, digite 50 e pressione Tab.',
        explicacao_negocio: 'A quantidade define o volume da compra. O comprador usará essa informação para negociar com fornecedores. Sempre confira a unidade de medida — 50 CX (caixas) é diferente de 50 UN (unidades).'
      },
      {
        id: 'MM-N1-003-p5',
        ordem: 5,
        titulo: 'Informar a Data de Remessa',
        instrucao: 'No campo "Data de remessa" (Delivery Date), digite 20.03.2026 (formato DD.MM.AAAA). Pressione Tab.',
        explicacao_negocio: 'A data de remessa indica quando você precisa do material. O comprador vai usar essa data para negociar prazos com fornecedores.',
        erro_comum: 'CUIDADO com o formato: o SAP GUI 770 usa DD.MM.AAAA (dia.mês.ano). Formato americano MM/DD pode gerar data errada silenciosamente.'
      },
      {
        id: 'MM-N1-003-p6',
        ordem: 6,
        titulo: 'Informar o Centro',
        instrucao: 'No campo "Centro", digite 1000 e pressione Tab.',
        explicacao_negocio: 'O Centro define ONDE o material será entregue. É fundamental para o SAP calcular lead times e verificar contratos por centro.',
        erro_comum: 'Esquecer de preencher o Centro é o erro #1 de iniciantes — o SAP bloqueia a gravação com mensagem vermelha.'
      },
      {
        id: 'MM-N1-003-p7',
        ordem: 7,
        titulo: 'Informar o Depósito',
        instrucao: 'No campo "Depósito" (Storage Location), digite 0001 (Depósito Geral) e pressione Tab.',
        explicacao_negocio: 'O depósito é o local físico dentro do centro onde o material será armazenado após a entrega. Depositar no lugar errado significa que o almoxarife não vai encontrar o material depois.'
      },
      {
        id: 'MM-N1-003-p8',
        ordem: 8,
        titulo: 'Informar o Grupo de Compradores',
        instrucao: 'No campo "Grupo compradores" (Purchasing Group), digite 001 e pressione Tab.',
        explicacao_negocio: 'O Grupo de Compradores define QUAL equipe de compras vai processar esta requisição. "001" é Compras Gerais. Preencher errado pode fazer a requisição ir para o comprador errado.'
      },
      {
        id: 'MM-N1-003-p9',
        ordem: 9,
        titulo: 'Pressionar Enter para validar',
        instrucao: 'Com todos os campos preenchidos na linha do item, pressione Enter. O SAP vai validar os dados. Se aparecer mensagem amarela na barra de status, leia com atenção — são avisos importantes.',
        explicacao_negocio: 'O Enter no SAP não salva o documento — ele VALIDA a linha atual. Se houver erro (campo obrigatório vazio, material não existe no centro), o SAP avisará agora, antes de salvar.',
        dica: 'Mensagens amarelas na barra de status são avisos. Mensagens vermelhas são erros que impedem salvar. Verdes são sucesso.'
      },
      {
        id: 'MM-N1-003-p10',
        ordem: 10,
        titulo: 'Salvar e anotar o número',
        instrucao: 'Clique no ícone de disquete (💾) na barra de ferramentas ou pressione Ctrl+S. Aguarde a mensagem verde na barra de status (parte inferior): "Requisição de compra XXXXXXXXXX criada". ANOTE ESSE NÚMERO!',
        explicacao_negocio: 'O número da requisição é como um "protocolo". Sem ele, você não consegue acompanhar o andamento. O comprador vai usar esse número para transformar a requisição em um pedido de compra.',
        erro_comum: 'O número aparece SOMENTE na barra de status (canto inferior esquerdo). Se navegar sem anotar, terá que buscar depois na ME53N.'
      }
    ],
    erros_comuns: [
      'Salvar (Ctrl+S) sem pressionar Enter antes — pode dar erro de dados incompletos na linha',
      'Esquecer o Centro — SAP bloqueia com mensagem vermelha, é o erro #1 de iniciantes',
      'Formato de data errado: use DD.MM.AAAA (ex: 20.03.2026), não o formato americano',
      'Não anotar o número da requisição da barra de status antes de navegar para outra tela'
    ],
    exercicio: {
      titulo: 'Agora é sua vez!',
      enunciado: 'Crie uma nova requisição de compra com os dados abaixo e anote o número gerado: Material 400-088 (Lubrificante Industrial 20L), Quantidade 15 GL, Data de remessa 25.03.2026, Centro 1000, Depósito 0010 (Depósito de Insumos), Grupo de compradores 003. Bônus: Tente criar com 2 itens na mesma tela adicionando outra linha.',
      dados: {
        material: '400-088',
        descricao: 'Lubrificante Industrial 20L',
        quantidade: '15',
        unidade: 'GL',
        data_remessa: '25.03.2026',
        centro: '1000',
        deposito: '0010',
        grupo_compradores: '003'
      }
    },
    competencias_treinadas: [
      'Transação ME51N',
      'Criação de Requisição de Compra (PR)',
      'Preenchimento campo a campo (Material, Qtd, Data, Centro, Depósito)',
      'Validação com Enter antes de salvar',
      'Leitura da barra de status para anotar número do documento'
    ],
    proxima_missao_id: 'MM-N1-004'
  },
  {
    id: 'MM-N1-004',
    titulo: 'Verificando o Status da Sua Requisição (ME53N)',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Estagiário de Suprimentos',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 15,
    contexto: 'Já se passaram 2 horas desde que você criou a requisição de compra. Seu supervisor Eduardo Matsuda perguntou: "E aí, já olhou o status da sua requisição? Preciso saber se o comprador já converteu em pedido ou se ainda está pendente de aprovação. Vai lá no SAP e me diz o que está acontecendo com aquele número que você anotou."',
    objetivo: 'Acessar a transação ME53N para visualizar a requisição criada na missão anterior, conferir se os dados estão corretos e entender o status de processamento do documento.',
    transacao_principal: 'ME53N',
    transacoes_secundarias: ['ME5A'],
    passos: [
      {
        id: 'MM-N1-004-p1',
        ordem: 1,
        titulo: 'Acessar a transação ME53N',
        instrucao: 'No campo de comando no canto superior esquerdo, digite /nME53N e pressione Enter. A tela "Exibir Requisição de Compra" se abrirá.',
        explicacao_negocio: 'ME53N é a transação para VISUALIZAR requisições. O "3" em ME53N indica modo de exibição (1=criar, 2=modificar, 3=exibir). No modo de exibição, você vê tudo mas não pode alterar nada — é seguro para um estagiário.',
        dica: 'Aprenda este padrão: ME51N (criar), ME52N (modificar), ME53N (exibir). Funciona igual para POs: ME21N, ME22N, ME23N.'
      },
      {
        id: 'MM-N1-004-p2',
        ordem: 2,
        titulo: 'Informar o número da Requisição',
        instrucao: 'No campo "Requisição de compra", digite o número que você anotou na missão anterior. Pressione Enter. Se não lembra o número, pressione F4 neste campo para buscar por data de criação, centro e material.',
        explicacao_negocio: 'Cada documento no SAP tem um número único — é a "chave" para acessar todas as informações. Se perdeu o número, a busca com F4 permite encontrar usando filtros.',
        erro_comum: 'Números de requisição têm 10 dígitos com zeros à esquerda (ex: 0010000125). Confira se digitou corretamente.'
      },
      {
        id: 'MM-N1-004-p3',
        ordem: 3,
        titulo: 'Conferir os dados do cabeçalho e dos itens',
        instrucao: 'Verifique: Tipo de Documento (NB), data de criação e criador (seu usuário) no cabeçalho. Na tabela de itens, confira: Material = 100-456, Quantidade = 50 CX, Data = 20.03.2026, Centro = 1000, Depósito = 0001.',
        explicacao_negocio: 'Conferir os dados garante que você está olhando o documento certo e que as informações estão como você preencheu. Dados errados fazem o comprador criar o pedido incorreto.',
        dica: 'Se qualquer dado estiver errado, use ME52N (Modificar) para corrigir — mas só se você tiver autorização.'
      },
      {
        id: 'MM-N1-004-p4',
        ordem: 4,
        titulo: 'Entender o Indicador de Processamento',
        instrucao: 'Na linha do item, observe a coluna com ícone de semáforo ou "Indicador de processamento". Vazio/cinza = não virou pedido ainda. Verde parcial = parte da quantidade já foi pedida. Verde completo = toda a quantidade virou pedido.',
        explicacao_negocio: 'O indicador de processamento responde diretamente à pergunta do supervisor: "O comprador já fez o pedido?" Se estiver vazio, a resposta é não.',
        erro_comum: 'Não confunda "Indicador de processamento" (se virou pedido) com "Indicador de liberação" (se foi aprovado). São status diferentes.'
      },
      {
        id: 'MM-N1-004-p5',
        ordem: 5,
        titulo: 'Verificar Status de Liberação (Aprovação)',
        instrucao: 'Nos detalhes do item, clique na aba "Dados do documento" ou "Release Data". Observe o campo "Indicador de liberação". "X" ou check verde = aprovada. Vazio = aguardando aprovação.',
        explicacao_negocio: 'Muitas empresas exigem aprovação da requisição antes do comprador poder transformá-la em pedido. Gerentes aprovam requisições acima de certos valores. Se não liberada, o próximo passo é a aprovação — não a compra.'
      },
      {
        id: 'MM-N1-004-p6',
        ordem: 6,
        titulo: 'Reportar ao supervisor e voltar',
        instrucao: 'Pressione F3 para voltar. Reporte ao supervisor com estas informações: número da requisição, material e quantidade, status de processamento (virou pedido ou não) e status de liberação (aprovada ou não).',
        explicacao_negocio: 'Saber reportar o status de forma objetiva é uma habilidade profissional. Seu supervisor não quer "tá lá no SAP" — quer ouvir: "Requisição 0010000125, 50 cx de Papel A4, ainda não processada, aguardando liberação."'
      }
    ],
    erros_comuns: [
      'Confundir ME53N (Exibir) com ME52N (Modificar) — em ME52N você pode alterar acidentalmente',
      'Número com dígitos errados — requisições têm 10 dígitos, sempre confira os zeros',
      '"Indicador de processamento" ≠ "Indicador de liberação" — são status completamente diferentes'
    ],
    exercicio: {
      titulo: 'Agora é sua vez!',
      enunciado: 'Consulte a requisição do Lubrificante que você criou no exercício anterior: (1) Abra ME53N e informe o número. (2) Confira material 400-088, 15 GL, depósito 0010. (3) Verifique o indicador de processamento. (4) Use F4 no campo de requisição e filtre pela data de hoje para ver todas as requisições que você criou.',
      dados: {
        tcode: 'ME53N',
        material_esperado: '400-088',
        quantidade_esperada: '15',
        deposito_esperado: '0010'
      }
    },
    competencias_treinadas: [
      'Transação ME53N (Exibir Requisição)',
      'Padrão SAP: 1=Criar, 2=Modificar, 3=Exibir',
      'Leitura do Indicador de Processamento',
      'Status de Liberação/Aprovação',
      'Reportar status de documento de forma objetiva'
    ],
    proxima_missao_id: 'MM-N1-005'
  },
  {
    id: 'MM-N1-005',
    titulo: 'Entendendo um Pedido de Compra: O Documento que Fala com o Fornecedor',
    modulo: 'MM',
    processo: 'P2P',
    nivel: 'iniciante',
    cargo: 'Estagiário de Suprimentos',
    empresa_ficticia: 'Metalúrgica Paulista Ltda',
    tempo_estimado_minutos: 20,
    contexto: 'Sua requisição de papel A4 foi aprovada e a compradora sênior Ana Beatriz já a transformou em um Pedido de Compra junto ao fornecedor Papelaria Central Ltda. Eduardo Matsuda quer que você aprenda a ler um PO: "Abre o pedido número 4500001234 e me explica: fornecedor, valor total, condição de pagamento e data de entrega. Se você conseguir ler um PO sozinho, já pode começar a acompanhar os pedidos do departamento."',
    objetivo: 'Abrir e interpretar um Pedido de Compra (Purchase Order) na transação ME23N, identificando fornecedor, itens, valores, condições de pagamento e status de entrega.',
    transacao_principal: 'ME23N',
    transacoes_secundarias: ['ME2M'],
    passos: [
      {
        id: 'MM-N1-005-p1',
        ordem: 1,
        titulo: 'Acessar a transação ME23N',
        instrucao: 'No campo de comando no canto superior esquerdo, digite /nME23N e pressione Enter. A tela "Exibir Pedido de Compra" se abrirá.',
        explicacao_negocio: 'ME23N segue o mesmo padrão: "3" = Exibir. O PO (Purchase Order) é o documento EXTERNO — é ele que é enviado ao fornecedor e representa o compromisso formal de compra.'
      },
      {
        id: 'MM-N1-005-p2',
        ordem: 2,
        titulo: 'Informar o número do Pedido',
        instrucao: 'No campo "Pedido de Compra", digite 4500001234 e pressione Enter. Se não tiver um número específico, pressione F4 e pesquise por fornecedor (100023) ou por data de criação.',
        explicacao_negocio: 'Pedidos de compra no SAP geralmente começam com "45" (faixa de numeração padrão). Requisições começam com "10". Saber identificar o tipo de documento pelo prefixo é uma habilidade que se desenvolve com o tempo.',
        erro_comum: 'Se a ME23N abrir o ÚLTIMO pedido visualizado (e não um campo vazio), clique no ícone "Outro pedido" (binóculos) na barra de ferramentas para pesquisar outro número.'
      },
      {
        id: 'MM-N1-005-p3',
        ordem: 3,
        titulo: 'Ler o Cabeçalho — Fornecedor e Organização',
        instrucao: 'Na parte superior, localize: Fornecedor (100023 / Papelaria Central Ltda.), Tipo de documento (NB), Organização de compras (1000) e Grupo de compradores (001).',
        explicacao_negocio: 'O fornecedor é a contraparte externa — é para ele que a empresa está se comprometendo a pagar. A org. de compras define as autoridades de negociação.',
        erro_comum: 'NUNCA abra ME22N (Modificar) pensando que é ME23N. Em ME22N você pode alterar o pedido por engano e ele vai errado ao fornecedor.'
      },
      {
        id: 'MM-N1-005-p4',
        ordem: 4,
        titulo: 'Verificar Condições de Pagamento',
        instrucao: 'Clique na aba "Condições de pagamento" ou "Payment Terms" no cabeçalho (pode estar dentro de "Dados do cabeçalho" ou "Administração"). Observe o código da condição (ex: Z030 = 30 dias).',
        explicacao_negocio: 'As condições de pagamento afetam o fluxo de caixa. "30 dias" significa que após o fornecedor emitir a nota fiscal e a empresa verificar, o pagamento será feito em 30 dias. Prazos maiores beneficiam a empresa.'
      },
      {
        id: 'MM-N1-005-p5',
        ordem: 5,
        titulo: 'Analisar os Itens do Pedido',
        instrucao: 'Na tabela de itens, confira: Material (100-456), Texto breve (Resma Papel A4), Quantidade (50 CX), Preço líquido (ex: R$ 185,00/CX), Valor total (50 × 185 = R$ 9.250,00), Centro (1000).',
        explicacao_negocio: 'Cada linha de item é um compromisso financeiro real. O pedido de compra é juridicamente vinculante — quando o fornecedor recebe, ele tem direito de entregar e cobrar.',
        erro_comum: 'Preço no pedido diferente da cotação causa bloqueio na verificação de fatura (MIRO) depois. Sempre confira os preços.'
      },
      {
        id: 'MM-N1-005-p6',
        ordem: 6,
        titulo: 'Verificar o Histórico do Pedido',
        instrucao: 'Selecione a linha do item 10 e vá no menu "Ambiente" > "Histórico do pedido de compra" (ou clique no ícone de lista com relógio na barra de ferramentas). A tela mostrará se já houve Entrada de Mercadoria (GR) e Verificação de Fatura (IR).',
        explicacao_negocio: 'O histórico de pedido é a "radiografia" do fluxo P2P. GR = material já chegou. IR = nota fiscal já registrada. Se ambas existem, o pagamento pode ser processado.'
      },
      {
        id: 'MM-N1-005-p7',
        ordem: 7,
        titulo: 'Reportar ao supervisor e voltar',
        instrucao: 'Pressione F3 para voltar. Reporte: "Pedido 4500001234, fornecedor Papelaria Central (100023), 50 cx de Resma A4 a R$185/cx, total R$9.250, pagamento em 30 dias. Material ainda não entregue nem faturado."',
        explicacao_negocio: 'Um report conciso com número, fornecedor, material, valor, condição de pagamento e status é exatamente o que gestores esperam. Esta é a diferença entre "usar o SAP" e "dominar o SAP".',
        dica: 'Anote sempre: nº PO, fornecedor, material, valor total, condição de pagamento e status do histórico.'
      }
    ],
    erros_comuns: [
      'Confundir ME23N (Exibir) com ME22N (Modificar) — em ME22N alterações vão para o fornecedor',
      'ME23N abre o último pedido visualizado — use o ícone "Outro pedido" (binóculos) para buscar outro',
      'Preço diferente da cotação — causa bloqueio na MIRO depois',
      'Pedido "Bloqueado" no status — não tente desbloquear, informe o comprador responsável'
    ],
    exercicio: {
      titulo: 'Agora é sua vez!',
      enunciado: 'Use F4 na ME23N para encontrar pedidos do fornecedor 100045 (Aço Inox Sul S.A.) no centro 1000. Abra um dos pedidos e identifique: fornecedor, material, quantidade, preço unitário, valor total e condição de pagamento. Verifique o histórico de entregas. Monte um report completo para o supervisor.',
      dados: {
        fornecedor: '100045',
        nome_fornecedor: 'Aço Inox Sul S.A.',
        centro: '1000'
      }
    },
    competencias_treinadas: [
      'Transação ME23N (Exibir Pedido de Compra)',
      'Leitura do cabeçalho do PO (fornecedor, org. compras)',
      'Condições de pagamento',
      'Análise de itens (material, quantidade, preço)',
      'Histórico do Pedido (GR e IR)',
      'Report profissional de status do pedido'
    ],
    proxima_missao_id: 'MM-P2P-001'
  }
]

// ═══════════════════════════════════════════════════════
// MISSÕES ORIGINAIS P2P (mantidas sem alteração)
// ═══════════════════════════════════════════════════════
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

export const TODAS_MISSOES: Missao[] = [...MISSOES_NIVEL1_MM, ...MISSOES_P2P]
