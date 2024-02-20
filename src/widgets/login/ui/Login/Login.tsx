import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Login = () => {
	const { t } = useTranslation();

	const [activeTab, setActiveTab] = useState<'signIn' | 'signUp'>('signIn');

	return (
		<div className='flex flex-col'>
			<div role="tablist" className="tabs tabs-lifted">
				<a
					role="tab"
					className={clsx("tab", activeTab === 'signIn' && 'tab-active')}
					onClick={() => setActiveTab('signIn')}
				>
					{t('signIn')}
				</a>
				<a
					role="tab"
					className={clsx("tab", activeTab === 'signUp' && 'tab-active')}
					onClick={() => setActiveTab('signUp')}
				>
					{t('signUp')}
				</a>
			</div>
			{
				activeTab === 'signIn' ?
					<SignIn />
					:
					<SignUp />
			}
		</div>
	)
}

export default Login;