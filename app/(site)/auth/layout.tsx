import Image from "next/image";
import React, { Fragment } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div className="h-screen w-full bg-[url('/assets/hero_asset4.png')] bg-no-repeat bg-center bg-cover">
        <div className="h-screen absolute w-full z-[]">
          <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-20" />
          <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/40 to-primary-orange/70 blur-[180px]" />
          <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange/40 to-primary-orange blur-[160px]" />
          <h1 className="absolute bottom-0 left-0 text-[120px] text-[#0b0e1766] select-none uppercase font-black ">Interior</h1>
        </div>{" "}
        <div className="w-full h-full">{children}</div>
      </div>
    </Fragment>
  );
}
