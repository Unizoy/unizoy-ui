import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Announcement() {
  return (
    <Link
      href="/"
      className="group mb-2 inline-flex items-center px-0.5 text-sm font-medium mx-auto"
    >
      <span className="underline-offset-4 group-hover:underline">
        We are live
      </span>
      <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  )
}
