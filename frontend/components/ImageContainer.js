import React from 'react';

function ImageContainer({ images }) {
  const mockImages = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1/600/400',
      alt: 'Lorem ipsum dolor sit amet',
      title: 'Image 1',
      tags: ['tag1', 'tag2', 'tag3', 'tag4']
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/2/600/400',
      alt: 'Consectetur adipiscing elit',
      title: 'Image 2',
      tags: ['tag1', 'tag3']
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/3/600/400',
      alt: 'Sed do eiusmod tempor incididunt',
      title: 'Image 3',
      tags: ['tag2', 'tag4']
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/4/600/400',
      alt: 'Ut labore et dolore magna aliqua',
      title: 'Image 4',
      tags: ['tag1', 'tag2', 'tag3']
    },
    {
      id: 5,
      src: 'https://picsum.photos/id/5/600/400',
      alt: 'Lorem ipsum dolor sit amet',
      title: 'Image 5',
      tags: ['tag3', 'tag4']
    },
    {
      id: 6,
      src: 'https://picsum.photos/id/6/600/400',
      alt: 'Consectetur adipiscing elit',
      title: 'Image 6',
      tags: ['tag1']
    },
    {
      id: 7,
      src: 'https://picsum.photos/id/7/600/400',
      alt: 'Sed do eiusmod tempor incididunt',
      title: 'Image 7',
      tags: ['tag2', 'tag3', 'tag4']
    },
    {
      id: 8,
      src: 'https://picsum.photos/id/8/600/400',
      alt: 'Ut labore et dolore magna aliqua',
      title: 'Image 8',
      tags: ['tag1', 'tag2']
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              className="w-full h-48 object-cover rounded-lg shadow-md"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageContainer;
