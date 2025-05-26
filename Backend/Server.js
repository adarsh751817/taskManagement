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
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/taskDb');
const router = require('./Router/taskRouter');

dotenv.config();
const app = express();

// ✅ Allow CORS from your frontend origin
app.use(cors({
  origin: 'https://taskmanagement-1-0p4k.onrender.com',
  credentials: true,
}));

// ✅ Handle preflight requests
app.options('*', cors());

// ✅ Other middlewares
app.use(express.json());

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use('/api', router);

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


