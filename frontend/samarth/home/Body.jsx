"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Body() {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".heading", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".description", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".image", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className={`pr-8 pl-8 pb-8 ${roboto.className} flex`}>
      <div className="w-1/2">
        <div className="text-4xl font-bold text-center text-[#26303f] mt-20 heading">
          Expert Solutions for Research, Thesis, and Statistical Analysis.
        </div>
        <div className="text-[#596c89] text-center mt-8 description">
          We offer all types of statistical analysis services, including sample
          size calculation, Chi-square test, p-value (from z-test and Chi-square
          test), r value, t-test, and F ratio. Additionally, we provide one-way
          ANOVA, Mann-Whitney U Test, The Kolmogorov-Smirnov Test of Normality,
          and The Friedman Test for Repeated Measures. Our services also cover
          standard error calculation, descriptive analysis, linear and multiple
          regression, and correlation analyses such as Spearman's Rho and
          Pearson Correlation Coefficient.
        </div>
      </div>
      <div className="ml-72 size-96">
        <img src="/dr.png" alt="" className="image" />
      </div>
    </div>
  );
}