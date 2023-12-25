'use server'
import db from "./db";
import getServerUser from "./getServerUser";
import Post from "@/models/Post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//ADD POST
export const createPost = async (formData) => {
    const { title, desc} = 
    Object.fromEntries(formData)
    const user = await getServerUser()
    const userEmail = user.email;
    const userImg = user.image
    // console.log("User " + user)
    // console.log("UserEmail " + userEmail)
    // console.log("Server UserImage " + userImg)

    try {
        db.connect()
        const newPost = new Post({
            title,
            desc,
            creator: userEmail,
            creatorImg: userImg
        })
        await newPost.save()
    } catch (error) {
        throw new Error("Failed to create Post " + error);

    }
    revalidatePath("/");
    redirect("/");
}