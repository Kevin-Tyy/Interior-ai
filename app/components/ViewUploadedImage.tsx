import { Trash } from "lucide-react";
import Image from "next/image";

type UploadedImageProps = {
  image: File;
  removeImage(): void;
  file: {
    name: string;
    size: string;
  };
};

export function ViewUploadedImage({ file, image, removeImage }: UploadedImageProps) {
  return (
    <section className="relative min-h-[206px] w-full">
      <button className="relative border-[2px] rounded-[40px] border-white/30 border-dashed outline-none w-full flex justify-center items-center h-[696px] cursor-pointer pt-16 pb-12 px-12 overflow-hidden">
        <Image src={URL.createObjectURL(image)} width={600} height={600} alt={image.name} className="object-cover" />
      </button>

      <button className="group absolute right-1 top-1 rounded-full bg-primary-orange p-4 text-primary-black m-4" onClick={removeImage}>
        <Trash className="h-5 w-5 duration-300 text-white" />
      </button>

      <div className="text-md absolute left-0 top-0 bg-opacity-50 text-white mx-8 mt-6 flex gap-x-3">
        {file.name} <span className="text-primary-orange">({file.size})</span>
      </div>
    </section>
  );
}
