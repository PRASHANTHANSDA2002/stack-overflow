import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import { Configuration , OpenAIApi } from "openai";

dotenv.config({path : "./.env"})

const app = express();
dotenv.config();
app.use(bodyParser.json()); 
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: "*",}));

app.get('/',(req, res) => {
     res.send("This is a stack overflow clone API")
 })


 app.use('/user' , userRoutes)
 app.use('/questions' , questionRoutes) 
 app.use('/answer' , answerRoutes)



const configuration = new Configuration({
    apiKey: process.env.CHATBOT_KEY,
  });
 


const openai = new OpenAIApi(configuration);
  app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: prompt,
      max_tokens: 2048,
    });
    res.send(completion.data.choices[0].text);
  });
  
  

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL,{useNewUrlParser:true , useUnifiedTopology: true})
.then(() => app.listen(PORT , () => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))