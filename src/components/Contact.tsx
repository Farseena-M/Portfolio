import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-400 mb-10">Feel free to reach out for positions, collaborations, or technical inquiries.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center gap-3">
          <Mail className="text-blue-400" />
          <span className="text-sm text-gray-300">farseenamoyan02@gmail.com</span>
        </div>
        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center gap-3">
          <Phone className="text-purple-400" />
          <span className="text-sm text-gray-300">+91 9645757527</span>
        </div>
        <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center gap-3">
          <MapPin className="text-pink-400" />
          <span className="text-sm text-gray-300">Kerala, India</span>
        </div>
      </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=farseenamoyan02@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        Send an Email <Send size={18} />
      </a>
    </section>
  );
};