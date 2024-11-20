import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Loading = () => {
    return (
        <div className="animate-spin-infinite">
            <AiOutlineLoading3Quarters fill="white" size={25}/>
        </div>
    )
}

export default Loading