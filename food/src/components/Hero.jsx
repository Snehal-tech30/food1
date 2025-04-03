import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left py-12">
            <p className="text-green-600 font-semibold uppercase tracking-wider">Welcome</p>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
              Easy recipes <br /> for any occasion
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              Discover a world of flavors with our handpicked recipes that are easy to make and delicious to taste.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link to="/about" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition">
                About us
              </Link>
              <Link to="/catering" className="border border-gray-400 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition">
                Our catering
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <img src="/pizza.png" alt="Delicious Pizza" className="w-full max-w-lg rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Featured Recipes</h2>
          <p className="text-gray-600 mt-2 mb-10">Try our best and most loved recipes!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Pasta Delight", "Spicy Tacos", "Classic Pancakes"].map((recipe, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={`/recipe-${index + 1}.jpg`} alt={recipe} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{recipe}</h3>
                  <p className="text-gray-600 mb-4">Delicious & easy to cook in 30 minutes.</p>
                  <Link to="/recipes" className="text-green-600 font-semibold hover:underline">View Recipe</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2 mb-10">Hear from food lovers who tried our recipes.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {["Alice", "John", "Sophia"].map((name, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition max-w-sm">
                <p className="text-gray-700 italic">"This website changed my cooking experience. The recipes are so easy to follow!"</p>
                <h4 className="text-lg font-semibold mt-4">- {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-green-600 text-white py-16 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold">Join Our Foodie Community</h2>
          <p className="mt-2 mb-6 text-lg">Subscribe to get the latest recipes and cooking tips!</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-900 focus:outline-none w-80" />
            <button className="bg-orange-500 px-6 py-3 rounded-r-lg font-medium hover:bg-orange-600 transition">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
