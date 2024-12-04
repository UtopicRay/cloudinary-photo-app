import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {Separator} from "@/components/ui/separator";
import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import FavoriteList from "@/components/FavoriteList";

export default  async function Home() {
    const results = await cloudinary.v2.search.expression("tags=favorite").fields('tags').max_results(10)
        .execute() as { resources: ImageAPI[] };
  return (
      <div className="col-span-3 lg:col-span-4 lg:border-l w-full">
          <div className="h-full px-4 py-6 lg:px-8">
              <Tabs defaultValue="music" className="h-full space-y-6">
                  <div className='flex justify-between'>
                      <h1 className='text-4xl font-bold'>Home</h1>
                      <UploadButton/>
                  </div>
                  <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                  >
                      <div className="flex items-center justify-between">
                          <div className="space-y-1">
                              <h2 className="text-2xl font-semibold tracking-tight">
                                  Listen Now
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                  Top picks for you. Updated daily.
                              </p>
                          </div>
                      </div>
                      <Separator className="my-4"/>
                      <div className="relative">
                          <ScrollArea>
                              <div className="flex space-x-4 pb-4">
                                  <FavoriteList resources={results.resources}/>
                              </div>
                              <ScrollBar orientation="horizontal"/>
                          </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                              Made for You
                          </h2>
                          <p className="text-sm text-muted-foreground">
                              Your personal playlists. Updated daily.
                          </p>
                      </div>
                      <Separator className="my-4"/>
                      <div className="relative">
                          <ScrollArea>
                              <div className="flex space-x-4 pb-4">

                              </div>
                              <ScrollBar orientation="horizontal"/>
                          </ScrollArea>
                      </div>
                  </TabsContent>
                  <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                  >
                      <div className="flex items-center justify-between">
                          <div className="space-y-1">
                              <h2 className="text-2xl font-semibold tracking-tight">
                                  New Episodes
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                  Your favorite podcasts. Updated daily.
                              </p>
                          </div>
                      </div>
                  </TabsContent>
              </Tabs>
          </div>
      </div>
  );
}
