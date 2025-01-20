import Header from "@/components/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
       <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
        AI Agent Assistant
        <strong className="font-bold sm:block text-gray-500"> Custom Paths, Powered by AI </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
       Meet your dynamic chat companion tat goes beyond conversation as it get things done.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

       
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
