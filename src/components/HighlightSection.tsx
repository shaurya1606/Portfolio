"use client";

import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import highlightsData from "@/data/highlights.json";

interface Highlights {
    id: number,
    quote: string,
    name: string,
    title: string
}

export default function InfiniteMovingCardsDemo() {

  const highlights = highlightsData.highlights.filter((highlights: Highlights) => highlights.id)

  return (
    <div className="relative flex flex-col h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Haarmoney Voices of Success</h2>
       <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8"> 
         <div className="w-full max-w-6xl ">
         <InfiniteMovingCards
         items={highlights}
         direction="left"
         speed="normal"
       />
       </div>
       </div>
    </div>
  );
}


















// export default function InfiniteMovingCardsDemo() {


//   return (
//     <div>
             
//      
//     </div>
//   );
// }

