import React, { useState } from "react";

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative px-4 md:py-12 lg:py-18 xl:py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
      </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      {/* YouTube Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
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

      <div className="max-w-7xl mx-auto mt-24 grid grid-cols md:mt-24 lg:grid-cols-2 gap-12 items-center ">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl text-center md:text-left sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent">
              See Which
            </span>
            <span className="block bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Actions Actually
            </span>
            <span className="block bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Drive Your
            </span>
            <span className="block bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Amazon Sales
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            Stop guessing, start seeing where your profits really come from
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
              <a href="/book-demo">Start Free 7-Day Trial</a>
            </button>
            <button
              onClick={() => setShowVideoModal(true)}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              See Live Demo
            </button>
          </div>

          <p className="mt-6 text-lg text-gray-900">No credit card required</p>
        </div>

        {/* Animated Pattern Container */}
        <div className="order-1 lg:order-2 relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          {/* Animated pattern elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated circles */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-200 opacity-30 animate-float1"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-300 opacity-20 animate-float2"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-400 opacity-25 animate-float3"></div>

            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 right-0 h-px bg-blue-500 animate-line1"></div>
              <div className="absolute top-1/3 left-0 right-0 h-px bg-blue-500 animate-line2"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-blue-500 animate-line3"></div>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500 animate-line4"></div>
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-blue-500 animate-line5"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-blue-500 animate-line6"></div>
            </div>

            {/* Play button overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setShowVideoModal(true)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="flex flex-wrap justify-center text-center items-center text-6xl font-semibold bg-gradient-to-t from-blue-500  to-blue-600 bg-clip-text text-transparent mt-24">
          The Amazon Seller's Blind Spot
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
