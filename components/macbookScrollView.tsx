import React from "react";
import Link from "next/link";
import { MacbookScroll } from "./ui/mackbookScroll";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function MacbookScrollView() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full pt-20 ">
      <MacbookScroll
        title={
          <TextGenerateEffect
            className="text-center text-[40px] md:text-2xl lg:text-6xl"
            words="The Scribe Co. is your content development engine. With us, you spend less time, money, and resources while developing more content."
          />
        }
        src={`/hero.png`}
        showGradient={false}
      />
    </div>
  );
}
