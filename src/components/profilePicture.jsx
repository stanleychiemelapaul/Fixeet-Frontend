import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState, useRef } from "react";
import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import img from "../assets/flood.png";

const Profile = () => {
  const [imageCrop, setImageCrop] = useState("");
  const [images, setImages] = useState("");
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pview, setPview] = useState(false);

  // const profileFinal = profile.map((item) => item.pview);
  const profileFinal =
    profile.length > 0 ? profile[profile.length - 1].pview : src;

  const onClose = () => {
    setPview(null);
  };

  const onCrop = (view) => {
    setPview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { pview }]);
    setImageCrop(false);
  };

  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        {" "}
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid green",
          }}
          onClick={() => setImageCrop(true)}
          src={profileFinal.length ? profileFinal : img}
          alt="placeholder profile image"
        />
        <label htmlFor="" className="mt-3 font-semibold text-5xl mb-4">
          {" "}
          Winfred Isaac{" "}
        </label>
        <Dialog
          visible={imageCrop}
          header={() => (
            <p className="text-2xl font-semibold bg-black text-white">
              Update profile
            </p>
          )}
          onHide={() => setImageCrop(false)}
        >
          <div className=" flex flex-col items-center bg-yellow-300 relative p-4 ">
            <Avatar
              width={400}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              src={src}
              shadingColor={"#474649"}
              backgroundColor={"#474649"}
            />
            <div className="flex flex-col items-center  w-12">
              <div className="flex justify-around  w-12 font-semibold border-2 bg-light">
                <Button
                  onClick={saveCropImage}
                  label="Save"
                  // icon="<RxAvatar />"
                />
              </div>
            </div>
          </div>
        </Dialog>
        <InputText
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImages(file);
            } else setImages(null);
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
