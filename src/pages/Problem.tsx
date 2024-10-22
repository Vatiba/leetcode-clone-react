import { useAuth } from 'entities/auth';
import { ProblemSubmissionCheckResponseDto } from 'entities/problems';
import { useCheckSubmit, useSubmit } from 'features/problem';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProblemHead, ProblemLayouts } from 'widgets/problem';

function ProblemScreen() {
	const params = useParams();
	const navigate = useNavigate();
	const { data: authData, } = useAuth();
	const [submissionId, setSubmissionId] = useState('');
	const [isSubmissionLoading, setIsSubmissionLoading] = useState(false);
	const [checkResponse, setCheckResponse] = useState<ProblemSubmissionCheckResponseDto>();

	const [code, setCode] = useState('');
	const [lang, setLang] = useState<number>(71);

	const {
		mutate: submit,
	} = useSubmit();
	const {
		mutate: checkSubmission
	} = useCheckSubmit();

	const handleSubmit = () => {
		if (authData?.user) {
			if (lang) {
				submit({
					code: code,
					lang: lang,
					slug: params.problemSlug as string
				}, {
					onSuccess: (data) => {
						setSubmissionId(data.id);
						setIsSubmissionLoading(true);
					}
				});
			}
		}
		else {
			navigate('/login?loginType=signIn');
		}
	}

	const stopChecking = (id: number, data: ProblemSubmissionCheckResponseDto) => {
		setSubmissionId('');
		setIsSubmissionLoading(false);
		setCheckResponse(data);
		clearInterval(id);
	}

	useEffect(() => {
		let id = 0;
		if (submissionId) {
			id = setInterval(() => {
				checkSubmission(submissionId, {
					onSuccess: (data) => {
						switch (data.status) {
							case 0:
								'Pending';
								break;
							case 1:
								'Processing';
								break;
							case 2:
								'Accepted';
								stopChecking(id, data);
								break;
							case 3:
								'Wrong answer';
								stopChecking(id, data);
								break;
							case 4:
								'Time limit exceeded';
								stopChecking(id, data);
								break;
							case 5:
								'Compilation error';
								stopChecking(id, data);
								break;
							case 6:
								'Runtime error';
								stopChecking(id, data);
								break;
							case 7:
								'Internal error';
								stopChecking(id, data);
								break;
							case 8:
								'Exec format error';
								stopChecking(id, data);
								break;
							default:
								break;
						}
					}
				})
			}, 5000)
		}
		return () => clearInterval(id)
	}, [submissionId]);

	return (
		<div className="px-3 bg-slate-100 h-screen overflow-x-auto">
			<ProblemHead
				handleSubmit={handleSubmit}
				isLoadingSubmission={isSubmissionLoading}
			/>
			<ProblemLayouts
				onCodeChange={(code) => setCode(code)}
				onLangChange={(lang) => setLang(lang)}
				checkResponse={checkResponse}
				onBackClick={() => setCheckResponse(undefined)}
			/>
		</div>
	)
}

export default ProblemScreen;