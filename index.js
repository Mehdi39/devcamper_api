const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' });
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()
const bootcamps = require('./routes/bootcamps.js')

const app = express();
const logger = (req, res, next) => {
    req.hello = 'Hello World';
    console.log('Middleware ran'.red.bold);
    next();
}

app.use(logger);

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