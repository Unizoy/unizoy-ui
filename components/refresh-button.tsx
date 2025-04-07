"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"

interface CopyButtonProps extends ButtonProps {
  refresh:()=>void
}
export function RefreshButton({
  refresh,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  


  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={refresh}
      {...props}
    >
      <span className="sr-only">Copy</span>
       <RefreshCcw />
    </Button>
  )
}
