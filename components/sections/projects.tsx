"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  url: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function Projects(): ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Anonymous-Message",
      description: "A messaging platform designed for anonymous communication—send messages freely without disclosing your identity.",
      image: "/XMsg.png",
      tags: ["Google Generative AI", "Nextjs", "Typescript" ,"Authjs"],
      category: "web",
      url: "https://anonymous-message-six-zeta.vercel.app/",
      github: "https://github.com/shubhsonic/Anonymous-Message/tree/main"
    },
    {
      id: 2,
      title: "Spotify-Chat-App",
      description: "A live music streaming app where you can connect with friends, chat in real time, and discover what songs they’re currently enjoying.",
      image: "/Spotify-project-thumbnail.png",
      tags: ["Reactjs", "Clerk", "Cloudinary", "socket.io", "zustand"],
      category: "web",
      url: "https://spotify-chat-clone.onrender.com/",
      github: "https://github.com/shubhsonic/spotify-clone"
    },
    {
      id: 3,
      title: "Cab-Booking-App",
      description: "(in-dev)A real-time ride-hailing app with location sharing powered by the Google Maps API and OTP verification handled via Socket.IO.",
      image: "/Cab-Booking.png",
      tags: ["Reactjs", "Mongoose", "Node", "Tailwind", "socket.io"],
      category: "web",
      url: "https://spotify-chat-clone.onrender.com/",
      github: "https://github.com/shubhsonic/cab-booking"
    },
  ];

  const categories = [
    { key: 'all', label: 'Projects' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

    setFilteredProjects(filtered);
    setTimeout(() => setIsLoaded(true), 300);
  }, [activeFilter]);

  return (
    <div className="text-black min-h-screen dark:text-white">
      <Head>
        <title>Projects | Developer Portfolio</title>
        <meta name="description" content="Showcase of my development projects and work" />
      </Head>

      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-6xl font-bold mb-6">My Projects</h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${activeFilter === category.key
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
      className="relative overflow-hidden rounded-2xl bg-gray-900 group h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300 ">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 text-xs text-white px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4 z-20"
      >
        <Link href={project.url} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            Live Demo
          </motion.button>
        </Link>
        <Link href={project.github} target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full"
          >
            GitHub
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
