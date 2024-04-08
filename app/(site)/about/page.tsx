import Image from "next/image";
import React, { Fragment } from "react";
import MarqueeComponent from "../components/MarqueeComponent";

export default function About() {
  return (
    <Fragment>
      <div className="h-screen absolute w-full z-[-1]">
        <Image src="/svgs/path.svg" alt="" width={690} height={40} className="relative top-20 opacity-60" />
        <div className="w-[550px] h-[300px] rounded-full absolute top-1/2 right-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[200px]" />
        <div className="w-[450px] h-[200px] rounded-full absolute bottom-20 left-0 bg-gradient-to-r from-primary-orange to-primary-orange blur-[200px]" />
      </div>
      <h1 className="absolute bottom-0 left-0 text-[120px] text-[#ffffff1c] select-none uppercase font-black z-[1]">HomespaceAi</h1>
      <div className="text-white p-3">
        <div className="flex flex-col justify-center items-center max-w-[1860px] mx-auto pt-32 space-y-12">
          <h1 className="text-5xl md:text-[68px] font-bold max-w-6xl leading-snug text-center">
            We create memorable visual solutions and build brands that tell stories.
          </h1>
          <Image src="/assets/hero_asset2.png" alt="" width={1000} height={500} className="w-full object-cover rounded-xl md:rounded-3xl" />
        </div>
        <div className="flex flex-col xl:flex-row items-center max-w-[1860px] mx-auto mt-28 gap-20">
          <div className="w-full space-y-10">
            <h1 className="text-5xl font-semibold">Who We Are?</h1>
            <div className="space-y-8 text-primary-lightgray mt-6 text-[17px]">
              <p className="leading-9">
                Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas
                dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna
                tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi
                mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida
                consectetur libero.
              </p>
              <p className="leading-9">
                Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa
                ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae
                interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra
                tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae.
                Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus
                dignissim.
              </p>
              <p className="leading-9">
                Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate
                feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus.
                Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor
                ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam
                in faucibus ultricies sit. Maecenas vitae commodo neque lectus.
              </p>
            </div>
          </div>
          <Image src="/assets/hero_asset3.png" alt="" width={700} height={500} className="rounded-3xl" />
        </div>
        <section className="mt-10">
          <div className="border-top-gradient relative z-[1]" />
          <MarqueeComponent />
          <div className="border-bottom-gradient relative z-[1]" />
        </section>
        <section className="mt-20 w-full max-w-[1560px] mx-auto space-y-10">
          <h1 className="text-5xl font-semibold">Why Choose Us?</h1>
          <p className="text-primary-lightgray max-w-md leading-8">
            World's first virtual staging algorithm powered by artificial intelligence.Developed at Harvard Innovation Labs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 !mt-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold flex items-end gap-3">
                <span className="text-xl font-light">01.</span>
                <span>Lowest price</span>
              </h1>
              <p className="text-primary-lightgray leading-9">
                Starting at only $15/month you can virtually stage 25 images. That’s cheaper than what most agencies charge for a single image. Enterprise plans
                go as low as $0.39 per staged picture.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold flex items-end gap-3">
                <span className="text-xl font-light">01.</span>
                <span>Lowest price</span>
              </h1>
              <p className="text-primary-lightgray leading-9">
                Starting at only $15/month you can virtually stage 25 images. That’s cheaper than what most agencies charge for a single image. Enterprise plans
                go as low as $0.39 per staged picture.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold flex items-end gap-3">
                <span className="text-xl font-light">01.</span>
                <span>Lowest price</span>
              </h1>
              <p className="text-primary-lightgray leading-9">
                Starting at only $15/month you can virtually stage 25 images. That’s cheaper than what most agencies charge for a single image. Enterprise plans
                go as low as $0.39 per staged picture.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold flex items-end gap-3">
                <span className="text-xl font-light">01.</span>
                <span>Lowest price</span>
              </h1>
              <p className="text-primary-lightgray leading-9">
                Starting at only $15/month you can virtually stage 25 images. That’s cheaper than what most agencies charge for a single image. Enterprise plans
                go as low as $0.39 per staged picture.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
