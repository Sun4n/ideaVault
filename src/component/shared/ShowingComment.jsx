import Image from 'next/image';
import React from 'react';
import EditComment from './EditComment';
import DeleteComment from './DeleteComment';

const ShowingComment = async ({ id }) => {
    const ideaId = id
    const res = await fetch(`http://localhost:5000/comment/${ideaId}`)
    const comments = await res.json()
    console.log(ideaId);
    return (
        <div>
            {
                comments.map((comment, index) => {
                    return <div key={index} className='flex gap-3 items-center'>
                        <div className='mt-5'>
                            <Image src={comment.userImage} alt='user image' width={60} height={60} className='rounded-full object-cover'></Image>
                        </div>
                        <div className=''>
                            <h1 className='font-bold text-[1rem]'>{comment.userName}</h1>
                            <p>{comment.date}</p>
                            <p>{comment.comment}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <EditComment comment={comment}></EditComment>
                            <DeleteComment comment={comment}></DeleteComment>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ShowingComment;