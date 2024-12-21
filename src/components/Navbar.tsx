import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">TravelEase</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Flights</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Cars</a>
            <a href="#offers" className="text-gray-700 hover:text-blue-600">Offers</a>
            <Button variant="default">Sign In</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Flights</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hotels</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Cars</a>
              <a href="#offers" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Offers</a>
              <Button variant="default" className="w-full mt-2">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};