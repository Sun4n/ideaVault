'use client'
import { authClient } from '@/lib/auth-client';
import { Button, TextArea } from '@heroui/react';
import { redirect } from 'next/navigation';

import React from 'react';

const CommentSection = ({id,ideaTitle}) => {
    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user
    // console.log(id);

    const handleComment = async (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        const commentData = {
            ideaId:id,
            ideaTitle,
            userName: user?.name,
            userId: user?.id,
            userImage: user?.image,
            date:new Date(),
            comment
        }
        // console.log(commentData);
        const res = await fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        const data = await res.json()
        console.log(data);
        if (data.acknowledged) {
            redirect(`/idea/${id}`)
        }
    }
    return (
        <div>
            <div className="w-[1200px] space-y-3 mt-3 mb-4">
                <form onSubmit={handleComment}>
                    <TextArea fullWidth placeholder="Enter the comment" name='comment' />
                    <Button type='submit' slot='close' className={'mt-3'}>Comment</Button>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;