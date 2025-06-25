import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 2);

  return (
    <section
      id="certificate"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of certifications I've earned and the skills gained through them.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {visibleCertificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-900 border border-white rounded-2xl p-6 shadow-lg shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>

            {cert.aggregate && (
              <p className="text-sm text-purple-400 font-medium">
                Aggregate: {cert.aggregate}
              </p>
            )}

            {cert.subjects && (
              <div className="mt-2">
                <p className="text-white text-sm font-semibold">Subjects:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {cert.subjects.map((subj, idx) => (
                    <li key={idx}>{subj}</li>
                  ))}
                </ul>
              </div>
            )}

            {cert.details && (
              <div className="mt-2">
                <p className="text-white text-sm font-semibold">Details:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {cert.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <h5 className="font-medium text-white">Key Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {cert.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {cert.file && (
              <div className="mt-6">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300"
              >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            setShowAll((prev) => {
              if (prev) {
                setTimeout(() => {
                  document
                    .getElementById("certificate")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
              return !prev;
            });
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-sm rounded-lg font-medium transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Certificate;
