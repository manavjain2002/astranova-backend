import dotenv from "dotenv";
dotenv.config()
import express from "express";
import * as db from "./database/db";

const app: express.Express = express()

app.use(express.json())

app.get("/", (req: express.Request, res: express.Response) => {
    console.log("request recieved");
})

app.listen(8080, "localhost", ()=>{
    console.log("Server started listening on http://localhost:8080");
})