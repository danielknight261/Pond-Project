import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { FiShare2, FiDownload } from 'react-icons/fi';

function ImageDetailPage({ image }) {
  const imageData = {
    id: 1,
    src: '/TF-PB-DHMGBC6HY.jpg',
    alt: 'Lorem ipsum dolor sit amet',
    title: 'Image 1',
    publishedDate: 'April 22, 2023',
    author: 'John Doe',
    licenseType: 'CC BY-SA 4.0',
    likes: 15,
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 px-4">
        <Image
          src={imageData.src}
          alt={imageData.alt}
          width={600}
          height={400}
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 px-4 mt-8 md:mt-0">
        <h1 className="text-3xl font-bold">{imageData.title}</h1>
        <p className="text-gray-500 text-sm mt-2">
          Published on {imageData.publishedDate} by {imageData.author}
        </p>
        <div className="flex items-center mt-4">
          <p className="text-sm text-gray-500 mr-4">
            <span className="text-gray-700 font-bold">{imageData.licenseType}</span> License
          </p>
          <div className="flex items-center mr-4">
            <FaRegHeart className="text-gray-700 mr-1" />
            <p className="text-gray-700 text-sm font-bold">{imageData.likes}</p>
          </div>
          <div className="flex items-center mr-4">
            <FiShare2 className="text-gray-700 mr-1" />
            <p className="text-gray-700 text-sm font-bold">Share</p>
          </div>
          <div className="flex items-center">
            <FiDownload className="text-gray-700 mr-1" />
            <p className="text-gray-700 text-sm font-bold">Download</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/">
            <div className="text-indigo-600 hover:text-indigo-800">Back to images</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageDetailPage;
