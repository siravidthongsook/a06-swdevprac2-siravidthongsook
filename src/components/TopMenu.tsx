import Image from "next/image";
import TopMenuItem from "@/components/TopMenuItem";

export default function TopMenu() {
  return (
    <header className="bg-[#f5f5f5] px-5 pt-4 flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-end border border-b-0 border-stone-300 bg-white pl-4 pr-0 py-2 gap-5">
        <TopMenuItem title="Booking" href="/booking" />
        <div className="ml-4 flex h-12 w-12 items-center justify-center overflow-hidden bg-[#f2ead7]">
          <Image
            src="/img/logo.png"
            alt="Venue Explorer logo"
            width={42}
            height={42}
            priority
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </header>
  );
}
