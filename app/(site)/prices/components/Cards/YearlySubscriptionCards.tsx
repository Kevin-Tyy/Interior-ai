import Motion from "@/components/Motion";
import { Product } from "@/types";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FormEvent } from "react";

export default function YearlySubscriptionCards({
  products,
  handleSubcription,
  selectedProduct,
  isPending,
  setSelectedProduct,
}: {
  products: Array<Product>;
  isPending: boolean;
  selectedProduct: String | null;
  handleSubcription: (price: Product) => void;
  setSelectedProduct: (priceId: string) => void;
}) {
  return (
    <Motion transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <div className="bg-white rounded-[44.103px] flex w-full max-w-[1360px] mt-12 mx-auto px-4 text-primary-black">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full h-full flex flex-col md:flex-row gap-10 xl:gap-20 px-10 py-8 xl:pl-20">
            <div className="min-h-[650px] xl:min-h-[520px] w-full pb-[36px] pt-[86px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-bold">
                  {products[3].unit_amount / 100} <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-3xl font-bold text-primary-black">Starter</h2>
                <p className="text-primary-grey leading-relaxed">Unleash the power of automation.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
              <button
                disabled={isPending}
                onClick={() => {
                  setSelectedProduct(products[3].id);
                  handleSubcription(products[3]);
                }}
                className={clsx(
                  "w-full bg-primary-lightgray text-white p-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex justify-center items-center",
                  isPending && "opacity-90"
                )}>
                {isPending && selectedProduct === products[3].id && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Choose plan
              </button>
            </div>
            <div className="min-h-[650px] xl:min-h-[520px] w-full pb-[36px] pt-[86px] flex flex-col justify-between">
              <div className="space-y-8">
                <h1 className="text-5xl text-primary-black font-bold">
                  {products[4].unit_amount / 100} <span className="text-lg text-primary-grey">/month</span>
                </h1>
                <h2 className="text-3xl font-bold text-primary-black">Professional</h2>
                <p className="text-primary-grey leading-relaxed">Advanced tools to take your work to the next level.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
              <button
                disabled={isPending}
                onClick={() => {
                  setSelectedProduct(products[4].id);
                  handleSubcription(products[4]);
                }}
                className={clsx(
                  "w-full bg-primary-lightgray text-white p-4 rounded-full font-semibold hover:scale-105 transition duration-300 flex justify-center items-center",
                  isPending && "opacity-90"
                )}>
                {isPending && selectedProduct === products[4].id && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Choose plan
              </button>
            </div>
            <div className="hidden xl:block bg-primary-orange text-primary-black px-10 pt-4 pb-10 rounded-[44.103px] w-full shadow-card">
              <div className="min-h-[520px] w-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex justify-end">
                    <div className="bg-white px-6 py-2 max-w-fit rounded-full">
                      <span className="text-sm font-semibold uppercase">Most Popular</span>
                    </div>
                  </div>
                  <h1 className="text-5xl text-primary-black font-bold">
                    {products[5].unit_amount / 100} <span className="text-lg font-semibold">/month</span>
                  </h1>
                  <h2 className="text-3xl font-bold">Company</h2>
                  <p className="">Automation plus enterprise-grade features.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                disabled={isPending}
                onClick={() => {
                  setSelectedProduct(products[5].id);
                  handleSubcription(products[5]);
                }}
                className={clsx(
                  "w-full bg-primary-black text-white p-4 rounded-full hover:scale-105 transition duration-300 flex justify-center items-center",
                  isPending && "opacity-90"
                )}>
                {isPending && selectedProduct === products[5].id && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Choose plan
              </button>
            </div>
          </div>
          <div className="block xl:hidden md:max-w-[500px] bg-primary-orange text-primary-black px-10 py-10 rounded-[44.103px] w-full shadow-card -translate-y-[32px]">
            <div className="min-h-[580px] w-full flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex justify-end">
                  <div className="bg-white px-6 py-2 max-w-fit rounded-full">
                    <span className="text-sm font-semibold uppercase">Most Popular</span>
                  </div>
                </div>
                <h1 className="text-5xl text-primary-black font-bold">
                  {products[5].unit_amount / 100} <span className="text-lg font-semibold">/month</span>
                </h1>
                <h2 className="text-3xl font-bold">Company</h2>
                <p className="">Automation plus enterprise-grade features.</p>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Image src="/icons/check-circle.svg" alt="check" width={24} height={24} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              disabled={isPending}
              onClick={() => {
                setSelectedProduct(products[5].id);
                handleSubcription(products[5]);
              }}
              className={clsx(
                "w-full bg-primary-black text-white p-4 rounded-full hover:scale-105 transition duration-300 flex justify-center items-center",
                isPending && "opacity-70"
              )}>
              {isPending && selectedProduct === products[5].id && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Choose plan
            </button>
          </div>
        </div>
      </div>
    </Motion>
  );
}
