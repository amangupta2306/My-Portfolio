import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative text-white flex justify-center" >
      <div className="fixed top-5 md:top-10 z-50">
        <Navbar />
      </div>
      <main className="">
        {children}
      </main>
    </div>
  );
}
