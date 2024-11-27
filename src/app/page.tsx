"use client"
import {CldImage, CldUploadButton} from "next-cloudinary";

export default function Home() {
  return (
    <section className="col-span-2 flex flex-col items-center justify-center w-full h-screen">
        <CldUploadButton uploadPreset={`ymik0prr`}></CldUploadButton>
        <CldImage src="eous19hql0prbfxklgua" width={500} height={300} alt={`image`}></CldImage>
    </section>
  );
}
