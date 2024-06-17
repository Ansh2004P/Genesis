import Resume from "../../assets/images/resume.pdf";

const Header = () => {
  return (
    <div className="bg-cover bg-cover-image bg-center h-44  w-full relative">
      <div className="backdrop-blur-lg h-44 w-full flex flex-row justify-evenly">
        <div className="mt-[15px] ml-[4%] bg-logo h-[140px] w-[140px] grow-0 shrink-0 rounded-full p-2 bg-center bg-cover ring-4 ring-gray-300 ring-inset shadow-xl shadow-zinc-800"></div>
        <span className="mt-[60px] mr-[45%] text-white font-sans text-pretty font-bold text-4xl ">
          Ansh Patel
        </span>
        <a href={Resume} download="resume">
          <div className="p-2 mt-[60px] mr-[2%] shrink-0 bg-[#1C1B23] h-11 w-48  shadow-lg shadow-slate-900 hover:scale-110 transition-all duration-300 cursor-pointer">
            <span className="ml-[0.6rem] text-sm text-center text-stone-200 font-semibold ">
              Unlock My Career Story{" "}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Header;
