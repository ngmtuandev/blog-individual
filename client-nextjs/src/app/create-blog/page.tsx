"use client";
import React from "react";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axiosClient from "../libs/axios-client";
const CreatePostPage = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
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
  const module = {
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
      },
    });
    console.log(rs);
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <ReactQuill
        onChange={handleQuillChange}
        modules={module}
        theme="snow"
        value={value}
      />
      <button onClick={handleUpPost}>Upload</button>
    </div>
  );
};

export default CreatePostPage;
