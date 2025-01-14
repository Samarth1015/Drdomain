"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlinePhone } from "react-icons/md";
import axios from "axios";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row md:justify-between pl-11 pr-8 w-full overflow-x-hidden overflow-y-hidden  mt-10 h-screen get-in-touch-container">
      <div className="flex-1 md:mr-5 mt-6 form-section">
        <h2 className="text-green-600 text-lg font-bold">GET IN TOUCH</h2>
        <h2 className="text-green-600 text-lg font-bold">
          Dr. Mohd. Sharukh Saifi
        </h2>
        <h2 className=" text-3xl font-bold">We are here to assist you!</h2>

        <h3 className="text-lg font-semibold mt-2"></h3>

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7451501658275!2d79.45965771076345!3d28.380641975702368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00698814ec9eb%3A0xa040189836761adb!2sRohilkhand%20Medical%20College%20and%20hospital!5e1!3m2!1sen!2sin!4v1736847554685!5m2!1sen!2sin"
          loading="lazy"
          className=" w-full h-1/2  mt-10  rounded-lg map-section"
        ></iframe>
        <div className="bg-[#f7f8fd] rounded-b-lg p-8 map-section">
          <h2 className=" text-xl font-bold">GET IN TOUCH</h2>
          <h2 className=" text-xl font-bold">Dr. Mohd. Shahrukh Saifi.</h2>
          <h2 className=" text-lg ">
            <MdOutlinePhone className="inline-block"></MdOutlinePhone> &nbsp;
            <p className="underline inline-block">+917017747122 </p>
          </h2>
          <CiMail className="size-5 inline-block"></CiMail>&nbsp;
          {"  "}
          <p className="text-lg inline-block underline">
            {" "}
            researchw70@gmail.com
          </p>
          <br />
          <br />
          <h1 className="text-xl font-bold">Location</h1>
          <Link
            href="https://www.google.com/maps/place/Rohilkhand+Medical+College+and+hospital/@28.380642,79.4596577,754m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39a00698814ec9eb:0xa040189836761adb!8m2!3d28.380642!4d79.462238!16s%2Fm%2F011c6j0c?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D "
            className="text-lg hover:underline"
          >
            <IoLocationOutline className="inline-block"></IoLocationOutline>{" "}
            Rohilkhand Medical College and Hospital, Pilibhit Bypass Road
            Bareilly, UP 243001 IN
          </Link>
          <div className="h-[0.2rem] w-full bg-black"></div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default GetInTouch;
