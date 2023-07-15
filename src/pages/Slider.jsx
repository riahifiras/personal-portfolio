import { useState } from "react"
import Header from "../containers/Header/Header"
import { ctf, cpc, hackathon, robotics } from "../data"

const Slider = () => {


  let images = [];
  if (window.location.pathname.endsWith("Robotics")) { images = robotics }
  else if (window.location.pathname.endsWith("Cybersecurity")) { images = ctf }
  else if (window.location.pathname.endsWith("Hackathons")) { images = hackathon }
  else if (window.location.pathname.endsWith("Programming")) { images = cpc }

  console.log(images);

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      currentImage > 0 ? setCurrentImage(currentImage - 1) : setCurrentImage(images.length - 1);
    }
    else if (direction === "right") {
      currentImage < images.length - 1 ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
    }
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="translate-y-20 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-row items-center gap-4">
          <button
            className="flex items-center justify-center shadow-md rounded-full w-14 h-14 border-2 transition duration-200 hover:scale-110"
            onClick={() => handleClick("left")}
          >
            {'<'}
          </button>
          <div className="shadow-lg aspect-video object-cover rounded-xl bg-black flex justify-center items-center" style={{ width: '1200px', maxHeight: '100vh' }}>
            <img
              src={images[currentImage].image}
              alt="photo"
              className="h-full max-w-full py-0"
            />
          </div>
          <button
            className="flex items-center justify-center shadow-md rounded-full w-14 h-14 border-2 transition duration-200 hover:scale-110"
            onClick={() => handleClick("right")}
          >
            {'>'}
          </button>
        </div>
        <p className="translate-y-6 text-xl">{images[currentImage].description}</p>
      </div>
    </div>


  )
}

export default Slider