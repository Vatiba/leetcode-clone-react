import { ProblemSubmissionCheckResponseDto } from 'entities/problems'
import Code from '../Code'
import Description from '../Description'
import TestCases from '../TestCases'

type LayoutProps = {
	onCodeChange: (code: string) => void
	onLangChange: (lang: number) => void
	checkResponse?: ProblemSubmissionCheckResponseDto
	onBackClick: Function
}

function Layout(props: LayoutProps) {
	const {
		onCodeChange,
		onLangChange,
		checkResponse,
		onBackClick
	} = props;
	return (
		<div className='flex h-[94%] -mx-1'>
			<div className='w-1/2 h-full pb-3 px-1' style={{ minWidth: '500px' }}>
				<Description
					checkResponse={checkResponse}
					onBackClick={onBackClick}
				/>
			</div>
			<div className='w-1/2 flex flex-col pb-3 px-1 gap-2' style={{ minWidth: '500px' }}>
				<div className='h-2/3'>
					<Code
						onCodeChange={onCodeChange}
						onLangChange={onLangChange}
					/>
				</div>
				<div className='h-1/3'>
					<TestCases />
				</div>
			</div>
		</div>
	)
}

export default Layout