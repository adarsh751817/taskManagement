const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/taskDb')
const cors = require('cors')

const router = require('./Router/taskRouter')



const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://taskmanagement-1-0p4k.onrender.com',
  credentials: true,
}));
dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`The server is listening at ${PORT}`);
});

