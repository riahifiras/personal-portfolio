import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover({ set }) {
    const [imageDimensions, setImageDimensions] = useState([]);

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

    useEffect(() => {
        const getImageDimensions = async () => {
            const dimensions = await Promise.all(
                set.map((element) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = element.image;
                        img.onload = () => {
                            resolve({
                                height: img.naturalHeight,
                                width: img.naturalWidth
                            });
                        };
                    });
                })
            );
            setImageDimensions(dimensions);
        };
        getImageDimensions();
    }, [set]);

    return (
        <div className="slider-container w-[90%] lg:w-[50%]">
            <Slider {...settings}>
                {set.map((element, index) => (
                    <div key={index} className="shadow-lg aspect-video w-[80%] lg:h-[380px] h-[256px] bg-black flex justify-center items-center">
                        <img
                            src={element.image}
                            alt="photo"
                            className={`${imageDimensions[index]?.height >= imageDimensions[index]?.width ? "object-contain" : "object-cover"} h-full w-full`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PauseOnHover;
