"use client"

import * as React from "react"
import Image from "next/image"
import { Index } from "@/__registry__/index"

import { cn } from "@/lib/utils"
// import { useConfig } from "@/hooks/use-config"
import { CopyButton } from "@/components/copy-button"
import { RefreshButton } from "@/components/refresh-button"
import { Icons } from "@/components/icons"
// import { StyleSwitcher } from "@/components/style-switcher"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Style, styles } from "@/registry/registry-styles"
import { NpmCommands } from "@/types/unist"
import { CodeBlockCommand } from "./code-block-command"
// import { StyleWrapper } from "./style-wrapper"
import { Event } from "@/lib/events"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
}

export function ComponentPreview({
  name,
  type,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  // const [config] = useConfig()
  const [forceUpdate, setForceUpdate] = React.useState(false)
  // const index = styles.findIndex((style) => style.name === config.style)

  const Codes = React.Children.toArray(children) as React.ReactElement[]
  //made it hard coded to 0 because sometimes Codes has only element and value of index can be both 0,1
  //   and also Alex told to remove options for switching theme so no need of it
  //1 is default  and 0 is new-york
  const Code = Codes[0]

  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component
    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component key={forceUpdate} />
  }, [name, forceUpdate])

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])
  return (
    <div
      className={cn("relative my-4 flex flex-col space-y-2 h-fit", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex items-center justify-between p-4">
            {/* <StyleSwitcher /> */}
            <div className="flex items-center gap-2">
              <CopyButton
                value={codeString}
                variant="outline"
                className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
              />
            </div>
            <RefreshButton
              refresh={() => setForceUpdate(!forceUpdate)}
              variant="outline"
              className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5 "
            />
          </div>
          <ThemeWrapper defaultTheme="zinc">
            <div
              className={cn(
                "preview flex min-h-[350px] w-full justify-center sm:p-10 py-10",
                {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                }
              )}
            >
              <React.Suspense
                fallback={
                  <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </ThemeWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              <Pre>{Code}</Pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
const Pre = ({
  className,
  __rawString__,
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
  __withMeta__,
  __src__,
  __event__,
  // __style__,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  // __style__?: Style["name"]
  __rawString__?: string
  __withMeta__?: boolean
  __src__?: string
  __event__?: Event["name"]
} & NpmCommands) => {
  const isNpmCommand =
    __npmCommand__ && __yarnCommand__ && __pnpmCommand__ && __bunCommand__

  if (isNpmCommand) {
    return (
      <CodeBlockCommand
        __npmCommand__={__npmCommand__}
        __yarnCommand__={__yarnCommand__}
        __pnpmCommand__={__pnpmCommand__}
        __bunCommand__={__bunCommand__}
      />
    )
  }

  return (
    <>
      <pre
        className={cn(
          "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 py-4 dark:bg-zinc-900",
          className
        )}
        {...props}
      />
      {__rawString__ && (
        <CopyButton
          value={__rawString__}
          src={__src__}
          event={__event__}
          className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
        />
      )}
    </>
  )
}
