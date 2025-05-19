type Props = {
    htmlFor?: string
    children: React.ReactNode
  }
  
  export default function Label({ htmlFor, children }: Props) {
    return (
      <label htmlFor={htmlFor} className="w-[80px] block mb-1 text-sm font-medium text-[#737373]">
        {children}
      </label>
    )
  }
  