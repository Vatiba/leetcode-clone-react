import { userStatus } from 'entities/constants';
import { useGetLocations } from 'entities/locations';
import { useGetSpecialSchools } from 'entities/specialSchools';
import { useGetUniversities } from 'entities/universities';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';

function EditProfile() {

    const { t } = useTranslation();

    const {
        data: locations,
    } = useGetLocations();
    const {
        data: specialSchools,
    } = useGetSpecialSchools();
    const {
        data: universities,
    } = useGetUniversities();

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
                    <Form>
                        <div className='w-full md:w-2/3'>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">{t('phoneNumber')}</span>
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
                                        <span className="label-text-alt text-error">{errors.phone}</span>
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
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">{t('location')}</span>
                                </div>
                                <select
                                    className="select select-sm select-bordered"
                                    name="location"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                >
                                    <option value={''} disabled>
                                        {t('selectLocation')}
                                    </option>
                                    {
                                        locations?.map(location => {
                                            return (
                                                <option key={location.id} value={location.id}>
                                                    {location.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                {
                                    locations?.find(location => location.id == +values.location) ?
                                        <select
                                            className="mt-3 select select-sm select-bordered"
                                            name="location"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                        >
                                            <option value={''} disabled>
                                                {t('selectLocation')}
                                            </option>
                                            {
                                                locations?.find(location => location.id == +values.location)?.children?.map(location => {
                                                    return (
                                                        <option key={location.id} value={location.id}>
                                                            {location.name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select> : null
                                }
                                <div className="label">
                                    {
                                        errors.location && touched.location &&
                                        <span className="label-text-alt text-error">{errors.location}</span>
                                    }
                                </div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">{t('status')}</span>
                                </div>
                                <select
                                    className="select select-sm select-bordered capitalize"
                                    name="status"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.status}
                                >
                                    <option value={''} disabled>
                                        {t('selectStatus')}
                                    </option>
                                    {
                                        userStatus.map(item => (
                                            <option key={item} className='capitalize'>{item}</option>
                                        ))
                                    }
                                </select>
                                <div className="label">
                                    {
                                        errors.status && touched.status &&
                                        <span className="label-text-alt text-error">{errors.status}</span>
                                    }
                                </div>
                            </label>
                            {
                                values.status === 'schooler' &&
                                <>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">{t('selectSchool')}</span>
                                        </div>
                                        <input
                                            className="input input-sm input-bordered w-full"
                                            type="number"
                                            name="school_number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.school_number}
                                        />
                                        <div className="label">
                                            {
                                                errors.school_number && touched.school_number &&
                                                <span className="label-text-alt text-error">{errors.school_number}</span>
                                            }
                                        </div>
                                    </label>

                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">{t('selectSpecialSchool')}</span>
                                        </div>
                                        <select
                                            className="select select-sm select-bordered capitalize"
                                            name="special_school"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.special_school}
                                        >
                                            <option value={''} disabled>
                                                {t('selectSpecialSchool')}
                                            </option>
                                            {
                                                specialSchools?.map(specialSchool => (
                                                    <option key={specialSchool.id} value={specialSchool.id} className='capitalize'>
                                                        {specialSchool.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <div className="label">
                                            {
                                                errors.special_school && touched.special_school &&
                                                <span className="label-text-alt text-error">{errors.special_school}</span>
                                            }
                                        </div>
                                    </label>
                                </>
                            }
                            {
                                values.status === 'student' &&
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">{t('university')}</span>
                                    </div>
                                    <select
                                        className="select select-sm select-bordered"
                                        name="university"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.university}
                                    >
                                        <option value={''} disabled>
                                            {t('selectUniversity')}
                                        </option>
                                        {
                                            universities?.map(university => {
                                                return (
                                                    <option key={university.id} value={university.id}>
                                                        {university.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div className="label">
                                        {
                                            errors.university && touched.university &&
                                            <span className="label-text-alt text-error">{errors.university}</span>
                                        }
                                    </div>
                                </label>
                            }
                            {
                                values.status === 'worker' &&
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">{t('worker')}</span>
                                    </div>
                                    <textarea rows={4} maxLength={200} className="input input-bordered w-full leading-tight" />
                                    <div className="label">
                                        {
                                            errors.company_name && touched.company_name &&
                                            <span className="label-text-alt text-error">{errors.company_name}</span>
                                        }
                                    </div>
                                </label>
                            }
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="flex justify-center py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md text-white font-bold"
                            >
                                {t('save')}
                            </button>
                        </div>
                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default EditProfile