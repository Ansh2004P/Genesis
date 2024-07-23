import AsideInfo from "./asideInfo";
import { sideBarList, socials } from "../utils/sideBarList";
import { Link } from "react-router-dom";

const lst = sideBarList;

const Legends = () => {

  return (
    <div className="h-full w-[16rem] py-5 ml-5 mb-4 rounded-xl flex flex-col justify-evenly  bg-[#1C1B23]">
      {lst.map((item, index) => {
        {
          return (
            // console.log(item),
            <div
              key={index}
              className="hover:scale-110 transition-all duration-300 cursor-pointer "
             
            >
              <AsideInfo text={item?.name} icon={item?.icon} />
            </div>
          );
        }
      })}
      <span className="text-[#86858D] ml-6 font-sans text-lg">Socials</span>
      {socials.map((item, index) => {
        {
          return (
            // console.log(item),
            <Link
              to={item?.link}
              key={index}
              className="hover:scale-110 transition-all duration-300 cursor-pointer "
            >
              <AsideInfo
                text={item?.name}
                icon={item?.icon}
                color={item?.color}
              />
            </Link>
          );
        }
      })}
      <Link
        to={"https://leetcode.com/u/Ansh_K_Patel/"}
        className="flex flex-row  ml-10 h-7 hover:scale-110 transition-all duration-300 cursor-pointer "
      >
        <img
          src={require("../../assets/icons/leetcode.png")}
          className="w-5 h-5"
        />
        <span className="text-[#cec6ff] ml-6 font-sans text-md">LeetCode</span>
      </Link>
      <Link
        to={"https://www.codechef.com/users/porgas_d_ace"}
        className="flex flex-row mt-2 ml-10 h-7 hover:scale-110 transition-all duration-300 cursor-pointer "
      >
        <img
          src={require("../../assets/icons/codechef.png")}
          className="w-5 h-5"
        />
        <span className="text-[#cec6ff] ml-6 font-sans text-md">Codechef</span>
      </Link>
      <Link
        to={"https://codeforces.com/profile/anshkpatel15"}
        className="flex flex-row mt-2 ml-10 h-7 hover:scale-110 transition-all duration-300 cursor-pointer "
      >
        <img
          src={require("../../assets/icons/codeforces.png")}
          className="w-5 h-5"
        />
        <span className="text-[#cec6ff] ml-6 font-sans text-md">
          Codeforces
        </span>
      </Link>
    </div>
  );
};
export default Legends;
