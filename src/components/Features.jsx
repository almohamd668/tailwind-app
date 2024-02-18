import { useState } from "react";
import FeaturesBox from "./FeaturesBox";
import access from "../assets/imgs/icon-access-anywhere.svg";
import collaboration from "../assets/imgs/icon-collaboration.svg";
import file from "../assets/imgs/icon-any-file.svg";
import security from "../assets/imgs/icon-security.svg";
const Features = () => {
  const [items] = useState([
    {
      icon: access,
      title: "Real item collection",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore eaque, iste quas magnam `,
    },
    {
      icon: collaboration,
      title: "Real item collect",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore eaque, iste quas magnam `,
    },
    {
      icon: file,
      title: "Real-time collection",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore eaque, iste quas magnam `,
    },
    {
      icon: security,
      title: "stor any type of file",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore eaque, iste quas magnam `,
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  w-[865px]  mx-auto max-w-full">
          {items.map((item) => (
            <FeaturesBox
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
