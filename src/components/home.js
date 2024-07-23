import MainSection from "./mainSection";
import NavSection from "./navigationSection";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#14131A] flex flex-row justify-between">
      <NavSection />
      <MainSection />
    </div>
  );
};
export default Home;
