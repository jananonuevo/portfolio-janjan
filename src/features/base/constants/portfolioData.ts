import type { PersonalInfo, Project, Skill } from '../types';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const personalInfo: PersonalInfo = {
    greeting: "Hallo, hallo!",
    name: "Jan Añonuevo",
    role: "Software Developer",
    cvLink: "https://docs.google.com/document/d/1Xnh---5w2_ABDdBYPQga7C-oZ6hf5gF8s1DKkzsAMq8/edit?usp=sharing", // Placeholder Google Docs link
    profileImage: asset("assets/img/janjan.png")
};

export const skills: Skill[] = [
    { id: '1', name: 'Odoo', image: asset("assets/img/odoo.png") },
    { id: '2', name: 'php', image: asset("assets/img/php.jpg") },
    { id: '3', name: 'Supabase', image: asset("assets/img/supabase.png") },
    { id: '4', name: 'Python', image: asset("assets/img/python.png") },
    { id: '5', name: 'Tailwind', image: asset("assets/img/tailwindcss.png") },
    { id: '6', name: 'Antigravity', image: asset("assets/img/antigravity.png") },
    { id: '7', name: 'SQL', image: asset("assets/img/sql.png") },
    { id: '8', name: 'ReactJS', image: asset("assets/img/reactjs.png") }
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'Ani',
        description: 'A project we made as an entry for the AMD Hackathon Act II by Lablab.ai. It is a LangGraph-powered system that orchestrates multiple agents.',
        image: asset("assets/img/ani.jpeg"),
        githubLink: 'https://github.com/Zeraphim/ani-amd-hackathon.git',
        liveDemo: 'https://ani-amd-hackathon.vercel.app/',
    },
    {
        id: '2',
        title: 'Real Estate WebApp',
        description: 'A WebApp I made for a coworker that I have worked with when I was still a real estate agent. It aims to ease all the business transactions and analyzations involved in being a real estate agent.',
        image: asset("assets/img/kennethtanayala.png"),
        githubLink: 'https://github.com/jananonuevo/realestate-webapp.git',
        liveDemo: 'https://kenneth-tan-ayala-website.vercel.app/',
    },
    {
        id: '3',
        title: 'Using Item Personality-Based Profiling in Music Recommender Systems',
        description: 'A music recommender system that uses item personality-based profiling to recommend songs to users based on their personality traits',
        image: asset("assets/img/musicrecommendersystem.png"),
        githubLink: 'https://github.com/jananonuevo/thesismusic.git'
    },
    {
        id: '4',
        title: 'Logos Engineering and Design Website',
        description: 'A simple static website made for the company Logos Engineering and Design to promote their services.',
        image: asset("assets/img/logosengineeringanddesign.jpg"),
        githubLink: '',
        liveDemo: 'https://logosengineers.com/'
    }
];
