import frontEndImg from '../assets/frontEnd.svg'
import backEndImg from '../assets/backEnd.svg'
import uiUxImg from '../assets/uiux.svg'

import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'

export const links = [
  {
    id: 1,
    text: 'about me',
  },
  {
    id: 2,
    text: 'services',
  },
  {
    id: 3,
    text: 'portfolio',
  },
  {
    id: 4,
    text: 'contact me',
  },
]

export const personal_info = [
  { id: 1, label: 'Name:', value: 'Garik Asatryan' },
  { id: 2, label: 'Age:', value: '27' },
  { id: 3, label: 'Address:', value: 'Sevilla, Spain' },
  { id: 4, label: 'Email:', value: 'asa7ur@proton.me' },
  { id: 5, label: 'Phone:', value: '+34611450988' },
]

export const skills = [
  { id: 1, value: 'HTML' },
  { id: 2, value: 'CSS' },
  { id: 3, value: 'javascript' },
  { id: 4, value: 'react' },
  { id: 5, value: 'python' },
  { id: 6, value: 'nodeJS' },
  { id: 7, value: 'mongoDB' },
  { id: 8, value: 'git' },
  { id: 9, value: 'figma' },
]

export const services = [
  {
    id: 1,
    image: frontEndImg,
    title: 'Front-End Developer',
    description: `As a Front-End Developer, I specialize in bringing designs to life on the web. Using HTML, CSS, and JavaScript, I focus on creating user-friendly interfaces that are both visually appealing and functional.`,
  },
  {
    id: 2,
    image: backEndImg,
    title: 'Back-End Developer',
    description: `As a Back-End Developer, I work behind the scenes to ensure that websites and applications run smoothly. I handle server-side logic and database management using NodeJS and MongoDB to support the functionality of the front-end.`,
  },
  {
    id: 3,
    image: uiUxImg,
    title: 'UI/UX Designer',
    description: `As a UI/UX Designer, I'm dedicated to crafting seamless digital experiences. Through a mix of creativity and user-centric design principles, I create interfaces that are intuitive, accessible, and visually engaging using Figma.`,
  },
]

export const projects = [
  {
    id: 1,
    image: project1,
    title: 'Admin Dashboard',
    github: 'https://github.com/asa7ur/Admin_Dashboard_1',
    web: 'https://admin-dashboard-1-asa7ur.netlify.app/',
  },
  {
    id: 2,
    image: project2,
    title: 'Music Player App',
    github: 'https://github.com/asa7ur/Music_Website_1',
    web: 'https://music-website-1-asa7ur.netlify.app/',
  },
  {
    id: 3,
    image: project3,
    title: 'Weather App',
    github: 'https://github.com/asa7ur/Weather_App_1',
    web: 'https://weather-app-1-asa7ur.netlify.app/',
  },
  {
    id: 4,
    image: project4,
    title: 'Calculator App',
    github: 'https://github.com/asa7ur/Calculator_App_1',
    web: 'https://calculator-app-1-asa7ur.netlify.app/',
  },
]