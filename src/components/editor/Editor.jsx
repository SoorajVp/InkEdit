import React, { useEffect, useState } from "react";
import DocEditor from "./CKEditor";
import { useLocation } from "react-router-dom";
import axios from "axios";
import mammoth from "mammoth";

const intitalContent = `
  <body style="background-color:#999999;color:#000000;"  id="canvas" align="center">
  <div class="page" style="width:1024.0px;height:1448.2px;">
  <span style="color:#538DD9;font-size:41px;font-family:'Arial';font-weight:bold;">
  <span class="text" style="left:61.9px;top:59.2px;">Loading document...</span>
  </span>
  <p></p>
  </div>

  `;

const Editor = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get specific query parameter
  const fileUrl = queryParams.get("url");

  // const fileUrl =
  //   "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf";

  const [editorContent, setEditorContent] = useState(intitalContent);

  useEffect(() => {
    const ConvertDocToHtml = async () => {
       try {
         const response = await axios.get(
           `http://localhost:5000/convert?url=${encodeURIComponent(fileUrl)}`
         );
         setEditorContent(response.data); // Set the HTML data in the state
       } catch (error) {
         console.error("Error fetching docx HTML:", error);
         setEditorContent(`<p>Error while diplaying document</p>`)
       }
    };
    ConvertDocToHtml();
  }, [fileUrl]);

  return (
    <div>
      <DocEditor content={editorContent} />
    </div>
  );
};

export default Editor;
