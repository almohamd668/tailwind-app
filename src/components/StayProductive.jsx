import intro from "../assets/imgs/illustration-intro.png";
import arrow from "../assets/imgs/icon-arrow.svg";

const StayProductive = () => {
  return (
    <section className="pb-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center ">
          <div className="w-[500px] max-w-full">
            <img src={intro} alt="illustration-intro" />
          </div>
          <div className="md:mt-[60px] text-white">
            <h3 className="leading-[50px] font-semibold text-[35px]">
              Stay Productive,
              <br />
              wherever you are
            </h3>
            <div className=" my-6 font-normal text-sm tracking-[0.8px]">
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sunt delectus minima perspiciatis animi hic explicabo
                accusantium magnam voluptatum dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sunt delectus minima perspiciatis animi hic explicabo
                accusantium magnam voluptatum dolore.
              </p>
            </div>
            <a
              href="/"
              className="text-primary  hover:text-[#42b0d1] border-b-2
               border-primary border-solid pb-[5px] w-fit flex
                items-center gap-[15px] transition-colors duration-200"
            >
              see how Fylo works
              <img
                src={arrow}
                alt="icon-arrow-svg"
                className="animate-[moveRight_1s_ease-in-out_infinite]
                 w-[20px] h-[20px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
