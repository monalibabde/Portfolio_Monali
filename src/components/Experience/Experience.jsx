import React, { useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenModal = (experience) => setSelectedExperience(experience);
  const handleCloseModal = () => setSelectedExperience(null);

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative w-full py-20">
 <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-[1200px] z-0"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative w-full flex flex-col sm:flex-row items-center mb-20 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 bg-gray-900 border border-white rounded-2xl shadow-xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md z-10 ${index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                } mt-20 sm:mt-0`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Documents Button */}
              <button
                onClick={() => handleOpenModal(experience)}
                className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              >
                View Documents
              </button>

            </div>
          </div>
        ))}

        {/* Modal for Offer Letter & Certificate */}
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-2xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedExperience.company}
                </h3>
                <p className="text-gray-400 mb-6">{selectedExperience.role}</p>

                <div className="flex flex-wrap gap-4">
                  {selectedExperience.offerLetter && (
                    <a
                      href={selectedExperience.offerLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold"
                    >
                      Download Offer Letter
                    </a>
                  )}
                  {selectedExperience.certificate && (
                    <a
                      href={selectedExperience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold"
                    >
                      Download Certificate
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

export default Experience;
