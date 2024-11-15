import Link from "next/link";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  const email = "guptaaman9036@gmail.com";

  return (
    <section id="contact" className="flex items-center flex-col gap-4 p-4 font-medium">
      <div className="pb-5">
        <h2 className="text-3xl text-center pb-3">Contact Me</h2>
        <p className="text-center">
          Please contact me directly at&nbsp;
          <Link href={`mailto:${email}`} className="underline">
            guptaaman9036@gmail.com
          </Link>
          &nbsp;or through this form.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};
