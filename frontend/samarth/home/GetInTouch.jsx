"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GetInTouch = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the form section
    gsap.from(".form-section", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".get-in-touch-container", // Container to watch for visibility
        start: "top 80%", // Start animation when container reaches 80% of viewport
        toggleActions: "play none none reverse",
      },
    });

    // Animate the map section
    gsap.from(".map-section", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".get-in-touch-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between pl-11 pr-8 h-screen mt-16 pt-14 get-in-touch-container">
      {/* Form Section */}
      <div className="flex-1 md:mr-5 form-section">
        <h2 className="text-green-600 text-xl font-bold">GET IN TOUCH</h2>
        <h3 className="text-2xl font-semibold mt-2">
          We're here to assist you!
        </h3>
        <form className="flex flex-col mt-4">
          <label className="mb-2">
            Name <span className="text-red-500">*</span>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="mb-2">
            Email address <span className="text-red-500">*</span>
            <input
              type="email"
              placeholder="email@website.com"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="mb-2">
            Phone number <span className="text-red-500">*</span>
            <input
              type="tel"
              placeholder="xxxxxxxx"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </label>
          <label className="mb-4">
            Message
            <textarea
              placeholder="Write your message here..."
              className="w-full p-2 border border-gray-300 rounded mt-1 h-24"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7585862712135!2d75.81858391056022!3d22.674831279333105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc3d74d26abd%3A0xc9f11955fbbd6cda!2sRyan%20International%20School%2C%20CAT%20Road%2C%20Indore%20-%20CBSE!5e1!3m2!1sen!2sin!4v1735989468710!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="md:w-1/2 h-1/2 w-fit mt-28 md:ml-0  rounded-lg map-section"
      ></iframe>
      <br />
      <br />
      <br />
    </div>
  );
};

export default GetInTouch;
