const GetStarted = () => {
  return (
    <section>
      <div className="container relative">
        <div
          className="absolute bg-[#1c2230] left-[50%] top-[-150px] translate-x-[-50%] min-h-[275px] 
         rounded-[5px] element-center w-[865px] max-w-full text-white text-center p-[30px]"
        >
          <h3 className="font-semibold text-[25px] md:text-[35px] mb-[15px]  ">
            get early access today
          </h3>
          <p className="w-[620px] min-w-full mx-auto  mb-[30px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, enim
            eveniet?
          </p>
          <form
            action=""
            className="w-full flex justify-between items-center gap-[30px] md:px-[60px]  flex-wrap"
          >
            <input
              type="email"
              placeholder="email@example.email"
              className="w-full md:flex-1
              outline-none ps-5 h-[45px] rounded-full text-sm font-medium text-black"
            />
            <button
              type="submit"
              className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#76c5cf] rounded-full transition-all duration-300"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
