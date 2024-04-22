import clsx from "clsx";
import { useAuth } from "entities/auth";
import { useCreateDiscuss } from "features/discuss/api";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChat } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TextEditor } from "shared/ui";

type ReplyProps = {
    /** @default false  */
    isMinimizedBtn?: boolean
    commentId: number
}

function Reply(props: ReplyProps) {
    const {
        commentId,
        isMinimizedBtn = false
    } = props;

    const {
        data
    } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [canReply, setCanReply] = useState(!isMinimizedBtn);
    const [content, setContent] = useState('');

    const {
        mutate: createDisscuss
    } = useCreateDiscuss();

    return (
        <>
            {
                canReply ?
                    <TextEditor
                        className="h-64 mb-12"
                        value={content}
                        onChange={(value) => setContent(value)}
                    />
                    : null
            }
            <div className={clsx('flex justify-end', {
                'mt-3': canReply
            })}>
                <button
                    onClick={() => {
                        if (!data) {
                            navigate('/login?loginType=signIn')
                        }

                        if (!canReply) {
                            setCanReply(true);
                            return;
                        }

                        createDisscuss({
                            content: content,
                            title: '',
                            parent: commentId,
                        })
                        setCanReply(false);

                    }}
                    className={clsx('border-none bg-gray-200 hover:bg-gray-300 rounded-md font-medium py-2', {
                        'px-8': !isMinimizedBtn,
                        'px-2': isMinimizedBtn,
                    })}
                >
                    {
                        isMinimizedBtn && !canReply ?
                            <BiChat /> :
                            t('save')
                    }
                </button>
            </div>
        </>
    )
}

export default Reply