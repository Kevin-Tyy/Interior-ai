"use client";

import { useToast } from "@/components/ui/use-toast";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/server";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

interface FormData {
  email: string;
  password: string;
}

export default function page() {
  const router = useRouter();
  const { isLoaded, setActive, signIn } = useSignIn();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (error: any) {
      console.log(error);
      if (error.errors[0].longMessage === "Identifier is invalid.") {
        toast({ description: "Invalid Username or Email Address" });
        return;
      }
      toast({ description: error.errors[0].longMessage || error.errors[0].message });
    } finally {
      setLoading(false);
    }
  };

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };
  return (
    <main className="w-full h-full relative flex justify-center items-center text-white">
      <section className="relative border-primary-gradient w-full max-w-xl bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] backdrop-blur-2xl rounded-[30px] py-16 px-20">
        <form onSubmit={handleSubmit} className="relative z-[1] space-y-8">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
            <input onChange={handleInputChange} name="email" type="text" className="bg-transparent w-full outline-none h-[50px] text-lg" placeholder="Email" />
          </div>
          <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
            <input
              onChange={handleInputChange}
              name="password"
              type="password"
              className="bg-transparent w-full outline-none h-[50px] text-lg"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-end">
            <p className="underline text-[17px] cursor-pointer">Forgot your password?</p>
          </div>
          <button className="bg-primary-orange h-[54px] w-full uppercase font-semibold text-sm rounded-lg !mt-12 text-primary-black flex justify-center items-center">
            {loading ? <TailSpin color="#031A26" height={30} width={30} /> : "Log in"}
          </button>
          <div className="!mt-10 text-center text-xl font-semibold">OR</div>
          <button
            type="button"
            onClick={() => signInWith("oauth_facebook")}
            className="bg-[#1877F2] rounded-full p-4 w-full text-lg font-semibold !mt-12 flex justify-center items-center gap-2">
            <Image src="/icons/facebook.svg" alt="" width={32} height={32} />
            Login with Facebook{" "}
          </button>
          <button
            type="button"
            onClick={() => signInWith("oauth_google")}
            className="bg-[#18ADF2] rounded-full p-4 w-full text-lg font-semibold flex justify-center items-center gap-3 !mt-6">
            <Image src="/icons/google.svg" alt="" width={26} height={26} />
            Login with Google{" "}
          </button>
        </form>
      </section>
    </main>
  );
}
