import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { changeNumberOfImagesGenerated, getNumberOfImagesGenerated, isUserInFreeTrial } from "@/app/actions/user.actions";
export async function POST(request: Request) {
  const req = await request.json();
  const userId = req.userId;

  try {
    const isTrial = (await isUserInFreeTrial(userId)) as boolean;

    if (isTrial) {
      await changeNumberOfImagesGenerated(userId!);
      const numberOfImagesGenerated = (await getNumberOfImagesGenerated(userId)) as number;
      console.log("You are in free trial!");
      return NextResponse.json(`Number Of Images Generated : "${numberOfImagesGenerated}", You have ${5 - numberOfImagesGenerated} free images left`, {
        status: 201,
      });
    } else {
      return NextResponse.json(`Please subscribe`, { status: 400 });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json("Something went wrong!", { status: 500 });
  }
}
