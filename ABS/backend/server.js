require('dotenv').config();  
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
 
const app = express();

app.use(cors());
app.use(express.json());
 
connectDB();
 

app.use('/api/login', require('./routes/auth'));
// app.use('/api/admins', require('./routes/admins'));
app.use('/api/staff-login', require('./routes/staffAuth')); // Staff login
app.use('/api/admin-login', require('./routes/adminLogin'));  // Admin login route

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));