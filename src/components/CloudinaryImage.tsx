'use client'
import {CldImage} from "next-cloudinary";

export default function CloudinaryImage({public_id}: {public_id: string}) {
    return (
        <CldImage alt='image' src={public_id} width={400} height={300}></CldImage>
    );
}