import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl font-bold mb-12">Work Experience & Education</h2>

      <div className="space-y-8">
        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold mb-2">
            <Briefcase size={20} /> Software Engineer - Backend Developer
          </div>
          <h3 className="text-lg text-gray-200 font-medium">Activelobby Information Systems Pvt Ltd</h3>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold mb-2">
            <Briefcase size={20} /> MERN Stack Developer
          </div>
          <h3 className="text-lg text-gray-200 font-medium">Bridgeon Solutions LLP</h3>
        </div>

        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold mb-2">
            <GraduationCap size={20} /> Bachelor of Computer Application (BCA)
          </div>
          <h3 className="text-lg text-gray-200 font-medium">Calicut University (2020 – 2023)</h3>
        </div>
      </div>
    </section>
  );
};