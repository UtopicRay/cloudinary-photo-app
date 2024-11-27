import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Navbar() {
    return (<nav className="flex justify-between items-center w-full px-6 py-4 bg-white dark:bg-gray-800">
        <h4>PHOTO AlBUM</h4>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    </nav>)
}