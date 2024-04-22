import Head from 'entities/Head';
import { useAuth } from 'entities/auth';
import { useGetComment, useGetComments } from 'entities/discuss';
import { Reply } from 'features/discuss';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { concatUserName, getPageOffset } from 'shared/libs/helpers';

import { Container, Pagination } from 'shared/ui';
import { CommentWidget } from 'widgets/discuss';

const limit = 15;

export default function DiscussScreen() {
	const { t } = useTranslation();
	const params = useParams();
	const { data: authData } = useAuth();

	const [page, setPage] = useState<number>(1);

	const offset = useMemo(() => {
		return getPageOffset(page, limit);
	}, [page, limit]);

	const {
		data: comment,
		isLoading: commentLoading,
		isError: commentError
	} = useGetComment(params['discussSlug'] as string);
	const {
		data: replies,
		isLoading: repliesLoading,
		isError: repliesError,
	} = useGetComments({
		limit: limit,
		offset: offset,
		ordering: 'date_created',
		search: '',
		parent: comment?.id,
		isList: false,
	})

	return (
		<>
			<Head title={`Disscuss `} />
			<Container className='my-5'>
				<CommentWidget
					title={comment?.title || ''}
					content={comment?.content || ''}
					score={comment?.user.score || 0}
					voteSum={comment?.votes_sum || 0}
					userName={concatUserName(comment?.user.first_name, comment?.user.last_name)}
					commentId={comment?.id}
					commentSlug={comment?.slug}
					loading={commentLoading || commentError}
					isMain
				/>
				<h2 className='font-bold text-2xl mb-8'>
					{t('reply')} ({replies?.count ? replies.count : 0})
				</h2>
				{
					replies?.results.map(item => {
						return (
							<CommentWidget
								key={item.id}
								content={item?.content || ''}
								score={item?.user.score || 0}
								voteSum={item?.votes_sum || 0}
								userName={concatUserName(item?.user.first_name, item?.user.last_name)}
								commentId={item?.id}
								commentSlug={item?.slug}
								loading={repliesLoading || repliesError}
							/>
						)
					})
				}
				{
					authData?.user?.id !== comment?.user?.id ?
						<div className="pb-3">
							<Reply
								commentId={comment?.id as number}
							/>
						</div>
						:
						null
				}

				{
					replies && replies.count / limit > 1 ?
						<Pagination
							pageCount={replies.count / limit}
							onPageChange={({ selected }) => setPage(selected)}
						/> : null
				}
			</Container>
		</>
	);
}
