"use client"
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/registry/ui/floating-navbar"
import { cn } from "../lib/utils"

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem item="Products">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Product one"
              href="https://example.com"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800"
              description="Ready-made UI components for consistent brand experiences."
            />
            <ProductItem
              title="Product two"
              href="https://example.com"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800"
              description="Track metrics and visualize key performance data."
            />
            <ProductItem
              title="Product Three"
              href="https://example.com"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800"
              description="Organize and publish content across channels."
            />
            <ProductItem
              title="Product three"
              href="https://example.com"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800"
              description="Secure login solutions with multi-factor options."
            />
          </div>
        </MenuItem>
        <MenuItem item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
