"use client";

import React, { useState } from "react";
import { roomStyles } from "../components/constants/data";
import clsx from "clsx";
import { Image } from "lucide-react";

export default function page() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = roomStyles.map((item) => item.value);
  filters.unshift("All");

  return (
    <main className="text-white h-full">
      <header className="pt-32 pb-20">
        <h1 className="text-5xl font-bold leading-snug text-center">Renders Gallery</h1>
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
          <Image />
          No Images found
        </h1>
      </section>
    </main>
  );
}
