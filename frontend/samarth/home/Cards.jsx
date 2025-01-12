"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../card";

export default function Cards() {
  useEffect(() => {
    // Ensure ScrollTrigger runs only in the client environment
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cards-container", // The container to watch for visibility
          start: "top 80%", // Start animation when the container reaches 80% of the viewport
          end: "bottom 20%", // End animation when the container leaves 20% of the viewport
          toggleActions: "play none none reverse", // Play the animation and reverse when scrolling back
        },
      });
    }
  }, []);

  return (
    <div className="pr-8 pl-11 pb-6 bg-[#f7f8fd] mt-20 pt-6 cards-container">
      <h1 className="text-3xl font-bold text-gray-800">Services</h1>
      <div className="flex-wrap flex justify-between">
        <div className="mt-7 card">
          <Card
            title="Thesis writing"
            description="Medical Ph.D., Simple Ph.D. and M.D. (Anatomy, Biochemistry, Microbiology, Physiology, pathology, Pharmacology, Nutrition, Nursing, Hematology)"
          />
        </div>
        <div className="mt-7 card">
          <Card
            title="Synopsis writing"
            description="Medical Ph.D., Simple Ph.D. and M.D. (Biochemistry, Microbiology, Physiology, pathology, Pharmacology)"
          />
        </div>
        <div className="mt-7 card">
          <Card
            title="Research paper writing"
            description="Medical Ph.D., Simple Ph.D. and M.D. (Biochemistry, Microbiology, Physiology, pathology, Pharmacology)"
          />
        </div>
        <div className="mt-7 card">
          <Card
            title="Dissertation and Project work"
            description="M.Sc. Medical, Simple M.Sc. (Anatomy, Biochemistry, Microbiology, Physiology, pathology, Pharmacology, Nutrition, Nursing), B. Sc. Nursing, B. Sc. Medical Microbiology, B.Sc. Medical Lab Technology etc."
          />
        </div>
      </div>
    </div>
  );
}
