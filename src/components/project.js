import { ProjectList } from "../utils/projectInfo";
import { Link } from "react-router-dom";
import ColoredScrollbars from "react-scrollbars-custom";

const ProjectSection = () => {
  return (
    <div className="py-6 mt-10 w-full">
      <h1 className="text-slate-400 font-bold text-4xl ml-5">Projects</h1>
      <div className="flex flex-row w-full pt-10">
        <ColoredScrollbars style={{ height: 380 }} thumbsize={80}>
          <div className="flex w-full ">
            {ProjectList.map((item) => (
              <div
                className="h-[320px] w-[23%] p-1 mr-4 mt-5 ml-4 flex flex-col bg-slate-50 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                key={item.name}
              >
                <div className="md:w-52 ">
                  <img
                    alt="banner"
                    src={item.image}
                    className="h-44 w-full rounded-t-2xl"
                  />
                </div>
                <div className="h-[40%] w-full flex flex-col justify-around">
                  <span className="text-slate-950 font-semibold font-sans text-base ml-5">
                    {item?.name}
                  </span>
                  <span className="text-black font-light text-xs p-3 ml-2 mt-[-15%] mb-[10 %]">
                    {item?.tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ColoredScrollbars>
      </div>
    </div>
  );
};

export default ProjectSection;
