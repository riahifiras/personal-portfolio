import Skills from '../Skills/Skills';
import './About.css'

const About = () => {
  return (
    <div className="h-screen">
      <div className='flex flex-col justify-around gap-10 items-center pt-8 half-screen bg-blue-700 text-white'>
        <div className='w-1/2 text-3xl text-center'>
          I am currently pursuing a degree in Computer Science Engineering at the National School of Computer Science (ENSI). Throughout my academic journey, I have actively engaged in diverse projects spanning various domains, constantly challenging myself to enhance my skills. I'm quietly confident, naturally curious, and perpetually working on improving my chops one project at a time.
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
