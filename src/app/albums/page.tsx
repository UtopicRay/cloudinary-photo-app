import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {Folder} from "@/types";
import AlbumCard from "@/app/albums/AlbumCard";


export default async function AlbumPage() {
    const {folders} = await cloudinary.v2.api.root_folders();
    return (
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Albums</h1>
                <UploadButton/>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {folders.map((folder:Folder) => (
                    <AlbumCard key={folder.path} name={folder.name} path={folder.path}></AlbumCard>
                ))}
            </div>
        </section>
    )

}