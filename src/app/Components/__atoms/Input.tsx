type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className=" w-[437px] max-w-full p-3 rounded-lg bg-white text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}
