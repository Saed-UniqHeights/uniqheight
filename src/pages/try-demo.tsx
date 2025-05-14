import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHeadphones,
  FiBarChart2,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";

const TryDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  const renderContent = () => {
    switch (activeTab) {
      case "analytics":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col md:flex-row gap-8 ">
              <div className="md:w-1/2">
                <img
                  src="/assets/an1.PNG"
                  alt="Analytics Dashboard"
                  className=" object-cover h-full w-full"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <FiBarChart2 className="text-blue-600 text-2xl mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Analytics Dashboard
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Gain powerful insights into your business performance with our
                  comprehensive analytics tools. Track metrics, visualize data
                  trends, and make data-driven decisions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Real-time traffic monitoring
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">Customizable reports</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Conversion funnel analysis
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "actionTracker":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-2 bg-white "
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src="/assets/AT1.PNG"
                  alt="Action Tracker"
                  className=" object-cover   h-full w-full"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-2">
                  <FiActivity className="text-blue-600 text-2xl mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Action Tracker
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Streamline your workflow with our powerful action tracking
                  system. Monitor tasks, approvals, and team activities in one
                  centralized platform.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Task assignment and tracking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">Automated reminders</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">Collaboration tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "performanceTracker":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-2 bg-white "
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src="/assets/performce1.PNG"
                  alt="Performance Metrics"
                  className="rounded-lg object-cover  h-full w-full"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <MdOutlineAnalytics className="text-blue-600 text-2xl mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Performance Metrics
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Measure and optimize your team's productivity with detailed
                  performance analytics. Identify strengths, address weaknesses,
                  and set achievable goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">KPI dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">Benchmark comparisons</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Historical trend analysis
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-1  flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col min-h-screen pt-28 md:pt-30 relative overflow-hidden bg-white">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Dashboard Demos
        </h1>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl font-medium transition-colors flex items-center ${
              activeTab === "analytics"
                ? "bg-blue-600 text-white "
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            <FiBarChart2 className="mr-2" />
            Analytics
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl font-medium transition-colors flex items-center ${
              activeTab === "actionTracker"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("actionTracker")}
          >
            <FiActivity className="mr-2" />
            Action Tracker
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl font-medium transition-colors flex items-center ${
              activeTab === "performanceTracker"
                ? "bg-blue-600 text-white "
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("performanceTracker")}
          >
            <MdOutlineAnalytics className="mr-2" />
            Performance
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-xl"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default TryDemo;
