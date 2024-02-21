import { useTranslation } from 'react-i18next';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useSearchParams } from 'react-router-dom';
import logo from 'shared/assets/img/logo.png';

const Login = () => {
	const { t } = useTranslation();

	const [activeTab, setActiveTab] = useSearchParams('login');

	return (
		<div className='flex flex-col'>

			<div className='shadow-md rounded-lg p-5 w-96'>
				<div className='flex flex-col justify-center items-center'>
					<img src={logo} width={50} />
					<span className='mt-2 font-bold text-lg'>Oguzcode</span>
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