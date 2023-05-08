import React from "react";

const MyMediaPageUploadForm = () => {
  return (
    <div>
      <form>
        <h2 className="text-xl mt-4">Title</h2>
        <input
          type="text"
          placeholder="title - keywords for best search results"
        />
        <h2 className="text-xl mt-4">Location</h2>
        <input type="text" placeholder="location of image - optional" />
        <h2 className="text-xl mt-4">Image</h2>
        <div className="flex gap-2">
          <input type="text" placeholder={"Add using link ...."} />
          <button className="p-2 px-6 bg-red-400 hover:bg-red-100 rounded-2xl">
            Add Photo
          </button>
        </div>
        <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
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
        <h2 className="text-xl mt-4">Description</h2>
        <textarea  className="w-full text-xl mt-4"/>
        <h2 className="text-xl mt-4">Tags</h2>
        <input type="text" placeholder="Ad some tags seperate by commas max length 13 characters" />
        <h2 className="text-xl mt-4">License Type</h2>
        <label>Choose License:</label>
        <div>
            <label>
                <input type="checkbox"/>
                <span>L1</span>
                <input type="checkbox"/>
                <span>L2</span>
                <input type="checkbox"/>
                <span>L3</span>
            </label>
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
