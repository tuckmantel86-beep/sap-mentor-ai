-- SAP Mentor AI - Schema do Supabase
-- Versão 1.0

-- Tabela de usuários/perfis
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  nivel VARCHAR(50) NOT NULL DEFAULT 'estagiario',
  modulo_interesse VARCHAR(10) NOT NULL,
  objetivo VARCHAR(100) NOT NULL,
  missoes_concluidas INTEGER DEFAULT 0,
  xp_total INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de missões
CREATE TABLE IF NOT EXISTS missoes (
  id VARCHAR(50) PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  modulo VARCHAR(10) NOT NULL,
  processo VARCHAR(10) NOT NULL,
  nivel VARCHAR(20) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  empresa_ficticia VARCHAR(150) NOT NULL,
  tempo_estimado_minutos INTEGER NOT NULL,
  contexto TEXT NOT NULL,
  objetivo TEXT NOT NULL,
  transacao_principal VARCHAR(20) NOT NULL,
  transacoes_secundarias TEXT[], -- Array de transações
  erros_comuns TEXT[],
  competencias_treinadas TEXT[],
  proxima_missao_id VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de passos da missão
CREATE TABLE IF NOT EXISTS missao_passos (
  id VARCHAR(100) PRIMARY KEY,
  missao_id VARCHAR(50) NOT NULL REFERENCES missoes(id) ON DELETE CASCADE,
  ordem INTEGER NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  instrucao TEXT NOT NULL,
  explicacao_negocio TEXT NOT NULL,
  dica TEXT,
  erro_comum TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de exercícios das missões
CREATE TABLE IF NOT EXISTS missao_exercicios (
  id VARCHAR(100) PRIMARY KEY,
  missao_id VARCHAR(50) NOT NULL UNIQUE REFERENCES missoes(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL,
  enunciado TEXT NOT NULL,
  dados JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de progresso do usuário
CREATE TABLE IF NOT EXISTS progresso_missoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  missao_id VARCHAR(50) NOT NULL REFERENCES missoes(id) ON DELETE CASCADE,
  status VARCHAR(30) NOT NULL DEFAULT 'nao_iniciada',
  passos_concluidos VARCHAR(100)[] DEFAULT '{}',
  iniciada_em TIMESTAMP WITH TIME ZONE,
  concluida_em TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
  UNIQUE(user_id, missao_id)
);

-- Tabela de threads de conversa IA
CREATE TABLE IF NOT EXISTS mentor_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  missao_id VARCHAR(50) NOT NULL,
  thread_id VARCHAR(100),
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE,
  FOREIGN KEY (missao_id) REFERENCES missoes(id) ON DELETE CASCADE
);

-- Índices para performance
CREATE INDEX idx_user_profiles_email ON user_profiles(email);
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_missoes_modulo ON missoes(modulo);
CREATE INDEX idx_missoes_processo ON missoes(processo);
CREATE INDEX idx_missoes_nivel ON missoes(nivel);
CREATE INDEX idx_missao_passos_missao_id ON missao_passos(missao_id);
CREATE INDEX idx_missao_passos_ordem ON missao_passos(missao_id, ordem);
CREATE INDEX idx_progresso_user_id ON progresso_missoes(user_id);
CREATE INDEX idx_progresso_missao_id ON progresso_missoes(missao_id);
CREATE INDEX idx_progresso_status ON progresso_missoes(status);
CREATE INDEX idx_mentor_conversations_user_id ON mentor_conversations(user_id);
CREATE INDEX idx_mentor_conversations_missao_id ON mentor_conversations(missao_id);

-- Triggers para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_missoes_updated_at
BEFORE UPDATE ON missoes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_missao_passos_updated_at
BEFORE UPDATE ON missao_passos
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_missao_exercicios_updated_at
BEFORE UPDATE ON missao_exercicios
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progresso_missoes_updated_at
BEFORE UPDATE ON progresso_missoes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mentor_conversations_updated_at
BEFORE UPDATE ON mentor_conversations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)

-- user_profiles: Usuário só vê seu próprio perfil
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_profiles_read_own
ON user_profiles
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY user_profiles_update_own
ON user_profiles
FOR UPDATE
USING (user_id = auth.uid());

-- missoes: Todos podem ler
ALTER TABLE missoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY missoes_read_all
ON missoes
FOR SELECT
USING (true);

-- progresso_missoes: Usuário só vê seu próprio progresso
ALTER TABLE progresso_missoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY progresso_read_own
ON progresso_missoes
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY progresso_insert_own
ON progresso_missoes
FOR INSERT
WITH CHECK (user_id = auth.uid());

CREATE POLICY progresso_update_own
ON progresso_missoes
FOR UPDATE
USING (user_id = auth.uid());

-- mentor_conversations: Usuário só vê suas conversas
ALTER TABLE mentor_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY mentor_conversations_read_own
ON mentor_conversations
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY mentor_conversations_insert_own
ON mentor_conversations
FOR INSERT
WITH CHECK (user_id = auth.uid());

CREATE POLICY mentor_conversations_update_own
ON mentor_conversations
FOR UPDATE
USING (user_id = auth.uid());
