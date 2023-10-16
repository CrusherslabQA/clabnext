import React, { useState } from "react";
import img1 from "/src/assets/images/blog/3.png";
import img2 from "/src/assets/images/blog/4.png";

const tabs = [
  "All",
  "API Testing",
  "Automation Testing",
  "Blockchain Testing",
  "Security Testing",
  "Desktop App Testing",
  "Game Testing",
  "Mobile App Testing",
  "Performance Testing",
  "Web App Testing",
];

const tabImages = {
  All: [img1, img2],
  "API Testing": [img1, img2],
  "Automation Testing": [img1, img2],
  "Blockchain Testing": [img1, img2],
  "Security Testing": [img1, img2],
  "Desktop App Testing": [img1, img2],
  "Game Testing": [img1, img2],
  "Mobile App Testing": [img1, img2],
  "Performance Testing": [img1, img2],
  "Web App Testing": [img1, img2],
};



const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allImages =
    activeTab === 0
      ? tabs.reduce((acc, tab) => [...acc, ...tabImages[tab]], [])
      : tabImages[tabs[activeTab]];

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const tabsInTwoLines = chunkArray(tabs, 5);

  const imagesChunks = chunkArray(allImages, 3);

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">React Tabs</h1>
      <div className="mb-8 space-y-6">
        {tabsInTwoLines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex justify-center gap-4 text-[14px]">
            {line.map((tab, tabIndex) => {
              const tabGlobalIndex = lineIndex * 5 + tabIndex;
              return (
                <div
                  key={tabIndex}
                  className={`cursor-pointer py-4 px-6 font-semibold text-center rounded-md ${
                    tabGlobalIndex === activeTab
                      ? "bg-[#f9a826] text-white "
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(tabGlobalIndex)}
                >
                  {tab}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="p-4 justify-center">
        <div className="flex flex-wrap justify-center  gap-6">
          {imagesChunks.map((chunk, rowIndex) => (
            <div key={rowIndex} className="flex  gap-7">
              {chunk.map((imageUrl, colIndex) => (
                <img
                  key={`${rowIndex}_${colIndex}`}
                  src={imageUrl}
                  alt={`Image ${rowIndex * 4 + colIndex + 1}`}
                  className="w-[400px] h-[300px] rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;


