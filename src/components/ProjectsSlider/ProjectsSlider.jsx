import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from '../Project/Project'
import { projects } from "../../data";

const ProjectsSlider = ({showPopup, openPopup}) => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className="slider-container w-[90%] lg:w-[50%]">
            <Slider {...settings}>
                {projects.map((project, index) => {
                    return(
                        <Project key={index} showPopup={showPopup} openPopup={() => openPopup(project.image, project.name, project.url, project.description)} image={project.image} name={project.name} url={project.url} descripton={project.description}/>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ProjectsSlider