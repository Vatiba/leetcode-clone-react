import { BiUpArrow, BiDownArrow } from "react-icons/bi"
import { numberFormatter } from "shared/libs"

function UpDownVote() {
    return (
        <div className="flex items-center flex-col gap-2">
            <button
                className="flex justify-center items-center h-10 w-10 border-none bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={() => { }}
            >
                <BiUpArrow />
            </button>
            <span className="font-bold">
                {numberFormatter(12)}
            </span>
            <button
                className="flex justify-center items-center h-10 w-10 border-none bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={() => { }}
            >
                <BiDownArrow />
            </button>
        </div>
    )
}

export default UpDownVote