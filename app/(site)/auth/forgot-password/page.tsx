"use client";
import React, { useState, useTransition } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { TailSpin } from "react-loader-spinner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  // If the user is already signed in,
  // redirect them to the home page
  if (isSignedIn) {
    router.push("/");
  }

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      await signIn
        ?.create({
          strategy: "reset_password_email_code",
          identifier: email,
        })
        .then((_) => {
          setSuccessfulCreation(true);
        })
        .catch((error) => {
          console.error("error", error.errors[0].longMessage);
          if (error.errors[0].longMessage === "Identifier is invalid.") {
            toast({ description: "Invalid Email Address ⚠️" });
            return;
          }
          toast({ description: `${error.errors[0].longMessage || error.errors[0].message} ⚠️` });
        });
    });
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function reset(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      await signIn
        ?.attemptFirstFactor({
          strategy: "reset_password_email_code",
          code,
          password,
        })
        .then((result) => {
          // Check if 2FA is required
          if (result.status === "needs_second_factor") {
            setSecondFactor(true);
          } else if (result.status === "complete") {
            // Set the active session to
            // the newly created session (user is now signed in)
            setActive({ session: result.createdSessionId });
          } else {
            console.log(result);
          }
        })
        .catch((error) => {
          console.error("error", error.errors[0].longMessage);
          toast({ description: `${error.errors[0].longMessage} ⚠️` });
        });
    });
  }

  return (
    <main className="w-full h-full relative flex justify-center items-center text-white">
      <section className="relative border-primary-gradient w-full max-w-xl bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] backdrop-blur-2xl rounded-[30px] py-16 px-20">
        <form onSubmit={!successfulCreation ? create : reset} className="relative z-[1] space-y-14">
          <h1 className="text-4xl font-bold text-center">Forgot Password?</h1>
          {!successfulCreation && (
            <div className="flex flex-col">
              <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2 space-y-3">
                <label htmlFor="email">Please provide your email address</label>
                <input
                  type="email"
                  placeholder="e.g john@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full outline-none h-[50px] text-xl"
                />
              </div>
              <button
                disabled={isPending}
                className="bg-primary-orange h-[54px] w-full uppercase font-semibold text-sm rounded-lg !mt-16 text-primary-black flex justify-center items-center">
                {isPending ? <TailSpin color="#031A26" height={30} width={30} /> : "Send password reset code"}
              </button>
            </div>
          )}

          {successfulCreation && (
            <div className="flex flex-col space-y-12">
              <label htmlFor="password">Enter the password reset code that was sent to your email</label>
              <InputOTP id="code" maxLength={6} value={code} onChange={(value) => setCode(value)}>
                <InputOTPGroup>
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <InputOTPSlot index={index} key={index} />
                    ))}
                </InputOTPGroup>
              </InputOTP>

              <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
                <label htmlFor="password">Enter your new password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent w-full outline-none h-[50px] text-lg"
                />
              </div>

              <button
                disabled={isPending}
                className="bg-primary-orange h-[54px] w-full uppercase font-semibold text-sm rounded-lg !mt-12 text-primary-black flex justify-center items-center">
                {isPending ? <TailSpin color="#031A26" height={30} width={30} /> : "Reset"}
              </button>
            </div>
          )}

          {secondFactor && <p>2FA is required, but this UI does not handle that</p>}
        </form>
      </section>
    </main>
  );
};

export default ForgotPasswordPage;
