'use server'
import cloudinary from "cloudinary";
import {revalidatePath} from "next/cache";

export async function setAsFavorite(public_id: string, isFavorite?: boolean) {
    if (isFavorite) {
        await cloudinary.v2.api.update(public_id, {tags: ''})
    } else {
        await cloudinary.v2.api.update(public_id, {tags: 'favorite'})
    }
    revalidatePath("/gallery");
}

export async function isFavorite(public_id: string): Promise<boolean> {
    return await cloudinary.v2.api.search(public_id, {tags: 'favorite'});
}
/*
export async function getAllImages(): Promise<void> {
    const [results,setResults]=useState<ImageAPI[]>()
    const {resources.public_id}= await cloudinary.v2.api.resources();
}*/