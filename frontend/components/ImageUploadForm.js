import { useState } from 'react';
import axios from 'axios';

export default function ImageUploadForm() {

  
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !tags || !file) {
      alert('Please fill in all fields and select an image');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('tags', tags);
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      if (response.status === 201) {
        alert('Image uploaded and saved');
        setName('');
        setTags('');
        setFile(null);
      } else {
        alert('Error uploading image');
      }
    } catch (error) {
      console.error(error);
      alert('Error uploading image');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Image Upload</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block">
          <span>Tags:</span>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block">
          <span>Image:</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
