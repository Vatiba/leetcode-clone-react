import { TFunction } from 'i18next';
import * as Yup from 'yup';

const EditProfileSchema = (t: TFunction) => Yup.object().shape(
   {
      first_name: Yup.string(),
      last_name: Yup.string(),
      phone: Yup.string(),
      password: Yup.string().min(4, t('passwordMin', { val: 4 })),
      passwordConfirm: Yup.string()
         .oneOf([Yup.ref('password'), ''], t('passwordMustMatch') as string),
      location: Yup.string(),
      school_number: Yup.string(),
      special_school: Yup.string(),
      company_name: Yup.string().when('status', {
         is: (status: any) => status === 'worker',
         then: () => Yup.string(),
      }),
      university: Yup.string().when('status', {
         is: (status: any) => status === 'student',
         then: () => Yup.string(),
      }),
   }
);

export default EditProfileSchema;