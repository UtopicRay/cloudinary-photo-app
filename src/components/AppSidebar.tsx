import {Folder, Heart, Image} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function AppSidebar() {
    const items = [
        {
            title: "Gallery",
            url: "gallery",
            icon: Image,
        },
        {
            title: "Albums",
            url: "albums",
            icon: Folder,
        },
        {
            title: "Favorites",
            url: "favorites",
            icon: Heart,
        },
    ]
    return (
        <div className="pb-12 flex justify-start items-start w-1/4">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1">
                        {items.map((item,index) => (
                            <a href={item.url} key={index}>
                                <Button  variant="ghost" className="w-full justify-start text-lg">
                                    <item.icon></item.icon>
                                    {item.title}
                            </Button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
                }