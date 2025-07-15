"use client";
import { supabaseBrowser } from "@/supabase-utils/supabase-browser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = supabaseBrowser();

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Login error:", error.message);
      toast.error(`Login failed: ${error.message}`, {
        description: "Please check your email and password.",
      });
      setIsLoading(false);
    } else {
      toast.success("Login successful!");
    }

    router.push("/home");
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-3xl text-primary font-bold mb-4">
          Welcome to Red Net
        </h1>
        <form>
          <div className="mb-4 flex flex-col text-muted-foreground">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded p-2 bg-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color=""
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4 flex flex-col text-muted-foreground">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded p-2 bg-accent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            onClick={(e) => handleLogin(e)}
            type="submit"
            className="flex items-center justify-center space-x-5 w-full bg-primary text-white p-2 rounded hover:bg-primary/80 transition-colors duration-100 cursor-pointer"
          >
            {isLoading ? (
              <span className="animate-spin block rounded-full w-4 h-4 border border-white border-t-transparent"></span>
            ) : (
              ""
            )}
            {isLoading ? <span>Loading...</span> : <span>Sign In</span>}
          </button>
        </form>
      </div>
    </div>
  );
};

/*const logged = true;
if logged {go to home} else {sign in}*/

export default Page;
