import FormComponent from "@/components/FormComponent";
import TabsComponent from "@/components/TabsComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-6 md:p-8 max-w-[900px] mx-auto">
      <section className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8">
          <Link href="/">
            <Image
              src="/seedly-logo-serif.svg"
              alt="Logo"
              width={60}
              height={60}
              className="w-9 md:w-10 -rotate-[4deg]"
            />
          </Link>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-serif tracking-[-0.015em] text-center">
                Due diligence
                <br />
                without the grunt work
              </h1>
              <p className="text-center text-[#6F6F77]">
                Get all the data you need for analysis, just with a data room.
              </p>
            </div>
            <FormComponent />
          </div>
        </div>
        <div className="-mx-[0.8em] md:-mx-[1.3em] xl:md:-mx-[1.75em]">
          <Image
            src="/hero-image.png"
            alt="seedly"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section id="getInfo" className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-serif tracking-[-0.015em] text-center">
            Gather data for analysis
            <br />
            in minutes, not weeks
          </h1>
          <p className="text-center text-[#6F6F77]">
            Every investment memo starts with the same tedious research. We pull
            that data so you can jump into the real work, right away.
          </p>
        </div>
        <TabsComponent />
      </section>
    </main>
  );
}
