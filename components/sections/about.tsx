"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const skills = [
        { name: "Data Structures" },
        { name: "Low Level Design" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "MongoDB" },
        { name: "Socket.io" },
    ];

    const timeline = [
        {
            year: "Feb 2024 - Apr 2025",
            title: "Teaching Assistant",
            company: "Edureka",
            description: "Provided timely solutions to queries related to front-end and back-end development. Collaborated with the instruction team to ensure a smooth, productive and engaging learning experience for interns."
        },
        {
            year: "Jan 2023 - Oct 2023",
            title: "Full-stack Developer Intern",
            company: "Edureka",
            description: "Awarded Super Intern Certificate for Best Performance, Completed an hands-on internship focused on full-stack development."
        }
    ];

    return (
        <div className=" text-black min-h-screen dark:text-white">
            <Head>
                <title>About Me | Developer Portfolio</title>
                <meta name="description" content="Learn more about my journey as a full-stack developer" />
            </Head>

            <main className="container mx-auto px-4 py-20 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6">About Me</h1>
                    <div className="h-1 w-20 bg-purple-500 mb-12 rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isLoaded ? "show" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-10"
                >
                    {/* Left Column */}
                    <motion.div variants={item} className="lg:col-span-2">
                        {/* <div className="rounded-2xl overflow-hidden mb-8 relative group">
                            <img
                                src="profile.jpg"
                                alt="Profile"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div> */}

                        <motion.div
                            variants={item}
                            className="bg-gray-900 text-white rounded-2xl p-8 mb-8"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>

                                        </div>

                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={item} className="lg:col-span-3">
                        <motion.div
                            variants={item}
                            className="bg-gray-900 rounded-2xl p-8 mb-8"
                        >
                            <h2 className="text-3xl text-white font-bold mb-6">My Journey</h2>
                            <p className="text-gray-300 mb-6">
                                As a dedicated and innovative software engineer, I specialize in crafting high-quality digital experiences that balance functionality, performance, and design. My journey into the world of software development began during my undergraduate engineering studies, where I quickly developed a passion for creating both intuitive user interfaces and scalable, efficient backend systems. That early curiosity has since evolved into a full-fledged commitment to building technology that genuinely serves its users.
                            </p>
                            <p className="text-gray-300 mb-6">
                                Currently, my focus lies in developing accessible, user-first applications that prioritize inclusivity and speed—solutions that not only meet rigorous technical standards but also deliver meaningful and enjoyable user experiences. I approach every project with a product mindset, ensuring that usability and design are considered as integral as clean code and architecture.
                            </p>
                            <p className="text-gray-300">
                                Beyond engineering, I’m deeply committed to the developer community. I actively mentor junior developers, helping them grow their skills and confidence. When I'm not writing code, I can usually be found immersed in literature or out exploring nature—both of which fuel my creativity and drive to solve complex problems in thoughtful ways.I'm always eager to collaborate on ambitious projects that challenge the norms and explore new possibilities on the web. Let’s build something impactful together.

                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="bg-gray-900 rounded-2xl p-8 mb-8"
                        >
                            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                                        className="relative pl-10 border-l-2 border-purple-500 pb-8 last:pb-0"
                                    >
                                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                                        <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm mb-2">{item.year}</span>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-purple-400 mb-2">{item.company}</p>
                                        <p className="text-gray-400">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="bg-gray-900 text-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Education</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold">BTech in Electronics and Telecommunication</h3>
                                    <p className="text-purple-400">Atharva College Of Engineering</p>
                                    <p className="text-gray-400">2019 - 2023</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Diploma in Electronics and Telecommunication</h3>
                                    <p className="text-purple-400">Viva College Of Diploma and Engineering</p>
                                    <p className="text-gray-400">2016 - 2019</p>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}