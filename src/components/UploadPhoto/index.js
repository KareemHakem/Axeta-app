import { useEffect, useRef, useState } from "react";

import replace from "../../assets/replace.png";

import "./style.css";

function UploadPhoto() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div>
      <form>
        {preview ? (
          <div className="image_container">
            <button
              className="upload_btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <img
                src={replace}
                alt="image_replace"
                className="image-replace-logo"
              />
            </button>
            <img
              src={preview}
              alt="profile"
              className="header_image"
              style={{ objectFit: "cover" }}
              onClick={() => {
                setImage(null);
              }}
            />
          </div>
        ) : (
          <div className="image_container">
            <button
              className="upload_btn"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <img
                src={replace}
                alt="image_replace"
                className="image-replace-logo"
              />
            </button>
            <img
              className="header_image"
              src="https://content.fortune.com/wp-content/uploads/2015/05/rtx1b282.jpg"
              alt="profile"
            />
          </div>
        )}

        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </form>
    </div>
  );
}

export default UploadPhoto;
