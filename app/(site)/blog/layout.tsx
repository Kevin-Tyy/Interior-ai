import Image from "next/image";
import React, { Fragment, ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Fragment>
        <div className="h-screen absolute w-full z-[-1]">
          <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
          <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/70 to-primary-orange/70 blur-[180px]" />
          <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[160px]" />
        </div>
      </Fragment>
      {children}
    </div>
  );
}
