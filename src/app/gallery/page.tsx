import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import CloudinaryImage from "@/components/CloudinaryImage";

export default async function  GalleryPage() {
   const results =await cloudinary.v2.api.resources()as { resources:ImageAPI[]}
    return(
        <section className="flex flex-col px-4 py-8 w-full gap-y-10">
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <UploadButton/>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {results.resources.map(({public_id}) => (
                    <CloudinaryImage key={public_id}  public_id={public_id}></CloudinaryImage>
                ))}
            </div>
        </section>
    )
}