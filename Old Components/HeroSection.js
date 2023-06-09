// Import required dependencies
import React from 'react';

// Define the HeroSection component
const HeroSection = () => {
  // Return the JSX markup for the HeroSection component
  return (
    <div className="relative">
      <div className="h-auto">
        {/* Render the hero background image */}
        <img
          className="w-full justify-self-center h-100 md:min-w-fi"
          src="/hero-image.jpg"
          alt="Hero background image"
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        {/* <Image
          className="w-full justify-self-center h-100 md:min-w-fi"
          src="/hero-image.jpg"
          alt="Hero background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
        {/* Render the search form on top of the hero background image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="container mx-auto relative z-10 mt-12 md:mt-0">
            {/* Render the search form */}
            <form className="max-w-lg mx-auto bg-white rounded-lg p-6">
              <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                {/* Render the search input field */}
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-xl"
                  type="text"
                  placeholder="Search for images..."
                  aria-label="Search"
                />
                {/* Render the category selection dropdown */}
                <select className="bg-transparent border-none text-gray-700 text-xl">
                  <option value="">All</option>
                  <option value="people">People</option>
                  <option value="nature">Nature</option>
                  <option value="animals">Animals</option>
                </select>
                {/* Render the search button */}
                <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the HeroSection component as the default export
export default HeroSection;
