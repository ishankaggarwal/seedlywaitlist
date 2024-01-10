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
        const docRef = await addDoc(collection(db, "users"), {
          email: values.email,
        });
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:max-w-32 md:min-w-60">
                <FormControl>
                  <Input
                    className="bg-slate-200 hover:bg-slate-300"
                    placeholder="Work email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {loading ? (
            <SyncLoader size={8} color="#000000" />
          ) : (
            <Button type="submit">Join waitlist</Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default FormComponent;
