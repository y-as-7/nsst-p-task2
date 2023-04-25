import Link from "next/link";
import Header from "@/components/Header";
export default async function Home() {
  return (
    <div className="justify-center w-full flex flex-col items-center h-[100vh] bg-gray-700">
      <header className="mb-16 mx-auto group w-[90%] md:w-[80%]">
        <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
          Hi, We&apos;re
          <area shape="circle" coords="" href="" alt="" />
          <br className="block md:hidden" />
          <span className="text-red-700 ml-3 text-[50px] inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            NSST 🚀
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>
      </header>
      <div className="flex flex-col justify-around w-[90%] md:w-[600px] mx-auto">
        <Link href="/task1">
          <h1 className="my-2 text-center bg-[#151a25] px-8 text-red-700 text-2xl md:text-4xl py-4 rounded transition duration-600 hover:text-white hover:bg-red-700">
            Task1
          </h1>
        </Link>
        <Link href="/task2">
          <h1 className="my-2 text-center bg-[#151a25] px-8 text-red-700 text-2xl md:text-4xl py-4 rounded transition duration-600 hover:text-white hover:bg-red-700">
          Task2
          </h1>
        </Link>
        <Link href="/task3">
          <h1 className="my-2 text-center bg-[#151a25] px-8 md:text-4xl text-red-700 text-2xl py-4 rounded transition duration-600 hover:text-white hover:bg-red-700">
          Task3
          </h1>
        </Link>
        <Link href="/task4">
          <h1 className="my-2 text-center bg-[#151a25] px-8 md:text-4xl text-red-700 text-2xl py-4 rounded transition duration-600 hover:text-white hover:bg-red-700">
          Task4
          </h1>
        </Link>
      </div>
    </div>
  );
}
