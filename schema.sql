-- ================================
-- 1. 콘텐츠 테이블
-- ================================
CREATE TABLE IF NOT EXISTS contents (
  id                 bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title              text NOT NULL,
  master_text        text,
  status             text DEFAULT 'draft',
  scheduled_at       text,
  platforms          text[]         DEFAULT '{}',
  platform_drafts    jsonb          DEFAULT '{}',
  publish_results    jsonb          DEFAULT '{}',
  registrant         text,
  registered_at      text,
  first_published_at text,
  updated_at         text,
  created_at         timestamptz    DEFAULT now()
);

-- ================================
-- 2. 설정 테이블
-- ================================
CREATE TABLE IF NOT EXISTS settings (
  key        text PRIMARY KEY,
  value      jsonb,
  updated_at timestamptz DEFAULT now()
);

-- ================================
-- 3. SNS 자격증명 테이블
-- ================================
CREATE TABLE IF NOT EXISTS sns_credentials (
  platform     text PRIMARY KEY,
  credentials  jsonb  DEFAULT '{}',
  is_connected boolean DEFAULT false,
  updated_at   timestamptz DEFAULT now()
);

INSERT INTO sns_credentials (platform) VALUES
  ('twitter'), ('instagram'), ('facebook'), ('youtube'), ('threads')
ON CONFLICT (platform) DO NOTHING;

-- ================================
-- 4. 서비스 자격증명 테이블
-- ================================
CREATE TABLE IF NOT EXISTS service_credentials (
  service      text PRIMARY KEY,
  credentials  jsonb  DEFAULT '{}',
  is_connected boolean DEFAULT false,
  updated_at   timestamptz DEFAULT now()
);

INSERT INTO service_credentials (service) VALUES
  ('supabase'), ('github'), ('vercel'), ('googleSheet'), ('openai')
ON CONFLICT (service) DO NOTHING;

-- ================================
-- 5. 멤버 테이블
-- ================================
CREATE TABLE IF NOT EXISTS members (
  id              bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name            text NOT NULL,
  email           text UNIQUE NOT NULL,
  joined_at       text,
  approval_status text DEFAULT 'pending',
  role            text DEFAULT 'operator',
  created_at      timestamptz DEFAULT now()
);
