import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover({ set }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className="slider-container w-[50%]">
            <Slider {...settings}>
                {set.map((element, index) => {
                    return (
                        <div key={index} className="shadow-lg aspect-video w-[80%] h-[480px] bg-black flex justify-center items-center">
                            <img
                                src={element.image}
                                alt="photo"
                                className="object-contain h-full w-full"
                            />
                        </div>




                    )
                })}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
