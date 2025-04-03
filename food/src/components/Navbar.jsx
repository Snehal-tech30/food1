import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-3xl font-extrabold text-[#008000] font-[Poppins]">
            QuickBite
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/tours" className="text-gray-700 hover:text-[#008000]">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#008000]">
              About
            </Link>
            
            {user ? (
              <>
                {user.isAdmin ? (
                  <Link to="/admin/dashboard" className="text-gray-700 hover:text-[#008000]">
                    Dashboard
                  </Link>
                ) : (
                  <Link to="/profile" className="text-gray-700 hover:text-[#008000]">
                    My Profile
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-[#008000]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-[#008000]">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#008000] text-white px-4 py-2 rounded-full hover:bg-[#006400]"

                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;