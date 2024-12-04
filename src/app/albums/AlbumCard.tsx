import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Folder} from "@/types";

export default function AlbumCard({name}:Folder) {
    return (
        <Card className="max-w-[350px]">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>See the all images on {name} folder.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
               <Link href={`/albums/${name}`}>
                   <Button>View Album</Button>
               </Link>
            </CardFooter>
        </Card>
    )
}