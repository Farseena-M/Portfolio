import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Invoice Discounting Platform",
    description: "Financing platform built with NestJS, Node.js, and MongoDB. Uses Hyperledger Fabric Blockchain for secure, transparent transaction logs."
  },
  {
    title: "StayFinder - Room Booking System",
    description: "Full-stack booking platform featuring Admin, Manager, and User modules, real-time chat via Socket.io, and Stripe payments."
  },
  {
    title: "ZapTalk - Real-time Chat App",
    description: "Instant messaging app using Socket.io for low latency, Zustand for state management, Cloudinary media uploads, and AWS EC2 deployment."
  },
  {
    title: "KMCC Website",
    description: "Secure RBAC platform with JWT authentication, admin approval workflows, and an active real-time tracking dashboard."
  },
  {
    title: "AgentHub Platform",
    description: "Agent lifecycle management system with task distribution via CSV automated parsing and role-based permissions."
  },
  {
    title: "Admin User Portal",
    description: "RBAC-enabled portal with automated email onboarding via Nodemailer, media optimization, and user profile management."
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-gray-700 transition text-center">
            <div>
              <div className="flex justify-between items-center mb-4">
                <Layers className="text-blue-400" size={24} />
                <a href="https://github.com/Farseena-M?tab=repositories" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                  <ExternalLink size={18} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};