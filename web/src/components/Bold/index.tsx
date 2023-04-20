import { ReactProps } from "@/core/domain/ReactProps";

export function Bold({ children }: ReactProps) {
  return <span className='font-bold text-white'>{children}</span>
}