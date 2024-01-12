import FormComponent from "@/components/FormComponent";
import TabsComponent from "@/components/TabsComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 p-6 md:p-10 md:pt-8 max-w-5xl mx-auto">
      <section className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <Link href="/">
            <Image
              src="/seedly-logo-serif.svg"
              alt="Logo"
              width={60}
              height={60}
              className="w-9 md:w-10 -rotate-[4deg]"
            />
          </Link>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-serif tracking-[-0.015em] text-center">
                Due diligence
                <br />
                without the grunt work
              </h1>
              <p className="text-center text-zinc-500">
                Pull all the data you need for analysis, just with a data room.
              </p>
            </div>
            <FormComponent />
          </div>
        </div>
        <Image src="/seedly.svg" alt="seedly" width={1000} height={1000} />
      </section>
      <section
        id="getInfo"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-serif tracking-[-0.015em] text-center">
            Gather data for analysis
            <br />
            in minutes, not weeks
          </h1>
          <p className="text-center text-zinc-500">
            Every investment memo starts with the same tedious research. We pull that data so you can jump into the real work, right away.
          </p>
        </div>
        <TabsComponent />
      </section>
    </main>
  );
}
