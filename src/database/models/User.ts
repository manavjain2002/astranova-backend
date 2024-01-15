import { model, Schema } from 'mongoose';

const User: Schema = new Schema({
    name: String,
    walletAddress: String,
    createdAt: String
});

export default model('User', User)