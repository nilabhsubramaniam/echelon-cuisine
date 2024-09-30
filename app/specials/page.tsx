'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Define the structure of the special data
type Special = {
  title: string;
  description: string;
  price: string;
  images: { src: string; description: string }[];
  buttonText: string;
  ingredients: string[];
  cookStyle: string;
};

// Define the specials data for each day of the week or based on slug
const specialsData: Record<string, Special> = {
  'family-style-meals': {
    title: 'Family-Style Meals',
    description: 'Enjoy a family-size pan of your favorite dish or pick up a complete family bundle.',
    price: '$19.99',
    images: [
      { src: '/veg_biryani.jpg', description: 'Delicious Veg Biryani' },
      { src: '/afghan_chicken.jpg', description: 'Afghan Chicken' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Herbs'],
    cookStyle: 'Cooked in dum style with caramelized onions, served with raita.',
  },
  // Add more specials for other days...
};

export default function SpecialDetailPage() {
  const [specialItem, setSpecialItem] = useState<Special | null>(null);
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug'); // Get the slug from the query params

  useEffect(() => {
    if (slug && specialsData[slug]) {
      setSpecialItem(specialsData[slug]);
    }
  }, [slug]);

  if (!specialItem) {
    return <div className="text-center mt-10 text-2xl">Special not found</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${specialItem.images[0].src})` }} // Set the background image from slug
    >
      {/* Header */}
      <header className="w-full py-8 bg-black bg-opacity-60 text-center">
        <h1 className="text-4xl font-bold text-gold">Special: {specialItem.title}</h1>
      </header>

      {/* Content Section */}
      <section className="w-full max-w-6xl p-8 bg-black bg-opacity-75 text-gold rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Today's Special: {specialItem.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md  transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Image</h3>
            <Image
              src={specialItem.images[0].src}
              alt={specialItem.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4">{specialItem.images[0].description}</p>
          </div>

          {/* Ingredients Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md  transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc">
              {specialItem.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Cook Style Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md  transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Cook Style / Topping</h3>
            <p>{specialItem.cookStyle}</p>
          </div>
        </div>

        {/* Button to go back */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Back to Menu
          </button>
        </div>
      </section>
    </div>
  );
}
