import { cn } from "@/lib/utils";
import {
  CirclePowerIcon,
  CogIcon,
  Settings,
  UserIcon,
  WifiIcon,
} from "lucide-react";
import { ReactNode } from "react";
import { FaTools } from "react-icons/fa";
import { HiOutlineWifi } from "react-icons/hi2";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface INavOption {
  icon: ReactNode;
  text: string;
  textClassname?: string;
}

const Home = () => {
  return (
    <div>
      <div className="bg-kLightGrey w-full flex  justify-center items-center">
        <div className="py-8">
          <img src="/logos/konnect_main.png" className="m" />
          <div className="flex justify-evenly items-center text-kblack">
            <NavOption
              icon={<HiOutlineWifi className="w-4 h-4" />}
              text="Internet Plans"
            />
            <NavOption
              icon={<Settings className="w-4 h-4" />}
              text="Add Device"
            />
            <NavOption
              icon={<FaTools className="w-4 h-4" />}
              text="Change Device"
            />
          </div>
          <div className="flex justify-center  space-x-4 items-center text-kblack mt-6">
            <NavOption
              icon={<UserIcon className="w-4 h-4 text-gray-400" />}
              text="Tech"
              textClassname="text-gray-400"
            />
            <NavOption
              icon={<CirclePowerIcon className="w-4 h-4  text-gray-400" />}
              text="Logout"
              textClassname="text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="w-10/12 flex justify-center">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="log-in" asChild>
              <Button variant="outline">Log In</Button>
            </TabsTrigger>
            <TabsTrigger value="register" asChild>
              
              <Button variant="outline">Register</Button>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="log-in">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;

const NavOption = ({ icon, text, textClassname }: INavOption) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className={cn("text-sm font-light", textClassname)}>{text}</span>
    </div>
  );
};
