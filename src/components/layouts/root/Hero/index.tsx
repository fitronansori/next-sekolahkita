"use client";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { hero_slides } from "@/constants/data";

const Hero = () => {
  return (
    <section className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {hero_slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-screen w-full overflow-hidden">
                <Image
                  src={slide.image_url}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center text-white">
                      <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                        {slide.title}
                      </h1>
                      <h2 className="mb-6 text-xl font-medium text-gray-200 md:text-2xl">
                        {slide.subtitle}
                      </h2>
                      <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 md:text-xl">
                        {slide.description}
                      </p>

                      <Button size={"lg"} asChild>
                        <Link href={slide.cta_link}>
                          {slide.cta_text} <ArrowRightIcon className="size-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 h-12 w-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 h-12 w-12 border-white/20 bg-white/10 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
};

export default Hero;
