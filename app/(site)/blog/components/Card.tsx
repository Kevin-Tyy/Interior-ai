import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Article {
  id: number;
  banner_imgUrl: string;
  title: string;
  img_url: string;
  author: {
    avatar_imgUrl: string;
    names: string;
  };
  publish_date: string;
  readTime: string;
  content: string[];
}
export default function Card({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.id}`}>
      <div className="bg-white p-6 rounded-3xl text-primary-black min-h-[454px] flex flex-col justify-between hover:scale-[1.03] transition-all duration-200">
        <div className="space-y-3">
          <Image src={article.banner_imgUrl} alt="" width={1000} height={4000} className="w-full max-h-[200px]" />
          <h1 className="text-2xl font-bold">{article.title}</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={article.author.avatar_imgUrl} alt="" width={100} height={100} className="object-cover rounded-full h-[80px] w-[80px]" />
          <div>
            <h1 className="text-xl font-bold">{article.author.names}</h1>
            <div className="flex gap-4">
              <h1>{article.publish_date}</h1>
              <span>•</span>
              <h1>{article.readTime}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
