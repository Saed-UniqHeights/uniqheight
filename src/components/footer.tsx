import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { ArrowUpCircle } from "lucide-react";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-600 text-white ">
      <div className="max-w-6xl md:max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col   space-y-4">
          <div className="w-24">
            {/* Logo */}
            <img
              src="../assets/logo-white.svg"
              alt="Uniq Heights Logo"
              className="w-full"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center md:text-left lg:text-left">
            Get In Touch
          </h2>
          <p className="text-sm text-center md:text-left lg:text-left max-w-md">
            Schedule a personalized demonstration of our action to result
            tracking platform
          </p>
          <button className="bg-white text-[#0052CC] font-semibold p-2 rounded-md shadow md:w-32  hover:bg-gray-100 transition">
            <a href="/book-demo">Book a Demo</a>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center text-center md:text-left lg:text-left space-y-2 text-sm">
          <p>hello@uniqheights.com</p>
          <p>71-75 Shelton Street Covent Garden London</p>
          <p>WC2H 9JQ, United Kingdom</p>
          <p>Mon-Thurs 9:00AM - 5:00PM</p>
          <p>UNIQ Heights Ltd</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto text-center md:text-left lg:text-left px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Created by UniqHeights. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <span>Follow us on socials</span>
          <a
            href="https://www.facebook.com/profile.php?id=61560945192478"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="cursor-pointer hover:opacity-80" />
          </a>
          <FaXTwitter className="cursor-pointer hover:opacity-80" />
          <FaInstagram className="cursor-pointer hover:opacity-80" />
          <FaYoutube className="cursor-pointer hover:opacity-80" />
          <FaTiktok className="cursor-pointer hover:opacity-80" />
        </div>
        <button
          onClick={scrollToTop}
          className="text-white hover:text-gray-200 mt-4 md:mt-0 transition-transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={40} />
        </button>
      </div>
    </footer>
  );
}
