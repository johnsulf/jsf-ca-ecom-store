/**
 * Breadcrumbs module.
 *
 * @module Breadcrumbs
 * @description Renders navigation breadcrumbs based on current route, including dynamic product titles.
 */
import { Fragment, useEffect, useState } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getProductById } from '@/api/product-api'

const nameMap: Record<string, string> = {
  '': 'Home',
  product: 'Product',
  contact: 'Contact',
  cart: 'Cart',
  checkout: 'Checkout',
}

/**
 * Breadcrumbs component generating a list of navigation links for the current path.
 *
 * Fetches product title for detailed product pages and constructs breadcrumb items accordingly.
 *
 * @component
 * @returns The breadcrumb navigation element.
 */
export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const params = useParams<{ id?: string }>()
  const segments = pathname.split('/').filter(Boolean)

  const onProductDetail = segments[0] === 'product' && !!params.id

  const [productTitle, setProductTitle] = useState<string>()

  /**
   * Side effect to load the product title when on a product detail route.
   */
  useEffect(() => {
    if (onProductDetail && params.id) {
      getProductById(params.id)
        .then((p) => setProductTitle(p.title))
        .catch(() => setProductTitle(undefined))
    }
  }, [onProductDetail, params.id])

  const crumbs = onProductDetail ? ['product'] : segments

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {/* Always show Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">{nameMap['']}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {crumbs.map((segment, index) => {
          const isLast = index === crumbs.length - 1
          const path = '/' + crumbs.slice(0, index + 1).join('/')

          let label = nameMap[segment] ?? segment
          if (onProductDetail && segment === 'product' && isLast && productTitle) {
            label = productTitle
          }

          return (
            <Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
