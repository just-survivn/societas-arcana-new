import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import ContactMe from "components/Contact/ContactMe";

import React from "react";
import  siteData  from '../../data/siteData'
import { useState, useEffect } from "react";
import Benefits from "components/Benefits/Benefits";
import Membership from "components/Membership/Membership";


const inter = Inter({ subsets: ["latin"] });
export async function getStaticProps() {
  
  let data  = siteData
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
    },
  };
}
type Props = {
  data: any;
};

export default function Home(props: Props) {
  console.log('props', props)
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="
    bg-black
    
    text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full">
      <Head>
        <title>{`Societas Arcana`}</title>
      </Head>
      {/* Header */}
      <Header data={props.data[5]} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero data={props.data[1]} />
      </section>
      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About data={props.data[0]} />
      </section>

      {/* Benefits */}
      <section
        id="benefits"
        className="snap-start snap-mandatory snap-always"
      >
      
        <Benefits />
      </section>

      {/* Membership */}
      <section
      id="membership"
      className="snap-start snap-mandatory  snap-always"
    >
     <Membership />
      {/* <Skills data={props.data[3]} /> */}
    </section>

     

      {/* Contact */}
      <section id="contact" className="snap-start snap-mandatory  snap-always">
        <ContactMe />
      </section>
      
    </div>
  );
}
