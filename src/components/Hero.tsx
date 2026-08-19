import React from 'react';
import { ArrowDown, Send } from 'lucide-react';
import profileImage from '../assets/DP.jpeg';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        pt-24
        pb-12
        overflow-hidden
      "
    >
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          lg:gap-12
          items-center
        "
      >

        <div
          className="
            w-full
            flex
            flex-col
            items-center
            md:items-start
            text-center
            md:text-left
          "
        >

          <div className="w-full flex justify-center mb-5">
            <span
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-1.5
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/30
                text-blue-400
                text-xs
                sm:text-sm
                font-medium
                whitespace-nowrap
              "
            >
              MERN STACK DEVELOPER
            </span>
          </div>

          <h1
            className="
    w-full
    max-w-2xl
    text-3xl
    sm:text-4xl
    lg:text-5xl
    font-extrabold
    tracking-tight
    leading-tight
    mb-8
    sm:mb-9
    text-center
  "
          >
            <span className="block whitespace-nowrap">
              Building Scalable, Secure &
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-400
                via-purple-400
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              High-Performance Web
              <br />
              Applications
            </span>
          </h1>

          <p
            className="
    w-full
    max-w-xl
    text-gray-400
    text-base
    sm:text-lg
    leading-relaxed
    mb-8
    text-center
  "
          >
            Specialized in React.js, Node.js, Express, MongoDB, NestJS,
            and Microservices architecture. Passionate about REST APIs,
            real-time engines, and robust cloud infrastructure.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
              sm:gap-4
              w-full
            "
          >
            <a
              href="#projects"
              className="
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                font-semibold
                text-white
                transition
                flex
                items-center
                justify-center
                gap-2
                whitespace-nowrap
              "
            >
              View Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                bg-gray-800
                hover:bg-gray-700
                font-semibold
                text-gray-200
                border
                border-gray-700
                transition
                flex
                items-center
                justify-center
                gap-2
                whitespace-nowrap
              "
            >
              Get in Touch
              <Send size={18} />
            </a>
          </div>
        </div>

        <div
          className="
            w-full
            flex
            justify-center
            md:justify-end
            mt-4
            md:mt-0
          "
        >
          <div className="relative group">

            <div
              className="
                absolute
                -inset-4
                sm:-inset-6
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-pink-500
                opacity-25
                blur-2xl
                sm:blur-3xl
              "
            />

            <div
              className="
                relative
                p-[3px]
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-pink-500
              "
            >

              <div
                className="
                  w-[250px]
                  h-[250px]
                  sm:w-[320px]
                  sm:h-[320px]
                  md:w-[350px]
                  md:h-[350px]
                  lg:w-[420px]
                  lg:h-[420px]
                  rounded-full
                  overflow-hidden
                  border-4
                  border-[#0a0f1d]
                "
              >
                <img
                  src={profileImage}
                  alt="Fathima Farseena"
                  className="
                    w-full
                    h-full
                    object-cover
                    scale-[1.7]
                    object-[60%_10%]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.8]
                  "
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};