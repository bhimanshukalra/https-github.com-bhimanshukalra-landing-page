"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { FlipWords } from "./ui/FlipWords";
import Image from "next/image";

const labels = [
  "Ghost Writing",
  "Business Offerings Portfolio",
  "Copy wiritng",
  "Article Writing",
  "Script Writing",
];

const imgSrcs = [
  "ghost-writing",
  "business-offerings-portfolio",
  "copy-writing",
  "article-writing",
  "script-writing",
];

export function CarouselView() {
  const duration = 2000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(labels[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [api, setApi] = React.useState<CarouselApi>();

  const startAnimation = useCallback(() => {
    const word = labels[labels.indexOf(currentWord) + 1] || labels[0];
    setCurrentWord(word);
    setCurrentIndex(labels.indexOf(word));
    setIsAnimating(true);
  }, [currentWord]);

  const goToNextCarousel = () => {
    if (api) {
      if (api.selectedScrollSnap() == imgSrcs.length - 1) {
        api.scrollTo(0, true);
      } else {
        api.scrollNext();
      }
    }
  };

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
        goToNextCarousel();
      }, duration);
  }, [isAnimating, duration, startAnimation, api, currentIndex]);

  return (
    <div className="flex flex-row justify-around mt-10">
      <span className="text-4xl font-semibold">
        <span className="text-yellow-400">The Scribe Co.</span> can help you
        <br />
        with
        <br />
        <FlipWords
          currentWord={currentWord}
          duration={1700}
          setIsAnimating={setIsAnimating}
        />
      </span>
      <Carousel className="md:w-full max-w-sm w-1/2" setApi={setApi}>
        <CarouselContent>
          {imgSrcs.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="flex items-center justify-center">
                  <CardContent className="flex items-center justify-center p-6 flex-col h-60">
                    <Image
                      src={`/${imgSrcs[index]}.webp`}
                      alt={imgSrcs[index]}
                      width={200}
                      height={100}
                    />
                    <p className="text-xl text-slate-300">{labels[index]}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
