export default function GetListItem({ content }) {
  return (
      <li className="block list-disc mr-0 text-lg md:max-w-[80%] max-w-[90%]">
          <span className="font-bold">-</span> {content}
      </li>
  )
}