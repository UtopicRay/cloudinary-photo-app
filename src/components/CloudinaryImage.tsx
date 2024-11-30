'use client'
import {CldImage} from "next-cloudinary";
import {Heart} from "lucide-react";
import {useActions} from "@/hooks/use-actions";
import {useTransition} from "react";

export default function CloudinaryImage({public_id}: {public_id: string}) {
    const [transition,startTransition] = useTransition()
    const {setAsFavortite}=useActions()
    return (
        <div className='relative rounded-lg w-full'>
        <CldImage className='rounded-lg max-w-full h-auto'  alt='image' src={public_id} width={400} height={300}></CldImage>
        <div className='absolute top-3 right-2'>
            <Heart className='hover:text-red-500' onClick={()=> {
                startTransition(async ()=>{
                        await setAsFavortite(public_id)
                })
            }}/>
        </div>
        </div>
    );
}