import prisma from "@/prisma/client";

export const isUserInFreeTrial = async (userId: string) => {
  const account = await prisma.account.findFirst({
    where: {
      clerkUserId: userId,
    },
  });
  if (account?.status === "INACTIVE" && !account?.stripeCustomerId) {
    return true;
  }
  return false;
};

export const getNumberOfImagesGenerated = async (userId: string) => {
  const account = await prisma.account.findFirst({
    where: {
      clerkUserId: userId,
    },
  });
  return account?.numberOfImagesGenerated;
};

export const changeNumberOfImagesGenerated = async (userId: string) => {
  const currentNumberOfImages = await getNumberOfImagesGenerated(userId);
  await prisma.account.update({
    where: {
      clerkUserId: userId,
    },
    data: {
      numberOfImagesGenerated: currentNumberOfImages! + 1,
    },
  });
};

export const isFreeTrialOver = async (userId: string) => {
  const account = await prisma.account.findFirst({
    where: {
      clerkUserId: userId,
    },
  });
  if (await isUserInFreeTrial(userId)) {
    if (((await getNumberOfImagesGenerated(userId)) as number) >= 5) {
      return true;
    }
  }
  return false;
};

export const isUserSubscribed = async (userId: string) => {
  const account = await prisma.account.findFirst({
    where: {
      clerkUserId: userId,
    },
  });

  if (account?.status === "ACTIVE" && account.package !== null) {
    return {
      isSubscribed: true,
      package: account.package,
    };
  } else {
    return {
      isSubscribed: false,
    };
  }
};
