const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
    },);
    console.log(`Database connected ${conn.connection.host}`.magenta.underline.bold)
}

module.exports = connectDB;