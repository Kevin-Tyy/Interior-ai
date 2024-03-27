"use client";
import Dropzone from "@/app/components/DropZone";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FileRejection } from "react-dropzone";
import { ViewUploadedImage } from "@/app/components/ViewUploadedImage";

export default function UploadPicture({
  file,
  setFile,
  setError,
  setBase64Image,
  setOutputImage,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  setError: Dispatch<SetStateAction<string | null>>;
  setBase64Image: Dispatch<SetStateAction<string | null>>;
  setOutputImage: Dispatch<SetStateAction<string | null>>;
}) {
  function convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const binaryStr = reader.result as string;
      setBase64Image(binaryStr);
    };
  }

  function removeImage(): void {
    setFile(null);
  }

  function onImageDrop(acceptedFiles: File[], rejectedFiles: FileRejection[]): void {
    if (rejectedFiles.length > 0) {
      console.info(rejectedFiles);
      setError("Please upload a PNG or JPEG image less than 5MB.");
      return;
    }

    removeImage();

    console.info(acceptedFiles);
    setError("");
    setFile(acceptedFiles[0]);

    convertImageToBase64(acceptedFiles[0]);
  }

  function fileSize(size: number): string {
    if (size === 0) {
      return "0 Bytes";
    }

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));

    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return (
    <div className="mt-12 space-y-12">
      {!file ? (
        <Dropzone onImageDrop={onImageDrop} />
      ) : (
        <ViewUploadedImage image={file} removeImage={removeImage} file={{ name: file.name, size: fileSize(file.size) }} />
      )}
      <p className="text-[#ABAEB7] leading-8">
        Take a photo of your current room. For best results make sure it shows the entire room in a{" "}
        <span className="underline">90° straight angle facing a wall or window horizontally (click for example).</span> Not from a corner or angled, and not a
        wide angle photo as it's trained on regular photos. The AI isn't great at angled pics (yet)! Uploads + renders are shown on site but auto deleted after
        15 mins. To make 100% private HQ renders without deletion and watermark upgrade to Pro and you get your own private workspace.
      </p>
    </div>
  );
}
