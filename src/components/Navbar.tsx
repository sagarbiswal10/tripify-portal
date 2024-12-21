import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">TravelEase</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
            {user ? (
              <>
                <Link to="/my-bookings" className="text-gray-700 hover:text-blue-600">My Bookings</Link>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{user.name}</span>
                  <Button variant="outline" onClick={logout} className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={() => navigate('/signin')} className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
            )}
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
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
              {user ? (
                <>
                  <Link to="/my-bookings" className="block px-3 py-2 text-gray-700 hover:text-blue-600">My Bookings</Link>
                  <div className="px-3 py-2">
                    <span className="block text-gray-700 mb-2">{user.name}</span>
                    <Button variant="outline" onClick={logout} className="w-full flex items-center gap-2 justify-center">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <Button onClick={() => navigate('/signin')} className="w-full mt-2 flex items-center gap-2 justify-center">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};