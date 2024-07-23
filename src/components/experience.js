const Experience = () => {
  return (
    <section
     
      className="h-96 w-full mt-12 flex flex-col grow-0 shrink-0"
    >
      <span className="text-slate-400 font-bold text-4xl ml-5">Experience</span>
      <div className="ml-5 h-36 w-[96%] bg-[#272533] mt-7 shadow-md shadow-slate-900 flex flex-row ">
        <div className="mt-[30px] ml-[3%] h-[50%] w-[10%]">
          <img
            src={require("../../assets/images/betaLabs.png")}
            className="h-[100%] w-[69%]"
          ></img>
        </div>
        <div className="h-full w-[0.5px] bg-slate-700"></div>
        <div className="h-[100%] w-[60%] flex flex-col">
          <span className="font-normal font-sans text-xl text-slate-300 ml-14 mt-[35px]">
            App development Club
          </span>
          <span className="font-normal font-sans text-lg italic text-slate-400 ml-16 mt-[6px]">
            sub-Lead
          </span>
        </div>
        <div className="h-[100%]  flex flex-col">
          <span className="font-normal font-sans text-md italic text-slate-300 ml-28 mt-[40px]">
            Oct 2023 - Present
          </span>
        </div>
      </div>
    </section>
  );
};
export default Experience;
