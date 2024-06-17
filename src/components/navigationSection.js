import Status from "./status";
import Legends from "./legends";

const NavSection = () => {
  return (
    <div
      className="flex flex-col  h-screen w-[20%]"
    >
      <Status />
      <Legends />
    </div>
  );
};

export default NavSection;
