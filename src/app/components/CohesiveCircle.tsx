"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export const CohesiveCircle = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e: any) => {
    const blurDiv = document.createElement("div");
    blurDiv.className = "blur-effect";
    // @ts-ignore
    containerRef.current.appendChild(blurDiv);

    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    blurDiv.style.left = `${x - rect.left}px`;
    blurDiv.style.top = `${y - rect.top}px`;

    setTimeout(() => {
      blurDiv.remove(); // Remove the element after 2 seconds
    }, 2000);
  };

  return (
    <div className="cohesiveCircle h-full w-full flex items-center">
      <div className="relative h-80 w-full">
        <div className="animate-floating1 absolute top-5 left-5">
          <Image
            src="/redCircle.svg"
            alt="Red Circle"
            width={306}
            height={306}
            className="animate-fade animate-delay-[500ms]"
          />
        </div>
        <div
          className="animate-floating2 absolute top-10 left-10 z-10 cursor-none"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <Image
            src="/blueCircle.svg"
            alt="Blue Circle"
            width={479}
            height={350}
            className="animate-fade animate-delay-[750ms]"
          />
        </div>
        <div className="animate-floating3 absolute top-0 right-10">
          <Image
            src="/smallRedCircle.svg"
            alt="Small Red Circle"
            width={283}
            height={270}
            className="animate-fade animate-delay-[1250ms]"
          />
        </div>
      </div>
    </div>
  );
};
