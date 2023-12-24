import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {type: String},
    desc: {type: String},
    creator: {type: String},
    creatorImg: {type: String},
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)