import React from "react";
import Image from "next/image";
import Img1 from "/src/assets/images/icons/services/apitesting.png";
import Img2 from "/src/assets/images/icons/services/automationtesting.png";
import Img3 from "/src/assets/images/icons/services/blockchaintesting.png";
import Img4 from "/src/assets/images/icons/services/cybertesting.png";
import Img5 from "/src/assets/images/icons/services/desktopapptesting.png";
import Img6 from "/src/assets/images/icons/services/gametesting.png";
import Img7 from "/src/assets/images/icons/services/mobiletesting.png";
import Img8 from "/src/assets/images/icons/services/performancetesting.png";
import Img9 from "/src/assets/images/icons/services/webtesting.png";

const cardGrid = () => {
  const cards = [
    {
      id: 1,
      image: Img1,
      title: "API Testing",
      description:
        "Streamline your API testing with advanced solutions, ensuring seamless integration and optimal functionality across systems.",
    },
    {
      id: 2,
      image: Img2,
      title: "Automation Testing",
      description:
        "Accelerate testing processes with powerful automation tools, enhancing efficiency and ensuring robust software quality.",
    },
    {
      id: 3,
      image: Img3,
      title: "Blockchain Testing",
      description:
        "Ensure the reliability and security of your blockchain solutions through rigorous testing, empowering trust and scalability.",
    },
    {
      id: 4,
      image: Img4,
      title: "Security Testing",
      description:
        "Fortify your digital infrastructure with state-of-the-art cybersecurity measures, safeguarding your valuable data and ensuring uninterrupted .",
    },
    {
      id: 5,
      image: Img5,
      title: "Desktop App Testing",
      description:
        "Seamless desktop app testing for impeccable performance, ensuring client satisfaction and impressive user experiences.",
    },
    {
      id: 6,
      image: Img6,
      title: "Game Testing",
      description:
        "Elevate your gaming experience with meticulous game testing, ensuring immersive gameplay, flawless mechanics, and captivating visuals.",
    },
    {
      id: 7,
      image: Img7,
      title: "Mobile App Testing",
      description:
        "Efficient mobile app testing solutions to ensure flawless performance across various devices and operating systems.",
    },
    {
      id: 8,
      image: Img8,
      title: "Performance Testing",
      description:
        "Unleash the full potential of your software with cutting-edge performance testing, delivering lightning-fast, high-performing applications.",
    },
    {
      id: 9,
      image: Img9,
      title: "Web App Testing",
      description:
        "Comprehensive web app testing services ensuring optimal functionality and seamless user experience across all browsers.",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-7xl  mx-auto my-36 justify-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white p-8 shadow-md border-2 border-[#F9A826]  rounded-xl"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={70}
            height={70}
            className="rounded-md"
          />
          <h3 className="text-xl font-bold mt-5 mb-4">{card.title}</h3>
          <p className="text-sm text-gray-500 mb-10">{card.description}</p>
          <button className="bg-[#f9a826] text-black font-bold py-2 w-full rounded">
            Click Me
          </button>
        </div>
      ))}
    </div>
  );
};

export default cardGrid;
