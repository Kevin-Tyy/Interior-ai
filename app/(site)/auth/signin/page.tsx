import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-full relative flex justify-center items-center text-white">
      <section className="relative border-primary-gradient w-full max-w-xl bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] backdrop-blur-2xl rounded-[30px] py-16 px-20">
        <form className="relative z-[1] space-y-8">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
            <input className="bg-transparent w-full outline-none h-[50px] text-lg" placeholder="User Name" />
          </div>
          <div className="border-b border-primary-lightgray focus-within:border-white transition-all duration-500 pb-2">
            <input type="password" className="bg-transparent w-full outline-none h-[50px] text-lg" placeholder="Password" />
          </div>
          <div className="flex justify-end">
            <p className="underline text-[17px] cursor-pointer">Forgot your password?</p>
          </div>
          <button className="bg-primary-orange p-4 w-full uppercase font-semibold text-sm rounded-lg !mt-12 text-primary-black">Log In</button>
          <div className="!mt-10 text-center text-xl font-semibold">OR</div>
          <button className="bg-[#1877F2] rounded-full p-4 w-full text-lg font-semibold !mt-12 flex justify-center items-center gap-2">
            <Image src="/icons/facebook.svg" alt="" width={32} height={32} />
            Login with Facebook{" "}
          </button>
          <button className="bg-[#18ADF2] rounded-full p-4 w-full text-lg font-semibold flex justify-center items-center gap-3 !mt-6">
            <Image src="/icons/twitter.svg" alt="" width={26} height={26} />
            Login with Twitter{" "}
          </button>
        </form>
      </section>
    </main>
  );
}
