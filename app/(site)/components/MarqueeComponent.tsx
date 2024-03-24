import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const MarqueeComponent = () => {
  return (
    <div className="relative">
      <Marquee className="!absolute p-4">
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/OmegaMillion.svg" alt="" width={200} height={200} className="min-w-[250px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/Harvest.svg" alt="" width={200} height={200} className="min-w-[250px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/Pastel&Co.svg" alt="" width={200} height={200} className="min-w-[250px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/EdgeKart.svg" alt="" width={200} height={200} className="min-w-[250px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/InfinityParker.svg" alt="" width={200} height={200} className="min-w-[250px] object-cover select-none" draggable={false} />
        </div>
      </Marquee>
      <Marquee className="bg-gray-500/10 backdrop-blur-[50px] p-4 relative  z-[1]">
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/OmegaMillion.svg" alt="" width={200} height={200} className="min-w-[200px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/Harvest.svg" alt="" width={200} height={200} className="min-w-[200px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/Pastel&Co.svg" alt="" width={200} height={200} className="min-w-[200px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/EdgeKart.svg" alt="" width={200} height={200} className="min-w-[200px] object-cover select-none" draggable={false} />
        </div>
        <div className="w-full min-w-[400px] h-[90px] flex flex-col items-center justify-center py-5 px-6">
          <Image src="/logo/InfinityParker.svg" alt="" width={200} height={200} className="min-w-[200px] object-cover select-none" draggable={false} />
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeComponent