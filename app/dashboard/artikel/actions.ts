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

export async function createArtikel(formData: FormData) {
  const supabase = await createClient();
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("artikel_budaya").insert({
    judul,
    penulis: formData.get("penulis") as string,
    tanggal: formatTanggalID(formData.get("tanggal") as string),
    slug: makeSlug(judul),
  });
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/artikel");
  revalidatePath("/");
}

export async function updateArtikel(id: string, formData: FormData) {
  const supabase = await createClient();
  const judul = formData.get("judul") as string;
  const { error } = await supabase.from("artikel_budaya").update({
    judul,
    penulis: formData.get("penulis") as string,
    tanggal: formatTanggalID(formData.get("tanggal") as string),
    slug: makeSlug(judul),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/artikel");
  revalidatePath("/");
}

export async function deleteArtikel(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("artikel_budaya").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/artikel");
  revalidatePath("/");
}
