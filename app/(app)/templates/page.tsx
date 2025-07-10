import { Metadata } from "next"
import { allTemplates } from ".contentlayer/generated"
import { Button } from "@/registry/ui/button"
import Link from "next/link"
import Image from "next/image"
import { generateSEO } from "@/lib/seo"
import { pageSEO } from "@/config/seo"

// Generate metadata for the templates page
export const metadata: Metadata = generateSEO({
  ...pageSEO["/templates"],
  ogType: "website",
})

export default function Templates() {
  return (
    <main>
      <section className="container-wrapper">
        <h1 className="w-fit mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-none font-medium pt-24 font-serif">
          Templates
        </h1>
        <p className="w-fit sm:w-[50vw] lg:w-[40vw] text-base sm:text-lg md:text-xl  leading-none font-normal text-[#7E7E7E] mt-6 text-center px-6 mx-auto text-wrap">
          Modern and minimalist templates for building your next product. Built
          with React, NextJS, TailwindCSS, GSAP and TypeScript.
        </p>
      </section>

      <section className="py-12 px-6 space-y-3 container-wrapper">
        {allTemplates.map((temp) => (
          <div
            key={temp.title}
            className="flex  flex-col-reverse md:flex-col border p-3 rounded-lg"
          >
            <div className="flex justify-between flex-col md:flex-row gap-4">
              <div className="mt-3">
                <Link
                  href={temp._raw.flattenedPath}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  {temp.title}
                </Link>
                <p className="my-3">{temp.description}</p>
              </div>
              <Link
                href={temp._raw.flattenedPath}
                className="self-start w-full md:w-fit"
              >
                <Button variant="cyan" className="mt-4 md:mt-10 w-full">
                  Check Out
                </Button>
              </Link>
            </div>

            {/* Images */}
            {/* large screen images */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-3">
              {temp.imageLinks.slice(0, 3).map((img, i) => (
                <Link
                  href={temp._raw.flattenedPath}
                  key={img}
                  className="w-fit overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`image_id_${i}`}
                    width={400}
                    height={300}
                    className="rounded-lg border-[10px]  transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              ))}
            </div>
            {/* medium screen images */}
            <div className="hidden md:flex lg:hidden gap-3 justify-between mt-3">
              {temp.imageLinks.slice(0, 2).map((img, i) => (
                <Link
                  href={temp._raw.flattenedPath}
                  key={img}
                  className="w-fit"
                >
                  <Image
                    src={img}
                    alt={`image_id_${i}`}
                    width={400}
                    height={300}
                    className="rounded-lg border-[10px]  transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              ))}
            </div>
            {/* smaller screen images */}
            <div className="md:hidden gap-4">
              {temp.imageLinks.slice(0, 1).map((img, i) => (
                <Link
                  href={temp._raw.flattenedPath}
                  key={img}
                  className="w-fit"
                >
                  <Image
                    src={img}
                    alt={`image_id_${i}`}
                    width={400}
                    height={300}
                    className="rounded-lg border-[10px] w-full transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
