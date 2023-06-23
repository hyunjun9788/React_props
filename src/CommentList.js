import React from 'react'
import Comment from "./Comment";


const comments = [
    {
        name: '남현준',
        comment: '안녕하세요, 남현준입니다.'
    },
    {
        name: '김진수',
        comment: '리액트 재미있어요.'
    },
    {
        name: '김민재',
        comment: '리액트 어려워요.'
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList