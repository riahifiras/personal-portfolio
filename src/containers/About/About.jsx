import Skills from '../Skills/Skills';
import './About.css'

const About = () => {
  return (
    <div id='About' className="lg:h-screen z-50">
      <div className='lg:h-half-screen almost flex flex-col justify-around gap-10 items-center pt-8 bg-blue-700 text-white'>
        <div className='w-3/4 lg:w-1/2 lg:text-3xl text-center text-xl'>
          I am currently pursuing a degree in Computer Science Engineering at the National School of Computer Science (ENSI). Throughout my academic journey, I have actively engaged in diverse projects spanning various domains, constantly challenging myself to enhance my skills. I'm quietly confident, naturally curious, and perpetually working on improving my chops one project at a time.
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
