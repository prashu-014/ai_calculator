"use client"

import { ReactSketchCanvas } from "react-sketch-canvas";
import React, { useRef, useState } from "react";
import Button from "./Button";

import { GrPowerReset } from "react-icons/gr";
import { MdOutlineUndo, MdOutlineRedo } from "react-icons/md";
import axios from "axios";

const Main = () => {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleResetCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.resetCanvas();
      setEraseMode(false);
      canvasRef.current?.eraseMode(false);
    }
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleExport = async () => {
    setIsLoading(true);
    try {
      const canvasDataUrl = await canvasRef.current.exportImage("png");

      const base64Data = canvasDataUrl.split(",")[1];

      const imageBlob = base64ToBlob(base64Data, "image/png");

      const formData = new FormData();
      formData.append("file", imageBlob, "canvasImage.png");

      const response = await axios.post("http://localhost:3004/math", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("AI Response:", response.data);
      alert(`AI Response: ${response.data.result}`);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process the image.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to convert Base64 to Blob
  const base64ToBlob = (base64, mimeType) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: mimeType });
  };
  


  return (
    <div className="h-dvh relative xxl:container w-dvw">
      <ReactSketchCanvas
        ref={canvasRef}
        width="100%"
        height="100%"
        canvasColor="black"
        strokeColor="#fff"
        strokeWidth={4}
        eraserWidth={100}
        className={`${eraseMode ? "cursor-[url(https://cdn-icons-png.flaticon.com/128/3219/3219014.png),_pointer] bg-slate-100" : ""}`}
        style={{ border: "none" }}
      />

      <div className="absolute top-0 end-0">
        <Button name={<GrPowerReset />} event={handleResetCanvas} />
        <Button name={<MdOutlineUndo />} event={handleUndoClick} />
        <Button name={<MdOutlineRedo />} event={handleRedoClick} />
      </div>

      <div className="absolute top-8 end-0">
        <button onClick={handleExport} className="border border-zinc-600 px-5 py-1" disabled={isLoading}>
          {isLoading ? "Loading..." : "Generate Solution"}
        </button>
      </div>

    </div>
  );
};

export default Main;
