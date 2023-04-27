import React, { useState } from "react";
import axios from "axios"

const Upload = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(image);
      setImage(reader.result);
    };
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const result = await axios.post("http://localhost:8001", {
      image: image
    });
    try {
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="flex flex-col mb-4">
            <label
              htmlFor="fileInput"
              className="mb-2 font-bold text-lg text-gray-900"
            >
              Upload Images Here
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleChange}
              required
              accept="image/png, image/jpeg, image/jpg. image/jiff"
              className="border rounded-lg py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      <img className="flex justify-center items-center p-8 cursor-pointer max-w-2xl"src={image} alt="" />
    </>
  );
};

export default Upload;
