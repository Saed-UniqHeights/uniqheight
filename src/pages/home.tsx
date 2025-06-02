import React from "react";
import HeroSection from "@/components/hero";
import Features from "@/components/mainFeatures";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import BookDemo from "./book-demo";
import Services from "./services";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutUs from "./about";

import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = (location.state as { section?: string })?.section;
    if (section === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-transparent">
      <motion.section
        className="items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        className="w-full bg-gradient-to-t from-blue-700 to-blue-500 text-white md:-mt-16  text-lg md:text-2xl tracking-wider sm:text-base font-semibold text-center py-3 px-4 mb-4 shadow-xl  "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        74% of Amazon sellers cite 'knowing what actions drive results' as their
        #1 challenge
      </motion.section>
      {/* <div className="flex flex-row mx-auto px-4">
          <span className=" p-6  items-center text-2xl  justify-center font-semibold  bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent mt-2">
            While other tools show WHAT happened in performance metrics, only
            UNIQ Heights shows WHY it happened by connecting specific actions to
            results
          </span>
          <div>
            <img
              src="../assets/dashbaord.svg"
              alt="Amazon Logo"
              className="mt-8 w-1/2 h-auto rounded-xl mb-12  shadow-xl shadow-blue-400/30 ring-2 ring-blue-200/20 "
            />
          </div>
        </div> */}
      <div className="text-center  md:text-left lg:text-left items-center py-6 px-4 lg:py-16 lg:px-14 md:-mt-4  overflow-hidden mb-0">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center">
          <div>
            <span className="text-4xl/12 md:text-6xl/20  text-center  md:text-left font-bold bg-gradient-to-t from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Why UNIQ HEIGHTS Outperforms All Amazon Analytics Tools
            </span>
            <p className="mt-6 max-w-[550px] text-lg text-center md:text-left text-gray-600">
              UNIQ Heights stands alone in providing complete action-to-result
              tracking for Amazon sellers. While competitors offer partial
              solutions for specific aspects of Amazon selling, only UNIQ
              Heights delivers the complete picture.
            </p>
          </div>

          <div className="justify-center items-center lg:flex">
            <img src="../assets/an1.PNG" alt="sideimage" />
          </div>
        </div>
      </div>
      <motion.section
        ref={aboutRef}
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutUs />
      </motion.section>
      <motion.section
        className=" items-center "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        <Features />
      </motion.section>

      <div className="w-full bg-gradient-to-t from-orange-400 to-orange-500 text-white text-2xl  tracking-wide font-semibold text-center py-3 px-1 mb-4 mt-6 md:-mt-90 lg:-mt-40  shadow-xl ">
        Used by 500+ Amazon sellers managing over $100M in sales
      </div>
      {/* <motion.section
      >
        <Services />
      </motion.section> */}
      <motion.section>
        <Pricing />
      </motion.section>

      <motion.section>
        <FAQ />
      </motion.section>

      <motion.section className="  bg-gradient-to-r from-blue-600 to-blue-800">
        <CTA />
      </motion.section>
      <motion.section
        className=" items-center "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        <BookDemo />
      </motion.section>
    </div>
  );
};

export default Home;
