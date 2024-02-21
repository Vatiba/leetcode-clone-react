import { userStatus } from 'entities/constants';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

const LoginSchema = (t: TFunction) => Yup.object({
	email: Yup.string().required(t('requiredField')).email(t('correctEmail')),
	password: Yup.string().required(t('requiredField')).min(4, t('passwordMin'))
});

export default LoginSchema;