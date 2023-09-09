import "./ActionBtn.css"
import { Link } from 'react-router-dom'

const ActionBtn = ({ text, target = "", onClick=(() => {}), type="button"}) => {
  return (
    <button className="action_btn bg-[#0dab47] px-8 py-4 transition-opacity transition-delay-200 overflow-hidden leading-normal rounded-none border-none hover:opacity-80 relative cursor-pointer outline-none" type={type} onClick={onClick}>
      <Link to={target} className="action_btn_text text-white font-bold tracking-wider no-underline text-lg">
        {text}
      </Link>
    </button>
  )
}

export default ActionBtn