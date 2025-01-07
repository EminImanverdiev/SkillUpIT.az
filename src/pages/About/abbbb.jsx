import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import about19 from "../../assets/images/tchreimg.jpg";
// Import Swiper styles
import "swiper/css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const teachers = [
  {
    name: "Kathryn Murphy",
    subject: "Interior Design",
    image: about19,
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Mina Hollace",
    subject: "Interior Design",
    image: about19,
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Leslie Alexander",
    subject: "Interior Design",
    image: about19,
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Annette Black",
    subject: "Interior Design",
    image: about19,
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

export default function TeachersSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full mx-auto py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Teachers</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className="max-w-[330px]">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md relative">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-40 h-40 rounded-full mb-4"
              />

              {/* Hover Icon and Socials */}
              <div
  className={`absolute top-4 right-4 flex items-center justify-center transition-all duration-300 ${
    hoveredIndex === index ? "h-32" : "h-12"
  } w-12 bg-blue-600 text-white rounded-full cursor-pointer`}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
>
  <div
    className={`flex flex-col items-center transition-opacity duration-300 ${
      hoveredIndex === index ? "opacity-100" : "opacity-0"
    }`}
  >
    <a
      href={teacher.socials.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-2 hover:text-blue-300"
    >
      <FaFacebook size={16} />
    </a>
    <a
      href={teacher.socials.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-2 hover:text-blue-300"
    >
      <FaTwitter size={16} />
    </a>
    <a
      href={teacher.socials.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-300"
    >
      <FaLinkedin size={16} />
    </a>
  </div>

  {/* + or - for expand/collapse */}
  <span
    className={`text-lg font-bold mr-4  ${
      hoveredIndex === index ? "hidden" : "block"
    }`}
  >
    {hoveredIndex === index ? "-" : "+"}
  </span>
</div>


              {/* Teacher's Name and Subject */}
              <h3 className="text-lg font-semibold mt-8">{teacher.name}</h3>
              <p className="text-sm text-gray-500">{teacher.subject}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
