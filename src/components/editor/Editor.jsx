import React, { useEffect, useState } from "react";
import DocEditor from "./CKEditor";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DocError from "../error/DocError";

const Editor = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [editorContent, setEditorContent] = useState(
    `<h2>Loading document...</h2>`
  );
  const [error, setError] = useState(null);

  const fileUrl = queryParams.get("url");

  // const fileUrl =
  //   "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf";

  useEffect(() => {
    const ConvertDocToHtml = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/convert?url=${encodeURIComponent(fileUrl)}`
        );
        setEditorContent(response.data); // Set the HTML data in the state
      } catch (error) {
        console.error("Error fetching docx HTML:", error);
        setError(`Error while diplaying document`);
      }
    };
    ConvertDocToHtml();
  }, [fileUrl]);


  return error ? <DocError /> : <DocEditor content={editorContent} />;
};

export default Editor;
