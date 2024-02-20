import { userStatus } from 'entities/constants';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

const RegistrationSchema = (t: TFunction) => Yup.object({
	firstName: Yup.string().required(t('requiredField')),
	lastName: Yup.string().required(t('requiredField')),
	email: Yup.string().email(),
	phoneNumber: Yup.number(),
	location: Yup.string().required(t('requiredField')),
	status: Yup.string().oneOf(userStatus).nullable(),
	school: Yup.string().when('status', {
		is: (status: any) => status === 'schooler',
		then: () => Yup.string().required(t('requiredField')),
	}),
	university: Yup.string().when('status', {
		is: (status: any) => status === 'student',
		then: () => Yup.string().required(t('requiredField')),
	}),
	worker: Yup.string().when('status', {
		is: (status: any) => status === 'worker',
		then: () => Yup.string().required(t('requiredField')),
	}),
});

export default RegistrationSchema;