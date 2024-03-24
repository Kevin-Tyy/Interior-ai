import Dropzone from "@/app/components/DropZone";
import React from "react";

export default function UploadPicture() {
  return (
    <div className="mt-12 space-y-12">
      <Dropzone />
      <p className="text-[#ABAEB7] leading-8">
        Take a photo of your current room. For best results make sure it shows the entire room in a{" "}
        <span className="underline">90° straight angle facing a wall or window horizontally (click for example).</span> Not from a corner or angled, and not a
        wide angle photo as it's trained on regular photos. The AI isn't great at angled pics (yet)! Uploads + renders are shown on site but auto deleted after
        15 mins. To make 100% private HQ renders without deletion and watermark upgrade to Pro and you get your own private workspace.
      </p>
    </div>
  );
}
