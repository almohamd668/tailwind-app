const FeaturesBox = ({ icon, title, desc }) => {
  return (
    <div className="text-white element-center text-center">
      <img src={icon} alt="" className="w-[80px] h-[80px] object-contain" />
      <h4 className="text-xl my-2 font-semibold">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeaturesBox;
