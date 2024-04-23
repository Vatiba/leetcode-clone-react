import { useVoteDiscuss } from "features/discuss"
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import { numberFormatter } from "shared/libs"

type UpDownVoteProps = {
    loading: boolean
    voteSum: number
    commentId?: number
    commentSlug?: string
}

function UpDownVote(props: UpDownVoteProps) {
    const {
        loading,
        voteSum,
        commentId,
        commentSlug
    } = props;

    const {
        mutate: voteDiscuss,
        isPending: votePending
    } = useVoteDiscuss();

    return (
        <div className="flex items-center flex-col gap-2">
            {
                !loading ?
                    <button
                        className="flex justify-center items-center h-10 w-10 border-none bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={() => {
                            voteDiscuss({
                                comment: commentId as number,
                                slug: commentSlug as string,
                                value: 1
                            });
                        }}
                        disabled={votePending}
                    >
                        <BiSolidUpArrow className="text-gray-500" />
                    </button>
                    :
                    <div className="animate-pulse bg-gray-200 rounded-md h-10 w-10" />
            }
            <span className="font-bold">
                {
                    !loading ?
                        numberFormatter(voteSum)
                        :
                        <div className="h-6 w-8" />
                }
            </span>
            {
                !loading ?
                    <button
                        className="flex justify-center items-center h-10 w-10 border-none bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={() => {
                            voteDiscuss({
                                comment: commentId as number,
                                slug: commentSlug as string,
                                value: -1
                            });
                        }}
                        disabled={votePending}
                    >
                        <BiSolidDownArrow className="text-gray-500" />
                    </button>
                    :
                    <div className="animate-pulse bg-gray-200 rounded-md h-10 w-10" />
            }
        </div>
    )
}

export default UpDownVote