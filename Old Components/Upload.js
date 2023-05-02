import React, { useState } from "react";
import axios from "axios";
import Img from "../components/Img";

const Upload = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState([]);
  const[uploadedImg, setUpload] =useState("")

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(image);
      setImage(reader.result);
    };
  }

  const handleChange = (e) => {
    const files = e.target.files;
    const images = [];
  
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        images.push({ data: reader.result, success: false });
      };
    });
  
    setFile(files);
    setImage(images);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const results = await Promise.all(
      image.map((img) =>
        axios.post("http://localhost:8001", { images: [img.data] })
      )
    );
  
    try {
      setUpload(results[0].data.secure_url);
    } catch (err) {
      console.log(err);
    }
  
    try {
      setImage(
        image.map((img, index) => ({
          ...img,
          success: results[index].status === 200,
        }))
      );
      console.log(results.map((res) => res.data));
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
              accept="image/png, image/jpeg, image/jpg, image/jfif"
              className="border rounded-lg py-2 px-3"
              multiple
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
      <div className="flex justify-center items-center p-8 cursor-pointer max-w-2xl flex-wrap">
        {image.map((img, index) => (
          <div key={index} className="m-2">
            <img src={img.data} alt="" />
            {img.success && (
              <p className="text-green-500 text-center">Successfully uploaded</p>
            )}
          </div>
        ))}
      </div>
      <Img uploadedImg={uploadedImg}/>
      
    </>
  );
  
};

export default Upload;
