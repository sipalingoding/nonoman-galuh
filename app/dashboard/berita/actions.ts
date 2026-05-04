"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

function makeSlug(judul: string) {
  return judul.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

const MONTHS = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
function formatTanggalID(iso: string): string {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${parseInt(day)} ${MONTHS[parseInt(month) - 1]} ${year}`;
}

async function uploadFoto(supabase: any, file: File, folder: string): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${folder}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from("uploads").upload(path, file, { contentType: file.type, upsert: true });
  if (error) return null;
  return supabase.storage.from("uploads").getPublicUrl(path).data.publicUrl as string;
}

export async function createBerita(formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const gambar_url = (await uploadFoto(supabase, file, "berita")) ?? ((formData.get("existing_gambar_url") as string) || null);
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("berita").insert({
    judul,
    ringkasan: formData.get("ringkasan") as string,
    konten: formData.get("konten") as string,
    gambar_url,
    tanggal: formatTanggalID(formData.get("tanggal") as string),
    slug: makeSlug(judul),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/berita");
  revalidatePath("/berita");
  revalidatePath("/");
}

export async function updateBerita(id: string, formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const gambar_url = (await uploadFoto(supabase, file, "berita")) ?? ((formData.get("existing_gambar_url") as string) || null);
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("berita").update({
    judul,
    ringkasan: formData.get("ringkasan") as string,
    konten: formData.get("konten") as string,
    gambar_url,
    tanggal: formatTanggalID(formData.get("tanggal") as string),
    slug: makeSlug(judul),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/berita");
  revalidatePath("/berita");
  revalidatePath("/");
}

export async function deleteBerita(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("berita").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/berita");
  revalidatePath("/");
}
