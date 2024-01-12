import Link from "next/link";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import ReportTabs from "@/components/ReportTabs";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 md:gap-9">
      <section className="flex flex-col items-center gap-12 w-full">
        <div className="flex flex-col items-center gap-6 xs:gap-7 md:gap-9">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Seedly logo"
              width={44}
              height={44}
              className="w-10 xs:w-11 md:w-12"
            />
          </Link>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-4xl xs:text-5xl md:text-6xl font-serif tracking-[-0.0175em] text-center">
              Due diligence
              <br />
              without the grunt work
            </h1>
            <p className="text-center text-[#6F6F77]">
              Use a data room get all the data you need for analysis.
            </p>
            <WaitlistForm />
          </div>
        </div>
        <div className="-mx-[0.8em] md:-mx-[1.3em] xl:md:-mx-[1.75em]">
          <Image
            src="/hero.png"
            alt="Illustration of data flowing from a data room through different websites, APIs, and eventually into a written report of all preliminary findings."
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section id="getInfo" className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-serif tracking-[-0.0175em] text-center">
            Gather data for analysis <br className="hidden sm:inline-block" />{" "}
            in minutes, not weeks
          </h1>
          <p className="text-center text-[#6F6F77] max-w-[55ch] md:max-w-prose">
            Every investment memo starts with the same tedious research. We pull
            that data so you can jump into the real work, right away.
          </p>
        </div>
        <ReportTabs />
      </section>
      <section className="flex flex-col gap-6 my-6">
        <div className="flex flex-col items-center gap-6 xs:gap-8">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-serif tracking-[-0.0175em] text-center max-w-[16ch]">
            Fast-track your diligence today
          </h1>
          <WaitlistForm />
        </div>
        <div className="flex flex-col items-center gap-6"></div>
      </section>
    </main>
  );
}
