import { useAuth } from "entities/auth";
import { ActivateForm, ActivateSchema } from "entities/login";
import { useActivateAccount } from "features/auth";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type AccountActivateProps = {
	email: string
}

function AccountActivate(props: AccountActivateProps) {
	const {
		email
	} = props;
	const navigate = useNavigate();
	const { signin } = useAuth();
	const { t } = useTranslation();

	const {
		mutateAsync: activateAccount
	} = useActivateAccount();

	return (
		<Formik<ActivateForm>
			enableReinitialize
			initialValues={{
				code: '',
			}}
			validationSchema={ActivateSchema(t)}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				await activateAccount({
					code: values.code as number,
					email: email
				}, {
					onSuccess: (data) => {
						signin(data);
						resetForm();
						navigate('/');
					},
					onError: () => {
						toast.error(t('somethingWentWrong'));
					}
				});
				setSubmitting(false);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isSubmitting,
			}) => {
				return (
					<Form>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">{t('enterCode')}</span>
							</div>
							<input
								className="input input-bordered w-full"
								type="number"
								name="code"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.code}
							/>
							<div className="label">
								{
									errors.code && touched.code &&
									<span className="label-text-alt text-error">{errors.code}</span>
								}
							</div>
						</label>
						<button
							className="mt-3 btn btn-primary w-full capitalize"
							type='submit'
							disabled={isSubmitting}
						>
							{t('send')}
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default AccountActivate