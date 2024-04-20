import { AddDiscussForm, AddDiscussSchema } from "entities/discuss";
import { useCreateDiscuss } from "features/discuss";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container } from "shared";
import { TextEditor } from "shared/ui";

function AddDiscuss() {
   const { t } = useTranslation();
   const navigate = useNavigate();

   const {
      mutate: createDiscuss,
   } = useCreateDiscuss();

   return (
      <Container>

         <Formik<AddDiscussForm>
            initialValues={{
               title: '',
               content: ''
            }}
            validationSchema={AddDiscussSchema(t)}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
               createDiscuss(values, {
                  onSuccess: (res) => {
                     resetForm();
                     navigate(`/discuss/${res.slug}`);
                     setSubmitting(false);
                  },
                  onError: (err: any) => {
                     try {
                        if (Object.entries(err)) {
                           Object.keys(err).map(key => {
                              err?.[key]?.map((item: string) => {
                                 toast.error(item)
                              });
                           })
                           setSubmitting(false);
                        }
                     } catch (err) {

                     }
                  },
               })
            }}

         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               setFieldValue,
               setFieldTouched,
               isSubmitting,
            }) => (
               <Form
                  className="mt-5 flex flex-col gap-2"
               >
                  <label className="form-control w-full">
                     <div className="label">
                        <span className="label-text">{t('title')}</span>
                     </div>
                     <input
                        className="input input-sm input-bordered w-full"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                     />
                     <div className="label">
                        {
                           errors.title && touched.title &&
                           <span className="label-text-alt text-error">{errors.title}</span>
                        }
                     </div>
                  </label>
                  <label className="form-control w-full">
                     <div className="label">
                        <span className="label-text">{t('text')}</span>
                     </div>
                     <TextEditor
                        onChange={(val) => setFieldValue('content', val)}
                        className="h-64 mb-14"
                        onBlur={() => setFieldTouched('content', true)}
                        value={values.content}
                     />
                     <div className="label">
                        {
                           errors.content && touched.content &&
                           <span className="label-text-alt text-error">{errors.content}</span>
                        }
                     </div>
                  </label>
                  <div className="flex justify-end">
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className={'border-none bg-gray-200 hover:bg-gray-300 rounded-md font-medium py-2 px-8'}
                     >
                        {t('save')}
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </Container>
   )
}

export default AddDiscuss