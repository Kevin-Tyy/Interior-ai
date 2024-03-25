import React from "react";
import { blogs } from "../components/constants/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
interface PageProps {
  id: number;
}
export default function page({ params: { id } }: { params: PageProps }) {
  let blog = null;
  blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="py-20 px-6 md:px-16 grid place-content-center h-[70vh] text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold capitalize">Blog not found😔</h1>
          <Link href="/blog">
            <button className="h-[50px] px-6 w-fit mt-10 rounded-xl bg-primary-orange text-primary-black font-semibold transition-colors duration-500 ease-in flex items-center gap-x-2">
              <ArrowLeft />
              <span>Go Back</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="text-white max-w-[1860px] mx-auto">
      <section className="py-32 space-y-10">
        <h1 className="text-5xl font-bold">{blog.title}</h1>
        <Image src={blog.img_url} alt="" width={2520} height={400} className="rounded-3xl" />
      </section>
      <section className="space-y-10">
        {blog.content.map((paragraph, index) => (
          <p className="leading-8 text-primary-lightgray">{paragraph}</p>
        ))}
      </section>
    </main>
  );
}
