import React from 'react';
import { robotics } from '../../components/Images';

const Slider = ({ state }) => {
  return (
    <div className="sticky flex flex-col w-1/3 translate-x-1/2 rounded-lg shadow-lg bg-white z-20 " style={{ display: state ? 'flex' : 'none' }}>
    <img src={robotics} alt="" className="rounded-t-lg" />
    <p className="bg-white text-black m-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi neque officiis,
        reprehenderit possimus atque consequatur blanditiis, animi itaque esse exercitationem
        assumenda quidem libero? Ipsum quidem commodi distinctio excepturi exercitationem ratione.
    </p>
    </div>
  );
};

export default Slider;
