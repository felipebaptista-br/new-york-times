'use client'

import React from "react"
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

export default function Navigation() {
  const pathname = usePathname()
  const breadcumbs: string[] = pathname.split('/').filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcumbs.length &&
          breadcumbs.map((breadcrumb, index) => {
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${breadcumbs.slice(0, index + 1).join('/')}`} className="capitalize">
                    {breadcrumb}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* => Exibir o Separator apenas se não for o último item */}
                {index < breadcumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            )
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}