"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";
import { useSignUp, useClerk } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/server";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function page() {
  const router = useRouter();

  const { isLoaded, setActive, signUp } = useSignUp();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });
  const [pendingVerification, setPendingVerification] = useState<boolean>(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
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
      await signUp.create({
        username: formData.username,
        emailAddress: formData.email,
        password: formData.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (error: any) {
      toast({ description: `${error.errors[0].longMessage || error.errors[0].message} ⚠️` });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleEmailVerification = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (error: any) {
      toast({ description: `${error.errors[0].longMessage || error.errors[0].message} ⚠️` });
      console.log(error);
      console.error(JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  };

  const signUpWith = (strategy: OAuthStrategy) => {
    return signUp?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <main className="w-full h-full relative flex justify-center items-center text-white">
      <section className="relative border-primary-gradient w-full max-w-xl bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] backdrop-blur-2xl rounded-[30px] py-16 px-20">
        {!pendingVerification && (
          <form onSubmit={handleSubmit} className="relative z-[1] space-y-8">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
              <input
                type="text"
                onChange={handleInputChange}
                name="username"
                className="bg-transparent w-full outline-none h-[50px] text-lg"
                placeholder="User Name"
              />
            </div>
            <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
              <input
                type="text"
                onChange={handleInputChange}
                name="email"
                className="bg-transparent w-full outline-none h-[50px] text-lg"
                placeholder="Email Address"
              />
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
              {loading ? <TailSpin color="#031A26" height={30} width={30} /> : "Sign up"}
            </button>
            <div className="!mt-10 text-center text-xl font-semibold">OR</div>
            <button
              type="button"
              onClick={() => signUpWith("oauth_facebook")}
              className="bg-[#1877F2] rounded-full p-4 w-full text-lg font-semibold !mt-12 flex justify-center items-center gap-2">
              <Image src="/icons/facebook.svg" alt="" width={32} height={32} />
              Sign up with Facebook{" "}
            </button>
            <button
              type="button"
              onClick={() => signUpWith("oauth_google")}
              className="bg-[#18ADF2] rounded-full p-4 w-full text-lg font-semibold flex justify-center items-center gap-3 !mt-6">
              <Image src="/icons/google.svg" alt="" width={26} height={26} />
              Sign up with Google{" "}
            </button>
          </form>
        )}
        {pendingVerification && (
          <form onSubmit={handleEmailVerification} className="relative z-[1] space-y-8">
            <h1 className="text-4xl font-bold text-center">Verify Your Email</h1>
            <InputOTP maxLength={6} value={code} onChange={(value) => setCode(value)}>
              <InputOTPGroup>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <InputOTPSlot index={index} key={index} />
                  ))}
              </InputOTPGroup>
            </InputOTP>
            <div className="flex justify-end">
              <p className="underline text-[17px] cursor-pointer">Resend Code</p>
            </div>
            <button className="bg-primary-orange h-[54px] w-full uppercase font-semibold text-sm rounded-lg !mt-12 text-primary-black flex justify-center items-center">
              {loading ? <TailSpin color="#031A26" height={30} width={30} /> : "Verify Email"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
