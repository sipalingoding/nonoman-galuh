"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createYoutube(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("kanal_youtube").insert({
    url: formData.get("url") as string,
  });
  revalidatePath("/dashboard/youtube");
  revalidatePath("/");
}

export async function updateYoutube(id: string, formData: FormData) {
  const supabase = await createClient();
  await supabase
    .from("kanal_youtube")
    .update({
      url: formData.get("url") as string,
    })
    .eq("id", id);
  revalidatePath("/dashboard/youtube");
  revalidatePath("/");
  redirect("/dashboard/youtube");
}

export async function deleteYoutube(id: string) {
  const supabase = await createClient();
  await supabase.from("kanal_youtube").delete().eq("id", id);
  revalidatePath("/dashboard/youtube");
  revalidatePath("/");
}
