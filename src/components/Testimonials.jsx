import { useState } from "react";
import profile1 from "../assets/imgs/profile-1.jpg";
import profile2 from "../assets/imgs/profile-2.jpg";
import quote from "../assets/imgs/bg-quotes.png";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non voluptatem quos itaque.
    `,
      image: profile1,
      position: "SEO & Founder",
      name: "Ahmed",
    },

    {
      id: 2,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non voluptatem quos itaque.
    `,
      image: profile2,
      position: "Backed Dev",
      name: "Majeed",
    },
    {
      id: 3,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non voluptatem quos itaque.
    `,
      image: profile2,
      position: "Fronted Dev ",
      name: "Waleed",
    },
  ]);

  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] ">
          <img src={quote} alt="quote" />
        </div>
        <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              desc={item.desc}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
