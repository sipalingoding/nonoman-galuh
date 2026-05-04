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

export async function createTokoh(formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const foto_url = (await uploadFoto(supabase, file, "tokoh")) ?? ((formData.get("existing_foto_url") as string) || null);
  const nama = formData.get("nama") as string;
  const { error } = await supabase.from("tokoh").insert({
    nama,
    jabatan: formData.get("jabatan") as string,
    bidang: formData.get("bidang") as string,
    biografi: formData.get("biografi") as string,
    foto_url,
    slug: makeSlug(nama),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/tokoh");
  revalidatePath("/tokoh");
  revalidatePath("/");
}

export async function updateTokoh(id: string, formData: FormData) {
  const supabase = await createClient();
  const file = formData.get("foto") as File;
  const foto_url = (await uploadFoto(supabase, file, "tokoh")) ?? ((formData.get("existing_foto_url") as string) || null);
  const nama = formData.get("nama") as string;
  const { error } = await supabase.from("tokoh").update({
    nama,
    jabatan: formData.get("jabatan") as string,
    bidang: formData.get("bidang") as string,
    biografi: formData.get("biografi") as string,
    foto_url,
    slug: makeSlug(nama),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/tokoh");
  revalidatePath("/tokoh");
  revalidatePath("/");
}

export async function deleteTokoh(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("tokoh").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/tokoh");
  revalidatePath("/");
}
