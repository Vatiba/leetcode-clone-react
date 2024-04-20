import { AddDiscussForm, AddDiscussSchema } from "entities/discuss";
import { Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "shared";
import { TextEditor } from "shared/ui";

function AddDiscuss() {
   const { t } = useTranslation();

   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   return (
      <Container className="m-5 flex flex-col gap-2">

         <Formik<AddDiscussForm>
            initialValues={{
               title: '',
               content: ''
            }}
            validationSchema={AddDiscussSchema(t)}
            onSubmit={async (values, { setSubmitting, resetForm }) => {

            }}
         >

         </Formik>
         <span className="font-bold text-2xl ">{t('title')}</span>
         <input
            className="w-full border p-2 mb-3"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
         />

         <span className="font-bold text-2xl ">{t('text')}</span>
         <TextEditor
            value={content}
            onChange={(val) => setContent(val)}
            className="h-64"
         />
      </Container>
   )
}

export default AddDiscuss