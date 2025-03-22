"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function ProjectsPage() {
  // Sample projects data; in a real app, this might come from an API.
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "Streamline workflow and boost productivity with cutting-edge tools.",
      status: "Active",
      deadline: "2025-04-30",
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Collaborate seamlessly and deliver exceptional results.",
      status: "In Progress",
      deadline: "2025-05-15",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "Organize tasks, track progress, and ensure timely delivery.",
      status: "Delayed",
      deadline: "2025-03-20",
    },
    {
      id: 4,
      name: "Project Delta",
      description: "Innovate and iterate with agile project management techniques.",
      status: "Active",
      deadline: "2025-06-01",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <motion.header
        className="flex items-center justify-between p-6 bg-white shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Projects..."
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
          <Link href="/projects/new">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              Create New Project
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="p-6 flex-1 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-semibold ${
                    project.status === "Active"
                      ? "text-blue-600"
                      : project.status === "In Progress"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-sm text-gray-500">
                  Deadline: {project.deadline}
                </span>
              </div>
              <div className="mt-4">
                <Link href={`/projects/${project.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-sm text-blue-600 font-semibold"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}
