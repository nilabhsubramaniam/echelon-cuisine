"use client";
import { useState } from "react";
import TestimonialSlider from "@/app/ui/testimonial";
import Link from "next/link";
import { FaShoppingCart, FaCreditCard, FaSmile } from "react-icons/fa";
import Image from "next/image";
import resturantPic from "../public/restaurant.jpg";

type MenuType = "Vegetarian" | "Non-Vegetarian" | "All";

export default function Home() {
  const [activeTab, setActiveTab] = useState<MenuType>("All");

  const menuItems: Record<
    MenuType,
    { name: string; price: string; description: string }[]
  > = {
    Vegetarian: [
      {
        name: "Veggie Delight",
        price: "$10",
        description: "Fresh and healthy vegetables with exotic spices.",
      },
      {
        name: "Paneer Tikka",
        price: "$12",
        description: "Grilled cottage cheese with Indian spices.",
      },
    ],
    "Non-Vegetarian": [
      {
        name: "Chicken Noodles",
        price: "$16",
        description: "Tender chicken mixed with noodles and special sauce.",
      },
      {
        name: "Egg Noodles",
        price: "$12",
        description: "Noodles stir-fried with eggs and spices.",
      },
    ],
    All: [
      {
        name: "Veggie Delight",
        price: "$10",
        description: "Fresh and healthy vegetables with exotic spices.",
      },
      {
        name: "Paneer Tikka",
        price: "$12",
        description: "Grilled cottage cheese with Indian spices.",
      },
      {
        name: "Chicken Noodles",
        price: "$16",
        description: "Tender chicken mixed with noodles and special sauce.",
      },
      {
        name: "Egg Noodles",
        price: "$12",
        description: "Noodles stir-fried with eggs and spices.",
      },
    ],
  };

  const tabs: MenuType[] = ["All", "Vegetarian", "Non-Vegetarian"];

  return (
    <main className="flex flex-1 flex-col items-center justify-center pt-[4rem] pb-8">
      {/* Background Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src={resturantPic}
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            It&apos;s Not Just Food, It&apos;s an Experience
          </h1>

          <p className="mb-4">
            At Charminar, we believe every meal is a celebration.
            From our carefully crafted dishes to our warm and inviting
            atmosphere, we strive to create an unforgettable dining experience.
            Whether you&apos;re here for a special occasion or just a casual
            meal, our commitment to excellence and passion for food will make
            your visit truly memorable.
          </p>

          <div className="mt-4">
            <Link
              href="/about"
              className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Why Us</h2>
        {/* Separation Line */}
        <div className="border-t border-gray-300 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
            <FaShoppingCart className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Order</h3>
            <p className="text-center">
              Place your order effortlessly with our user-friendly interface.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
            <FaCreditCard className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-center">
              Pay securely through our trusted payment gateways.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[rgba(14,17,24,255)] hover:text-[rgba(255,245,148,255)] cursor-pointer">
            <FaSmile className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enjoy Your Meal</h3>
            <p className="text-center">
              Sit back, relax, and enjoy your delicious meal.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        className="relative w-full px-8 py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/menu.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 underline">Our Menu</h2>
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 mx-2 font-semibold ${
                  activeTab === tab ? "text-yellow-400 underline" : "text-white"
                } focus:outline-none`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {menuItems[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-lg font-semibold mb-2">{item.price}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="relative w-full">
          <TestimonialSlider />
        </div>
      </section>
    </main>
  );
}
