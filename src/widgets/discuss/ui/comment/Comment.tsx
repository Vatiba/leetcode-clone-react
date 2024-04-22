import { CommentEntities } from "entities/discuss";
import { Reply, UpDownVote } from "features/discuss";

type CommentProps = {
	/** @default false */
	isMain?: boolean
	/** @default false */
	loading?: boolean
	title?: string
	content: string
	score: number
	userName: string
	voteSum: number
	commentId?: number
	commentSlug?: string
}

function Comment(props: CommentProps) {
	const {
		title,
		content,
		score,
		userName,
		voteSum,
		commentId,
		commentSlug,
		isMain = false,
		loading = false
	} = props;

	return (
		<div className="flex gap-3 md:gap-4 border-b border-gray-200 w-full pb-5 mb-4">

			<UpDownVote
				loading={loading}
				voteSum={voteSum}
				commentId={commentId}
				commentSlug={commentSlug}
			/>

			<div className="flex flex-col gap-3 w-full">
				<CommentEntities
					htmlContent={content}
					score={score}
					title={title}
					userName={userName}
					loading={loading}
				/>
				{
					!isMain && !loading ?
						<Reply
							commentId={commentId as number}
							isMinimizedBtn
						/>
						: null
				}
			</div>
		</div>
	)
}

export default Comment