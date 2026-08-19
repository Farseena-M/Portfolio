import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1d]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <Code2 className="text-blue-400" /> Fathima Farseena M
        </a>
        <div className="hidden md:flex gap-10 text-lg font-semibold text-gray-300">
          <a href="#hero" className="hover:text-blue-400 transition ">About</a>
          <a href="#skills" className="hover:text-blue-400 transition ">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
        <div className="flex items-center gap-5 text-gray-400">
          <a
            href="https://github.com/Farseena-M"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/fathima-farseena-m-8023a1288/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/Farseena_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=farseenamoyan02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};