import mongoose from "mongoose";

const MONGODB_USERNAME: string = process.env.MONGODB_USERNAME as string;
const MONGODB_PASSWORD: string = process.env.MONGODB_PASSWORD as string;
const MONGODB_URI: string = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.9adnst6.mongodb.net/?retryWrites=true&w=majority`;


export {
    MONGODB_URI
}