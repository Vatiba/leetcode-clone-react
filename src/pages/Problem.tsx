import { useCheckSubmit, useSubmit } from 'features/problem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProblemHead, ProblemLayouts } from 'widgets/problem';

function ProblemScreen() {
	const params = useParams();
	const [submissionId, setSubmissionId] = useState('');
	const [isSubmissionLoading, setIsSubmissionLoading] = useState(false);

	const [code, setCode] = useState('');
	const [lang, setLang] = useState<number>(63);

	const {
		mutate: submit,
	} = useSubmit();
	const {
		mutate: checkSubmittion
	} = useCheckSubmit();

	const handleSumbit = () => {
		if (lang) {
			submit({
				code: code,
				lang: lang,
				slug: params['problemSlug'] as string
			}, {
				onSuccess: (data) => {
					setSubmissionId(data.id);
					setIsSubmissionLoading(true)
				}
			});
		}
	}

	useEffect(() => {
		let id = 0;
		if (submissionId) {
			setInterval(() => {
				checkSubmittion(submissionId, {
					onSuccess: (data) => {
						console.log(data);
					}
				})
			}, 500)
		}
		return () => clearInterval(id)
	}, [submissionId])

	return (
		<div className='px-3 bg-slate-100 h-screen overflow-x-auto'>
			<ProblemHead
				handleSumbit={handleSumbit}
				isLoadingSubmission={isSubmissionLoading}
			/>
			<ProblemLayouts
				onCodeChange={(code) => setCode(code)}
				onLangChange={(lang) => setLang(lang)}
			/>
		</div>
	)
}

export default ProblemScreen;