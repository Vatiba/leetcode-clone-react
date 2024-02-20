import React from 'react';
import { LoginForm } from 'entities/login';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
   const { t } = useTranslation();

   return (
      <Formik<LoginForm>
         initialValues={{
            email: '',
            password: '',
         }}
         validationSchema={ValidationSchema(t)}
         onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, undefined, 2))
            // setTimeout(() => {
            // 	alert(JSON.stringify(values, null, 2));
            // 	setSubmitting(false);
            // }, 400);
         }}
      >
         {({ errors, touched }) => (
            <Form>
               <div className='shadow-md rounded-lg p-5 w-96'>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text">{t('firstName')}</span>
                     </div>
                     <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                     <div className="label">
                        {
                           errors.email && touched.email &&
                           <span className="label-text-alt text-error">{errors.email}</span>
                        }
                     </div>
                  </label>
                  <label className="form-control w-full max-w-xs">
                     <div className="label">
                        <span className="label-text">{t('lastName')}</span>
                     </div>
                     <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                     <div className="label">
                        {
                           errors.lastName && touched.lastName &&
                           <span className="label-text-alt text-error">{errors.lastName}</span>
                        }
                     </div>
                  </label>
                  <button className="btn btn-primary" type='submit'>
                     {t('signIn')}
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   )
}

export default SignIn;