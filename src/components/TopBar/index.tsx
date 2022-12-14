import Image from "next/image";
import Link from "next/link";
import ConnectButton from "../ConnectButton";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <div className="sticky top-0 w-full">
      <div className="relative flex w-full items-center px-4  py-4 shadow">
      
        <Image src="/logoicon.png" alt="me" width="64" height="64" />
          <span className=" ml-3 text-lg font-bold">BlockMarket</span>
       
        <div className="flex-grow">
          <NavBar />
        </div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default TopBar;
