"use client";
import React, { useEffect, useRef } from "react";
import { TextWithGradient } from "./TextWithGradient";

export const HistoricalTimeline = () => {
  const timelineRef = useRef(null);
  const yearElementsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (timeline) {
        timeline.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    const timeline = timelineRef.current;
    const yearElements = yearElementsRef.current;

    if (!timeline || yearElements.length === 0) return;

    // Example of calculating distances to "Year" elements
    // You would replace this logic with your rubber band effect logic
    const distances = yearElements.map((el: HTMLLIElement) => {
      // @ts-ignore
      const timelineRect = timeline.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return elRect.top - timelineRect.top;
    });

    // You can use these distances to adjust the scroll behavior
    // Implementing the actual rubber band effect would require more complex logic
    console.log(distances);
  };

  return (
    <div className="w-1/2 mx-auto relative max-h-96" ref={timelineRef}>
      <ul className="my-5 py-0">
        {[2024, 2023].map((year, index) => (
          <li className="tl-item relative" key={year} ref={(el) => (yearElementsRef.current[index] = el)}>
            <div className="w-25 absolute -left-20 text-right text-gray-600 text-2xl font-bold">
              <TextWithGradient text={String(year)} />
            </div>
            <div className="pt-1 text-xs pl-4">
              {" "}
              {/* Added padding-left to account for the absolutely positioned year */}
              {year === 2024
                ? "Began as a Software Engineer at Red Hook Agency"
                : "Began as a Software Engineer at Approved Mortgage"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
