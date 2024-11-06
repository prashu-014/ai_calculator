const express = require('express');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const storage = multer.diskStorage({destination:(req,file,cb)=>{
  cb(null,'public')
},
filename:(req,file,cb)=>{
  cb(null,Date.now()+ " - " + file.originalname)
}

});

const upload = multer({storage:storage});

app.post("/math", upload.single("file"), (req, res) => {
  try {
    // Access the uploaded file from `req.file`
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("Received file:", file.originalname);
    console.log("File size:", file.size);

    // Here you can add code to process the image using Gemini API or any other method

    // Send a dummy response for now
    res.json({ result: "Image received and processed" });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Failed to process the image" });
  }
});

app.listen(3004, () => {
  console.log(`Server is running on http://localhost:3004`);
});
