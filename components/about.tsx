import { Links } from "./links";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center space-y-6 px-7"
    >
      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-8 ">
        <AvatarImage className="object-cover" src="/profile-pic.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-2xl md:text-5xl font-bold text-center max-w-[800px]">
        Hello, I&apos;m Aman Kumar Gupta, Full Stack Developer with expertise in
        Next Js and React Js.
      </p>
      <Links />
    </section>
  );
};
