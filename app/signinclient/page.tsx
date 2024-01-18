"use client";
import { Database } from "@/types/supabase";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<any>([]);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("todos").select();
      setTodos(data);
    }
    fetchData();
  }, [user, supabase]);

  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "sidikhasan2711@gmail.com",
      password: "hasansadikin",
    });
    setUser(data.user);
    router.refresh();
  }

  async function signUp() {
    const { data, error } = await supabase.auth.signUp({
      email: "ihsan@gmail.com",
      password: "ihsansuleman",
    });
    setUser(data.user);
    router.refresh();
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  }

  return (
    <>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signOut}>Sign Out</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
}
