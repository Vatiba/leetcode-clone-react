import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import logo from 'shared/assets/img/logo.png';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Login = () => {
	const { t } = useTranslation();

	const [activeTab, setActiveTab] = useSearchParams('login');

	return (
		<div className='flex flex-col'>

			<div className='shadow-sm rounded-lg p-5 w-96 bg-white'>
				<div className='flex flex-col justify-center items-center'>
					<img src={logo} width={50} />
					<span className='mt-2 font-bold text-lg'>Prokod</span>
				</div>
				{
					activeTab.get('loginType') === 'signUp' || !activeTab.get('loginType') ?
						<SignUp setLoginType={setActiveTab} />
						:
						<SignIn setLoginType={setActiveTab} />
				}
			</div>
		</div>
	)
}

export default Login;