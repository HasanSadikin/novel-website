"use server";

import { revalidatePath } from "next/cache";
import { getServerActionSupabase } from "./serverSupabase";
import { redirect } from "next/navigation";
import { Novel } from "@/types/novel";

export async function handleLogin(formData: FormData) {
  const supabase = getServerActionSupabase();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log(error);

  if (error) {
    redirect("/account/login");
  } else {
    revalidatePath("/bookmark");
    revalidatePath("/account");
    redirect("/");
  }
}

export async function handleLogout() {
  const supabase = getServerActionSupabase();

  await supabase.auth.signOut();

  revalidatePath("/bookmark");
  revalidatePath("/account");
  redirect("/account");
}

export async function handleBookmark(novel: Novel, value: boolean) {
  const supabase = getServerActionSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account");
  }

  if (!value) {
    await supabase.from("Bookmarks").insert({
      novel_id: novel.id,
      user_id: user.id,
    });
  } else {
    await supabase.from("Bookmarks").delete().eq("novel_id", novel.id);
  }

  const path = `/novels/${novel.slug}`;
  revalidatePath(path);
  redirect(path);
}
