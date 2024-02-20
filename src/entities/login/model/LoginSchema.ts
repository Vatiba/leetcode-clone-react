import { userStatus } from 'entities/constants';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

const RegistrationSchema = (t: TFunction) => Yup.object({
	email: Yup.string().email(),
});

export default RegistrationSchema;