import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log('Database is connected');
}catch(error){
    console.log('Database connection is false', error);
}

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5001, () =>
console.log("Server at http://localhost:5001")
);