import { Contact } from "@/components/contact";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Project } from "@/components/project";
import { Skill } from "@/components/skill";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center gap-10 md:gap-20 pt-36">
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
