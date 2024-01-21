import { model, Schema } from 'mongoose';

const Users: Schema = new Schema({
    name: String,
    walletAddress: String,
    authToken: String,
    createdAt: String
});

export default model('Users', Users)