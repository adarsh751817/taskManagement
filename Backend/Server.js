// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./db/taskDb')
// const cors = require('cors')

// const router = require('./Router/taskRouter')

// app.use(cors({
//   origin: 'https://taskmanagement-1-0p4k.onrender.com',
//   credentials: true,
// }));

// const app = express();
// app.use(express.json());
// app.
// dotenv.config();
// connectDB();

// const PORT = process.env.PORT || 8080;

// app.use('/api', router);


// app.listen(PORT, () => {
//     console.log(`The server is listening at ${PORT}`);
// });



const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/taskDb');
const router = require('./Router/taskRouter');

const PORT = process.env.PORT || 8080;

app.options('*', cors());


dotenv.config(); 
const app = express();
app.use(cors({
  origin: 'https://taskmanagement-1-0p4k.onrender.com',
  credentials: true,
}));

app.use(express.json()); 

connectDB(); 

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});

