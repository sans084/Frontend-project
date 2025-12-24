import React, { useState } from "react";

function Upload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setUploaded(false);
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    // Mock upload success
    setUploaded(true);
  };

  return (
    <div className="container">
      <div className="upload-box"></div>
      <h2>Image Upload</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {preview && (
        <div style={{ marginTop: "15px" }}>
          <p>Preview:</p>
          <img src={preview} alt="preview" width="200" />
        </div>
      )}

      <br />
      <button onClick={handleUpload} style={{ marginTop: "10px" }}>
        Upload
      </button>

      {uploaded && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Image uploaded successfully!
        </p>
      )}
    </div>
  );
}

export default Upload;
