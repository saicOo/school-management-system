import { FaBars, FaSearch, FaBell, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LanguageToggle from "../LanguageToggle";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="h-20 bg-white border-b border-accent-foreground flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <FaBars className="h-5 w-5" />
          </Button>
        </div>

        <h1 className="font-semibold text-lg">Dashboard</h1>
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-accent" />
          <Input
            placeholder="Search"
            className="rounded-xl pl-10 pr-4 bg-accent-foreground"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <LanguageToggle />

        <Button variant="ghost" size="icon" className="relative">
          <FaEnvelope className="h-5 w-5 text-black" />
          <span className="absolute top-1 end-1 bg-primary text-black text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            8
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <FaBell className="h-5 w-5 text-black" />
          <span className="absolute top-1 end-1 bg-secondary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            9
          </span>
        </Button>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="https://ui-avatars.com/api/?name=S+J"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
          <span className="hidden md:block text-sm font-medium">
            Steven Jhon
            <br />
            <span className="text-sm text-gray-400 font-light">Admin</span>
          </span>
        </div>
      </div>
    </header>
  );
}
