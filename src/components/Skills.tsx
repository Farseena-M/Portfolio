import React from 'react';

import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiVercel,
  SiRender,
  SiNetlify,
  SiRabbitmq,
  SiRedis,
  SiPostman,
  SiSwagger,
  SiInsomnia,
} from 'react-icons/si';

import {
  FaCode,
  FaGitAlt,
  FaAws,
  FaDatabase,
} from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-End',
    skills: [
      {
        name: 'React.js',
        icon: <SiReact className="text-cyan-400" />,
      },
      {
        name: 'Redux',
        icon: <SiRedux className="text-purple-400" />,
      },
      {
        name: 'Zustand',
        icon: <FaCode className="text-orange-400" />,
      },
      {
        name: 'CdbReact',
        icon: <FaCode className="text-blue-400" />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: 'Material UI',
        icon: <SiMui className="text-blue-400" />,
      },
      {
        name: 'Bootstrap',
        icon: <SiBootstrap className="text-purple-500" />,
      },
      {
        name: 'HTML5',
        icon: <SiHtml5 className="text-orange-500" />,
      },
      {
        name: 'CSS3',
        icon: <SiCss className="text-blue-500" />,
      },
    ],
  },

  {
    title: 'Back-End',
    skills: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="text-green-500" />,
      },
      {
        name: 'NestJS',
        icon: <SiNestjs className="text-red-500" />,
      },
      {
        name: 'Express.js',
        icon: <SiExpress className="text-gray-200" />,
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: 'MySQL',
        icon: <SiMysql className="text-blue-500" />,
      },
    ],
  },

  {
    title: 'Familiar',
    skills: [
      {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: 'AWS',
        icon: <FaAws className="text-orange-400" />,
      },
      {
        name: 'GitHub',
        icon: <SiGithub className="text-gray-200" />,
      },
      {
        name: 'GitLab',
        icon: <SiGitlab className="text-orange-500" />,
      },
      {
        name: 'Git',
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: 'Docker',
        icon: <SiDocker className="text-blue-400" />,
      },
      {
        name: 'CI/CD Pipelines',
        icon: <FaCode className="text-green-400" />,
      },
      {
        name: 'Vercel',
        icon: <SiVercel className="text-white" />,
      },
      {
        name: 'Render',
        icon: <SiRender className="text-purple-400" />,
      },
      {
        name: 'Netlify',
        icon: <SiNetlify className="text-cyan-400" />,
      },
      {
        name: 'RabbitMQ',
        icon: <SiRabbitmq className="text-orange-500" />,
      },
      {
        name: 'Redis',
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: 'Hyperledger Fabric',
        icon: <FaDatabase className="text-blue-400" />,
      },
    ],
  },

  {
    title: 'API Testing & Tools',
    skills: [
      {
        name: 'Postman',
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        name: 'Swagger',
        icon: <SiSwagger className="text-green-400" />,
      },
      {
        name: 'Insomnia',
        icon: <SiInsomnia className="text-purple-400" />,
      },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
    >
      <div className="w-full max-w-6xl mx-auto">

        <div className="text-center mb-10 sm:mb-14">

          <span
            className="
              inline-block
              text-blue-400
              text-xs
              sm:text-sm
              font-semibold
              tracking-wider
              uppercase
              bg-blue-500/10
              px-4
              py-1.5
              rounded-full
              border
              border-blue-500/20
            "
          >
            Capabilities
          </span>

          <h2
            className="
              font-serif
              text-3xl
              sm:text-4xl
              font-extrabold
              mt-4
              bg-gradient-to-r
              from-white
              via-gray-200
              to-gray-400
              bg-clip-text
              text-transparent
            "
          >
            Technical Expertise
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Technologies and tools I use to build scalable, responsive and
            production-ready applications.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-5
            sm:gap-6
            lg:gap-8
            items-stretch
          "
        >

          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="
                group
                w-full
                h-full
                p-5
                sm:p-6
                lg:p-8
                rounded-2xl
                bg-gradient-to-b
                from-gray-900/90
                to-gray-900/40
                backdrop-blur-xl
                border
                border-gray-800
                hover:border-blue-500/50
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/5
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  mb-5
                  sm:mb-6
                "
              >

                <div className="flex items-center gap-3 min-w-0">

                  <div
                    className="
                      shrink-0
                      w-9
                      h-9
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-blue-400
                    "
                  >
                    <FaCode size={15} />
                  </div>

                  <h3
                    className="
                      text-base
                      sm:text-lg
                      lg:text-xl
                      font-bold
                      text-white
                      truncate
                    "
                  >
                    {category.title}
                  </h3>

                </div>

                <span
                  className="
                    shrink-0
                    text-[10px]
                    sm:text-xs
                    font-mono
                    text-gray-500
                    bg-gray-800/80
                    px-2
                    sm:px-2.5
                    py-1
                    rounded-md
                    border
                    border-gray-700
                  "
                >
                  {category.skills.length} Techs
                </span>

              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  gap-2
                  sm:gap-2.5
                  w-full
                "
              >

                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="
                      group/skill
                      min-w-0
                      w-full
                      min-h-[42px]
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      sm:gap-2
                      px-2
                      sm:px-3
                      py-2
                      rounded-xl
                      bg-gray-800/60
                      border
                      border-gray-700/60
                      text-gray-300
                      transition-all
                      duration-300
                      hover:bg-blue-500/10
                      hover:border-blue-500/40
                      hover:text-white
                      hover:-translate-y-0.5
                      hover:shadow-md
                      hover:shadow-blue-500/5
                    "
                  >

                    <span
                      className="
                        shrink-0
                        text-base
                        sm:text-lg
                        transition-transform
                        duration-300
                        group-hover/skill:scale-110
                      "
                    >
                      {skill.icon}
                    </span>

                    <span
                      className="
                        min-w-0
                        text-[11px]
                        sm:text-xs
                        lg:text-sm
                        font-medium
                        text-center
                        leading-tight
                        break-words
                      "
                    >
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};