import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  isLight?: boolean;
  isMobile?: boolean;
}
export default function Logo({ isLight, isMobile }: Props) {
  return (
    <Link href="/" className={``}>
      <Image
        src={"/logo/interior-ai.svg"}
        alt="imaginate"
        height={80}
        width={80}
        className={`w-44 max-h-16 min-w-44 ${!isLight && "w-32 min-w-32"} ${isMobile && "w-28 min-w-28"}`}
      />
    </Link>
  );
}
