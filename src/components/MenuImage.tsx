import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Folder, Menu} from "lucide-react";

export default function MenuImage() {
    return (
        <div className='absolute top-3 right-2 '>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className='w-8'>
                        <Menu/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Folder className='mr-4'/>
                        <span>Add to Album</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}