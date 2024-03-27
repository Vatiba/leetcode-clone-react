import { useAuth } from 'entities/auth';
import { LoginForm, LoginSchema } from 'entities/login';
import { useLogin } from 'features/auth';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type SignInProps = {
	setLoginType: Function
}

const SignIn = (props: SignInProps) => {
	const {
		setLoginType
	} = props;
	const navigate = useNavigate();
	const { signin } = useAuth();
	const { t } = useTranslation();

	const {
		mutateAsync: login,
		isPending: loginPending
	} = useLogin();

	return (
		<Formik<LoginForm>
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={LoginSchema(t)}
			onSubmit={async (values, { setSubmitting, resetForm }) => {

				const res = await login({
					email: values.email,
					password: values.password,
				});
				signin(res);
				setSubmitting(false);
				resetForm();
				navigate('/');
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isSubmitting,
			}) => (
				<Form>
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">{t('email')}</span>
						</div>
						<label className="input input-bordered flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
							<input
								className="grow bg-transparent outline-none"
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</label>
						<div className="label">
							{
								errors.email && touched.email &&
								<span className="label-text-alt text-error">{errors.email}</span>
							}
						</div>
					</label>
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">{t('password')}</span>
						</div>
						<label className="input input-bordered flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
							<input
								className="grow bg-transparent outline-none"
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</label>
						<div className="label">
							{
								errors.password && touched.password &&
								<span className="label-text-alt text-error">{errors.password}</span>
							}
						</div>
					</label>
					<button
						className="btn btn-primary btn-block mt-6 text-white"
						type='submit'
						disabled={isSubmitting}
					>
						{t('signIn')}
					</button>
					<div className='flex justify-between'>
						<button
							className="btn btn-link disabled:bg-transparent p-0 first-letter:uppercase lowercase inline-block"
							onClick={() => setLoginType({ loginType: 'signUp' })}
							type='button'
						>
							{t('forgetPassword')}
						</button>
						<button
							className="btn btn-link disabled:bg-transparent capitalize p-0"
							onClick={() => setLoginType({ loginType: 'signUp' })}
							type='button'
							disabled={loginPending}
						>
							{t('registration')}
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default SignIn;