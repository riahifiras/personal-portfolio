import { icon1, icon2, icon3, icon4, react, html, css, js, flask, csharp, cplusplus, express, figma, canva, solidworks, catia, autocad, photoshop, illustrator, unity, tailwindcss, python, logo} from '../components/Images';

const domains = [
    {
        id: 1,
        icon: icon1,
        title: 'Web Development',
        tools: [html, css, js, tailwindcss, react, flask],
        description: "Crafting seamless digital experiences with expertise in frontend and backend technologies."
    },
    {
        id: 2,
        icon: icon2,
        title: 'Game Development',
        tools: [unity, csharp, cplusplus, python],
        description: "Creating immersive 2D worlds that transport players to new realms of excitement."
    },
    {
        id: 3,
        icon: icon3,
        title: 'Graphic Design',
        tools: [photoshop, illustrator, figma, canva ],
        description: "Transforming concepts into captivating visuals for logos and prototypes."
    },
    {
        id: 4,
        icon: icon4,
        title: 'Computer Aided Design',
        tools: [solidworks, autocad, catia ],
        description: "Crafting detailed mechanical prototypes with precision and innovation."
    },
]


const skills = [
    {
        id: 1,
        icon: icon1,
        title: 'Frontend Development',
        desc: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        title1: 'Languages I use:',
        app: ['HTML', 'CSS', 'JavaScript'],
        title2: 'Frameworks: ',
        tools: ['React', 'TailwindCSS']
    },
    {
        id: 2,
        icon: icon2,
        title: 'Game Development',
        desc: 'I specialize in transforming concepts into captivating gameplay and immersive experiences.',
        title1: 'Game genres:',
        app: ['2D games'],
        title2: 'Dev Tools: ',
        tools: ['Unity', 'C++ (SFML)', 'Python (Pygame)']
    },
    {
        id: 3,
        icon: icon3,
        title: 'Graphic Design',
        desc: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        title1: 'Things I enjoy designing:',
        app: ['Logos', 'Websites'],
        title2: 'Design Tools: ',
        tools: ['Adobe Photoshop', 'Adobe Illustrator']
    },
]

export default domains