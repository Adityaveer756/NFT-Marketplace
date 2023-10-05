import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import register from './controllers/registerController.js';
import login from './controllers/authController.js';

dotenv.config();
const { MONGO_URL, PORT } = process.env;

const app = express();

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase(); // Call the function to initiate the connection

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


app.use(cors());/* using middleware for safe connection between two different
servers (here react server and express server). In production we dont need it as we 
wont be having the react server there*/ 
app.use(express.json());//using middleware to receieve data in json format

app.post('/api/register',register)

app.post('/api/login',login)

