import { model, Schema } from 'mongoose';

const Assets: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    tokenID: Number,
    IPFS_Link: String,
    userID: Schema.Types.ObjectId,
    creatorWalletAddress: String,
})