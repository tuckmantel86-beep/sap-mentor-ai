# SAP Mentor AI - MVP (Fase 1)

Plataforma de treinamento que guia profissionais a executar tarefas reais no SAP. O usuário recebe missões corporativas e é guiado passo a passo no SAP GUI instalado em seu computador.

## Stack Tecnológico

- **React 19** - UI moderna
- **TypeScript** - Type safety
- **Vite 7** - Build tool rápido
- **Tailwind CSS v4** - Estilos (usando `@import "tailwindcss"`)
- **Zustand v5** - State management
- **React Router DOM v6** - Roteamento
- **Lucide React** - Ícones
- **Supabase** - Backend (opcional)
- **Claude API** - Mentor IA

## Estrutura do Projeto

```
src/
├── components/
│   ├── Layout.tsx              # Layout principal (sidebar + outlet)
│   ├── MissaoCard.tsx          # Card de missão reutilizável
│   └── ChatMentor.tsx          # Chat com IA mentor
├── data/
│   └── missoes.ts             # 6 missões completas P2P
├── pages/
│   ├── OnboardingPage.tsx     # Boas-vindas e cadastro
│   ├── DashboardPage.tsx      # Home com estatísticas
│   ├── MissoesPage.tsx        # Catálogo de missões com filtros
│   ├── MissaoPage.tsx         # Página da missão (3 colunas)
│   └── PerfilPage.tsx         # Perfil do usuário
├── store/
│   ├── useAuthStore.ts        # Autenticação e perfil
│   ├── useProgressStore.ts    # Progresso das missões
│   └── useMentorStore.ts      # Chat IA
├── types/
│   └── index.ts               # Tipos TypeScript
├── App.tsx                     # Router principal
├── main.tsx                    # Entry point
└── index.css                   # Tailwind CSS v4

```

## Features da Fase 1

### 1. Onboarding
- Coleta de nome, módulo de interesse e objetivo
- 3 passos com design moderno

### 2. Dashboard
- Saudação personalizada
- 4 cards de estatísticas (missões, XP, nível, módulo)
- Próxima missão recomendada em destaque
- Grade de últimas missões

### 3. Catálogo de Missões
- Filtros por módulo, nível e processo
- 6 missões P2P completas
- Status visual (concluída, em andamento, não iniciada)

### 4. Página da Missão (3 colunas)
- **Esquerda:** Navegação (passos com checkboxes, progresso)
- **Centro:** Conteúdo do passo (instrução, explicação, dica, erro comum)
- **Direita:** Chat com mentor IA

### 5. Chat Mentor IA
- Integração Claude API
- Contexto da missão enviado automaticamente
- Botão "Estou travado" para ajuda rápida
- Fallback offline com mensagem genérica

### 6. Perfil do Usuário
- Avatar e informações pessoais
- Estatísticas (missões, XP, nível)
- Mapa de progresso na trilha P2P
- Competências desenvolvidas

## Missões Incluídas

### Processo P2P (Procure to Pay)
1. **MM-P2P-001:** Criar Requisição (ME51N) - Iniciante
2. **MM-P2P-002:** Criar Ordem de Compra (ME21N) - Iniciante
3. **MM-P2P-003:** Registrar Recebimento (MIGO) - Iniciante
4. **MM-P2P-004:** Registrar Fatura (MIRO) - Intermediário
5. **MM-P2P-005:** Consultar Estoque (MMBE) - Iniciante
6. **MM-P2P-006:** Fluxo Completo P2P - Avançado

Cada missão contém:
- Contexto narrativo
- 6-8 passos detalhados
- Explicações de negócio
- Dicas e erros comuns
- Exercício prático
- Competências treinadas

## Setup e Execução

### Instalação

```bash
cd /sessions/zealous-zen-hamilton/sap-mentor-ai
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173

### Build

```bash
npm run build
```

Saída em `/dist`

## Variáveis de Ambiente

Crie `.env.local`:

```env
VITE_CLAUDE_API_KEY=sua-chave-api
VITE_SUPABASE_URL=sua-url
VITE_SUPABASE_ANON_KEY=sua-chave
```

## Design System

- **Cores principais:** Azul (#3b82f6), Slate-950, Slate-900
- **Fonte:** Inter
- **Componentes:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Modo:** Dark theme moderno

## Notas Técnicas

- TypeScript com zero erros
- Zustand com persist middleware para localStorage
- React Router v6 com proteção de rotas
- Tailwind v4 sem arquivo de config (plugin @tailwindcss/vite)
- Supabase schema incluído (SQL pronto para deploy)

## Próximos Passos (Fase 2)

- Integração Supabase para persistência
- Autenticação com Auth0/Supabase
- Métricas e analytics
- Mais processos SAP (O2C, R2R)
- Certificados digitais
- Leaderboard
