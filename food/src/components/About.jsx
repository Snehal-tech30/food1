import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="/food-banner.jpg"
          alt="Delicious Food Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Experience the Best Food at Your Doorstep</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <section>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are passionate about delivering the finest dishes right to your home. 
              From gourmet meals to local street food, we bring you the best flavors with just a click.
            </p>
          </section>

          {/* Image Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="/fresh-ingredients.jpg" 
                alt="Fresh Ingredients"
                className="rounded-lg shadow-lg h-72 w-full object-cover"
              />
              <h3 className="text-2xl font-bold">Fresh Ingredients</h3>
              <p className="text-gray-600">
                Our chefs use the freshest and highest quality ingredients to ensure a delightful culinary experience.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src="/fast-delivery.jpg" 
                alt="Fast Delivery"
                className="rounded-lg shadow-lg h-72 w-full object-cover"
              />
              <h3 className="text-2xl font-bold">Quick & Reliable Delivery</h3>
              <p className="text-gray-600">
                Get your favorite meals delivered hot and fresh to your doorstep within minutes.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            <div className="text-center">
              <div className="text-5xl mb-6">🍔</div>
              <h3 className="text-2xl font-bold mb-4">Diverse Cuisine</h3>
              <p className="text-gray-600">
                Choose from a wide range of cuisines, including Indian, Italian, Chinese, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">🛵</div>
              <h3 className="text-2xl font-bold mb-4">Fast & Free Delivery</h3>
              <p className="text-gray-600">
                Enjoy free and speedy delivery on all your orders, ensuring convenience at its best.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">💳</div>
              <h3 className="text-2xl font-bold mb-4">Easy Payment</h3>
              <p className="text-gray-600">
                Pay effortlessly with multiple payment options, including UPI, cards, and cash on delivery.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
