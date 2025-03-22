"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  async function handleSignup() {
    setLoading(true);
    // Simulate sign-up process delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Account created successfully!");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex items-center justify-center">
      <motion.div
        className="relative bg-white px-16 py-20 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Decorative Animated Blobs */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-70"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-green-300 rounded-full filter blur-3xl opacity-70"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 rounded-full filter blur-3xl opacity-70"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        ></motion.div>

        {/* Business Context Watermark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h2 className="text-9xl font-bold text-gray-300 transform -rotate-12">
            BlueSky Labs
          </h2>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            className="text-4xl font-extrabold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Create Account
          </motion.h1>
          <motion.p
            className="mb-8 text-gray-600 text-center text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join Sky to streamline your projects and collaborate seamlessly.
            Create your account below and be on your way to transforming the way you work.
          </motion.p>

          {/* Signup Form */}
          <div className="w-full max-w-lg">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name (Optional)
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Your Company"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="teamName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Team Name (Optional)
                </label>
                <input
                  id="teamName"
                  type="text"
                  placeholder="Your Team"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSignup}
              className="w-full py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition mt-6"
              disabled={loading || !termsAccepted}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </motion.button>
          </div>

          {/* Link to Sign In */}
          <motion.div
            className="mt-6 flex items-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span>Already have an account?&nbsp;</span>
            <Link href="/login">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 font-semibold"
              >
                Sign In
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
