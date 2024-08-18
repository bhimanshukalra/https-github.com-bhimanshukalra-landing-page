"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MacbookScrollView } from "./macbookScrollView";
import useWindowDimensions from "@/hooks/useWindowDimension";

const Hero = () => {
  const { width } = useWindowDimensions();

  if (width !== undefined && width < 800) {
    return (
      <div className="py-20">
        <TextGenerateEffect
          className="text-center text-[40px] md:text-2xl lg:text-6xl"
          words="The Scribe Co. is your content development engine. With us, you spend less time, money, and resources while developing more content."
          duration={0.01}
          staggeredDelay={0.08}
        />
      </div>
    );
  } else {
    return <MacbookScrollView />;
  }
};

export default Hero;
