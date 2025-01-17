import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Detail = () => {
  const location = useLocation();
  const { member } = location.state || {};

  if (!member) {
    return <div className="container mx-auto px-4 py-8">No details available.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h2 className="text-3xl font-bold">{member.name}</h2>
        <p className="text-gray-500 text-lg mb-4">{member.role}</p>
        <p className="mb-6">{member.biography}</p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Popular Courses</h3>
          <ul>
            {member.popularCourses &&
              member.popularCourses.map((course, index) => (
                <li key={index} className="mb-2">
                  <strong>{course.title}</strong> - {course.lessons} lessons |{" "}
                  {course.students} students | {course.rating}⭐ | {course.price}{" "}
                  <span className="line-through">{course.originalPrice}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex space-x-4">
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white h-8 w-8 flex items-center justify-center rounded-full transition-colors hover:bg-blue-600"
            >
              <FaFacebook />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white h-8 w-8 flex items-center justify-center rounded-full transition-colors hover:bg-blue-500"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
