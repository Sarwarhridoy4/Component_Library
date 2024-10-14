"use client"
import { motion } from "framer-motion";
import React from "react";

const LoadingAnimation = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-64 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='200'
          height='40'
          viewBox='0 0 200 40'
        >
          <motion.path
            d='M10 20 Q 20 5, 30 20 Q 40 35, 50 20 Q 60 5, 70 20 Q 80 35, 90 20 Q 100 5, 110 20 Q 120 35, 130 20 L 140 20 L 150 20 L 160 20 L 170 20 L 180 20'
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
    </div>
  );
};

export default LoadingAnimation;
