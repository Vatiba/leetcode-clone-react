
import { AuthStatus } from 'entities/auth';
import { MdOutlineCloudUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import LogoImg from 'shared/assets/img/logo.png';

type HeadProps = {
	handleSumbit: Function
	isLoadingSubmission: boolean
}

function Head(props: HeadProps) {
	const {
		handleSumbit,
		isLoadingSubmission
	} = props;


	return (
		<div className='flex items-center justify-between h-[6%]' style={{ minWidth: '1000px' }}>
			<Link to="/">
				<img src={LogoImg} alt="Logo" width={30} height={30} />
			</Link>
			<div className='flex'>
				{/* <button className='flex bg-gray-200 hover:bg-gray-300 p-1 px-4 items-center rounded-l-md font-bold'>
					<FaPlay className='mr-2 text-sm' />
					Run
				</button> */}
				<button
					className='flex bg-gray-200 hover:bg-gray-300 p-1 px-4 items-center rounded-md font-bold text-green-500'
					onClick={() => handleSumbit()}
					disabled={isLoadingSubmission}
				>
					{
						!isLoadingSubmission ?
							<>
								<MdOutlineCloudUpload className='mr-2' />
								Submit
							</>
							:
							null
					}
				</button>
			</div>
			<div className='flex items-center'>
				{/* <div className='ml-3 flex items-center scale-75'>
					<ThemeBtn />
				</div> */}
				<AuthStatus />
			</div>
		</div>
	)
}

export default Head