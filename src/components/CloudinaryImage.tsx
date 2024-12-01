'use client'
import {CldImage} from "next-cloudinary";
import {Heart} from "lucide-react";
import {setAsFavorite} from "@/hooks/use-actions";
import {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {ImageAPI} from "@/types";


export default function CloudinaryImage({imageData,unHeart}:{imageData:ImageAPI,unHeart?:(resource:ImageAPI)=>void}) {
    const [transition, startTransition] = useTransition()
    const [isFavorited,setIsFavorited] = useState<boolean>(imageData.tags.includes("favorite"))
    const router = useRouter();
    return (
        <div className='relative rounded-lg w-full'>
            <CldImage className='rounded-lg max-w-full h-auto' alt='image' src={imageData.public_id} width={400}
                      height={300}>
            </CldImage>
        <div className='absolute top-3 right-2'>
            <Heart className={`hover:text-red-500 ${isFavorited && 'text-red-500 hover:text-white'}`}
                   fill={`${isFavorited ? 'red' : 'white'}`} onClick={() => {
                startTransition(async ()=>{
                    setIsFavorited(!isFavorited);
                    unHeart?.(imageData)
                    await setAsFavorite(imageData.public_id, isFavorited)
                    router.refresh()
                })
            }}/>
        </div>
        </div>
    );
}