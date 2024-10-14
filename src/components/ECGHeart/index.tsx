"use client";
import { motion } from "framer-motion";
import React from "react";

const EcgWaveHeart: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='relative w-full h-64 flex items-center justify-center'>
        {/* ECG Wave Animation */}
        <div className='absolute w-full h-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100'
            viewBox='0 0 400 100'
            className='overflow-visible'
          >
            <motion.path
              d='M10 50 Q 30 10, 50 50 Q 70 90, 90 50 Q 110 10, 130 50 Q 150 90, 170 50 Q 190 10, 210 50 Q 230 90, 250 50 Q 270 10, 290 50 Q 310 90, 330 50 Q 350 10, 370 50 L 400 50'
              fill='transparent'
              strokeWidth='3'
              stroke='#3b82f6'
              strokeLinecap='round'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5,
              }}
            />
          </svg>
        </div>

        {/* Pulsating Heart in the Center */}
        <div className='absolute flex items-center justify-center'>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='red'
            className='w-16 h-16'
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }} // Normal beating animation
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{
              scale: [1, 1.3, 1], // Faster, bigger beat on hover
            }}
          >
            <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default EcgWaveHeart;
