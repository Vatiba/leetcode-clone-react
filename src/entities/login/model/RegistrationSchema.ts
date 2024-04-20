import { userStatus } from 'entities/constants';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

const RegistrationSchema = (t: TFunction) => Yup.object().shape(
	{
		first_name: Yup.string().required(t('requiredField')),
		last_name: Yup.string().required(t('requiredField')),
		email: Yup.string().required(t('requiredField')).email(t('correctEmail')),
		phone: Yup.string().required(t('requiredField')),
		password: Yup.string().required(t('requiredField')).min(4, t('passwordMin', { val: 4 })),
		passwordConfirm: Yup.string()
			.oneOf([Yup.ref('password'), ''], t('passwordMustMatch') as string)
			.required(t('requiredField') as string),
		location: Yup.string().required(t('requiredField')),
		status: Yup.string().oneOf(userStatus).required(t('requiredField')),
		school_number: Yup.string(),
		special_school: Yup.string(),
		company_name: Yup.string().when('status', {
			is: (status: any) => status === 'worker',
			then: () => Yup.string().required(t('requiredField')),
		}),
		university: Yup.string().when('status', {
			is: (status: any) => status === 'student',
			then: () => Yup.string().required(t('requiredField')),
		}),
	},
	[
		['special_school', 'status'],
		['school_number', 'status'],
	]
);

export default RegistrationSchema;