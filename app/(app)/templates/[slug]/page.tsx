import { allTemplates } from ".contentlayer/generated"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/registry/ui/button"
import Link from "next/link"
import { Icons } from "@/components/icons"
type IconName = keyof typeof Icons
// Find template by slug
export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    slug: template._raw.flattenedPath.split("/")[1],
  }))
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const template = allTemplates.find(
    (item) => item._raw.flattenedPath.split("/")[1] === params.slug
  )

  if (!template) return notFound()

  return (
    <main className="px-6 pt-16 container-wrapper">
      <h1 className="mx-auto md:mx-0 font-bold w-fit text-4xl text-wrap">
        {template.title}
      </h1>

      <p className="mt-4 w-fit mx-auto md:mx-0 text-gray-400">
        {template.description}
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-3">
        <div>
          {template.technologyUsed.map((tech, i) => {
            const key = tech.toLowerCase().trim() as IconName

            const Icon = Icons[key]

            return (
              <span
                key={i}
                className="mr-[2px] w-[30px] h-[30px] inline-flex justify-center items-center"
              >
                {Icon ? <Icon className="h-6 w-6" /> : <span>{tech}</span>}
              </span>
            )
          })}
        </div>
        <div className="flex gap-3">
          <Link
            href={template.liveLink}
            target="_blank"
            className="inline-block"
          >
            <Button variant="blue" intent="small">
              Live Preview
            </Button>
          </Link>
          <Link
            href={template.repoLink}
            target="_blank"
            className="inline-block"
          >
            <Button variant="lime" intent="small">
              Code link
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {template.imageLinks.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-md">
            <Image
              src={img}
              alt={`Image ${i + 1}`}
              width={500}
              height={300}
              className="rounded-md transition-transform duration-300 ease-in-out hover:scale-105 w-full  border-[10px]"
            />
          </div>
        ))}
      </div>

      {template.features?.length > 0 && (
        <section className="my-20 lg:flex">
          <h2 className="text-2xl font-semibold mb-4 lg:w-2/5">Features</h2>
          <ul className="space-y-4 lg:3/5 grid grid-col-1 sm:grid-cols-2 gap-3">
            {template.features.map((feature, i) => (
              <li key={i} className="!mt-0">
                <h3 className="font-bold">{feature.heading}</h3>
                <p className="text-base text-gray-400">{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
