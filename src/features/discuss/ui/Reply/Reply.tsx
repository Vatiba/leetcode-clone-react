import clsx from "clsx";
import { useAuth } from "entities/auth";
import { useCreateDiscuss } from "features/discuss/api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TextEditor } from "shared/ui";

type ReplyProps = {
    commentId: number
}

function Reply(props: ReplyProps) {
    const {
        commentId,
    } = props;

    const {
        data
    } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [content, setContent] = useState('');

    const {
        mutate: createDisscuss
    } = useCreateDiscuss();

    return (
        <>
            <TextEditor
                className="h-64 mb-12"
                value={content}
                onChange={(value) => setContent(value)}
            />
            <div className={clsx('flex justify-end mt-3')}>
                <button
                    onClick={() => {
                        if (!data) {
                            navigate('/login?loginType=signIn')
                        }

                        createDisscuss({
                            content: content,
                            title: '',
                            parent: commentId,
                        }, {
                            onSuccess: () => {
                                setContent('');
                            },
                            onError: () => {
                                toast.error(t('somethingWentWrong'))
                            }
                        })


                    }}
                    className={clsx('border-none bg-gray-200 hover:bg-gray-300 rounded-md font-medium py-2 px-8')}
                >
                    {t('save')}
                </button>
            </div>
        </>
    )
}

export default Reply