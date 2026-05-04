-- ============================================================
-- Nonoman Galuh – Supabase Migration
-- Run this in the Supabase SQL editor (Project → SQL Editor)
-- Safe to run multiple times (IF NOT EXISTS on all tables)
-- ============================================================

-- ─── Create tables ─────────────────────────────────────────

CREATE TABLE IF NOT EXISTS berita (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  judul      text NOT NULL,
  ringkasan  text,
  konten     text,
  gambar_url text,
  tanggal    text,
  slug       text UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Add konten column if table already exists without it
ALTER TABLE berita ADD COLUMN IF NOT EXISTS konten text;

-- Add slug + new content columns for agenda, tokoh, buku
ALTER TABLE agenda ADD COLUMN IF NOT EXISTS slug text UNIQUE;
ALTER TABLE tokoh ADD COLUMN IF NOT EXISTS slug text UNIQUE;
ALTER TABLE tokoh ADD COLUMN IF NOT EXISTS biografi text;
ALTER TABLE buku  ADD COLUMN IF NOT EXISTS slug text UNIQUE;
ALTER TABLE buku  ADD COLUMN IF NOT EXISTS deskripsi text;

CREATE TABLE IF NOT EXISTS artikel_budaya (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  judul      text NOT NULL,
  penulis    text,
  tanggal    text,
  slug       text UNIQUE,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS agenda (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama       text NOT NULL,
  deskripsi  text,
  lokasi     text,
  tanggal    text,
  gambar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tokoh (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama       text NOT NULL,
  jabatan    text,
  bidang     text,
  foto_url   text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS buku (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  judul      text NOT NULL,
  penulis    text,
  tahun      text,
  cover_url  text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS kanal_youtube (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url        text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tim_pengelola (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama       text,
  jabatan    text,
  tipe       text CHECK (tipe IN ('pengelola', 'kontributor')),
  wilayah    text,
  urutan     int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- ─── Enable RLS on all tables ──────────────────────────────

ALTER TABLE berita            ENABLE ROW LEVEL SECURITY;
ALTER TABLE artikel_budaya    ENABLE ROW LEVEL SECURITY;
ALTER TABLE agenda            ENABLE ROW LEVEL SECURITY;
ALTER TABLE tokoh             ENABLE ROW LEVEL SECURITY;
ALTER TABLE buku              ENABLE ROW LEVEL SECURITY;
ALTER TABLE kanal_youtube     ENABLE ROW LEVEL SECURITY;
ALTER TABLE tim_pengelola     ENABLE ROW LEVEL SECURITY;

-- ─── Public SELECT policies ────────────────────────────────

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_berita') THEN
    CREATE POLICY "public_select_berita" ON berita FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_artikel_budaya') THEN
    CREATE POLICY "public_select_artikel_budaya" ON artikel_budaya FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_agenda') THEN
    CREATE POLICY "public_select_agenda" ON agenda FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_tokoh') THEN
    CREATE POLICY "public_select_tokoh" ON tokoh FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_buku') THEN
    CREATE POLICY "public_select_buku" ON buku FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_kanal_youtube') THEN
    CREATE POLICY "public_select_kanal_youtube" ON kanal_youtube FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_select_tim_pengelola') THEN
    CREATE POLICY "public_select_tim_pengelola" ON tim_pengelola FOR SELECT TO anon, authenticated USING (true);
  END IF;
END $$;

-- ─── Authenticated INSERT / UPDATE / DELETE policies ───────

DO $$ BEGIN
  -- berita
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_berita') THEN
    CREATE POLICY "auth_insert_berita" ON berita FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_berita') THEN
    CREATE POLICY "auth_update_berita" ON berita FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_berita') THEN
    CREATE POLICY "auth_delete_berita" ON berita FOR DELETE TO authenticated USING (true);
  END IF;

  -- artikel_budaya
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_artikel_budaya') THEN
    CREATE POLICY "auth_insert_artikel_budaya" ON artikel_budaya FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_artikel_budaya') THEN
    CREATE POLICY "auth_update_artikel_budaya" ON artikel_budaya FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_artikel_budaya') THEN
    CREATE POLICY "auth_delete_artikel_budaya" ON artikel_budaya FOR DELETE TO authenticated USING (true);
  END IF;

  -- agenda
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_agenda') THEN
    CREATE POLICY "auth_insert_agenda" ON agenda FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_agenda') THEN
    CREATE POLICY "auth_update_agenda" ON agenda FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_agenda') THEN
    CREATE POLICY "auth_delete_agenda" ON agenda FOR DELETE TO authenticated USING (true);
  END IF;

  -- tokoh
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_tokoh') THEN
    CREATE POLICY "auth_insert_tokoh" ON tokoh FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_tokoh') THEN
    CREATE POLICY "auth_update_tokoh" ON tokoh FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_tokoh') THEN
    CREATE POLICY "auth_delete_tokoh" ON tokoh FOR DELETE TO authenticated USING (true);
  END IF;

  -- buku
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_buku') THEN
    CREATE POLICY "auth_insert_buku" ON buku FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_buku') THEN
    CREATE POLICY "auth_update_buku" ON buku FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_buku') THEN
    CREATE POLICY "auth_delete_buku" ON buku FOR DELETE TO authenticated USING (true);
  END IF;

  -- kanal_youtube
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_kanal_youtube') THEN
    CREATE POLICY "auth_insert_kanal_youtube" ON kanal_youtube FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_kanal_youtube') THEN
    CREATE POLICY "auth_update_kanal_youtube" ON kanal_youtube FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_kanal_youtube') THEN
    CREATE POLICY "auth_delete_kanal_youtube" ON kanal_youtube FOR DELETE TO authenticated USING (true);
  END IF;

  -- tim_pengelola
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_insert_tim_pengelola') THEN
    CREATE POLICY "auth_insert_tim_pengelola" ON tim_pengelola FOR INSERT TO authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_update_tim_pengelola') THEN
    CREATE POLICY "auth_update_tim_pengelola" ON tim_pengelola FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'auth_delete_tim_pengelola') THEN
    CREATE POLICY "auth_delete_tim_pengelola" ON tim_pengelola FOR DELETE TO authenticated USING (true);
  END IF;
END $$;

-- ─── Storage bucket for image uploads ──────────────────────

INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO NOTHING;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'uploads_public_read' AND tablename = 'objects') THEN
    CREATE POLICY "uploads_public_read" ON storage.objects FOR SELECT USING (bucket_id = 'uploads');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'uploads_auth_insert' AND tablename = 'objects') THEN
    CREATE POLICY "uploads_auth_insert" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'uploads');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'uploads_auth_update' AND tablename = 'objects') THEN
    CREATE POLICY "uploads_auth_update" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'uploads');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'uploads_auth_delete' AND tablename = 'objects') THEN
    CREATE POLICY "uploads_auth_delete" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'uploads');
  END IF;
END $$;
