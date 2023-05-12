import React, { useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import PhotosUploader from "@/components/PhotosUploader";

// Define a functional component for the upload form
const MyMediaPageUploadForm = () => {
  // Define state variables using useState hook
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [license, setLicense] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Get the router object
  const router = useRouter();

  // Function to handle adding a new image
  async function addNewPicture(ev) {
    ev.preventDefault();
    await axios.post('http://localhost:4000/pictures', {
      title, location, addedPhotos,
      description, tags, license
    });
    setRedirect(true);
  }

  if (redirect) {
    router.push('/MyMediaPage');
  }

  return (
    <div className="p-4">
      <form onSubmit={addNewPicture}>
        {/* Title input */}
        <h2 className="text-xl mt-4">Title</h2>
        <input
          type="text"
          placeholder="title - keywords for best search results"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        {/* Location input */}
        <h2 className="text-xl mt-4">Location</h2>
        <input
          type="text"
          placeholder="location of image - optional"
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
        />

        {/* PhotosUploader component */}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {/* Description input */}
        <h2 className="text-xl mt-4">Description</h2>
        <textarea
          className="w-full text-xl mt-4"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {/* Tags input */}
        <h2 className="text-xl mt-4">Tags</h2>
        <input
          type="text"
          placeholder="Add some tags separated by commas max length 13 characters"
          value={tags}
          onChange={(ev) => setTags(ev.target.value)}
        />

        {/* License selection */}
        <h2 className="text-xl mt-4">Choose License Type</h2>
        <select
          id=""
          value={license}
          onChange={(ev) => setLicense(ev.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="LL1">LL1</option>
          <option value="LL2">LL2</option>
          <option value="LL3">LL3</option>
        </select>

        {/* Save button */}
        <div>
          <button className="my-4 bg-red-400 p-2 w-full text-white rounded-2xl">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyMediaPageUploadForm;
