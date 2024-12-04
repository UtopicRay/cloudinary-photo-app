import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Suspense} from "react";
import {LoaderCircle} from "lucide-react";

export default async function  GalleryPage() {
    const results = await cloudinary.v2.search.fields('tags').max_results(14)
        .execute() as { resources: ImageAPI[] }

    return(
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <UploadButton/>
            </div>
            <Suspense fallback={<LoaderCircle/>}>
                <ImagesGrid images={results.resources} getImage={(imageData) => {
                    return (
                        <CloudinaryImage key={imageData.public_id} imageData={imageData}></CloudinaryImage>
                    )
                }}>
                </ImagesGrid>
            </Suspense>
        </section>
    )
}