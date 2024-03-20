import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Project from '../Project/Project'
import cluedo from '../../assets/cluedo.png'
import tkinter from '../../assets/tkinter.png'
import cheesecake from '../../assets/cheesecake.png'
import stonks from '../../assets/stonks.png'
import { logo } from '../../components/Images'
import robotics3 from '../../assets/robotics3.jpg'

const ProjectsSlider = () => {
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
                <Project image={logo} name={"brika"} url={"https://github.com/riahifiras/recipe-website"} />
                <Project image={tkinter} name={"Stock manager"} url={"https://github.com/riahifiras/stock-managment-app"} />
                <Project image={cluedo} name={"Cluedo"} url={"https://github.com/riahifiras/cluedo"} />
                <Project image={cheesecake} name={"Jben overload"} url={"https://github.com/riahifiras/Jben-overdose"} />
                <Project image={stonks} name={"C-stock-manager"} url={"https://github.com/MedAziz218/Stock-Manager"} />
                <Project image={robotics3} name={"line follower"} url={"https://github.com/MedAziz218/Line-Follower-Arduino-code"} />
                <Project image={cheesecake} name={"Jben overload"} url={"https://github.com/riahifiras/Jben-overdose"} />
                <Project image={stonks} name={"C-stock-manager"} url={"https://github.com/MedAziz218/Stock-Manager"} />
                <Project image={robotics3} name={"line follower"} url={"https://github.com/MedAziz218/Line-Follower-Arduino-code"} />
            </Slider>
        </div>
    )
}

export default ProjectsSlider