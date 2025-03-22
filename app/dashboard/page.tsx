"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar for Desktop */}
      <motion.aside
        className="w-64 bg-white shadow-lg hidden md:flex flex-col"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600">BlueSky PM</h2>
        </div>
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        {/* User Info and Sign Out Option */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-gray-800 font-medium">John Doe</p>
                <p className="text-gray-500 text-sm">Project Manager</p>
              </div>
            </div>
            <Link
              href="/login"
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between p-6 bg-white shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/avatar.jpg"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <motion.main
          className="p-6 flex-1 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Alpha
              </h3>
              <p className="text-gray-600 mb-4">
                A project management tool to streamline workflow and increase
                productivity.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold">
                  Active
                </span>
                <Link
                  href="/projects/alpha"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Beta
              </h3>
              <p className="text-gray-600 mb-4">
                Collaborate with your team to deliver exceptional results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold">
                  In Progress
                </span>
                <Link
                  href="/projects/beta"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Gamma
              </h3>
              <p className="text-gray-600 mb-4">
                Organize tasks, track progress, and deliver projects on time.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-red-600 font-semibold">
                  Delayed
                </span>
                <Link
                  href="/projects/gamma"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Additional Dashboard Sections */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Team Updates */}
            <motion.div
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Team Updates
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 text-sm">
                  <strong>John:</strong> Completed the design phase for Project
                  Alpha.
                </li>
                <li className="text-gray-600 text-sm">
                  <strong>Sara:</strong> Updated the project timeline for Project
                  Beta.
                </li>
                <li className="text-gray-600 text-sm">
                  <strong>Mike:</strong> Scheduled a meeting for Project Gamma
                  review.
                </li>
              </ul>
            </motion.div>

            {/* Upcoming Tasks */}
            <motion.div
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Upcoming Tasks
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 text-sm">
                  <strong>Design Review:</strong> Finalize UI components.
                </li>
                <li className="text-gray-600 text-sm">
                  <strong>Code Merge:</strong> Merge feature branch for Project
                  Beta.
                </li>
                <li className="text-gray-600 text-sm">
                  <strong>Client Call:</strong> Discuss requirements for Project
                  Gamma.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <motion.aside
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSidebarOpen(false)}
        >
          <motion.div
            className="bg-white w-64 p-6"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-2">
              <h2 className="text-2xl font-bold text-blue-600">BlueSky PM</h2>
            </div>
            <nav className="mt-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/calendar"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.aside>
      )}
    </div>
  );
}
