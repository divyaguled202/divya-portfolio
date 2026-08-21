import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// ✅ IMPORT ALL IMAGES
import fullstackImage from '../assets/images/fullstack.jpg.jpg';
import hackathonImage from '../assets/images/Hackthon_page-0001 (1).jpg';
import aiDayImage from '../assets/images/hack2skill.jpeg';
import googleEducatorImage from '../assets/images/google.jpg';

const Certificates = () => {

  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      name: "Full Stack Web Development",
      issuer: "YHills",
      date: "Jul 2024 - Oct 2024",
      image: fullstackImage,
      shortDesc: "Full stack development program",
      fullDesc:
        "Successfully completed a comprehensive Full Stack Web Development program at YHills, covering frontend and backend technologies with real-world project development and deployment."
    },
    {
      name: "ZENITH'25 Hackathon",
      issuer: "MLRIT & AWS Cloud Clubs",
      date: "Dec 2025",
      image: hackathonImage,
      shortDesc: "Cloud hackathon participation",
      fullDesc:
        "Participated in ZENITH'25 – a 2-day hackathon and AWS Community Day. Focused on cloud computing, teamwork, and solving real-world problems."
    },
    {
      name: "Agentic AI Day",
      issuer: "Google Cloud & Hack2Skill",
      date: "2026",
      image: aiDayImage,
      shortDesc: "AI innovation participation",
      fullDesc:
        "Participated in Google Cloud Agentic AI Day powered by Hack2Skill, exploring intelligent agents and contributing innovative ideas for AI-driven solutions."
    },
    {
      name: "Gemini Certified Educator",
      issuer: "Google for Education",
      date: "Jun 2026 - Jun 2029",
      image: googleEducatorImage,
      shortDesc: "Certified in Google AI tools",
      fullDesc:
        "Achieved the Gemini Certified Educator certification from Google for Education, demonstrating knowledge and practical skills in applying AI tools in education, including responsible AI usage and digital learning enhancement."
    }
  ];

  return (
    // ✅ ONLY FIX HERE (id added)
    <section id="certificates" className="py-16 sm:py-20 px-3 bg-[#0a0f1f]">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-12">
          Certificates
        </h2>

        {/* GRID */}
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-5 sm:gap-6"
        >

          {certificates.map((cert, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-[#101827] rounded-xl overflow-hidden cursor-pointer"
            >

              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-[180px] sm:h-[200px] object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-white text-sm sm:text-base font-semibold">
                  {cert.name}
                </h3>

                <p className="text-green-400 text-xs sm:text-sm">
                  {cert.shortDesc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-3">

            <div className="bg-[#101827] 
              rounded-xl 
              w-[95%] sm:w-[90%] md:w-[600px] 
              max-h-[90vh] 
              overflow-y-auto 
              p-4 sm:p-6 
              relative"
            >

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-white text-lg"
              >
                <FaTimes />
              </button>

              <img
                src={selectedCert.image}
                alt=""
                className="w-full h-auto object-contain rounded-md mb-4"
              />

              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                {selectedCert.name}
              </h3>

              <p className="text-green-400 text-xs sm:text-sm mb-2">
                {selectedCert.issuer} • {selectedCert.date}
              </p>

              <p className="text-gray-300 text-xs sm:text-sm">
                {selectedCert.fullDesc}
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;