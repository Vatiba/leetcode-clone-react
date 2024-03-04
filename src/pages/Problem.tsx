import React from 'react'
import { useParams } from 'react-router-dom';
import { ProblemHead, ProblemLayouts } from 'widgets/problem';

function ProblemScreen() {
	const params = useParams();

	console.log(params['problemSlug']);

	return (
		<div className='px-3 bg-slate-100 h-screen'>
			<ProblemHead />
			<ProblemLayouts />
		</div>
	)
}

export default ProblemScreen;