import React, { useState } from "react";
import { education } from "../../constants";

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleOpenModal = (edu) => setSelectedEducation(edu);
  const handleCloseModal = () => setSelectedEducation(null);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
   <div className="relative min-h-[1150px]">
  {/* Vertical Center Line */}
  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

   {education.map((edu, index) => (
  <div
    key={edu.id}
    className="relative w-full flex flex-col items-center mb-20 sm:mb-32"
  >
    {/* Vertical Timeline Dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border-4 border-[#8245ec] w-10 h-10 rounded-full flex items-center justify-center">
      <img
        src={edu.img}
        alt={edu.school}
        className="w-6 h-6 object-cover rounded-full"
      />
    </div>

    {/* Card Side Alternating */}
    <div
      className={`w-full sm:w-1/2 px-4 ${
        index % 2 === 0 ? "ml-auto" : "mr-auto"
      }`}
    >
      <div className="max-w-md w-full p-6 bg-gray-900 border border-white rounded-2xl shadow-xl backdrop-blur-md transition-transform hover:scale-105">
        {/* Header Info */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-16 bg-white rounded overflow-hidden">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <h4 className="text-sm text-gray-400">{edu.school}</h4>
            <p className="text-xs text-gray-500">{edu.date}</p>
          </div>
        </div>

        {/* Grade + Description */}
        <p className="text-sm text-gray-400 font-semibold">
          Grade: {edu.grade}
        </p>
        <p className="mt-2 text-sm text-gray-400 line-clamp-3">{edu.desc}</p>

        <button
          onClick={() => handleOpenModal(edu)}
          className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md"
        >
          More Details
        </button>
      </div>
    </div>
  </div>
))}


        {/* Modal */}
        {selectedEducation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <img
                  src={selectedEducation.img}
                  alt={selectedEducation.school}
                  className="w-40 h-28 object-contain rounded-xl shadow-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedEducation.degree}
                </h3>
                <p className="text-gray-300 mb-1">{selectedEducation.school}</p>
                <p className="text-gray-500 text-sm mb-4">{selectedEducation.date}</p>
                <p className="text-gray-400 mb-4">{selectedEducation.desc}</p>

                <div className="flex gap-4 flex-wrap justify-center">
                  {selectedEducation.certificate && (
                    <a
                      href={selectedEducation.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold"
                    >
                      Download Certificate
                    </a>
                  )}
                  {selectedEducation.marksheet && (
                    <a
                      href={selectedEducation.marksheet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold"
                    >
                      Download Marksheet
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
