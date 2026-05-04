"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

function makeSlug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");
}

async function uploadFoto(supabase: any, file: File, folder: string): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${folder}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from("uploads").upload(path, file, { contentType: file.type, upsert: true });
  if (error) return null;
  return supabase.storage.from("uploads").getPublicUrl(path).data.publicUrl as string;
}

export async function createBuku(formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const cover_url = (await uploadFoto(supabase, file, "buku")) ?? ((formData.get("existing_cover_url") as string) || null);
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("buku").insert({
    judul,
    penulis: formData.get("penulis") as string,
    tahun: parseInt(formData.get("tahun") as string, 10),
    deskripsi: formData.get("deskripsi") as string,
    cover_url,
    slug: makeSlug(judul),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/buku");
  revalidatePath("/buku");
  revalidatePath("/");
}

export async function updateBuku(id: string, formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const cover_url = (await uploadFoto(supabase, file, "buku")) ?? ((formData.get("existing_cover_url") as string) || null);
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("buku").update({
    judul,
    penulis: formData.get("penulis") as string,
    tahun: parseInt(formData.get("tahun") as string, 10),
    deskripsi: formData.get("deskripsi") as string,
    cover_url,
    slug: makeSlug(judul),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/buku");
  revalidatePath("/buku");
  revalidatePath("/");
}

export async function deleteBuku(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("buku").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/buku");
  revalidatePath("/");
}
