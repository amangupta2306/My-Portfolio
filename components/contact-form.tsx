"use client";

import * as motion from "framer-motion/client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { LoaderCircle, Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setIsLoading(false);

      if (response.ok) {
        form.reset();
        toast({
          title: "Email sent successfully!",
        });
      } else {
        toast({
          title: "Error sending message",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Failed to send message", error);
      toast({
        title: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const formSchema = z.object({
    email: z.string().email().trim().min(5).max(50),
    message: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl className="bg-white text-gray-800 h-14 font-semibold text-md">
                  <Input {...field} type="email" placeholder="Your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl className="bg-white text-gray-800 h-56 font-semibold text-md">
                  <Textarea {...field} placeholder="Your message" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:w-0 text-center">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button type="submit" className="rounded-full p-7 w-32 font-semibold text-md">
                {isLoading ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <>
                    <span>Submit</span>
                    <Send />
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </form>
      </Form>
    </>
  );
};
