import React from 'react';

const Img = ({uploadedImg}) => {
  return (
    <div>
      <img src={uploadedImg} alt="Uploaded" />
    </div>
  );
};

export default Img;
