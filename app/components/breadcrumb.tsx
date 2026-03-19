import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="font-body text-[11px] tracking-wider text-acoustic-dim hover:text-acoustic-gold transition-colors duration-200 uppercase"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-3 h-3 text-acoustic-dim/50 mx-1.5" />
              <Link
                href={item.href}
                className="font-body text-[11px] tracking-wider text-acoustic-dim hover:text-acoustic-gold transition-colors duration-200 uppercase"
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
