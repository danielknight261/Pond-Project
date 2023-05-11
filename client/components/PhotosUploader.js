import React, { useState } from "react";
import axios from "axios";

// Define the PhotosUploader component
const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  // Function to add a photo using a link
  async function addPhotoByLink(ev) {
    ev.preventDefault();

    // Send a POST request to upload the photo by link
    const { data: filename } = await axios.post(
      "http://localhost:4000/upload-by-link",
      { link: photoLink }
    );

    // Update the addedPhotos state with the new filename
    onChange(prev => {
      return [...prev, filename];
    });

    // Clear the photo link input field
    setPhotoLink('');
  }

  // Function to upload a photo from local files
  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    // Append each file to the form data
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    // Send a POST request to upload the photos
    axios
      .post("http://localhost:4000/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;

        // Update the addedPhotos state with the new filenames
        onChange(prev => {
          return [...prev, ...filenames];
        });
      });
  }

  return (
    <>
      <h2 className="text-xl mt-4">Image</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={"Add using link ...."}
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
        />
        <button
          onClick={addPhotoByLink}
          className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-2xl"
        >
          Add Photo
        </button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div key={link}>
              <div>{link}</div>
              <div className="h-50">
                <img
                  className="rounded-sm"
                  src={"http://localhost:4000/" + link}
                  alt={link}
                />
              </div>
            </div>
          ))}

        <label className="h-50 flex items-center gap-1 justify-center cursor-pointer border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            className="hidden "
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
