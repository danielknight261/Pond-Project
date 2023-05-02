// Import required dependencies
import React from 'react';
import { FaThumbsUp, FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/router';

// Define the ImageContainer component
const ImageContainer = ({ images }) => {
  // Use the Next.js useRouter hook
  const router = useRouter();

  // Define a mock list of images for display
  const mockImages = [
    // ...mock image data
  ];

  // Function to handle when the like button is clicked
  const handleLikeClick = (id) => {
    console.log(`Liked image with id: ${id}`);
    // Implement your like functionality here
  };

  // Function to handle when the download button is clicked
  const handleDownloadClick = (src) => {
    console.log(`Download image with src: ${src}`);
    // Implement your download functionality here
  };

  // Render the ImageContainer component
  return (
    <div className="container mx-auto my-8">
      {/* Display images in a responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Loop through and display each image in the mockImages array */}
        {mockImages.map((image) => (
          <div key={image.id} className="relative group">
            {/* Render image and navigate to ImageDetailPage when clicked */}
            <div
              className="cursor-pointer"
              onClick={() => router.push(`/ImageDetailPage/${image.id}`)}
            >
              <img
                className="w-full h-48 object-cover rounded-lg shadow-md"
                src={image.src}
                alt={image.alt}
              />
            </div>
            {/* Render image information on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center flex-col p-4 group-hover:bg-opacity-50 transition-opacity duration-200">
              <p className="text-white text-lg font-bold mb-2">{image.title}</p>
              <div className="flex justify-center">
                {/* Render up to the first 3 tags */}
                {image.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-700 text-sm font-semibold rounded-full px-2 py-1 mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Render the like and download buttons */}
              <div className="absolute top-2 right-2">
                <button onClick={() => handleLikeClick(image.id)} className="text-white">
                  <FaThumbsUp />
                </button>
                <button
                  onClick={() => handleDownloadClick(image.src)}
                  className="ml-2 text-white"
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ImageContainer component as the default export
export default ImageContainer;
