import FormComponent from "@/components/FormComponent";
import TabsComponent from "@/components/TabsComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-screen flex-col m-2 p-2 pt-1 mt-1 md:p-10">
      <section className="flex flex-col text-left mb-2 md:pl-30 sm:mt-12 mt-6 xl:pl-48 relative">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-6xl">Due diligence</span>
            <span className="md:inline md:mr-1 lg:inline lg:mr-1"></span>
            <br />
            <span className="pt-1 font-bold text-6xl">
              without the grunt work
            </span>
            <p className="pt-5 text-left text-semibold text-gray-400">
              Use data room to pull all the info you need for analysis.
            </p>
          </div>
          <div className="absolute top-0 right-0 mt-5 sm:mr-5 lg:mr-40">
            <Link href="/">
              <Image
                src="/seedly-logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className="w-15 lg:w-50"
              />
            </Link>
          </div>
        </div>
        <div className="pt-5 pb-5">
          <FormComponent />
        </div>
      </section>

      <section className="flex flex-col p-3 gap-5 items-center">
        <div className="gap-5">
          <Image src="/seedly.svg" alt="seedly" width={1000} height={600} />
        </div>
      </section>
      <section
        id="getInfo"
        className="flex flex-col text-left sm:pl-30 md:mt-12 mt-6 xl:pl-48 -mb-32"
      >
        <span className="font-bold text-6xl text-left">
          Get info for analysis
        </span>
        <span className="md:inline md:mr-1 lg:inline lg:mr-1"></span>
        <span className="pt-1 font-bold text-6xl text-left">
          in minutes, not weeks
        </span>
        <p className="pt-5 text-semibold text-gray-400 text-left mb-40">
          Every memo starts with the same tedious research.
          <span className="md:inline md:mr-1 lg:inline lg:mr-1"></span> <br />
          We pull that data so you can jump into the real work, right away.
        </p>
      </section>
      <section className="flex flex-col items-center mt-30">
        <div className="container lg:w-3/4">
          <TabsComponent />
        </div>
      </section>
    </main>
  );
}
