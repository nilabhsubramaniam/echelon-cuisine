"use client";

import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import TestimonialSlider from "@/app/ui/testimonial";
import Link from "next/link";
import { FaShoppingCart, FaCreditCard, FaSmile } from "react-icons/fa"; // Importing icons from React Icons

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center pt-[4rem] pb-8">
        {/* Background Section */}
        <div className="relative w-full h-[500px]">
          <img
            src="/restaurant.jpg"
            alt="Restaurant"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              It's Not Just Food, It's an Experience
            </h1>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              provident dolorum. Voluptatum ducimus minima quasi unde,
              voluptatibus soluta eligendi. Enim, architecto autem.
            </p>
            <div className="mt-4">
              <Link
                href="/menu"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
              >
                Explore Menu
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="w-full px-8 py-16 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          {/* Separation Line */}
          <div className="border-t border-gray-300 mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Box */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
              <FaShoppingCart className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Order</h3>
              <p className="text-center">
                Place your order effortlessly with our user-friendly interface.
              </p>
            </div>

            {/* Second Box */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
              <FaCreditCard className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-center">
                Pay securely through our trusted payment gateways.
              </p>
            </div>

            {/* Third Box */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
              <FaSmile className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Meal</h3>
              <p className="text-center">
                Sit back, relax, and enjoy your delicious meal.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <TestimonialSlider />
      </main>
      <Footer />
    </div>
  );
}
