"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

const showToast = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeButton: true,
    className: "custom-toast",
    bodyClassName: "custom-toast-body",
    progressClassName: "custom-toast-progress",
    icon: "👏",
  });
};
const showToasterr = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeButton: true,
    className: "custom-toast",
    bodyClassName: "custom-toast-body",
    progressClassName: "custom-toast-progress",
    icon: "👏",
  });
};

const GetInTouch = () => {
  const [formdata, setFormdata] = useState({});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".form-section", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".get-in-touch-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

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

  const handleData = (e) => {
    setFormdata((prev) => {
      console.log(e.target.name, e.target.value);
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between pl-11 pr-8 w-full overflow-x-hidden h-screen mt-16 pt-14 get-in-touch-container">
      <div className="flex-1 md:mr-5  form-section">
        <h2 className="text-green-600 text-xl font-bold">GET IN TOUCH</h2>
        <h3 className="text-2xl font-semibold mt-2">
          We're here to assist you!
        </h3>

        <label className="mb-2">
          Name <span className="text-red-500">*</span>
          <input
            name="name"
            type="text"
            placeholder="Your name "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
            onChange={handleData}
          />
        </label>
        <label className="mb-2">
          Email address <span className="text-red-500">*</span>
          <input
            name="email"
            type="email"
            placeholder="email@website.com"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
            onChange={handleData}
          />
        </label>
        <label className="mb-2">
          Phone number <span className="text-red-500">*</span>
          <input
            name="phone"
            type="tel"
            placeholder="+91 xxxxxxxxx"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
            onChange={handleData}
          />
        </label>
        <label className="mb-4">
          Message
          <textarea
            name="message"
            placeholder="Write your message here..."
            className="w-full p-2 border border-gray-300 rounded mt-1 h-24"
            onChange={handleData}
          ></textarea>
        </label>
        <button
          onClick={async () => {
            console.log(formdata);
            try {
              let res = await axios.post(
                "https://drportback-production.up.railway.app/api/mail",
                formdata,
                {
                  headers: { "Content-Type": "application/json" },
                }
              );
              if (res.status === 200) {
                showToast(
                  "Thank you for contacting us! We will get back to you soon."
                );
              } else {
                showToasterr("Something went wrong! Please try again later.");
              }
            } catch (error) {
              console.log(error);
              showToasterr("Something went wrong! Please try again later.");
            }
          }}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
      <div className="md:w-1/2 w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7585862712135!2d75.81858391056022!3d22.674831279333105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc3d74d26abd%3A0xc9f11955fbbd6cda!2sRyan%20International%20School%2C%20CAT%20Road%2C%20Indore%20-%20CBSE!5e1!3m2!1sen!2sin!4v1735989468710!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className=" w-full h-1/2  mt-24  rounded-lg map-section"
        ></iframe>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default GetInTouch;
