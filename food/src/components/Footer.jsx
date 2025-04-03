import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">FoodieDelight</h3>
            <p className="text-gray-600">
              Experience the finest flavors and delicious cuisines curated just for you.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/menu" className="block text-gray-600 hover:text-orange-500">Menu</Link>
              <Link to="/about" className="block text-gray-600 hover:text-orange-500">About Us</Link>
              <Link to="/login" className="block text-gray-600 hover:text-orange-500">Login</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Featured Dishes</h4>
            <div className="space-y-2">
              <Link to="/menu?category=seafood" className="block text-gray-600 hover:text-orange-500">
                Seafood Specials
              </Link>
              <Link to="/menu?category=vegan" className="block text-gray-600 hover:text-orange-500">
                Vegan Delights
              </Link>
              <Link to="/menu?category=desserts" className="block text-gray-600 hover:text-orange-500">
                Sweet Treats
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2"/>
                support@FoodieDelight.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2"/>
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2"/>
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} FoodieDelight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
