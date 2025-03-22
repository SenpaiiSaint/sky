"use client";

import Head from 'next/head';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRef, useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// Automatic Carousel component for companies with proper typing
function Carousel() {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  // Sample companies data
  const companies = [
    { id: 1, src: "/company1.png", alt: "Company 1" },
    { id: 2, src: "/company2.png", alt: "Company 2" },
    { id: 3, src: "/company3.png", alt: "Company 3" },
    { id: 4, src: "/company4.png", alt: "Company 4" },
    { id: 5, src: "/company5.png", alt: "Company 5" },
  ];

  // Duplicate companies to achieve a seamless marquee effect
  const companiesExtended = [...companies, ...companies];

  useEffect(() => {
    if (carousel.current) {
      // Set width to half of the total scroll width (one complete set of logos)
      setWidth(carousel.current.scrollWidth / 2);
    }
  }, []);

  return (
    <motion.div ref={carousel} className="overflow-hidden">
      <motion.div
        animate={{ x: -width }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex space-x-8"
      >
        {companiesExtended.map((company, index) => (
          <motion.div
            key={index}
            className="min-w-[150px] flex justify-center items-center"
          >
            <img src={company.src} alt={company.alt} className="object-contain h-16" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-300">
      <Head>
        <title>Sky - Elevate Your Projects</title>
        <meta
          name="description"
          content="Manage your tasks and collaborate effortlessly with Sky."
        />
      </Head>

      {/* Marketing Header */}
      <motion.header
        className="py-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-white text-5xl font-extrabold"
            variants={fadeUp}
          >
            Sky
          </motion.h1>
          <motion.p
            className="mt-4 text-white text-lg"
            variants={fadeUp}
          >
            Your ultimate project management solution. Simplify, organize, and elevate your workflow.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main initial="hidden" animate="visible" variants={fadeIn}>
        {/* Hero Section */}
        <motion.section
          className="container mx-auto flex flex-col items-center justify-center text-center py-16 px-4"
          variants={fadeUp}
        >
          <motion.h2 className="text-white text-5xl font-extrabold mb-4">
            Elevate Your Projects to New Heights
          </motion.h2>
          <motion.p className="text-white text-xl mb-8 max-w-2xl">
            With Sky, experience seamless task management and real-time collaboration that propels your projects forward.
          </motion.p>
          <Link href="/login">
            <motion.a
              className="cursor-pointer bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeUp}
            >
              Get Started
            </motion.a>
          </Link>
        </motion.section>

        {/* "Why Choose Sky?" Section */}
        <motion.section
          className="container mx-auto px-6 py-16"
          variants={fadeIn}
        >
          <motion.div className="text-center mb-10" variants={fadeUp}>
            <h3 className="text-3xl font-bold text-white">Why Choose Sky?</h3>
            <p className="mt-2 text-white text-lg">
              Sky is engineered to transform how you manage projects and collaborate with your team.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-black/40 rounded-lg shadow-lg"
              variants={fadeUp}
            >
              <h4 className="text-xl font-semibold text-white">Intuitive Interface</h4>
              <p className="mt-2 text-gray-200">
                Navigate effortlessly through a clean, user-friendly design that simplifies project management.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-black/40 rounded-lg shadow-lg"
              variants={fadeUp}
            >
              <h4 className="text-xl font-semibold text-white">Real-Time Collaboration</h4>
              <p className="mt-2 text-gray-200">
                Connect with your team instantly and keep everyone in sync, no matter where they are.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-black/40 rounded-lg shadow-lg"
              variants={fadeUp}
            >
              <h4 className="text-xl font-semibold text-white">Scalable Solutions</h4>
              <p className="mt-2 text-gray-200">
                Whether you're a startup or an enterprise, Sky adapts to your evolving project needs.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="container mx-auto px-6 py-16"
          variants={fadeIn}
        >
          <motion.div className="text-center mb-10" variants={fadeUp}>
            <h3 className="text-3xl font-bold text-white">What Our Clients Say</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="p-6 bg-black/40 rounded-lg shadow-lg" variants={fadeUp}>
              <p className="text-gray-200 italic">
                "Sky transformed the way we manage projects. Our team collaboration has never been smoother."
              </p>
              <p className="mt-4 text-white font-semibold">— Sarah L.</p>
            </motion.div>
            <motion.div className="p-6 bg-black/40 rounded-lg shadow-lg" variants={fadeUp}>
              <p className="text-gray-200 italic">
                "The intuitive interface and real-time updates keep us ahead of the competition."
              </p>
              <p className="mt-4 text-white font-semibold">— Mike T.</p>
            </motion.div>
            <motion.div className="p-6 bg-black/40 rounded-lg shadow-lg" variants={fadeUp}>
              <p className="text-gray-200 italic">
                "A scalable solution that adapts perfectly as our business grows."
              </p>
              <p className="mt-4 text-white font-semibold">— Emily R.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Companies Carousel Section (positioned near the footer) */}
        <motion.section
          className="container mx-auto px-6 py-16"
          variants={fadeIn}
        >
          <motion.div className="text-center mb-10" variants={fadeUp}>
            <h3 className="text-3xl font-bold text-white">Trusted by Leading Companies</h3>
          </motion.div>
          <Carousel />
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="py-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} BlueSky Labs. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
