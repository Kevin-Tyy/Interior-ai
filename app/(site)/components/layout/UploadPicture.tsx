"use client";
import Dropzone from "@/app/components/DropZone";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FileRejection } from "react-dropzone";
import { ViewUploadedImage } from "@/app/components/ViewUploadedImage";
import Motion from "@/components/Motion";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
export default function UploadPicture({
  file,
  setFile,
  setBase64Image,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  setBase64Image: Dispatch<SetStateAction<string | null>>;
}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

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
    if (isLoaded) {
      if (!isSignedIn) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "Login or sign up for a free account to design your room",
          action: (
            <ToastAction altText="Login" onClick={() => router.push("/auth/signin")}>
              Login
            </ToastAction>
          ),
        });
        return;
      }
    }
    if (rejectedFiles.length > 0) {
      console.info(rejectedFiles);
      toast({
        description: "Please upload a PNG or JPEG image less than 5MB.",
      });
      return;
    }

    removeImage();

    console.info(acceptedFiles);
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
    <Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <div className="mt-12 space-y-12">
        {!file ? (
          <Dropzone onImageDrop={onImageDrop} />
        ) : (
          <ViewUploadedImage image={file} removeImage={removeImage} file={{ name: file.name, size: fileSize(file.size) }} />
        )}
        <p className="text-[#ABAEB7] leading-8">
          Take a photo of your current room. For best results make sure it shows the entire room in a{" "}
          <span className="underline">90° straight angle facing a wall or window horizontally (click for example).</span> Not from a corner or angled, and not a
          wide angle photo as it's trained on regular photos. The AI isn't great at angled pics (yet)! Uploads + renders are shown on site but auto deleted
          after 15 mins. To make 100% private HQ renders without deletion and watermark upgrade to Pro and you get your own private workspace.
        </p>
      </div>
    </Motion>
  );
}
