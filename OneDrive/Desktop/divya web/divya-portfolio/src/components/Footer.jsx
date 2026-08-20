import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaGithub, 
      link: 'https://github.com/divyaguled202', 
      label: 'GitHub' 
    },
    { 
      icon: FaLinkedin, 
      link: 'https://www.linkedin.com/in/divya-guled-391477291/', 
      label: 'LinkedIn' 
    },
    { 
      icon: FaInstagram, 
      link: 'https://www.instagram.com/diu_011_?igsh=MTMzcjNkdDg0ZjEyaQ==', 
      label: 'Instagram' 
    },
    { 
      icon: FaDiscord, 
      link: 'https://discord.gg/sUjyFd9X', 
      label: 'Discord' 
    },
  ];

  return (
    <footer className="bg-[#050816] border-t border-white/5 py-8 sm:py-10 md:py-12 relative overflow-hidden">
      {/* Decorative butterflies */}
      <div className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 opacity-10 animate-pulse">
        <GiButterfly className="text-[#8EEA84] text-2xl sm:text-3xl" />
      </div>
      <div className="absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 opacity-10 animate-pulse delay-300">
        <GiButterfly className="text-[#C084FC] text-2xl sm:text-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-2 group"
          >
            <span className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-white group-hover:text-[#8EEA84] transition-colors duration-300">
              Divya Guled
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 text-gray-500 hover:text-[#8EEA84] transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label={social.label}
                >
                  <Icon size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="font-['Outfit'] text-xs sm:text-sm text-gray-500 text-center">
            &copy; {currentYear} Divya Guled. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-[10px] sm:text-xs font-['Outfit']">
            <span>Made with</span>
            <span className="text-[#FF6B6B] animate-pulse">❤</span>
            <span>and</span>
            <GiButterfly className="text-[#8EEA84] text-sm sm:text-base animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;