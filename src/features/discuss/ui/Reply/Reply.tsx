import clsx from "clsx";
import { useAuth } from "entities/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChat } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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

    const [canReply, setCanReply] = useState(false);

    return (
        <div className="flex flex-col">
            {
                canReply ?
                    <textarea
                        rows={4}
                        className="rounded-md border py-2 px-3"
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


                    }}
                    className={clsx('border-none bg-gray-200 hover:bg-gray-300 rounded-md font-medium py-2', {
                        'px-8': !isMinimizedBtn,
                        'px-2': isMinimizedBtn,
                    })}
                >
                    {
                        isMinimizedBtn ?
                            <BiChat /> :
                            t('reply')
                    }
                </button>
            </div>
        </div>
    )
}

export default Reply