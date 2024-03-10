import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./models/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js";
import  reservationRouter from "./routes/reservationRoute.js";


const app = express();
dotenv.config();

app.use(
    cors({
        origin: ["https://65ed88ca7310824a5f956378--imaginative-banoffee-d74586.netlify.app/"],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", reservationRouter);


dbConnection();

app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Sever is running on port: ${process.env.PORT}`);
})

