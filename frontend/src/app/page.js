import Image from "next/image";
import Navbar from "../../samarth/Navbar";
import Head from "next/head";
import Body from "../../samarth/home/Body";
import Cards from "../../samarth/home/Cards";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      <Cards></Cards>
    </>
  );
}
