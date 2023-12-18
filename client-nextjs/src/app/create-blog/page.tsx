"use client";
import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axiosClient from "../libs/axios-client";
import { getBase64 } from "../helper/getBase64";
const CreatePostPage = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState("");
  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["image"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setValue(content);
  };

  const handleUpPost = async () => {
    console.log("data", value);
    const rs = await axiosClient("/posts/create", {
      method: "post",
      data: {
        title: title,
        content: value,
        thumb: thumb,
      },
    });
    console.log(rs);
  };

  const handleSelectImage = async (event: any) => {
    const imgBase64 = await getBase64(event.target.files[0]);
    setThumb(imgBase64);
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <div>
        <label htmlFor="thumb">Ảnh thumb</label>
        <input
          onChange={(value) => handleSelectImage(value)}
          type="file"
          id="thumb"
        />
        <img src={thumb}></img>
      </div>
      <ReactQuill
        onChange={handleQuillChange}
        modules={modules}
        theme="snow"
        value={value}
      />
      <button onClick={handleUpPost}>Upload</button>
    </div>
  );
};

export default CreatePostPage;
