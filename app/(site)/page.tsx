"use client";

import Image from "next/image";
import Dropzone from "../components/DropZone";
import { ChevronRight } from "lucide-react";
import { FC, Fragment, useState } from "react";
import MarqueeComponent from "./components/MarqueeComponent";
import clsx from "clsx";
import UploadPicture from "./components/layout/UploadPicture";
import RoomType from "./components/layout/RoomType";
import RoomStyle from "./components/layout/RoomStyle";
export default function Home() {
  const [activeTab, setActiveTab] = useState("Upload Your picture");
  const tabs = ["Upload Your picture", "Room Type / Mode", "Style and Others"];
  const renderComponent = (activeTab: string) => {
    switch (activeTab) {
      case "Upload Your picture":
        return <UploadPicture />;

      case "Room Type / Mode":
        return <RoomType />;

      case "Style and Others":
        return <RoomStyle />;
    }
  };
  return (
    <Fragment>
      <div className="h-screen absolute w-full z-[-1]">
        <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
        <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/70 to-primary-orange/70 blur-[180px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[160px]" />
        <h1 className="absolute bottom-0 left-0 text-[120px] text-[#0b0e1766] select-none uppercase font-black ">Interior</h1>
      </div>
      <main className="text-white">
        <div className="w-full flex">
          <div className="relative w-full flex flex-col justify-center items-center">
            <Image src="/svgs/path.svg" alt="" width={20} height={30} />
            <div>
              <h2 className="text-primary-orange tracking-[0.2rem]">Render in your own style</h2>
              <h1 className="text-[82px] font-bold mt-5 max-w-3xl leading-snug">Fire your interior designer</h1>
              <p className="text-lg text-primary-lightgray mt-6">Design your own interior with the first AI Interior Designer</p>
              <button className="ring-1 ring-primary-lightgray py-5 px-6 rounded-lg font-semibold mt-10 uppercase text-sm hover:bg-primary-orange hover:text-primary-black hover:ring-primary-orange transition duration-500">
                Lets work together
              </button>
            </div>
          </div>
          <Image src="/assets/hero_asset1.png" alt="" width={600} height={600} className="w-full" />
        </div>
        <section className="mt-10">
          <h2 className="text-primary-orange tracking-[0.2rem] text-center capitalize mb-6">As seen on</h2>
          <div className="border-top-gradient" />
          <MarqueeComponent />
          <div className="border-bottom-gradient" />
        </section>
        <section className="relative pt-12">
          <div className="w-full max-w-7xl mx-auto h-full flex flex-col sm:items-center space-y-12 mt-10">
            <div className="flex flex-col md:flex-row justify-start gap-4">
              {tabs.map((tab, index) => (
                <div key={index} className="flex items-center gap-6" onClick={() => setActiveTab(tab)}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div
                      className={clsx(
                        "text-black bg-primary-yellow h-6 w-6 grid place-content-center text-xs rounded-full bg-primary-lightgray transition duration-500",
                        tab === activeTab && "!bg-primary-orange text-white"
                      )}>
                      {index + 1}
                    </div>
                    <p
                      className={clsx(
                        "font-semibold text-lg whitespace-nowrap text-primary-lightgray text-opacity-90 transition duration-500",
                        tab === activeTab && "!text-white text-opacity-100"
                      )}>
                      {tab}
                    </p>
                  </div>
                  {index !== tabs.length - 1 && <ChevronRight />}
                </div>
              ))}
            </div>
            {renderComponent(activeTab)}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-primary-orange py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl">Next</button>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
