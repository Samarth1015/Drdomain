"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { CiMail } from "react-icons/ci";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  useEffect(() => {
    gsap.from(".logo", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".email-icon", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });

    gsap.from(".nav-link", {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
      delay: 0.7,
    });
  }, []);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`pr-8 pl-8 pb-8 ${roboto.className}`}>
      <div className="mt-4 mb-3 text-2xl items-center md:justify-between flex font-roboto">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="md:w-28 w-12 mr-5" />
        </div>
        <div className="logo inline font-bold text-[#26303f] text-[1.18rem] md:text-3xl">
          <Link href={"/"}>MS Research </Link>
        </div>

        <div className="email-icon hidden md:block">
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrKxcgzlbCDlnldzdzVMZkXcmrBLbPVXNwRzKjkgRMXXwZKdwNSvjFksDKrFqvQzLrspL"
            className="inline-block text-xl hover:text-[#0056b3]  transition-all duration-300"
          >
            <CiMail className="inline-block size-7 text-[#0c9cdf]" />
            mlt07@ucbmsh.org
          </Link>
        </div>
      </div>

      <div
        className="text-xl W
     h-14 bg-[#0c9cdf] text-white rounded-xl flex justify-around items-center font-roboto"
      >
        <div
          className="nav-link cursor-pointer hover:underline"
          onClick={() => handleNavigation("body")}
        >
          Home
        </div>
        <div
          className="nav-link cursor-pointer hover:underline"
          onClick={() => handleNavigation("services")}
        >
          Services
        </div>
        <div
          className="nav-link cursor-pointer hover:underline"
          onClick={() => handleNavigation("get-in-touch")}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
