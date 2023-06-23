import React from 'react'
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={'남현준'} comment={'안녕하세요, 남현준입니다.'}/>
            <Comment name={'김진수'} comment={'리액트 재미있어요'}/>
        </div>
    )
}

export default CommentList