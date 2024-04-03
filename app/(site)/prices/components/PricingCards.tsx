"use client";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState, useTransition } from "react";
import { TailSpin } from "react-loader-spinner";
import MonthlySubscriptionCards from "./Cards/MonthlySubscriptionCards";
import YearlySubscriptionCards from "./Cards/YearlySubscriptionCards";

export default function PricingCards({ selectedPlan }: { selectedPlan: "MONTHLY" | "YEARLY" }) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { isLoaded, isSignedIn, user } = useUser();
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/stripe/getProducts");
        setProducts(data);
      } catch (error) {
        toast({ description: "Something went wrong!" });
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubcription = (price: Product) => {
    startTransition(async () => {
      if (!isLoaded) return;
      if (!isSignedIn) {
        toast({
          description: "Login or sign up to subscribe to your desired pack ⚠️",
          action: (
            <ToastAction altText="Login" onClick={() => router.push("/auth/sigin")}>
              Login
            </ToastAction>
          ),
        });
        return;
      }

      const { data } = await axios.post(
        "/api/stripe/checkout",
        {
          priceId: price.id,
          userId: user.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.assign(data);
    });
  };
  if (!products)
    return (
      <div className="w-full flex justify-center items-center h-[40vh]">
        <TailSpin color="#FFB076" height={50} width={50} />
      </div>
    );
  return selectedPlan === "MONTHLY" ? (
    <MonthlySubscriptionCards
      handleSubcription={handleSubcription}
      isPending={isPending}
      products={products}
      selectedProduct={selectedProduct}
      setSelectedProduct={setSelectedProduct}
    />
  ) : (
    <YearlySubscriptionCards
      handleSubcription={handleSubcription}
      isPending={isPending}
      products={products}
      selectedProduct={selectedProduct}
      setSelectedProduct={setSelectedProduct}
    />
  );
}
