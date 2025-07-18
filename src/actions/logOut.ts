"use server";
import { supabaseServer } from "@/supabase-utils/supabase-server";
import { redirect } from "next/navigation";

export async function logOut() {
  const supabase = await supabaseServer();
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("error logging out:", error);
  }

  redirect("/");
}
