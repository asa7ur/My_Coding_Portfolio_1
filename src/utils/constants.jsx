import frontEndImg from '../assets/frontEnd.svg'
import backEndImg from '../assets/backEnd.svg'
import uiUxImg from '../assets/uiux.svg'

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
  { label: 'Name:', value: 'Garik Asatryan' },
  { label: 'Age:', value: '27' },
  { label: 'Address:', value: 'Sevilla, Spain' },
  { label: 'Email:', value: 'asa7ur@proton.me' },
  { label: 'Phone:', value: '+34611450988' },
]

export const skills = [
  'HTML',
  'CSS',
  'javascript',
  'react',
  'python',
  'nodeJS',
  'mongoDB',
  'git',
  'figma',
]

export const services = [
  {
    image: frontEndImg,
    title: 'Front-End Developer',
    description: `As a Front-End Developer, I specialize in bringing designs to life on the web. Using HTML, CSS, and JavaScript, I focus on creating user-friendly interfaces that are both visually appealing and functional.`,
  },
  {
    image: backEndImg,
    title: 'Back-End Developer',
    description: `As a Back-End Developer, I work behind the scenes to ensure that websites and applications run smoothly. I handle server-side logic and database management using NodeJS and MongoDB to support the functionality of the front-end.`,
  },
  {
    image: uiUxImg,
    title: 'UI/UX Designer',
    description: `As a UI/UX Designer, I'm dedicated to crafting seamless digital experiences. Through a mix of creativity and user-centric design principles, I create interfaces that are intuitive, accessible, and visually engaging using Figma.`,
  },
]
