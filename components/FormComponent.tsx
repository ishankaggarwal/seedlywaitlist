"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase-config";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email(),
});

function FormComponent() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const gmailRegex = /@gmail\.com$/;
    const outlookRegex = /@outlook\.com$/;
    const yahooRegex = /@yahoo\.com$/;

    try {
      if (
        gmailRegex.test(values.email) ||
        outlookRegex.test(values.email) ||
        yahooRegex.test(values.email)
      ) {
        toast.error("Please use your work email!", {
          position: "top-right",
          icon: "❌",
        });
        setLoading(false);
        form.reset();
        return;
      }

      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("email", "==", values.email))
      );

      if (!querySnapshot.empty) {
        toast.error("You're already on the waitlist!", {
          position: "top-right",
          icon: "👏",
        });
      } else {
        toast.success("You're on the waitlist!", {
          position: "top-right",
        });
      }
    } catch (e) {
      toast.error("Please try again!", {
        position: "top-right",
      });
    }
    setLoading(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:max-w-xs md:max-w-sm mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className=" w-full text-center sm:text-left bg-zinc-200 hover:bg-zinc-300 hover:border-zinc-300 transition duration-75 focus:ring-zinc-900"
                    placeholder="Work email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={loading}
            className="font-normal text-zinc-50 bg-zinc-900 hover:bg-zinc-800 focus:hover:ring-zinc-800 disabled:opacity-50 transition duration-75"
          >
            Join waitlist
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormComponent;
