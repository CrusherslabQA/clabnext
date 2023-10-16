import React from "react";
import Image from 'next/image';
import img from '/src/assets/images/undraw_work_time_re_hdyv.svg';

const Banner1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-36 gap-28 mb-20 max-w-7xl mx-auto ">
      <div className="lg:w-1/2 p-8">
        <p className=" font-bold mb-4">IT Staff Augmentation Services</p>
        <h1 className=" text-[20px] md:text-[32px] text-black font-semibold mb-6">Get Expert Resources, Maximize <br/> Your Team Performance Through <br/> Augmentation Strategies</h1>
        <p className="mb-9">Looking for top-tier IT staff augmentation services? Vivasoft has you covered. We offer comprehensive team augmentation solutions with highly skilled personnel to help you grow and strengthen your team. From software developers to project managers, we have the expertise to elevate your business to the next level. Partner with Vivasoft today and watch your team thrive.</p>
        <button className="text-white bg-[#F9A826] hover:bg-white hover:text-black border-2 px-6 py-3 rounded-md text-xl font-semibold">
          Hire Developers
        </button>
      </div>
      <div className="">
        <Image 
            src={img}
            alt="Your Image Alt Text"
            width={500}
            height={500}
        />
      </div>
    </div>
  );
};

export default Banner1;
