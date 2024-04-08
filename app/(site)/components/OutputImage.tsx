import { DotSquare, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TailSpin } from "react-loader-spinner";

type ImageOutputProps = {
  loading: boolean;
  outputImage: string | null;
  downloadOutputImage(): void;
  base64Image: string | null;
};

export default function OutputImage({ downloadOutputImage, loading, outputImage, base64Image }: ImageOutputProps) {
  return (
    <div className="w-full max-w-[1860px] mx-auto">
      <section className="px-3">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full relative">
            <Image
              src={outputImage && base64Image && !loading ? base64Image : "/assets/dummy_room.png"}
              alt=""
              width={1600}
              height={1200}
              className="w-full rounded-[30px] h-full"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full h-[80px] border-b-rounded-gradient flex items-center px-10">
                <div className="flex gap-x-4 items-center">
                  <div className="h-7 w-7 bg-primary-orange rounded-sm" />
                  <span className="text-2xl uppercase font-semibold">Before</span>
                </div>
              </div>
            </div>
            {loading && (
              <div className="absolute inset-0 bg-black opacity-70 z-[2] rounded-[30px] grid place-content-center">
                <TailSpin color="#FFB076" height={60} width={60} />
              </div>
            )}
          </div>
          <div className="w-full relative">
            {!loading && outputImage ? (
              <button onClick={downloadOutputImage} className="group absolute right-1 top-1 bg-primary-orange p-4 text-black m-4 rounded-full">
                <Download className="h-5 w-5" />
              </button>
            ) : null}
            <Image src={outputImage || "/assets/dummy_output_room.png"} alt="" width={1600} height={1200} className="w-full rounded-[30px] h-full" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="w-full h-[80px] border-b-rounded-gradient flex items-center px-10">
                <div className="flex gap-x-4 items-center">
                  <div className="h-7 w-7 bg-primary-orange rounded-sm" />
                  <span className="text-2xl uppercase font-semibold">After</span>
                </div>
              </div>
            </div>
            {loading && (
              <div className="absolute inset-0 bg-black opacity-70 z-[2] rounded-[30px] grid place-content-center">
                <TailSpin color="#FFB076" height={60} width={60} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
