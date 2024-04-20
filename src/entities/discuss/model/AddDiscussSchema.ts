import { TFunction } from 'i18next';
import * as Yup from 'yup';

const AddDiscussSchema = (t: TFunction) => Yup.object({
   title: Yup.string().required(t('requiredField')),
   content: Yup.string().required(t('requiredField'))
});

export default AddDiscussSchema;