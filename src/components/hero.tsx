import React, { useState } from "react";
import { PiRocketLaunchFill } from "react-icons/pi";
import VideoPlayer from "./player";

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative px-4 md:py-12 lg:py-18 xl:py-20 sm:px-6 lg:px-8">
      {/* YouTube Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparant ">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-w-64 aspect-h-32">
              <iframe
                className="w-[900px] h-[505px]"
                src="https://www.youtube.com/embed/ojGdxoaQO3E?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto mt-24 grid grid-cols md:mt-16 lg:grid-cols-2 gap-12 items-center ">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
            <h1 className="text-4xl text-center md:text-left sm:text-5xl  lg:text-[40px] font-bold md:leading-[60px] leading-[50px] tracking-[1px]  mb-6 ">
            See Which Actions Actually Drive Your
            <img
              src="/assets/amazon.png"
              alt=""
              className="inline-block align-middle mx-2 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto animate-bounce relative"
              style={{ verticalAlign: "middle" }}
            />
            <span className="ml-2 bg-gradient-to-l from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Amazon Sales
            </span>
            </h1>

          <p className="mt-6 text-lg tracking-[2px] text-center md:text-left text-gray-500   max-w-3xl">
            Stop guessing, start seeing where your profits really come from
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="flex px-6 py-3  text-xl tracking-[2px]  border border-transparent  font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
              <PiRocketLaunchFill className="md:text-3xl text-2xl mr-4" />
              <a href="/book-demo">Start Free 7-Day Trial</a>
            </button>
            <button
              onClick={() => setShowVideoModal(true)}
              className="px-8 py-3 text-xl border border-transparent font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              See Live Demo
            </button>
          </div>

          <p className="mt-6 text-[17px] text-center  md:text-left text-gray-500  ">
            No credit card required
          </p>
        </div>

        {/* Animated Pattern Containe r    */}

        <div className="order-1 lg:order-2 relative md:w-[700px] w-full aspect-video lg:aspect-auto lg:h-full rounded-xl overflow-hidden shadow-lg ">
          {/* Animated pattern elements */}
         <VideoPlayer />
        </div>

        <div className="hidden md:flex order-1 lg:order-2 md:relative  justify-center items-center -z-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full animate-float1 ">
                <div className="w-16 h-16 bg-blue-500/30 rounded-full"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full animate-float2">
                <div className="w-20 h-20 bg-blue-600/20 rounded-full"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full animate-float3">
                <div className="w-24 h-24 bg-blue-700/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-transparent">
        <span className="flex flex-wrap tracking-wider justify-center text-center items-center text-6xl font-semibold  md:mt-24 mt-16">
          The
          <span className="mx-4 bg-gradient-to-t from-blue-500  to-blue-600 bg-clip-text text-transparent">
            Amazon Seller's
          </span>
          Blind Spot
        </span>
      </div>
      <div>
        <img
          src="../assets/Dp1.PNG"
          alt="Amazon Logo"
          className=" mask-luminance mask-b-from-white mask-b-from-80% mask-b-to-black mx-auto mt-8 w-96 md:w-5/6 lg:w-5/6 h-auto rounded-xl mb-12  shadow-xl shadow-blue-400/30 ring-2 ring-blue-200/20 "
        />
      </div>

      {/* Add these styles to your global CSS or CSS-in-JS */}
      <style>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, 5px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, -10px);
          }
        }
        @keyframes line1 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes line2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes line3 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes line4 {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes line5 {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        @keyframes line6 {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-line1 {
          animation: line1 15s linear infinite;
        }
        .animate-line2 {
          animation: line2 20s linear infinite;
        }
        .animate-line3 {
          animation: line3 25s linear infinite;
        }
        .animate-line4 {
          animation: line4 15s linear infinite;
        }
        .animate-line5 {
          animation: line5 20s linear infinite;
        }
        .animate-line6 {
          animation: line6 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
