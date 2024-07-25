import HomeCard from "@/components/homepage/cards/HomeCard";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-[#5683ea] text-black font-bold py-2 text-center">
        Owned By Mobarak Hossain
      </div>

      <div className="w-[95%] mx-auto py-10 lg:py-4">
        <div className="flex items-center justify-center flex-wrap xl:flex-nowrap gap-6 min-h-screen">
          <HomeCard paper={"bd-protidin"} />
          <HomeCard paper={"somokal"} />
          <HomeCard paper={"jugantor"} />
        </div>

        {/* <div className="w-full py-20">
          <div className="w-full h-screen">
            <iframe height="100%" src="https://www.ndtv.com/world-news" width="100%" style={{ scrollbarWidth: "0.1px" }}>
            </iframe>
          </div>
        </div>

        <div className="w-full pt-20 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap h-auto">
          <div className="w-1/3 h-screen">
            <iframe height="100%" src="https://epaper.jugantor.com/" width="100%" style={{ scrollbarWidth: "0.1px" }}>
            </iframe>
          </div>

          <div className="w-1/3 h-screen">
            <iframe height="100%" src="https://epaper.prothomalo.com/" width="100%" style={{ scrollbarWidth: "0.1px" }}>
            </iframe>
          </div>

          <div className="w-1/3 h-screen">
            <iframe height="100%" src="https://epaper.samakal.com/" width="100%" style={{ scrollbarWidth: "0.1px" }}>
            </iframe>
          </div>
        </div> */}
      </div>
    </main>
  );
}
