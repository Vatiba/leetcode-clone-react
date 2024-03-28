import { TFunction } from 'i18next';
import * as Yup from 'yup';

const LoginSchema = (t: TFunction) => Yup.object({
	email: Yup.string().required(t('requiredField')).email(t('correctEmail')),
	password: Yup.string().required(t('requiredField')).min(4, t('passwordMin', { val: 4 }))
});

export default LoginSchema;