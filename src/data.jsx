import cpc2 from "./assets/cpc2.jpg";
import cpc3 from "./assets/cpc3.jpg";

import ctf1 from "./assets/ctf1.jpg";
import ctf4 from "./assets/ctf4.jpg";

import robotics2 from "./assets/robotics2.jpg";
import robotics3 from "./assets/robotics3.jpg";
import robotics4 from "./assets/robotics4.jpg";
import robotics5 from "./assets/robotics5.jpg";
import robotics6 from "./assets/robotics6.jpg";

import cluedo from './assets/clue.jpg'
import rise from './assets/rise.png'
import cheese from './assets/cheese.png'
import stonks from './assets/stonks.png'
import { logo } from './components/Images'
import { ensi } from './components/Images'
import { robot } from './components/Images'
import { sniffer } from './components/Images'
import { station } from './components/Images'

const cpc = [
    {
        image: cpc2,
        description: "text"
    },
    {
        image: cpc3,
        description: "text"
    },
]

const robotics = [
    {
        image: robotics2,
        description: "text"
    },
    {
        image: robotics3,
        description: "text"
    },
    {
        image: robotics4,
        description: "text"
    },
    {
        image: robotics5,
        description: "text"
    },
    {
        image: robotics6,
        description: "text"
    },
]

const ctf = [
    {
        image: ctf1,
        description: "text"
    },
    {
        image: ctf4,
        description: "text"
    },
]

const projects = [
    {
        image: logo,
        name: "Brika",
        url: "https://github.com/riahifiras/recipe-website",
        description: "A social network enabling users to share their favorite recipes, fostering a community of food enthusiasts."
    },
    {
        image: rise,
        name: "Rise Stock Manager",
        url: "https://github.com/riahifiras/stock-managment-app",
        description: "An intricately designed desktop application for stock management, tailored for a company specializing in the field of hydraulics and environmental solutions."
    },
    {
        image: cluedo,
        name: "Cluedo",
        url: "https://github.com/riahifiras/cluedo",
        description: "A digital adaptation of the beloved board game, Cluedo, bringing its classic mystery-solving experience to the digital realm."
    },
    {
        image: stonks,
        name: "Stonks",
        url: "https://github.com/MedAziz218/Stock-Manager",
        description: "A command-line interface application with powerful features for efficient stock management within stores, boasting an intuitive design."
    },
    {
        image: robot,
        name: "Line follower robot",
        url: "https://github.com/MedAziz218/Line-Follower-Arduino-code",
        description: "A precision-engineered robot capable of flawlessly tracking black lines on white surfaces, offering remarkable speed and accuracy."
    },
    {
        image: cheese,
        name: "Jben Overdose",
        url: "https://github.com/riahifiras/Jben-overdose",
        description: "An online platform catering to cheesecake enthusiasts, featuring an extensive assortment of meticulously curated cheesecakes for purchase and review."
    },
    {
        image: ensi,
        name: "Madara in Manouba",
        url: "https://github.com/riahifiras/Madara-in-Manouba",
        description: "Embark on an epic adventure as Uchiha Madara in the mystical land of Manouba! This Unity game offers an immersive journey through the enigmatic landscapes of Tunisia's Manouba state, inspired by the Naruto universe."
    },
    {
        image: station,
        name: "Game Station",
        url: "https://github.com/riahifiras/Game-station",
        description: "Indulge in nostalgia with this collection of four classic games written in C using the SFML library. Rediscover the joy of Snake, Minesweeper, 2048, and Sudoku, all bundled into one convenient package."
    },
    {
        image: sniffer,
        name: "Packet Sniffer",
        url: "https://github.com/riahifiras/Packet-sniffer",
        description: "A Python application empowering users to intercept and analyze network packets traversing through their network infrastructure."
    },
];


export { ctf, cpc, robotics, projects };