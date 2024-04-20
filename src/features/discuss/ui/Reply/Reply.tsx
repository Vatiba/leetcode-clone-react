import clsx from "clsx";
import { useAuth } from "entities/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChat } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TextEditor } from "shared/ui";

type ReplyProps = {
    /**
     * @default false
     */
    isMinimizedBtn?: boolean
}

function Reply(props: ReplyProps) {
    const {
        isMinimizedBtn = false
    } = props;

    const {
        data
    } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [canReply, setCanReply] = useState(!isMinimizedBtn);

    return (
        <>
            {
                canReply ?
                    <TextEditor
                        className="h-64 mb-12"
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

                        // call reply api here
                        console.log('reply')
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