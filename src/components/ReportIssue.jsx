import React, { useState } from "react";
import { LoginSchema } from "@/config/schema";
import useSubmit from "@/hooks/useSubmit";
import Button from "@/components/button";
import { Select, Textarea } from "@chakra-ui/react";
import { IoCaretBackOutline } from "react-icons/io5";
import { FaTrash, FaImage } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const ReportIssue = ({ onClose }) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [showHoverModal, setShowHoverModal] = useState(false);

  const { errors, register, handleSubmit } = useSubmit(LoginSchema);
  const onLogin = (data) => {
    console.log(data);
  };
  const handleOnClose = (e) => {
    if (e.target.id === "close-modal") onClose();
  };
  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const newImageFiles = Array.from(fileList);

    const filteredImages = newImageFiles
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 3);

    const newImages = [...images, ...filteredImages];
    newImages.map((n) => {
      n.id = uuidv4();
    });

    setImages(newImages);
  };

  const deleteImage = (id) => {
    const updatedImages = [...images];
    updatedImages.splice(id, 1);
    setImages(updatedImages);
  };

  const clearImages = () => {
    setImages([]);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const resetEditor = () => {
    setText(""); // Clear the text input
    setImages([]); // Clear the images array
  };

  const handlePost = () => {
    console.log("Posted:", text, images);
    closeModal();
  };
  const isPostButtonDisabled = text === "";
  // if (!visible) return null;

  return (
    <React.Fragment>
      <section
        id="close-modal"
        onClick={handleOnClose}
        className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-[0.8] backdrop-blur-0"
      >
        <div className="flex flex-col gap-8 bg-[#fff] p-10 rounded-[12px] h-auto w-auto md:w-[30rem] md:max-w-[50%]">
          <h1 className="text-primary md:text-4xl text-2xl font-bold ">
            Report an Issue
          </h1>

          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onLogin)}
          >
            <div className="flex flex-col gap-4 ">
              <div className="flex items-start gap-2">
                <Select
                  color="#00BE7A"
                  border="2px"
                  borderRadius="4px"
                  placeholder="Select Category"
                  w="20rem"
                  h="2.5rem"
                >
                  <option value="option1">Bad Road</option>
                  <option value="option2">Flood</option>
                  <option value="option3">Electricity</option>
                  <option value="option4">Security</option>
                  <option value="option5">Others</option>
                </Select>
                <p
                  id="close-modal"
                  onClick={handleOnClose}
                  className="text-sm flex items-center cursor-pointer text-tetiary"
                >
                  {" "}
                  <IoCaretBackOutline /> Go Back
                </p>
              </div>
              <div className="flex  items-start gap-4">
                <Select
                  color="#00BE7A"
                  border="2px"
                  borderRadius="4px"
                  placeholder="Select State"
                  w="12rem"
                  h="2.5rem"
                >
                  <option value="option1">Lagos</option>
                  <option value="option2">Ogun</option>
                  <option value="option3">Abuja</option>
                  <option value="option4">Rivers</option>
                  <option value="option5">Imo</option>
                </Select>
                <Select
                  color="#00BE7A"
                  border="2px"
                  borderRadius="4px"
                  placeholder="Select L.G.A"
                  w="12rem"
                  h="2.5rem"
                >
                  <option value="option1">Lagos Island</option>
                  <option value="option2">Ikoyi</option>
                  <option value="option3">Ikeja</option>
                  <option value="option4">Lagos Mainland</option>
                  <option value="option5">Ikorodu</option>
                </Select>
              </div>

              <Textarea
                placeholder="What is the issue?"
                value={text}
                className="w-full h-[16rem] resize-none focus:outline-none rounded-md p-2 overflow-y-scroll"
                onChange={handleTextChange}
              />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-start overflow-x-hidden">
                  {images.slice(0, 3).map((image, id) => (
                    <div key={id} className="relative border-2 ">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`img-${id}`}
                        className="p-2 max-w-[8rem] max-h-[7rem] "
                      />
                      <button
                        onClick={() => deleteImage(id)}
                        className="absolute top-0  bg-white rounded-full p-1 text-[.5rem]"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="upload-image"
                    className="cursor-pointer  text-center flex gap-2"
                    onMouseEnter={() => setShowHoverModal(true)}
                    onMouseLeave={() => setShowHoverModal(false)}
                  >
                    <FaImage className=" flex  text-2xl justify-start" /> Upload
                    Image
                  </label>
                  <input
                    id="upload-image"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  {showHoverModal && (
                    <div className="absolute text-sm rounded-lg bg-white p-1 shadow-md -mt-14 border border-1">
                      <p>Add Image(s)</p>
                    </div>
                  )}
                </div>
                <Button
                  onClick={handlePost}
                  disabled={isPostButtonDisabled}
                  className={`text-[#fff] rounded-[4px] h-[3rem] px-4 py-2 text-sm ${
                    isPostButtonDisabled
                      ? "bg-secondary cursor-not-allowed"
                      : "bg-tetiary cursor-pointer hover:bg-[#007A4E]"
                  }`}
                  variant="primary"
                  type="submit"
                  // className="h-[3rem] rounded-[4px] hover:bg-[#007A4E]"
                >
                  Send
                </Button>
              </div>

              {/* <div>{images.length > 3 && <p>Sorrryy</p>}</div> */}
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReportIssue;
