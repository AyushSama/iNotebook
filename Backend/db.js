const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = async () => {
    try {
        mongoose.connect(mongoURI);
        console.log("Connected to DB");
    } catch {
        console.log("error");
    }
};

module.exports = connectToMongo;
