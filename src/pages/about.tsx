import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Huda Abbas",
    title: "Founder & CEO",
    image: "/assets/about/huda.jpg",
  },
  {
    name: "Suhayb Ahmed",
    title: "Customer Success",
    image: "/assets/about/Suhayb.jpg",
  },
  {
    name: "Saed Mohamed",
    title: "Success Developer",
    image: "/assets/about/Saed (2).jpg  ",
  },
];

const AboutUs: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-white  py-16 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto text-center mb-12">
        <h2 className="text-2xl px-2 sm:text-3xl font-semibold text-gray-900">
          Meet our team of{" "} Our success experts
        </h2>
        <p className="mt-4 md:px-50 text-gray-600 text-base sm:text-lg">
          Get help 24/7, with a dedicated team of experts who know your business
          inside and out. Our team is here to help you grow your business and
          answer any questions you may have. We are committed to your success
          and are always available to help you achieve your goals.
        </p>
      </div>

      <div className="max-w-screen bg-white ">
        <Slider {...settings}>
          {team.map((member, index) => (
            <div key={index} className="px-4">
              <div className="w-full md:w-96 lg:w-96 justify-self-center-safe   h-72 sm:h-80 overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 italic">{member.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutUs;
