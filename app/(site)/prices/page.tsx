"use client";

import Image from "next/image";
import React, { Fragment, useState } from "react";
import PricingCards from "./components/PricingCards";

export default function Pricing() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  const tabs: Array<"MONTHLY" | "YEARLY"> = ["MONTHLY", "YEARLY"];

  const handleTabClick = (index: number) => {
    const totalTabs = tabs.length;
    const percentage = (index / totalTabs) * 100;
    setSelectedTabIndex(index);
    setUnderlineLeft(percentage);
  };

  return (
    <Fragment>
      <div className="h-screen absolute w-full z-[-1] overflow-x-hidden">
        <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
        <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/70 to-primary-orange/70 blur-[180px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[160px]" />
      </div>
      <main className="py-20 px-4">
        <h1 className="text-5xl text-white text-center font-bold mt-5 leading-snug">Plans & Pricing</h1>
        <div className="flex relative justify-center mt-4">
          <div className="flex relative max-w-fit  bg-white/80 rounded-full">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`w-[120px] h-[50px] flex gap-x-2 justify-center items-center relative cursor-pointer z-[1] transition-all duration-500 text-sm font-semibold ${
                  selectedTabIndex === index ? "!text-white" : "!text-primary-black"
                }`}
                onClick={() => handleTabClick(index)}>
                {tab}
              </div>
            ))}
            <div className="absolute bottom-0 w-[120px] h-[50px] bg-primary-orange custom-transition rounded-full" style={{ left: `${underlineLeft}%` }}></div>
          </div>
        </div>
        <section className="relative z-[1]">
          <PricingCards selectedPlan={tabs[selectedTabIndex]} />
        </section>
      </main>
    </Fragment>
  );
}
