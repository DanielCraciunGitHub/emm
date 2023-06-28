import { useSession } from "next-auth/react"
import { NavItem } from "@/app/components/NavItem"

export function MobileBar() {
  const { status } = useSession()
  return (
    <div className="flex flex-col items-center py-2">
      <NavItem key="CMT" page="/" text="CMT" className="text-4xl" />
      {status === "unauthenticated" ? (
        <>
          <NavItem key="/about_us" page="/about_us" text="About Us" />
          <NavItem key="/contact_us" page="/contact_us" text="Contact Us" />
          <NavItem
            key="/products_and_services"
            page="/products_and_services"
            text="Products And Services"
          />
          <NavItem key="/login" page="/login" text="Login" />
          <NavItem key="/sign_up" page="/sign_up" text="Sign Up" />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <NavItem key="/about_us" page="/about_us" text="About Us" />
          <NavItem key="/contact_us" page="/contact_us" text="Contact Us" />
          <NavItem
            key="/products_and_services"
            page="/products_and_services"
            text="Products And Services"
          />
          <NavItem key="/account" page="/account" text="Account" />
        </div>
      )}
    </div>
  )
}