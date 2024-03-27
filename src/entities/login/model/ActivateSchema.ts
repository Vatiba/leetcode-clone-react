import { TFunction } from 'i18next';
import * as Yup from 'yup';

const ActivateSchema = (t: TFunction) => Yup.object({
   code: Yup.string().required(t('requiredField')).min(6, t('codeMin'))
});

export default ActivateSchema;