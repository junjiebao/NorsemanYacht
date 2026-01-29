import React from 'react';
import { motion } from 'framer-motion';

export const Timeline = ({ children }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-100 md:block hidden" />
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};

export const TimelineItem = ({ year, title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row items-center"
    >
      {/* Year Badge */}
      <div className="md:w-1/2 md:pr-12 flex md:justify-end mb-4 md:mb-0">
        <div className="bg-amber-100 text-slate-900 px-6 py-2 rounded-full font-inter font-bold">
          {year}
        </div>
      </div>

      {/* Connector Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-100 rounded-full border-4 border-white md:block hidden" />

      {/* Content */}
      <div className="md:w-1/2 md:pl-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="font-inter text-slate-600">
            {children}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
