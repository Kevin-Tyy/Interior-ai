"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { FC, Fragment, useState } from "react";
import MarqueeComponent from "./components/MarqueeComponent";
import clsx from "clsx";
import UploadPicture from "./components/layout/UploadPicture";
import RoomType from "./components/layout/RoomType";
import RoomStyle from "./components/layout/RoomStyle";
import { roomStyles, roomTypes } from "./components/constants/data";
import { Image as ImageIcon } from "lucide-react";
import { saveAs } from "file-saver";
import OutputImage from "./components/OutputImage";
import { TailSpin } from "react-loader-spinner";


const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = roomStyles.map((item) => item.value);
  filters.unshift("All");

  return (
    <main className="text-white h-full">
      <header className="py-20">
        <h1 className="text-5xl font-bold leading-snug text-center">Latest Renders</h1>
      </header>
      <section className="max-w-[1860px] w-full mx-auto">
        <div className="w-full flex overflow-x-scroll no-scrollbar border-b border-gray-400">
          {filters.map((filter, index) => (
            <div
              key={index}
              onClick={() => setSelectedFilter(filter)}
              className={clsx(
                "whitespace-nowrap py-3 px-6 cursor-pointer text-gray-400",
                filter === selectedFilter && "text-white border-b-[4px] border-white rounded-t-full"
              )}>
              {filter}
            </div>
          ))}
        </div>
      </section>
      <section className="h-[50vh] grid place-content-center">
        <h1 className="flex items-center gap-x-3">
          <ImageIcon />
          No Images found
        </h1>
      </section>
    </main>
  );
};
export default function Home() {
  const [activeTab, setActiveTab] = useState("Upload Your picture");
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [roomStyle, setRoomStyle] = useState<string>(roomStyles[0].value);
  const [roomType, setRoomType] = useState<string>(roomTypes[0].value);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [outputImage, setOutputImage] = useState<string | null>(null);

  const tabs = ["Upload Your picture", "Room Type / Mode", "Style and Others"];

  function downloadOutputImage(): void {
    saveAs(outputImage as string, "output.png");
  }

  async function submitImage(): Promise<void> {
    if (!file) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/replicate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64Image, roomStyle, roomType }),
    });

    const result = await response.json();
    console.log(result);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    // Output returns an array of two images
    // Here we show the second image
    setOutputImage(result.output[1]);
    setLoading(false);
  }

  const renderComponent = (activeTab: string) => {
    switch (activeTab) {
      case "Upload Your picture":
        return <UploadPicture file={file} setFile={setFile} setBase64Image={setBase64Image} setError={setError} />;

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
        <div className="w-full flex flex-col lg:flex-row">
          <div className="relative w-full flex flex-col justify-center items-center py-40 px-3">
            <Image src="/svgs/path.svg" alt="" width={20} height={30} />
            <div>
              <h2 className="text-primary-orange tracking-[0.2rem]">Render in your own style</h2>
              <h1 className="text-5xl sm:text-[82px] font-bold mt-5 max-w-3xl leading-snug">Fire your interior designer</h1>
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
          <div className="border-top-gradient relative z-[1]" />
          <MarqueeComponent />
          <div className="border-bottom-gradient relative z-[1]" />
        </section>
        <section className="relative py-12 px-3">
          <div className="w-full max-w-7xl mx-auto h-full flex flex-col sm:items-center space-y-12 mt-10">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  disabled={index !== 0 && !file}
                  className={clsx("flex items-center gap-6", index !== 0 && !file && "cursor-not-allowed")}
                  onClick={() => setActiveTab(tab)}>
                  <div className="flex items-center gap-2">
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
                </button>
              ))}
            </div>
            {renderComponent(activeTab)}
          </div>
          {activeTab === tabs[0] ? (
            <div className="flex justify-center mt-12">
              <button
                disabled={!file}
                onClick={() => setActiveTab(tabs[1])}
                className={clsx("bg-primary-orange py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl", !file && "cursor-not-allowed")}>
                Next
              </button>
            </div>
          ) : activeTab === tabs[1] ? (
            <div className="flex justify-center mt-12 gap-6">
              <button
                onClick={() => setActiveTab(tabs[0])}
                className="outline-none py-3 px-10 rounded-lg font-semibold uppercase text-xl border border-white text-white">
                Back
              </button>
              <button
                onClick={() => setActiveTab(tabs[2])}
                className="bg-primary-orange py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl">
                Next
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-12 gap-6">
              <button
                onClick={() => setActiveTab(tabs[1])}
                className={clsx("outline-none py-3 px-10 rounded-lg font-semibold uppercase text-xl border border-white text-white")}>
                Back
              </button>
              <button
                disabled={loading}
                onClick={() => submitImage()}
                className={clsx(
                  "bg-primary-orange py-3 px-10 rounded-lg text-primary-black font-semibold uppercase text-xl min-w-[150px] flex justify-center",
                  loading && "opacity-80 cursor-not-allowed"
                )}>
                {loading ? <TailSpin color="#031A26" height={30} width={30} /> : <span>Render New Idea</span>}
              </button>
            </div>
          )}
        </section>

        <OutputImage base64Image={base64Image} downloadOutputImage={downloadOutputImage} outputImage={outputImage} loading={loading} />
        <Gallery />
      </main>
    </Fragment>
  );
}
