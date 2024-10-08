import express from 'express';
import mongoose  from 'mongoose';
import userRoute  from './routes/user.route.js';
import dotenv from 'dotenv';   //IF YOU NEED TO USE ENVIORNMENT VARIABLE fFIRST INSTALL (npm i dotenv ) and then config
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB is Connected!'))
.catch(err => console.log(err));

const app = express();
  
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.use("/api/user",userRoute)

app.get('/test', (req,res) =>{
  res.send("Hello from TEST API server")
})

app.get('/', (req,res) =>{
    res.send("Hello from node server")
})

//username : atharvverma2905
//password : gLdv6tdEbzbzRXH6
//mongodb+srv://atharvverma2905:lZpwtBovzVCLKTxt@blog-app.5kgtt.mongodb.net/?retryWrites=true&w=majority&appName=Blog-App