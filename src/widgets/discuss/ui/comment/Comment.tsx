import { CommentEntities } from "entities/discuss";
import { Reply, UpDownVote } from "features/discuss";

type CommentProps = {
    /**
     * @default false
     */
    isMain?: boolean
    title?: string
}

function Comment(props: CommentProps) {
    const {
        title,
        isMain = false
    } = props;

    return (
        <div className="flex gap-3 md:gap-4 border-b border-gray-200 w-full pb-5 mb-4">
            <UpDownVote />

            <div className="flex flex-col gap-3 w-full">
                <CommentEntities
                    htmlContent="<div>This is content of disscussion/question</div>"
                    score={123123123}
                    title={title}
                    userName="Bezirgen Yaylymow"
                />
                {
                    !isMain ?
                        <Reply
                            isMinimizedBtn
                        />
                        : null
                }
            </div>
        </div>
    )
}

export default Comment