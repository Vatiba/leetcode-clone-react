import Head from 'entities/Head';
import { Reply } from 'features/discuss';
import { useTranslation } from 'react-i18next';
import { Container } from 'shared/ui';
import { CommentWidget } from 'widgets/discuss';

export default function DiscussScreen() {
	const { t } = useTranslation();

	return (
		<>
			<Head title={`Disscuss `} />
			<Container className='my-5'>
				<CommentWidget isMain title={"This title of discussion/question"} />
				<CommentWidget />
				<CommentWidget />
				<CommentWidget />
				<div className="pb-3">
					<Reply />
				</div>
			</Container>
		</>
	);
}
