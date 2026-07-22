import React from 'react';
import stackImage from '../assets/about/anurag-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M64.75 3.375c-30.875 0-29 13.375-29 13.375l.125 13.875h29.625v4.125H34s-20.25-2.25-20.25 28.5 17.625 29.5 17.625 29.5h9.5v-13.875s-1.125-16.75 16-16.75 32 0 32 0 17.125.375 17.125-16.375v-18.75s2-16.5-16.5-20c-18.5-3.5-24.75-3.625-24.75-3.625zm-14.75 9c2.875 0 5.25 2.375 5.25 5.375A5.32 5.32 0 0 1 49.875 23 5.32 5.32 0 0 1 44.625 17.75c0-2.875 2.375-5.375 5.375-5.375z" />
      <path fill="#FFD43B" d="M63.5 125.125c30.875 0 29-13.375 29-13.375l-.125-13.875H62.75v-4.125h31.5s20.25 2.25 20.25-28.5-17.625-29.5-17.625-29.5h-9.5v13.875s1.125 16.75-16 16.75-32 0-32 0-17.125-.375-17.125 16.375v18.75s-2 16.5 16.5 20c18.5 3.5 24.75 3.625 24.75 3.625zm14.75-9c-2.875 0-5.25-2.375-5.25-5.375A5.32 5.32 0 0 1 78.25 105.5a5.32 5.32 0 0 1 5.25 5.25c0 2.875-2.375 5.375-5.375 5.375z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const DjangoIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="128" fill="#092E20" />
      <path fill="#FFFFFF" d="M186.377 94.198v66.226c0 22.82-1.67 33.764-6.678 43.225c-4.639 9.092-10.761 14.842-23.375 21.15l-26.53-12.615c12.616-5.936 18.738-11.13 22.633-19.11c4.082-8.161 5.382-17.623 5.382-42.481V94.198zm-45.449-44.12v132.239c-14.655 2.782-25.415 3.895-37.102 3.895c-34.877 0-53.057-15.767-53.057-46.007c0-29.126 19.294-48.047 49.16-48.047c4.638 0 8.163.37 12.43 1.483V50.08zm-38.215 65.082c-14.47 0-22.819 8.905-22.819 24.487c0 15.214 7.978 23.561 22.634 23.561c3.152 0 5.75-.185 9.831-.74v-45.825c-3.339-1.112-6.121-1.483-9.646-1.483m83.664-64.93v29.312h-28.568V50.231z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Django</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="6" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="20" ry="54" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="20" ry="54" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="20" ry="54" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="10" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Anurag Singh — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DjangoIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
