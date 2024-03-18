import { userStatus } from 'entities/constants';
import { RegistrationForm, RegistrationSchema } from 'entities/login';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
// queries
import { useGetLocations } from 'entities/locations';
import { useGetSpecialSchools } from 'entities/specialSchools';
import { useGetUniversities } from 'entities/universities';

type SignUpProps = {
	setLoginType: Function
}

const SignUp = (props: SignUpProps) => {
	const {
		setLoginType
	} = props;
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useSearchParams('1');

	const {
		data: locations,
		// isLoading: locationsLoading,
		// isError: locationsError,
	} = useGetLocations();
	const {
		data: specialSchools,
		// isLoading: specialSchoolsLoading,
		// isError: specialSchoolsError
	} = useGetSpecialSchools();
	const {
		data: universities,
		// isLoading: universitiesLoading,
		// isError: universitiesError
	} = useGetUniversities();

	return (
		<Formik<RegistrationForm>
			initialValues={{
				first_name: '',
				last_name: '',
				email: '',
				phone: '',
				status: 'student',
				password: '',
				location: '',
			}}
			validationSchema={RegistrationSchema(t)}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					console.log(JSON.stringify(values, undefined, 2))
					setSubmitting(false);
				}, 400);
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
					{
						activeTab.get('step') === '1' || !activeTab.get('step') &&
						<>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">{t('email')}</span>
								</div>
								<label className="input input-sm input-bordered flex items-center gap-2">
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
								<label className="input input-sm input-bordered flex items-center gap-2">
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
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">{t('firstName')}</span>
								</div>
								<input
									className="input input-sm input-bordered w-full"
									type="text"
									name="firstName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.first_name}
								/>
								<div className="label">
									{
										errors.first_name && touched.first_name &&
										<span className="label-text-alt text-error">{errors.first_name}</span>
									}
								</div>
							</label>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">{t('lastName')}</span>
								</div>
								<input
									className="input input-sm input-bordered w-full"
									type="text"
									name="lastName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.last_name}
								/>
								<div className="label">
									{
										errors.last_name && touched.last_name &&
										<span className="label-text-alt text-error">{errors.last_name}</span>
									}
								</div>
							</label>
						</>
					}
					{
						activeTab.get('step') === '2' &&
						<>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">{t('location')}</span>
								</div>
								<select
									className="select select-bordered"
									name="location"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.location}
								>
									{
										locations?.map(location => {
											return (
												<option key={location.id} value={location.id}>
													{location.name}
												</option>
											)
										})
									}
								</select>
								<div className="label">
									{
										errors.location && touched.location &&
										<span className="label-text-alt text-error">{errors.location}</span>
									}
								</div>
							</label>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">{t('status')}</span>
								</div>
								<select
									className="select select-bordered capitalize"
									name="status"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.status}
								>
									{
										userStatus.map(item => (
											<option key={item} className='capitalize'>{item}</option>
										))
									}
								</select>
								<div className="label">
									{
										errors.status && touched.status &&
										<span className="label-text-alt text-error">{errors.status}</span>
									}
								</div>
							</label>
							{
								values.status === 'schooler' &&
								<>
									<label className="form-control w-full">
										<div className="label">
											<span className="label-text">{t('school')}</span>
										</div>
										<input type="number" className="input input-bordered w-full" />
										<div className="label">
											{
												errors.school_number && touched.school_number &&
												<span className="label-text-alt text-error">{errors.school_number}</span>
											}
										</div>
									</label>

									<label className="form-control w-full">
										<div className="label">
											<span className="label-text">{t('selectSchool')}</span>
										</div>
										<select
											className="select select-bordered capitalize"
											name="special_school"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.special_school}
										>
											{
												specialSchools?.map(specialSchool => (
													<option key={specialSchool.id} value={specialSchool.id} className='capitalize'>
														{specialSchool.name}
													</option>
												))
											}
										</select>
										<div className="label">
											{
												errors.special_school && touched.special_school &&
												<span className="label-text-alt text-error">{errors.special_school}</span>
											}
										</div>
									</label>
								</>
							}
							{
								values.status === 'student' &&
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">{t('university')}</span>
									</div>
									<select
										className="select select-bordered"
										name="university"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.university}
									>
										{
											universities?.map(university => {
												return (
													<option key={university.id} value={university.id}>
														{university.name}
													</option>
												)
											})
										}
									</select>
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
								<label className="form-control w-full">
									<div className="label">
										<span className="label-text">{t('worker')}</span>
									</div>
									<input type="text" className="input input-sm input-bordered w-full" />
									<div className="label">
										{
											errors.company_name && touched.company_name &&
											<span className="label-text-alt text-error">{errors.company_name}</span>
										}
									</div>
								</label>
							}
							<button className="btn btn-primary btn-block mb-3 capitalize text-white" type='submit'>
								{t('signUp')}
							</button>
						</>
					}
					<div className='flex justify-end'>
						<button
							className="btn btn-link lowercase"
							onClick={() => setLoginType({ loginType: 'signIn' })}
							type='button'
						>
							{t('doYouHaveAccount')}
						</button>
					</div>
					{
						activeTab.get('step') === '1' || !activeTab.get('step') &&
						<div className='flex justify-end'>
							<button
								className="btn btn-primary capitalize text-white"
								type='submit'
								onClick={() => setActiveTab({ step: '2' })}
								disabled={isSubmitting}
							>
								{t('next')}
							</button>
						</div>
					}
				</Form>
			)}
		</Formik>
	)
}

export default SignUp;