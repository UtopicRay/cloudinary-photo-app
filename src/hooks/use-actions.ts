'use server'
import cloudinary from "cloudinary";
import {revalidatePath} from "next/cache";
import {ImageAPI} from "@/types";

export async function setAsFavorite(public_id: string, isFavorite?: boolean) {
    if (isFavorite) {
        await cloudinary.v2.api.update(public_id, {tags: ''})
    } else {
        await cloudinary.v2.api.update(public_id, {tags: 'favorite'})
    }
    revalidatePath("/gallery");
}

export async function AddToAlbum({image, folder}:{image:ImageAPI,folder:string}) {
    await cloudinary.v2.api.create_folder(folder);
    await cloudinary.v2.api.update(image.public_id, { asset_folder:`${folder}`
}).then(result=>console.log(result));
}
export async function deleteImage(public_id:string): Promise<void> {
    await cloudinary.v2.api.delete_resources([public_id]);
}