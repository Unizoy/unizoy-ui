import Image from "next/image"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { CardsDemo } from "@/components/cards"
import { Rythem, Line, Word, Picture } from "@/registry/new-york/ui/rythemic-reveal"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
      {/* <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav className="[&>a:first-child]:text-primary" />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
            <Image
              src="/examples/cards-light.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="block dark:hidden"
            />
            <Image
              src="/examples/cards-dark.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="hidden dark:block"
            />
          </section>
          <section className="hidden md:block [&>div]:p-0">
            <CardsDemo />
          </section>
        </div>
      </div> */}
      <div className="h-96">
        {/* remove in prod */}
      </div>
      <Rythem className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl " imgsWidth={124} >
        <Line className="flex mx-auto w-fit gap-3 ">
          <Word>FROM</Word>
          <Word>STATIC</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              className=""
              src="/home/static.jpg"
              alt="Static webpage elements"
            />
          </Word>
          <Word>ELEMENTS</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>TO</Word>
          <Word>DYNAMIC</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/dynamic.jpg"
              alt="Animated UI elements"
            />
          </Word>
          <Word>EXPERIENCES</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>TRANSFORM</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/mundane.jpg"
              alt="Before and after animation states"
            />
          </Word>
          <Word>MUNDANE</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>INTO</Word>
          <Word>MAGICAL</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/magical.jpg"
              alt="Magical animation effect"
            />
          </Word>
        </Line>


        <Line className="flex mx-auto w-fit gap-3">
          <Word>OPEN</Word>
          <Word>SOURCE</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/opensource.jpg"
              alt="Open source contribution"
            />
          </Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>ANIMATION</Word>
          <Word>ECOSYSTEM</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3 py-0">
          <Word>UNIZOYUI</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.50] ">
            <Picture
              src="/home/unizoy.png"
              alt="Unizoyui logo animation"
            />
          </Word>
          <Word>POWERS</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>YOUR</Word>
          <Word>CREATIVE</Word>
          <Word>VISION</Word>
        </Line>
      </Rythem>
      <div className="h-screen"></div>
      {/* remove in prod */}
    </>
  )
}
