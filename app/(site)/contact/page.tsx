import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function page() {
  return (
    <Fragment>
      <div className="h-screen absolute w-full z-[-1]">
        <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
        <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/70 to-primary-orange/70 blur-[200px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[200px]" />
      </div>
      <section className="h-screen flex flex-col items-center justify-center text-white">
        <div className="flex justify-center items-center">
          <div className="text-white space-y-5">
            <h2 className="text-3xl text-primary-lightgray font-bold text-center">Get In Touch</h2>
            <h1 className="text-5xl font-bold">info@interiorai.com</h1>
          </div>
        </div>
        <form className="max-w-[628px] mx-auto mt-12 w-full space-y-8">
          <div className="w-full">
            <div className="border-b border-primary-lightgray pb-3 text-white group focus-within:border-white transition duration-300">
              <input id="name" className="bg-transparent outline-none placeholder:text-primary-lightgray w-full h-10 " placeholder="Your name" />
            </div>
          </div>
          <div className="w-full">
            <div className="border-b border-primary-lightgray pb-3 text-white group focus-within:border-white transition duration-300">
              <input id="company name" className="bg-transparent outline-none placeholder:text-primary-lightgray w-full h-10 " placeholder="Company name" />
            </div>
          </div>
          <div className="w-full">
            <div className="border-b border-primary-lightgray pb-3 text-white group focus-within:border-white transition duration-300">
              <input id="phone number" className="bg-transparent outline-none placeholder:text-primary-lightgray w-full h-10 " placeholder="Phone number" />
            </div>
          </div>
          <div className="w-full">
            <div className="border-b border-primary-lightgray pb-3 text-white group focus-within:border-white transition duration-300">
              <input id="email" className="bg-transparent outline-none placeholder:text-primary-lightgray w-full h-10 " placeholder="E-mail" />
            </div>
          </div>
          <div className="w-full">
            <div className="border-b border-primary-lightgray pb-3 text-white group focus-within:border-white transition duration-300">
              <input id="comment" className="bg-transparent outline-none placeholder:text-primary-lightgray w-full h-10 " placeholder="Comment (optional)" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-primary-lightgray">
              By clicking the Submit button you agree to our <span className="font-bold text-white">Privacy Policy</span> terms
            </span>
            <button className="bg-primary-orange py-4 px-10 rounded-xl text-primary-black font-semibold uppercase">Submit</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
}
