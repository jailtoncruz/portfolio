import { ReactProps } from "@/core/domain/ReactProps";

interface LinkProps extends ReactProps {
  href: string
}

export function Link({ children, href }: LinkProps) {
  return <a href={href} target="_blank">{children}</a>
}