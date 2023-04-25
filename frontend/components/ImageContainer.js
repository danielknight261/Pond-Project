import React from 'react';
import { FaThumbsUp, FaDownload } from 'react-icons/fa';



const ImageContainer = ({ images }) => {
  const mockImages = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1/600/400',
      alt: 'Lorem ipsum dolor sit amet',
      title: 'Image 1',
      tags: ['tag1', 'tag2', 'tag3', 'tag4'],
      orientation: 'landscape',
      colors: ['#ffffff', '#000000', '#f1c40f'],
      user: 'John Doe',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/2/600/400',
      alt: 'Consectetur adipiscing elit',
      title: 'Image 2',
      tags: ['tag1', 'tag3'],
      orientation: 'portrait',
      colors: ['#3498db', '#2ecc71', '#9b59b6'],
      user: 'Jane Smith',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/3/600/400',
      alt: 'Sed do eiusmod tempor incididunt',
      title: 'Image 3',
      tags: ['tag2', 'tag4'],
      orientation: 'landscape',
      colors: ['#e74c3c', '#c0392b', '#95a5a6'],
      user: 'Alice Johnson',
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/4/600/400',
      alt: 'Ut labore et dolore magna aliqua',
      title: 'Image 4',
      tags: ['tag1', 'tag2', 'tag3'],
      orientation: 'portrait',
      colors: ['#1abc9c', '#16a085', '#2c3e50'],
      user: 'Bob Williams',
    },
    {
      id: 5,
      src: 'https://picsum.photos/id/5/600/400',
      alt: 'Lorem ipsum dolor sit amet',
      title: 'Image 5',
      tags: ['tag3', 'tag4'],
      orientation: 'landscape',
      colors: ['#d35400', '#8e44ad', '#7f8c8d'],
      user: 'Charlie Brown',
    },
    {
      id: 6,
      src: 'https://picsum.photos/id/6/600/400',
      alt: 'Consectetur adipiscing elit',
      title: 'Image 6',
      tags: ['tag1'],
      orientation: 'portrait',
      colors: ['#2980b9', '#f39c12', '#27ae60'],
      user: 'Diana Ross',
    },
    {
      id: 7,
      src: 'https://picsum.photos/id/7/600/400',
      alt: 'Sed do eiusmod tempor incididunt',
      title: 'Image 7',
      tags: ['tag2', 'tag3', 'tag4'],
      orientation: 'landscape',
      colors: ['#f1c40f', '#e67e22', '#e74c3c'],
      user: 'Ethan Hunt',
    },
    {
      id: 8,
      src: 'https://picsum.photos/id/8/600/400',
      alt: 'Ut labore et dolore magna aliqua',
      title: 'Image 8',
      tags: ['tag1', 'tag2'],
      orientation: 'portrait',
      colors: ['#34495e', '#9b59b6', '#2c3e50'],
      user: 'Fiona Apple',
    },
  ];

  const handleLikeClick = (id) => {
    console.log(`Liked image with id: ${id}`);
    // Implement your like functionality here
  };

  const handleDownloadClick = (src) => {
    console.log(`Download image with src: ${src}`);
    // Implement your download functionality here
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="relative group">
            <div
              className="cursor-pointer"
              onClick={() => router.push(`/images/${image.id}`)}
            >
              <img
                className="w-full h-48 object-cover rounded-lg shadow-md"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center flex-col p-4 group-hover:bg-opacity-50 transition-opacity duration-200">
              <p className="text-white text-lg font-bold mb-2">{image.title}</p>
              <div className="flex justify-center">
                {image.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 text-gray-700 text-sm font-semibold rounded-full px-2 py-1 mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
}

export default ImageContainer;