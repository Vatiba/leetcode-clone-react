import { useUpdateDiscuss } from "features/discuss/api";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextEditor } from "shared/ui";

type EditCommentProps = {
   content: string
   commentSlug: string
}

function EditComment(props: EditCommentProps) {
   const {
      content,
      commentSlug,
   } = props;
   const { t } = useTranslation();

   const [isEditable, setIsEditable] = useState(false);
   const [newContent, setNewContent] = useState(content);

   const {
      mutate: updateDiscuss,
      isPending: updatingDiscuss
   } = useUpdateDiscuss();

   return (
      <>
         {
            isEditable ?
               <TextEditor
                  className="h-64 mb-12"
                  value={newContent}
                  onChange={(value) => setNewContent(value)}
               />
               : null
         }
         <div className="flex justify-end">
            <button
               className="bg-gray-200 px-4 py-1 rounded-md font-medium"
               onClick={() => {
                  if (!isEditable) {
                     setIsEditable(true);
                     return
                  }

                  updateDiscuss({
                     slug: commentSlug,
                     content: newContent,
                  }, {
                     onSuccess: () => {
                        setIsEditable(false);
                     }
                  })
               }}
               disabled={updatingDiscuss}
            >
               {
                  !isEditable ?
                     t('edit')
                     :
                     t('save')
               }
            </button>
         </div>
      </>
   )
}

export default EditComment