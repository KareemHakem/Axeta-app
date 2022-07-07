import { useEffect, useRef, useState } from "react";

import girl from "../../assets/girl.jpg";
import replace from "../../assets/replace.png";

import "./style.css";

function UploadPhoto() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [openButton, setOpenButton] = useState(false);
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

  const handleOpenButtonReplace = () => {
    setOpenButton(!openButton);
    console.log("kareem");
  };

  return (
    <div>
      <form>
        {preview ? (
          <div className="image_container">
            <button
              className="upload_btn"
              style={{ zIndex: 1000 }}
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
              onMouseOver={() => setOpenButton(true)}
              onMouseLeave={() => setOpenButton(false)}
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
              {!openButton ? (
                <></>
              ) : (
                <img
                  src={replace}
                  alt="image_replace"
                  className="image-replace-logo"
                />
              )}
            </button>
            <img
              className="header_image"
              src={girl}
              alt="profile"
              onMouseOver={() => setOpenButton(true)}
              onMouseLeave={() => setOpenButton(false)}
            />
          </div>
        )}
        {!openButton ? (
          <></>
        ) : (
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
        )}
      </form>
    </div>
  );
}

export default UploadPhoto;
