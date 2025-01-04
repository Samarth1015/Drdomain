import Image from "next/image";
import Navbar from "../../samarth/Navbar";
import Head from "next/head";
import Body from "../../samarth/home/Body";
import Cards from "../../samarth/home/Cards";
import GetInTouch from "../../samarth/home/GetInTouch";

export default function Home() {
  return (
    <>
      <div id="body">
        <Navbar />
        <Body />
      </div>
      <div id="services">
        <Cards />
      </div>
      <div id="get-in-touch">
        <GetInTouch />
      </div>
    </>
  );
}
