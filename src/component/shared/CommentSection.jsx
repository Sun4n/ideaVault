'use client'
import { Button, TextArea } from '@heroui/react';
import React from 'react';

const CommentSection = () => {
    const handleComment=(e)=>{
        e.preventDefault()
        const data = e.target.comment.value
        console.log(data);
    }
    return (
        <div>
            <div className="w-[1200px] space-y-3 mt-3 mb-4">
                <form onSubmit={handleComment}>
                    <TextArea fullWidth placeholder="Enter the comment" name='comment' />
                    <Button type='submit' className={'mt-3'}>Comment</Button>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;