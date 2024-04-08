import React from "react";
import Navbar from "../components/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[url('/assets/noise_background.png')] bg-cover overflow-x-hidden">
      <div className="bg-[#1E1E26]/60 w-full h-full min-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default layout;
