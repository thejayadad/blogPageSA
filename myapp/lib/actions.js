import db from "./db";
import User from "@/models/User";
import getServerUser from "./getServerUser";

//ADD POST
export const createPost = async (formData) => {
    const { title, desc, creator, creatorImg} = 
    Object.fromEntries(formData)
    const user = await getServerUser()
    const userEmail = user.email;
    console.log("User " + user)
    console.log("UserEmail " + userEmail)
    try {
        db.connect
        const newPost = new Post({
            title,
            desc,
            creator,
            creatorImg
        })
        await newPost.save()
    } catch (error) {
        throw new Error("Failed to create Post " + error);

    }
    revalidatePath("/");
    redirect("/");
}