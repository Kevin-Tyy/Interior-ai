"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
interface Props {
  onImageDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
}
const acceptedFileTypes = {
  "image/jpeg": [".jpeg", ".jpg", ".png"],
};

export default function Dropzone({ onImageDrop }: Props) {
  const onDrop = useCallback(onImageDrop, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border-[2px] rounded-[40px] border-white/30 border-dashed outline-none w-full flex justify-center items-center h-[596px] cursor-pointer">
      <input {...getInputProps()} accept="images/*" />
      {isDragActive ? (
        <p className="text-lg text-center">Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div className="bg-[#ffffff10] w-fit p-5 rounded-lg">
            <Image src="/icons/upload.svg" alt="upload" width={50} height={50} />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl text-white font-semibold text-center">Drop files here or click to upload</h1>
            <p className="text-lg text-center text-white/50">Upload image of an empty room</p>
          </div>
        </div>
      )}
    </div>
  );
}
