import { useRef } from "react";
import MainSection from "./mainSection";
import NavSection from "./navigationSection";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <div className="h-screen w-screen bg-[#14131A] flex flex-row justify-between">
      <NavSection />
      <MainSection
        refs={(homeRef, aboutRef, projectsRef, skillRef, experienceRef)}
      />
    </div>
  );
};
export default Home;
