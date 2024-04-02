import React from "react";

import { GetServerSideProps } from "next";
import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import Link from "next/link";

//@ts-expect-error
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = getAuth(context.req);

  if (userId) {
    const account = await prisma.account.findFirst({
      where: {
        clerkUserId: userId,
      },
    });
    
    if (account?.status === "INACTIVE") {
      return {
        redirect: {
          destination: "/prices",
        },
      };
    }
  }

  return { props: {} };
};

export default function success() {
  return (
    <section className="mt-10 flex flex-col gap-8">
      <header className="flex w-full flex-col gap-3">
        <h1 className="text-center text-4xl font-extrabold tracking-tight">Thanks for Joining</h1>
        <div className="mx-auto flex w-1/2 flex-row justify-between">
          <Link href="/" className="w-full text-center font-bold">
            Home
          </Link>
        </div>
      </header>
    </section>
  );
}
