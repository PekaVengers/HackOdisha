import dot from "../../assets/dot.png"

export default function GetListItem({ content }) {
  return (
    <li className=" list-disc mr-0 text-lg md:max-w-[80%] max-w-[90%] py-2 flex items-center">
    <img src={dot} className="w-1 h-1 mr-2" alt="Dot" />
    {content}
  </li>
  
  )
}