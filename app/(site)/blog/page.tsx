import React from "react";
import { blogs } from "./components/constants/data";
import Card from "./components/Card";

export default function page() {
  return (
    <main className="text-white p-3">
      <section className="pt-32 pb-20">
        <h1 className="text-5xl font-bold leading-snug text-center">Blogs</h1>
      </section>

      <section className="max-w-[1860px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {blogs.map((article, index) => (
          <Card article={article} key={index} />
        ))}
      </section>
    </main>
  );
}
