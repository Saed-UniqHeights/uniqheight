import {
  FiCheck,
  FiX,
  FiBarChart2,
  FiTrendingUp,
  FiLink,
  FiTarget,
} from "react-icons/fi";
import { SiGithubactions } from "react-icons/si";
import { GrConnect , GrOptimize } from "react-icons/gr";
import { BiLineChart } from "react-icons/bi";


const FeatureCards = () => {
  return (
    <div className="bg-white mx-auto px-6 flex min-h-screen flex-col items-center justify-between ">
      <div className="flex flex-col min-h-screen pt-4  md:pt-10 relative overflow-hidden">
        <span className="text-4xl md:text-4xl lg:text-8xl font-bold max-w-7xl mx-auto text-center mt-2 mb-2  relative z-10 bg-gradient-to-t from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Main Features
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2 mt-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-1">
              <SiGithubactions className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Track Actions
            </h3>
            <p className="text-gray-600">
              Monitor every click, sale, and customer interaction as it happens.
              Get AI-powered alerts for urgent opportunities (e.g., Buy Box
              losses, price crashes).
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <GrConnect className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Connect the Dots with Smart Insights
            </h3>
            <p className="text-gray-600">
              Automatically link PPC spend, inventory levels, and reviews to
              pinpoint profit leaks. Visualize competitor gaps with side-by-side
              performance dashboards. 
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BiLineChart className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Monitor Metrics That Matter
            </h3>
            <p className="text-gray-600">
              Customizable KPIs: Track what you care about (e.g., ACoS,
              conversion rate, ROI). Benchmark against private label/wholesale
              peers in your niche.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <GrOptimize className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Optimize with Confidence
            </h3>
            <p className="text-gray-600">
              One-click optimizations: Auto-adjust bids, repricing, and
              inventory orders. A/B test listings and ads with AI predicting
              winners before you commit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
