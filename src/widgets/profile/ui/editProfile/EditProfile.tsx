import { useAuth } from 'entities/auth';
import { storageKeys } from 'entities/constants';
import { useGetLocations } from 'entities/locations';
import { EditProfileSchema, useGetProfile } from 'entities/profile';
import { useGetSpecialSchools } from 'entities/specialSchools';
import { useGetUniversities } from 'entities/universities';
import { useUpdateProfile } from 'features/profile';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';
import { FaGithub, FaGitlab, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { LocalStorageWorker } from 'shared/libs';

const storageWorker = LocalStorageWorker.getInstance();

function EditProfile() {

    const params = useParams();
    const { t } = useTranslation();
    const [file, setFile] = useState<FileList>();
    const { data } = useAuth();


    const {
        data: locations,
    } = useGetLocations();
    const {
        data: specialSchools,
    } = useGetSpecialSchools();
    const {
        data: universities,
    } = useGetUniversities();
    const {
        data: profile,
        isLoading: profileLoading,
        isError: profileError
    } = useGetProfile(params['userId'] as string);

    const {
        mutate: updateProfile,
    } = useUpdateProfile();

    return (
        <Formik
            enableReinitialize
            initialValues={{
                avatar: [],
                first_name: profile?.first_name || '',
                last_name: profile?.last_name || '',
                phone: profile?.phone || '',
                password: ' ',
                passwordConfirm: ' ',
                location: profile?.location.id || '',
                university: profile?.university?.id || '',
                company_name: profile?.company_name || '',
                school_number: profile?.school_number || '',
                special_school: profile?.special_school?.name || '',
                link_github: profile?.link_github || '',
                link_gitlab: profile?.link_gitlab || '',
                link_stackoverflow: profile?.link_stackoverflow || '',
                link_linkedin: profile?.link_linkedin || ''
            }}
            validationSchema={EditProfileSchema(t)}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                updateProfile({
                    userId: 'me',
                    avatar: file?.[0],
                    first_name: values.first_name,
                    last_name: values.last_name,
                    location: values.location,
                    password: values.password,
                    phone: values.phone,
                    school_number: values.school_number,
                    special_school: values.special_school,
                    university: values.university,
                    company_name: values.company_name,
                    link_github: values.link_github,
                    link_gitlab: values.link_gitlab,
                    link_linkedin: values.link_linkedin,
                    link_stackoverflow: values.link_stackoverflow,
                }, {
                    onSuccess: () => {
                        storageWorker.setItem(storageKeys.user, {
                            ...data?.user,

                        });
                        toast.success(t('success'));
                    },
                    onError: (err: any) => {
                        try {
                            if (Object.entries(err)) {
                                Object.keys(err).map(key => {
                                    err?.[key]?.map((item: string) => {
                                        toast.error(`${key}: ${item}`)
                                    });
                                })
                                setSubmitting(false);
                            }
                        } catch (err) { }
                    }
                });
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
                setFieldValue
            }) => {
                return (
                    <Form>

                        <div
                            className="flex flex-wrap items-start sm:flex-nowrap gap-3"
                        >
                            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white py-3 px-3 rounded-md">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Github</span>
                                    </div>
                                    <label className="input input-sm input-bordered flex items-center gap-2">
                                        <FaGithub color='gray' />
                                        <input
                                            className="grow bg-transparent outline-none"
                                            type="text"
                                            name="link_github"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.link_github}
                                            placeholder='https://...'
                                        />
                                        <div className="label">
                                            {
                                                errors.link_github && touched.link_github &&
                                                <span className="label-text-alt text-error">{errors.link_github}</span>
                                            }
                                        </div>
                                    </label>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Gitlab</span>
                                    </div>
                                    <label className="input input-sm input-bordered flex items-center gap-2">
                                        <FaGitlab color='gray' />
                                        <input
                                            className="grow bg-transparent outline-none"
                                            type="text"
                                            name="link_gitlab"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.link_gitlab}
                                            placeholder='https://...'
                                        />
                                        <div className="label">
                                            {
                                                errors.link_gitlab && touched.link_gitlab &&
                                                <span className="label-text-alt text-error">{errors.link_gitlab}</span>
                                            }
                                        </div>
                                    </label>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Stackoverflow</span>
                                    </div>
                                    <label className="input input-sm input-bordered flex items-center gap-2">
                                        <FaStackOverflow color='gray' />
                                        <input
                                            className="grow bg-transparent outline-none"
                                            type="text"
                                            name="link_stackoverflow"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.link_stackoverflow}
                                            placeholder='https://...'
                                        />
                                        <div className="label">
                                            {
                                                errors.link_stackoverflow && touched.link_stackoverflow &&
                                                <span className="label-text-alt text-error">{errors.link_stackoverflow}</span>
                                            }
                                        </div>
                                    </label>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">LinkedIn</span>
                                    </div>
                                    <label className="input input-sm input-bordered flex items-center gap-2">
                                        <FaLinkedin color='gray' />
                                        <input
                                            className="grow bg-transparent outline-none"
                                            type="text"
                                            name="link_linkedin"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.link_linkedin}
                                            placeholder='https://...'
                                        />
                                        <div className="label">
                                            {
                                                errors.link_linkedin && touched.link_linkedin &&
                                                <span className="label-text-alt text-error">{errors.link_linkedin}</span>
                                            }
                                        </div>
                                    </label>
                                </label>
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2 md:w-2/3 lg:w-3/4 gap-2">

                                <div className="flex flex-col bg-white w-full py-4 px-3 rounded-md mb-3">
                                    <div className='w-full md:w-2/3'>
                                        <div className="label">
                                            <span className="label-text">Avatar</span>
                                        </div>
                                        <input
                                            className="p-0"
                                            type="file"
                                            name="avatar"
                                            onChange={(e) => {
                                                handleChange(e);
                                                if (e.target.files)
                                                    setFile(e.target.files);
                                            }}
                                            onBlur={handleBlur}
                                            value={values.avatar}
                                        />
                                        <div className="label">
                                            {
                                                errors.avatar && touched.avatar &&
                                                <span className="label-text-alt text-error">{errors.avatar}</span>
                                            }
                                        </div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">{t('email')}</span>
                                            </div>
                                            <label className="input input-sm input-bordered flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                                <input
                                                    className="grow bg-transparent outline-none"
                                                    disabled={true}
                                                    value={profile?.email}
                                                />
                                            </label>
                                            <div className="label">
                                            </div>
                                        </label>
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
                                    </div>
                                </div>
                                <div className="flex flex-col bg-white w-full py-4 px-3 rounded-md mb-3">
                                    <div className='w-full md:w-2/3'>
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
                                                <span className="label-text">{t('specialSchool')}</span>
                                            </div>
                                            <select
                                                className="select select-sm select-bordered"
                                                name="special_school"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.special_school}
                                            >
                                                <option value={''} disabled>
                                                    {t('specialSchool')}
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
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">{t('school')}</span>
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
                                    </div>
                                </div>
                                <div className="flex flex-col bg-white w-full py-4 px-3 rounded-md">
                                    <div className='w-full md:w-2/3'>
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
                                                    value={values.password.trim()}
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
                                                    value={values.passwordConfirm.trim()}
                                                />
                                            </label>
                                            <div className="label">
                                                {
                                                    errors.passwordConfirm && touched.passwordConfirm &&
                                                    <span className="label-text-alt text-error">{errors.passwordConfirm}</span>
                                                }
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="flex justify-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-bold"
                                        disabled={isSubmitting}
                                    >
                                        {t('save')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default EditProfile