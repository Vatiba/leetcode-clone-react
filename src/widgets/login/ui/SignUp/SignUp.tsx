import React from 'react';
import { RegistrationForm, RegistrationSchema } from 'entities/login';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
	const { t } = useTranslation();

	return (
		<Formik<RegistrationForm>
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				location: '',
				status: '',
				password: '',
			}}
			validationSchema={RegistrationSchema(t)}
			onSubmit={(values, { setSubmitting }) => {
				console.log(JSON.stringify(values, undefined, 2))
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// }, 400);
			}}
		>
			{({ errors, touched, values }) => (
				<Form>
					<div className='shadow-md rounded-lg p-5 w-96'>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">{t('firstName')}</span>
							</div>
							<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
							<div className="label">
								{
									errors.firstName && touched.firstName &&
									<span className="label-text-alt text-error">{errors.firstName}</span>
								}
							</div>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">{t('lastName')}</span>
							</div>
							<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
							<div className="label">
								{
									errors.lastName && touched.lastName &&
									<span className="label-text-alt text-error">{errors.lastName}</span>
								}
							</div>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">{t('location')}</span>
							</div>
							<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
							<div className="label">
								{
									errors.location && touched.location &&
									<span className="label-text-alt text-error">{errors.location}</span>
								}
							</div>
						</label>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">{t('status')}</span>
							</div>
							<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
							<div className="label">
								{
									errors.status && touched.status &&
									<span className="label-text-alt text-error">{errors.status}</span>
								}
							</div>
						</label>
						{
							values.status === 'schooler' &&
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">{t('school')}</span>
								</div>
								<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
								<div className="label">
									{
										errors.school && touched.school &&
										<span className="label-text-alt text-error">{errors.school}</span>
									}
								</div>
							</label>
						}
						{
							values.status === 'student' &&
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">{t('university')}</span>
								</div>
								<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
								<div className="label">
									{
										errors.university && touched.university &&
										<span className="label-text-alt text-error">{errors.university}</span>
									}
								</div>
							</label>
						}
						{
							values.status === 'worker' &&
							<label className="form-control w-full max-w-xs">
								<div className="label">
									<span className="label-text">{t('worker')}</span>
								</div>
								<input type="text" className="input input-sm input-bordered w-full max-w-xs" />
								<div className="label">
									{
										errors.worker && touched.worker &&
										<span className="label-text-alt text-error">{errors.worker}</span>
									}
								</div>
							</label>
						}
						<button className="btn btn-primary" type='submit'>
							{t('signUp')}
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default SignUp;