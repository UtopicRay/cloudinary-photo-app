"use client"
import {Button} from "@/components/ui/button";
import {CldUploadButton} from "next-cloudinary";
import {Upload} from "lucide-react";

export default function GalleryPage() {
    return(
        <section className="flex justify-between px-4 py-2 w-full">
            <h1 className='text-4xl font-bold'>Gallery</h1>
            <Button asChild>
                <div className='flex gap-2'>
                    <Upload/>
                    <CldUploadButton uploadPreset={`ymik0prr`}></CldUploadButton>
                </div>
            </Button>
        </section>
    )
}