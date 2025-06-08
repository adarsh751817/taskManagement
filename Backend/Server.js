const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/taskDb')
const cors = require('cors')
const authrouter = require('./Router/authrouter')
const router = require('./Router/taskRouter')



const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
connectDB();

const FRONTEND_URL = 'https://taskmanagement-1-vlq0.onrender.com';
app.use(cors({
  origin: FRONTEND_URL,  
  credentials: true      
}));

const PORT = process.env.PORT || 8080;

app.use('/api', router);
app.use('/api/auth', authrouter);



app.listen(PORT, () => {
    console.log(`The server is listening at ${PORT}`);
});

