"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/all-animals" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav className="bg-green-600 text-white sticky top-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center p-4">
        
        <Link href="/" className="text-2xl font-bold">
          QurbaniHat
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-green-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="bg-green-700 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-inner">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium border-b border-green-500/30 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;