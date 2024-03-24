import { CogIcon, Settings, WifiIcon } from "lucide-react";
import { ReactNode } from "react";
import { FaTools } from "react-icons/fa";
import { HiOutlineWifi } from "react-icons/hi2";

interface INavOption {
  icon: ReactNode;
  text: string;
}

const Home = () => {
  return (
    <div>
      <div className="w-full flex  justify-center items-center">
        <div className=" bg-kLightGrey">
          <img src="/logos/konnect_main.png" className="m" />
          <div className="flex justify-evenly items-center text-kblack">
            <NavOption icon={<HiOutlineWifi className="w-4 h-4" />} text="Internet Plans" />
            <NavOption icon={<Settings />} text="Add Device" />{" "}
            <NavOption icon={<FaTools />} text="Change Device" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const NavOption = ({ icon, text }: INavOption) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm font-light">{text}</span>
    </div>
  );
};
