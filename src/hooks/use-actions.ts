import cloudinary from "cloudinary";
export function useActions() {
    async function setAsFavortite(public_id:string){
        await cloudinary.v2.api.update(public_id, {tags:'favorite'});
    }
    return {setAsFavortite}
}