import { useAuth } from "entities/auth";
import { CommentEntities } from "entities/discuss";
import { EditComment, UpDownVote } from "features/discuss";

type CommentProps = {
	/** @default false */
	loading?: boolean
	title?: string
	content: string
	score: number
	userName: string
	voteSum: number
	commentId?: number
	commentSlug?: string
	userId?: number
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
		userId,
		loading = false
	} = props;

	const { data: authData } = useAuth();

	return (
		<div className="border-b border-gray-200 w-full pb-5 mb-4">
			<div className="flex gap-3 md:gap-4">
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
				</div>
			</div>
			{
				authData?.user?.id === userId && commentSlug ?
					<div className="mt-2">
						<EditComment
							content={content}
							commentSlug={commentSlug}
						/>
					</div>
					:
					null
			}
		</div>
	)
}

export default Comment