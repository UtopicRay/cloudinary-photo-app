import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";

export default async function  GalleryPage() {
    const results = await cloudinary.v2.search.fields('tags').max_results(10)
        .execute() as { resources: ImageAPI[] }

    return(
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <UploadButton/>
            </div>
            <ImagesGrid images={results.resources} getImage={(imageData) => {
                return (
                    <CloudinaryImage key={imageData.public_id} imageData={imageData}></CloudinaryImage>
                )
            }}>
            </ImagesGrid>
        </section>
    )
}