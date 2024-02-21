import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useSearchParams } from 'react-router-dom';

const Login = () => {
	const { t } = useTranslation();

	const [activeTab, setActiveTab] = useSearchParams('login');

	return (
		<div className='flex flex-col'>

			<div className='shadow-md rounded-lg p-5 w-96'>
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