const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' });
const colors = require('colors')
const cors = require('cors')

const connectDB = require('./config/db')
// Connect to database
connectDB()

const bootcamps = require('./routes/bootcamps.js')

const app = express();

// Body Parser
app.use(express.json());
// Using cors
app.use(cors());
const PORT = process.env.PORT || 5000

app.use('/api/v1/bootcamps', bootcamps)

const server =  app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    // Close server & exit process
    server.close(() => process.exit(1))  
})