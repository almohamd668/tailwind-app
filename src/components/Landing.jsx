import imgOne from "../assets/imgs/work-steps.png";
import curve from "../assets/imgs/bg-curvy-desktop.svg";
const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container  mx-auto">
        <div className="element-center pt-[200px] md:pt-[150px]">
          <div className="w-[500px]    max-w-full">
            <img src={imgOne} alt="" className="w-full h-fit" />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your fils in one secure location,
              <br />
              accessible anywhere
            </h1>
            <p className="text-sm font-normal md:w-[600px] max-w-full mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              eligendi! Nostrum magnam, sit optio veritatis numquam consequuntur
              esse illo maxime.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] text-white "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full  md:h-[200px]">
        <img src={curve} alt="w-full h-full" />
      </div>
    </section>
  );
};
export default Landing;
