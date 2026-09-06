import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, projects, skills } from '../../constants/portfolioData';
import { Button } from '../../components/ui/Button';
import { ResumeModal } from '../../../resume/components/ResumeModal';

interface LandingProps {
    children?: ReactNode;
}

function Landing({ children }: LandingProps) {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <>
            {/* HERO SECTION */}
            <section className='w-full min-h-screen flex justify-center items-center md:mt-20'>
                <div className="grid lg:grid-cols-2 gap-3 max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-10 lg:mt-0 mb-10 lg:ml-20 flex justify-center"
                    >
                        <img className="rounded-full w-70 h-70 sm:w-96 sm:h-96 xl:w-120 xl:h-120 object-cover" src={personalInfo.profileImage} alt={personalInfo.name} />
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-5"
                    >
                        <p className="text-3xl lg:text-2xl xl:text-5xl text-primary-text font-medium">{personalInfo.greeting}</p>
                        <h1 className="lg:text-lg xl:text-3xl mt-2 xl:mt-5 text-primary-text">I'm {personalInfo.name}. {personalInfo.role}.</h1>
                        <Button 
                            variant="primary" 
                            className="mt-8 text-lg px-8 py-3"
                            onClick={() => setIsResumeModalOpen(true)}
                        >
                            View CV
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" className="scroll-mt-32 mt-32 md:mt-50 mx-10 max-w-7xl xl:mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-text mb-16 md:mb-20">About Me</h2>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-lg lg:text-2xl mx-5 lg:mx-15 text-primary-text leading-8 lg:leading-10 text-center font-light"
                >
                    I'm Jan Nielsen Añonuevo, a Computer Science graduate from Mapua University with five years of programming experience. My passion for software development began in Junior High at Don Bosco Technical Institute of Makati, where I specialized in Computer Technology. I am proficient in C/C++, PHP, Java, HTML, CSS, JavaScript, SQL, and Python, and familiar with frameworks like Bootstrap, Tailwind CSS, and ReactJS. My strong foundation in programming allows me to quickly adapt to new languages and technologies.
                </motion.div>
            </section>

            {/* TECH STACK SECTION */}
            <section id="techstack" className="scroll-mt-32 mt-32 md:mt-50 mx-10 max-w-7xl xl:mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-text mb-16 md:mb-20">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col justify-center items-center group"
                        >
                            <img 
                                className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2" 
                                src={skill.image} 
                                alt={skill.name} 
                            />
                            <h3 className="mt-6 text-2xl font-medium text-center text-primary-text">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="scroll-mt-32 mt-32 md:mt-50 mx-10 max-w-7xl xl:mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-16 md:mb-20">Projects, Contributions, Experiences, Whatnots</h2>
                <div className="flex overflow-x-auto overflow-y-hidden gap-10 snap-x snap-mandatory pb-10">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex-none w-[85vw] md:w-[600px] snap-center flex flex-col items-center xl:items-start"
                        >
                            <div 
                                className="w-full h-80 sm:h-96 bg-no-repeat bg-cover bg-center rounded-2xl shadow-lg mb-8 hover:shadow-2xl transition-shadow duration-300"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <h3 className="mt-2 text-3xl font-bold text-primary-text text-center xl:text-left">{project.title}</h3>
                            <p className="mt-4 text-xl text-primary-text text-center xl:text-left opacity-90">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-4 mt-6 justify-center xl:justify-start">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <Button variant="primary">Github</Button>
                                    </a>
                                )}
                                {project.liveDemo && (
                                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                                        <Button variant="primary">Live Demo</Button>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* INJECTED FEATURES */}
            {children}

            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
                cvLink={personalInfo.cvLink} 
            />
        </>
    )
}

export default Landing