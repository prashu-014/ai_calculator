const express = require('express');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const { GoogleAIFileManager } = require('@google/generative-ai/server'); // Corrected import
const { GoogleGenerativeAI }= require("@google/generative-ai");
const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/math", upload.single("file"), async (req, res) => {
  try {
    // Access the uploaded file from `req.file`
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("Received file:", file.originalname);
    console.log("File size:", file.size);

    // Instantiate the file manager correctly with `new`
    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

    // Use `file.path` to ensure the correct file path is passed
    const uploadResult = await fileManager.uploadFile(
      file.path, // This ensures the dynamically uploaded file path is used
      {
        mimeType: "image/png",
        displayName: "Jetpack drawing",
      },
    );

    



    
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const result = await model.generateContent([
"You are given an image with a mathematical expression. Solve it using the PEMDAS rule (Parentheses, Exponents, Multiplication and Division from left to right, Addition and Subtraction from left to right). \
For example: Q. 2 + 3 * 4 A. 14 The result format should be a list with one dictionary in this format: [{\'expr\': \'5 + 5\', \'result\': 10}] Only return the solved expression and the result in this format.",
  {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  },
]);
console.log("gemini ai result.......",result.response.text());

    // Send a response back to the client
    res.json({ result: "Image received and processed" });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Failed to process the image" });
  }
});

app.listen(3004, () => {
  console.log(`Server is running on http://localhost:3004`);
});






