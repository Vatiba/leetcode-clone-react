import { useGetLocations } from 'entities/locations';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';

function EditProfile() {

    const { t } = useTranslation();

    const {
        data: locations,
    } = useGetLocations();

    return (
        <Formik
            enableReinitialize
            initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                status: '',
                password: '',
                passwordConfirm: '',
                location: '',
                university: '',
                company_name: '',
                school_number: '',
                special_school: '',
            }}
            onSubmit={() => { }}
        // validationSchema={RegistrationSchema(t)}
        // onSubmit={async (values, { setSubmitting, setFieldValue, resetForm }) => {
        //     if (values.status === 'schooler' && !values.special_school && !values.school_number) {
        //         toast.error(t('writeSchoolNumberOrSelectSpecialSchool'));
        //         setSubmitting(false);
        //         return;
        //     }

        //     await register({
        //         phone: values.phone,
        //         email: values.email,
        //         first_name: values.first_name,
        //         last_name: values.last_name,
        //         location: values.location as number,
        //         password: values.password,
        //         company_name: values.status === 'worker' ? values.company_name : undefined,
        //         school_number: values.status === 'schooler' && values.school_number ? values.school_number : undefined,
        //         special_school: values.status === 'schooler' && values.special_school ? values.special_school : undefined,
        //         university: values.status === 'student' ? values.university as number : undefined
        //     }, {
        //         onSuccess() {
        //             setActiveTab({ step: '3' });
        //             setEmailForActivation(values.email);
        //             resetForm();
        //         },
        //         onError(err: any) {
        //             if (err?.password)
        //                 setFieldValue('password', '');
        //             if (err?.email)
        //                 setFieldValue('email', '');

        //             if (err?.password || err?.email) {
        //                 err.email?.map((item: string) => {
        //                     toast.error(item)
        //                 });
        //                 err.password?.map((item: string) => {
        //                     toast.error(item)
        //                 });
        //                 setActiveTab({ step: '1' });
        //                 setSubmitting(false);
        //             }
        //         }
        //     })
        //     setSubmitting(false);
        // }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty
            }) => {
                return (
                    <Form className='w-full md:w-2/3'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('writePhone')}</span>
                            </div>
                            <label className="input input-sm input-bordered flex items-center gap-2">
                                <FaPhone color='gray' />
                                <input
                                    className="grow bg-transparent outline-none"
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    placeholder='+99361123456'
                                />
                            </label>
                            <div className="label">
                                {
                                    errors.phone && touched.phone &&
                                    <span className="label-text-alt text-error">{errors.email}</span>
                                }
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('email')}</span>
                            </div>
                            <label className="input input-sm input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input
                                    className="grow bg-transparent outline-none"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </label>
                            <div className="label">
                                {
                                    errors.email && touched.email &&
                                    <span className="label-text-alt text-error">{errors.email}</span>
                                }
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('password')}</span>
                            </div>
                            <label className="input input-sm input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input
                                    className="grow bg-transparent outline-none"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </label>
                            <div className="label">
                                {
                                    errors.password && touched.password &&
                                    <span className="label-text-alt text-error">{errors.password}</span>
                                }
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('confirmPassword')}</span>
                            </div>
                            <label className="input input-sm input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input
                                    className="grow bg-transparent outline-none"
                                    type="password"
                                    name="passwordConfirm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                />
                            </label>
                            <div className="label">
                                {
                                    errors.passwordConfirm && touched.passwordConfirm &&
                                    <span className="label-text-alt text-error">{errors.passwordConfirm}</span>
                                }
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('firstName')}</span>
                            </div>
                            <input
                                className="input input-sm input-bordered w-full"
                                type="text"
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                            />
                            <div className="label">
                                {
                                    errors.first_name && touched.first_name &&
                                    <span className="label-text-alt text-error">{errors.first_name}</span>
                                }
                            </div>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{t('lastName')}</span>
                            </div>
                            <input
                                className="input input-sm input-bordered w-full"
                                type="text"
                                name="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                            <div className="label">
                                {
                                    errors.last_name && touched.last_name &&
                                    <span className="label-text-alt text-error">{errors.last_name}</span>
                                }
                            </div>
                        </label>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default EditProfile