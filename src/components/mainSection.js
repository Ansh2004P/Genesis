import Header from "./header";
import { Scrollbar } from "react-scrollbars-custom";
import About from "./about";
import Experience from "./experience";
import ProjectSection from "./project";
import SkillSection from "./skills";
import { forwardRef } from "react";

const MainSection = () => {
  return (
    <div className="h-full w-[80%] flex flex-col ml-4 ">
      <div className="bg-[#14131A] w-full h-[10%] flex justify-end z-10 "></div>
      <Scrollbar style={{ height: "100%" }}>
        <div className="mt-2 h-screen w-full flex flex-col">
          <Header />
          <About />
          <ProjectSection />
          <SkillSection />
          <Experience />
        </div>
      </Scrollbar>
    </div>
  );
};

export default MainSection;
