import React from "react";
import { SignUp, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
export default function Button() {
  const { userId } = auth();

  return (
    <div>
      {!userId && (
        <div className="flex gap-x-4">
          <Link href="/auth/signin">
            <button className="bg-primary-orange py-3 px-8 rounded-lg text-primary-black font-semibold uppercase text-sm">Log in</button>
          </Link>
        </div>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
