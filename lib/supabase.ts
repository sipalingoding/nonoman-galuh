import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      berita: {
        Row: {
          id: string;
          judul: string;
          ringkasan: string;
          gambar_url: string | null;
          kategori: string;
          tanggal: string;
          slug: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["berita"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["berita"]["Insert"]>;
      };
      artikel_budaya: {
        Row: {
          id: string;
          judul: string;
          kategori: string;
          penulis: string;
          tanggal: string;
          slug: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["artikel_budaya"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["artikel_budaya"]["Insert"]>;
      };
      agenda: {
        Row: {
          id: string;
          nama: string;
          deskripsi: string;
          gambar_url: string | null;
          tanggal: string;
          lokasi: string;
          kategori: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["agenda"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["agenda"]["Insert"]>;
      };
      tokoh: {
        Row: {
          id: string;
          nama: string;
          jabatan: string;
          foto_url: string | null;
          bidang: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["tokoh"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["tokoh"]["Insert"]>;
      };
      buku: {
        Row: {
          id: string;
          judul: string;
          penulis: string;
          cover_url: string | null;
          tahun: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["buku"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["buku"]["Insert"]>;
      };
      kanal_youtube: {
        Row: {
          id: string;
          url: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["kanal_youtube"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["kanal_youtube"]["Insert"]>;
      };
      tim_pengelola: {
        Row: {
          id: string;
          nama: string | null;
          jabatan: string | null;
          tipe: "pengelola" | "kontributor" | null;
          wilayah: string | null;
          urutan: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["tim_pengelola"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["tim_pengelola"]["Insert"]>;
      };
    };
  };
};
