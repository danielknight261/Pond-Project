import React, { useState } from "react";
import axios from "axios";

const MyMediaPageUploadForm = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [license, setLicense] = useState("");

  async function addPhotoByLink (ev) {
    ev.preventDefault();

   const {data:filename} = await axios.post('http://localhost:4000/upload-by-link', {link: photoLink})
   setAddedPhotos(prev => {
    return [...prev, filename];
   });
   setPhotoLink('');
  }

  return (
    <div className="p-4">
      <form>
        <h2 className="text-xl mt-4">Title</h2>
        <input
          type="text"
          placeholder="title - keywords for best search results"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <h2 className="text-xl mt-4">Location</h2>
        <input
          type="text"
          placeholder="location of image - optional"
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
        />

        <h2 className="text-xl mt-4">Image</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={"Add using link ...."}
            value={photoLink}
            onChange={(ev) => setPhotoLink(ev.target.value)}
          />
          <button onClick={addPhotoByLink} className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-2xl">
            Add Photo
          </button>
        </div>
        <div className="mt-2 grid gap-2 grid-cols-3">
          {addedPhotos.length > 0 && addedPhotos.map(link => (
            <div key={link}>
              <div>{link}</div>
              <div>
                <img  className="rounded-sm" src={'http://localhost:4000/uploads/'+link} alt={link} />
              </div>
            </div>
          ))}
        
        <button className="flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
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
          Upload from device
        </button>
        </div>

        <h2 className="text-xl mt-4">Description</h2>
        <textarea
          className="w-full text-xl mt-4"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        <h2 className="text-xl mt-4">Tags</h2>
        <input
          type="text"
          placeholder="Ad some tags separated by commas max length 13 characters"
          value={tags}
          onChange={(ev) => setTags(ev.target.value)}
        />

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
        <div>
          <button className=" my-4 bg-red-400 p-2 w-full text-white rounded-2xl">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyMediaPageUploadForm;

// creator: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
//     title: String,  /
//    location: String,
//     photos: [String],
//     description: String,
//     tags: [String],
//     license: String,
