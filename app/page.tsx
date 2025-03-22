"use client"

import Head from 'next/head';
import { motion } from 'motion/react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

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
