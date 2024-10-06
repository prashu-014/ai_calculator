"use client";
import { ReactSketchCanvas } from "react-sketch-canvas";
import React, { useRef, useState } from "react";
import Button from "./Button";

import { GrPowerReset } from "react-icons/gr";
import { MdOutlineUndo,MdOutlineRedo } from "react-icons/md";
import { CiEraser } from "react-icons/ci";

const Main = () => {
  const canvasRef = useRef(null);


  const eraserWidth = 100;
  
  const [eraseMode, setEraseMode] = useState(false);
  

  

  const handleResetCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.resetCanvas(); // Reset the canvas
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

  const handleEraserClick = () => {
    setEraseMode(true);
    // setCursorIsPointer("cursor-wait")
    canvasRef.current?.eraseMode(true);
  };



  const resizeImage = (base64Str, maxWidth, callback) => {
    let img = new Image();
    img.src = base64Str;

    img.onload = () => {
      
      // Create a canvas element for resizing the image
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');

      // Calculate the scaling factor to maintain the aspect ratio
      const scaleFactor = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scaleFactor;

      // Draw the resized image onto the new canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert the resized image back to Base64 format
      const resizedImage = canvas.toDataURL('image/png');
      callback(resizedImage);
    };
  };

  const handleExport = async () => {
    try {
      // Export the current canvas as a Base64 image
      const imageData = await canvasRef.current.exportImage('png');

      // Set the desired width for export (e.g., 800px)
      const desiredWidth = 800;

      // Resize the exported image
      resizeImage(imageData, desiredWidth, (resizedImage) => {
        // The resized image is available here as a Base64 string


        console.log(resizedImage);
        
      });
    } catch (error) {
      console.error('Error exporting image:', error);
    }
  };

  return (
    <div className="h-dvh relative">
      <ReactSketchCanvas
        ref={canvasRef} // Attach ref to the ReactSketchCanvas component
        width="100%"
        height="100%"
        canvasColor="black"
        strokeColor="#fff"
        strokeWidth={4} // You can adjust the stroke width if needed
        className={`${eraseMode ? ("cursor-[url(https://cdn-icons-png.flaticon.com/128/3219/3219014.png),_pointer] bg-slate-100") : ""}`}
        eraserWidth={eraserWidth}
      />

      <div className="absolute top-0 end-0">
        <Button name={<GrPowerReset />} event={handleResetCanvas}  />
        <Button name={<MdOutlineUndo />} event={handleUndoClick} />
        <Button name={<MdOutlineRedo />} event={handleRedoClick} />
        <Button name={<CiEraser />} event={handleEraserClick} eraserWidth={eraserWidth} eraseMode={eraseMode} disabled={eraseMode}/>
      </div>

      <div className="absolute top-8 end-0 ">
      <Button event={handleExport} name="Run" />
      </div>
    </div>
  );
};

export default Main;
