// trash
import { useTranslation } from 'react-i18next';
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';
import { numberFormatter } from 'shared/libs';

type CommentProps = {
    loading: boolean
    userImg?: string
    userName: string
    score: number
    title?: string
    htmlContent: string
}

function Comment(props: CommentProps) {
    const {
        loading,
        userImg,
        userName,
        score,
        title,
        htmlContent,
    } = props;
    const { t } = useTranslation();

    return (
        <>
            <div className="flex gap-3">
                {
                    !loading ?
                        <img src={userImg || AvatarPlaceholder} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                        :
                        <div className='animate-pulse bg-gray-200 w-10 h-10 md:w-12 md:h-12 rounded-full' />
                }
                <div className="flex flex-col gap-1">
                    {
                        !loading ?
                            <>
                                <span className="font-medium">{userName}</span>
                                <span>{t('score')}: 🔥{numberFormatter(score)}</span>
                            </>
                            :
                            <>
                                <div className='animate-pulse bg-gray-200 rounded-md w-24 h-5' />
                                <div className='animate-pulse bg-gray-200 rounded-md w-32 h-5' />
                            </>
                    }
                </div>
            </div>
            <div className="flex flex-col">
                {
                    !loading ?
                        title ?
                            <h1 className="font-bold text-lg">
                                {title}
                            </h1>
                            : null
                        :
                        <div className='animate-pulse bg-gray-200 rounded-md w-full h-6' />
                }
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </>
    )
}

export default Comment