import logo from "../../public/fixeet-logo.png";
import Button from "./button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-light flex justify-between items-center px-8 py-4">
      <div className="w-2/5 flex  justify-between items-center relative">
        <div>
          <img src={logo} alt="logo" className="" />
        </div>
      </div>

      <div className="flex gap-8 justify-end  ">
        <div className="hidden md:flex justify-between  items-center gap-8 font-bold ">
          <Link className="flex cursor-pointer">Home</Link>
          <Link className="flex cursor-pointer">About</Link>
          <Link className=" flex w-[4rem] cursor-pointer ">Sign In</Link>
          <Link className="flex w-[6rem] cursor-pointer  text-primary">
            All Reports
          </Link>
        </div>

        <Button variant="primary" type="submit">
          Report an Issue
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
