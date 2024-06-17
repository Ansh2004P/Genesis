import { SkillInfo } from "../utils/skill_Info";

const SkillSection = () => {
  return (
    <div className="flex flex-col h-fit w-full mt-12">
      <span className="text-slate-400 font-bold text-4xl ml-5">
        What I Know
      </span>
      <div className="flex flex-row">
        {SkillInfo.map((item) => {
          return (
            <div
              key={item?.title}
              className="flex flex-col ml-5 mt-5 w-[20%] h-[270px] bg-[#1C1B23] rounded-xl"
            >
              <span className="text-slate-200 font-bold text-base pt-4 ml-4">
                {item?.title}
              </span>
              <div className=" mt-5 ml-[-7px] p-1 h-fit flex flex-row w-fit flex-wrap">
                {item?.skills.map((skill) => {
                  return (
                    <span
                      key={skill}
                      className="text-[#818086] font-base text-sm text-center p-1 ml-5 mb-2 bg-[#14131A] h-[30px] w-fit shadow-sm shadow-slate-900"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;