import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [butterflyPos, setButterflyPos] = useState({ left: 0, right: 0 });
  const messageRef = useRef(null);
  const formRef = useRef(null);
  const leftButterflyRef = useRef(null);
  const rightButterflyRef = useRef(null);
  const containerRef = useRef(null);

  // Update butterfly positions when message box size changes
  useEffect(() => {
    const updatePositions = () => {
      if (messageRef.current) {
        const rect = messageRef.current.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          setButterflyPos({
            left: rect.left - containerRect.left + 10,
            right: rect.right - containerRect.left - 50,
            top: rect.top - containerRect.top + 20,
          });
        }
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Update positions when form data changes (textarea grows)
  useEffect(() => {
    const updatePositions = () => {
      if (messageRef.current) {
        const rect = messageRef.current.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          setButterflyPos({
            left: rect.left - containerRect.left + 10,
            right: rect.right - containerRect.left - 50,
            top: rect.top - containerRect.top + 20,
          });
        }
      }
    };

    updatePositions();
    setTimeout(updatePositions, 100);
  }, [formData.message]);

  const createButterflyCarry = () => {
    const messageEl = messageRef.current;
    if (!messageEl) return;

    const leftButterfly = leftButterflyRef.current;
    const rightButterfly = rightButterflyRef.current;

    if (leftButterfly) {
      // Left butterfly - grab and fly left
      gsap.to(leftButterfly, {
        x: -100,
        y: -80,
        rotation: -40,
        scale: 1.8,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(leftButterfly, {
        x: -300,
        y: -150,
        rotation: -160,
        scale: 0.5,
        opacity: 0,
        duration: 2.5,
        delay: 1,
        ease: 'power2.inOut',
      });
    }

    if (rightButterfly) {
      // Right butterfly - grab and fly right
      gsap.to(rightButterfly, {
        x: 100,
        y: -80,
        rotation: 40,
        scale: 1.8,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(rightButterfly, {
        x: 300,
        y: -150,
        rotation: 160,
        scale: 0.5,
        opacity: 0,
        duration: 2.5,
        delay: 1,
        ease: 'power2.inOut',
      });
    }

    // Animate the message flying with butterflies
    if (messageEl) {
      gsap.to(messageEl, {
        y: -80,
        scale: 1.1,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(messageEl, {
        y: -200,
        opacity: 0,
        duration: 2.5,
        delay: 1,
        ease: 'power2.inOut',
      });
    }

    // Animate the form fading
    if (formRef.current) {
      gsap.to(formRef.current, {
        opacity: 0.3,
        scale: 0.98,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(formRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 3.5,
        ease: 'power2.inOut',
      });
    }

    setTimeout(() => {
      if (messageEl) {
        gsap.set(messageEl, { y: 0, opacity: 1, scale: 1 });
      }
      if (leftButterfly) {
        gsap.set(leftButterfly, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
      }
      if (rightButterfly) {
        gsap.set(rightButterfly, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
      }
      // Reset form after animation
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    createButterflyCarry();
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'divyaguleddivya@gmail.com', link: 'mailto:divyaguleddivya@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 8767672566', link: 'tel:+918767672566' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'India', link: '#' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#050816] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#C084FC]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#8EEA84]/5 rounded-full blur-3xl"></div>

      {/* Decorative butterflies */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse">
        <GiButterfly className="text-[#8EEA84] text-3xl sm:text-4xl" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse delay-300">
        <GiButterfly className="text-[#C084FC] text-3xl sm:text-4xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
          <GiButterfly className="text-[#8EEA84] text-2xl sm:text-3xl mx-auto mt-3 sm:mt-4 opacity-50 animate-pulse" />
          <p className="font-['Outfit'] text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-[#101827] border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8">
              <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#050816] border border-white/5 rounded-xl hover:border-[#8EEA84]/20 transition-all duration-300 group"
                    >
                      <div className="p-2 sm:p-3 bg-[#8EEA84]/10 rounded-lg group-hover:bg-[#8EEA84]/20 transition-all duration-300">
                        <Icon className="text-[#8EEA84] text-base sm:text-xl" />
                      </div>
                      <div>
                        <p className="font-['Outfit'] text-[10px] sm:text-xs text-gray-500">{info.label}</p>
                        <p className="font-['Outfit'] text-white text-xs sm:text-sm">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#101827] border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8">
              <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                Follow Me
              </h3>
              <p className="font-['Outfit'] text-gray-400 text-xs sm:text-sm">
                Connect with me on social media for more updates and insights.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-[#101827] border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8 relative">
              <div ref={containerRef} className="space-y-4 sm:space-y-5 md:space-y-6 relative">
                <div>
                  <label htmlFor="name" className="font-['Outfit'] text-xs sm:text-sm text-gray-400 block mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#050816] border border-white/10 rounded-lg text-white font-['Outfit'] placeholder-gray-600 focus:outline-none focus:border-[#8EEA84] transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Divya Guled"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-['Outfit'] text-xs sm:text-sm text-gray-400 block mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#050816] border border-white/10 rounded-lg text-white font-['Outfit'] placeholder-gray-600 focus:outline-none focus:border-[#8EEA84] transition-colors duration-300 text-sm sm:text-base"
                    placeholder="divyaguleddivya@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="font-['Outfit'] text-xs sm:text-sm text-gray-400 block mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#050816] border border-white/10 rounded-lg text-white font-['Outfit'] placeholder-gray-600 focus:outline-none focus:border-[#8EEA84] transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="font-['Outfit'] text-xs sm:text-sm text-gray-400 block mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#050816] border border-white/10 rounded-lg text-white font-['Outfit'] placeholder-gray-600 focus:outline-none focus:border-[#8EEA84] transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Butterflies on the message box - Fixed position relative to container */}
                <div className="absolute pointer-events-none" style={{ 
                  top: butterflyPos.top || '50%', 
                  left: butterflyPos.left || '20%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                }}>
                  <div
                    ref={leftButterflyRef}
                    className="absolute"
                    style={{
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GiButterfly
                      style={{
                        fontSize: '35px',
                        color: '#8EEA84',
                        filter: 'drop-shadow(0 0 25px #8EEA84) drop-shadow(0 0 50px #8EEA8440)',
                        animation: 'butterflyRest 2s ease-in-out infinite',
                      }}
                    />
                  </div>
                </div>

                <div className="absolute pointer-events-none" style={{ 
                  top: butterflyPos.top || '50%', 
                  left: butterflyPos.right || '70%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                }}>
                  <div
                    ref={rightButterflyRef}
                    className="absolute"
                    style={{
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GiButterfly
                      style={{
                        fontSize: '35px',
                        color: '#C084FC',
                        filter: 'drop-shadow(0 0 25px #C084FC) drop-shadow(0 0 50px #C084FC40)',
                        animation: 'butterflyRest 2s ease-in-out infinite 0.5s',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] text-[#050816] font-['Inter'] font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base relative overflow-hidden"
                >
                  <span>{isSubmitting ? 'Sending... 🦋' : 'Send Message'}</span>
                  {!isSubmitting && <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />}
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8EEA84]/20 to-[#C084FC]/20 animate-pulse"></div>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes butterflyRest {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(5deg) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;