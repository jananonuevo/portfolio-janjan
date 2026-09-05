import type { PersonalInfo, Project, Skill } from '../types';

export const personalInfo: PersonalInfo = {
    greeting: "Hallo, hallo!",
    name: "Jan Añonuevo",
    role: "Software Developer",
    cvLink: "#", // Add the actual link here
    profileImage: "/assets/img/janjan.png"
};

export const skills: Skill[] = [
    { id: '1', name: 'C++', image: '/assets/img/c++.png' },
    { id: '2', name: 'php', image: '/assets/img/php.jpg' },
    { id: '3', name: 'Java', image: '/assets/img/java.png' },
    { id: '4', name: 'Python', image: '/assets/img/python.png' },
    { id: '5', name: 'CSS', image: '/assets/img/css.png' },
    { id: '6', name: 'HTML', image: '/assets/img/html.png' },
    { id: '7', name: 'SQL', image: '/assets/img/sql.png' },
    { id: '8', name: 'Javascript', image: '/assets/img/js.png' }
];

export const projects: Project[] = [
    {
        id: '1',
        title: 'Logos Engineering and Design Website',
        description: 'A simple static website made for the company Logos Engineering and Design to promote their services.',
        image: '/assets/img/logosengineeringanddesign.jpg',
        githubLink: '#'
    },
    {
        id: '2',
        title: 'Project Two (Placeholder)',
        description: 'This is a placeholder for your second project. Please provide the details so I can update it!',
        image: 'https://via.placeholder.com/600x400?text=Project+Two',
        githubLink: '#'
    },
    {
        id: '3',
        title: 'Project Three (Placeholder)',
        description: 'This is a placeholder for your third project. Let me know what to put here.',
        image: 'https://via.placeholder.com/600x400?text=Project+Three',
        githubLink: '#'
    }
];
