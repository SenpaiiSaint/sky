"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleGoogleLogin() {
    setLoading(true);
    // Simulate a realistic login delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Logged in with dummy Google account!");
    router.push("/dashboard");
  }

  async function handleManualLogin() {
    setLoading(true);
    // Simulate a realistic login delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Logged in manually with email and password!");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
      <motion.div
        className="relative bg-white px-16 py-16 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Decorative Animated Blobs */}
        <motion.div
          className="absolute -top-16 -left-16 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-16 -right-16 w-48 h-48 bg-purple-300 rounded-full filter blur-3xl opacity-60"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>
        {/* Additional Blobs */}
        <motion.div
          className="absolute -top-16 -right-16 w-48 h-48 bg-green-300 rounded-full filter blur-3xl opacity-60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-16 -left-16 w-48 h-48 bg-pink-300 rounded-full filter blur-3xl opacity-60"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        ></motion.div>

        {/* Business Context Watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="text-8xl font-bold text-gray-300 transform -rotate-12">
            BlueSky Labs
          </h2>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            className="text-4xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome Back
          </motion.h1>
          <motion.p
            className="mb-6 text-gray-600 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Sign in to access your dashboard and continue elevating your projects with Sky.
          </motion.p>
          <motion.p
            className="mb-8 text-gray-500 text-center italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Empowering businesses with seamless project management and real-time collaboration.
          </motion.p>

          {/* Google Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 w-full py-3 bg-white border border-gray-300 rounded-md shadow hover:shadow-lg transition mb-6"
            disabled={loading}
          >
            <Image
              src="/google-logo.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            <span className="text-gray-700 font-medium">
              {loading ? "Signing In..." : "Sign in with Google"}
            </span>
          </motion.button>

          {/* Separator */}
          <div className="w-full flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Manual Login Form */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleManualLogin}
              className="w-full py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In with Email"}
            </motion.button>
          </div>

          {/* Sign Up Option */}
          <motion.div
            className="mt-6 flex items-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span>Don't have an account?&nbsp;</span>
            <Link href="/signup">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 font-semibold"
              >
                Sign Up
              </motion.a>
            </Link>
          </motion.div>

          <motion.p
            className="mt-4 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Demo login – no credentials required
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
