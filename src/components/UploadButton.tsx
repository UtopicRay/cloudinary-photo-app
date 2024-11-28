"use client"
import {Button} from "@/components/ui/button";
import {Upload} from "lucide-react";
import {CldUploadButton} from "next-cloudinary";

export default function UploadButton(){
    return(
        <Button asChild>
            <Button asChild>
                <div className='flex gap-2'>
                    <Upload/>
                    <CldUploadButton uploadPreset={`ymik0prr`}></CldUploadButton>
                </div>
            </Button>
        </Button>
    )
}