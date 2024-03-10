import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Connected to database successfully! ");
    }).catch((err) => {
        console.log(`Error occured while connecting to database: ${err}`);
    });
};


