import React from "react";
import { useState, useEffect } from "react";
import "./markdown.css";
import ReactMarkdown from "react-markdown";

export const MarkDown = () => {
  const [markdown, setmarkdown] = useState("");

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdown");
    if (savedMarkdown) {
      setmarkdown(savedMarkdown);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setmarkdown(value);
    localStorage.setItem("markdown", value);
  };

  return (
    <>
      <div className="pageTitle">Markdown Editor</div>
      <div className="container">
        <div className="title">
          <div className="markdown">Markdown</div>
          <textarea
            className="noteArea"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="preview_title">
          <div className="preview">Preview</div>
          <div className="markArea">
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};
