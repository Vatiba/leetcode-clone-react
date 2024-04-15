// trash
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';
import { numberFormatter } from 'shared/libs';

type CommentProps = {
    userImg?: string
    userName: string
    score: number
    title?: string
    htmlContent: string
}

function Comment(props: CommentProps) {
    const {
        userImg,
        userName,
        score,
        title,
        htmlContent,
    } = props;

    return (
        <>
            <div className="flex gap-3">
                <img src={userImg || AvatarPlaceholder} className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
                <div className="flex flex-col gap-1">
                    <span className="font-medium">{userName}</span>
                    <span>Score: 🔥 {numberFormatter(score)}</span>
                </div>
            </div>
            <div className="flex flex-col">
                {
                    title ?
                        <h1 className="font-bold text-lg">
                            {title}
                        </h1>
                        : null
                }
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </>
    )
}

export default Comment