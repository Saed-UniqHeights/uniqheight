import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Sophie Chamberlain",
    title: "Specialized Support",
    image: "/assets/photo1.jpg",
  },
  {
    name: "Lana Steiner",
    title: "VP of Customer Success",
    image: "/assets/photo1.jpg",
  },
  {
    name: "Orlando Diggs",
    title: "Customer Success Lead",
    image: "/assets/photo1.jpg",
  },
];

const AboutUs: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
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
          Meet our team of{" "}
          <em className="italic font-medium">customer success experts</em>
        </h2>
        <p className="mt-4 px-4 text-gray-600 text-base sm:text-lg">
          Get help 24/7, with our award-winning support network of payments
          experts.
        </p>
      </div>

      <div className="max-w-screen bg-white ">
        <Slider {...settings}>
          {team.map((member, index) => (
            <div key={index} className="px-4">
              <div className="w-full md:w-96 lg:w-96 justify-self-center-safe   h-72 sm:h-80 overflow-hidden rounded-xl shadow-md">
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
