import db from "./db";
import Post from "@/models/Post";


export const getPost = async () => {
    try {
        db.connect()

        const posts = await Post.find({})
        return posts
    } catch (error) {
        throw new Error("Failed to fetch Post! " + error);

    }
}