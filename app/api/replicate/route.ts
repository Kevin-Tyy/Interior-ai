import { changeNumberOfImagesGenerated, getNumberOfImagesGenerated, isFreeTrialOver, isUserInFreeTrial } from "@/app/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request: Request) {
  // 1. Get request data (in JSON format) from the client
  try {
    const req = await request.json();
    const { userId } = auth();

    const image = req.image;
    const theme = req.theme;
    const room = req.room;

    // 2. Initialize the replicate object with our Replicate API token
    const replicate = new Replicate({
      auth: "r8_H3r4t8eSYy3EbO54zWFlqeomDrY05oW3DGga4" as string,
    });

    // 3. Set the model that we're about to run
    const model = "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b";

    // 4. Set the image which is the image we uploaded from the client
    const input = {
      image,
      prompt: `A ${theme} ${room} Editorial Style Photo, Symmetry, Straight On, Modern Living Room, Large Window, Leather, Glass, Metal, Wood Paneling, Neutral Palette, Ikea, Natural Light, Apartment, Afternoon, Serene, Contemporary, 4k`,
      a_prompt: `best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning`,
    };

    if (!userId)
      return NextResponse.json(
        {
          title: "Something went wrong ⚠️",
          description: "Refresh the page and try again",
        },
        { status: 500 }
      );

    const user_has_free_trial = await isUserInFreeTrial(userId!);
    const is_trial_expired = await isFreeTrialOver(userId!);
    const number_of_images_generated = await getNumberOfImagesGenerated(userId!);
    if (user_has_free_trial && is_trial_expired)
      return NextResponse.json(
        {
          title: "Please subcribe ⚠️",
          description: "Your 5 free image trial is over, please subscrible to our plan that suits you.",
          action: { link: "/prices", title: "Subcribe here" },
        },
        { status: 400 }
      );

    // 5. Run the Replicate's model (to remove background) and get the output image
    const output = await replicate.run(model, { input });

    // 6. Check if the output is NULL then return error back to the client
    if (!output) {
      console.log("Something went wrong");
      return NextResponse.json(
        {
          title: "Could not generate new image ⚠️",
          description: "Please try again",
        },
        { status: 500 }
      );
    }

    await changeNumberOfImagesGenerated(userId!);

    console.log("Output", output);
    return NextResponse.json(
      {
        output: output,
        message: {
          title: "Image generated ✅",
          description: `${
            user_has_free_trial
              ? `You have ${number_of_images_generated! - 1 > 0 ? 5 - number_of_images_generated! - 1 : "No"} free image${
                  5 - number_of_images_generated! - 1 == 1 ? "" : "s"
                } left`
              : null
          }`,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        title: "Something went wrong ⚠️",
        description: "Please try again",
      },
      { status: 500 }
    );
  }
}
