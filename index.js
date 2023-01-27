const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server is running!')
})

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});