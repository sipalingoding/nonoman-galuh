"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTim(formData: FormData) {
  const supabase = await createClient();
  const tipe = formData.get("tipe") as "pengelola" | "kontributor";
  await supabase.from("tim_pengelola").insert({
    nama: formData.get("nama") as string,
    jabatan: formData.get("jabatan") as string,
    tipe,
    wilayah: tipe === "kontributor" ? (formData.get("wilayah") as string) || null : null,
    urutan: parseInt(formData.get("urutan") as string, 10) || 0,
  });
  revalidatePath("/dashboard/tim");
  revalidatePath("/");
}

export async function updateTim(id: string, formData: FormData) {
  const supabase = await createClient();
  const tipe = formData.get("tipe") as "pengelola" | "kontributor";
  await supabase
    .from("tim_pengelola")
    .update({
      nama: formData.get("nama") as string,
      jabatan: formData.get("jabatan") as string,
      tipe,
      wilayah: tipe === "kontributor" ? (formData.get("wilayah") as string) || null : null,
      urutan: parseInt(formData.get("urutan") as string, 10) || 0,
    })
    .eq("id", id);
  revalidatePath("/dashboard/tim");
  revalidatePath("/");
  redirect("/dashboard/tim");
}

export async function deleteTim(id: string) {
  const supabase = await createClient();
  await supabase.from("tim_pengelola").delete().eq("id", id);
  revalidatePath("/dashboard/tim");
  revalidatePath("/");
}
