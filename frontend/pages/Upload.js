import React from 'react';
import { useState } from 'react';

const ValidFileTypes = ['image/jpg', 'image/jpeg', 'image/png' ]

const Upload = () => {
    const [error, setError] = useState('')
    const handleUpload = e => {
        console.log(e)
        const file = e.target.files[0];
        console.log(file)

        if(!ValidFileTypes.find(type => type === file.type)) {
            setError("File must be jpg, jpeg or png")
            return;
        }

        const form = new FormData();
        form.append('image', file);
    }

  return (
    <div className="flex flex-col items-center">
      <input type="file" id="imageInput" onChange={handleUpload} className="border-2 border-gray-300 p-2 rounded-md my-2"/>
      <button as="label" htmlFor="imageInput" className="cursor-pointer border-2 border-red-600 p-2 rounded-md bg-red-500 text-white font-bold">
        Upload
      </button>
      {error}
    </div>
  );
};

export default Upload;
