"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import { isUserSubscribed } from "@/app/actions/user.actions";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/hooks/useCurrentUser";
import clsx from "clsx";
import Link from "next/link";

export default async function page() {
  const router = useRouter();
  const userId = await getCurrentUser();

  if (!userId) {
    router.push("/");
  }

  const subscription = await isUserSubscribed(userId!);

  return (
    <Fragment>
      <div className="h-screen absolute w-full z-[-1] overflow-x-hidden">
        <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
        <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange/70 to-primary-orange/70 blur-[180px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[160px]" />
      </div>
      <main className="py-40 px-4">
        {subscription.isSubscribed ? (
          <div className="space-y-8">
            <h2 className="text-center text-white text-4xl font-semibold">You are subscribed to our plans</h2>
            <Link
              href="/"
              className={clsx(
                "w-full max-w-fit bg-primary-orange mx-auto text-primary-black uppercase text-sm p-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex justify-center items-center"
              )}>
              start Generate images
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-center text-white text-4xl font-semibold">You have not subscribed to any of our plans</h2>
            <Link
              href="/prices"
              className={clsx(
                "w-full max-w-fit bg-primary-orange mx-auto text-primary-black uppercase text-sm p-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex justify-center items-center"
              )}>
              View our pricing plans
            </Link>
          </div>
        )}
      </main>
    </Fragment>
  );
}
