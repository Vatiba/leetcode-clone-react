
import { AuthStatus } from 'entities/auth';
import { useTranslation } from 'react-i18next';
import { IoReload } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import LogoImg from 'shared/assets/img/logo.png';

type HeadProps = {
	handleSubmit: Function
	isLoadingSubmission: boolean
}

function Head(props: HeadProps) {
	const {
		handleSubmit,
		isLoadingSubmission
	} = props;
	const { t } = useTranslation();


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
					className='flex bg-gray-200 hover:bg-gray-300 h-8 w-32 justify-center items-center rounded-md font-bold text-green-500'
					onClick={(e) => {
						e.preventDefault();
						handleSubmit?.();
					}}
					type='button'
					disabled={isLoadingSubmission}
				>
					{
						!isLoadingSubmission ?
							<>
								<MdOutlineCloudUpload className='mr-2' />
								{t('submit')}
							</>
							:
							<IoReload className='animate-spin' size={20} />
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