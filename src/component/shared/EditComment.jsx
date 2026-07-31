'use client'
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { CiEdit } from 'react-icons/ci';

const EditComment = ({comment}) => {
    console.log(comment._id);
    const handleCommentEdit=async(e)=>{
        e.preventDefault()
        const updateComment = e.target.comment.value
        const commentData ={
            comment:updateComment
        }
        console.log(commentData);
        const res = await fetch(`http://localhost:5000/comment/${comment._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(commentData)
        })
        const data = await res.json()
        console.log(data);
        if (data.modifiedCount>0) {
            toast.success('Comment Edited')
            redirect('/my-interactions')
        }
    }
    return (
        <Modal>
            <Modal.Trigger>
                <Button isIconOnly size="sm" variant="secondary">
                    <CiEdit size={18} />
                </Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CiEdit />
                            </Modal.Icon>

                            <div>
                                <h2 className="text-lg font-semibold">Edit Comment</h2>
                                <p className="text-sm text-default-500">
                                    Update your comment and save the changes.
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleCommentEdit} className="flex flex-col gap-4">
                                    <TextField
                                        className="w-full"
                                        name="comment"
                                        defaultValue={comment.comment}
                                        isRequired
                                    >
                                        <Label>Comment</Label>
                                        <Input

                                            placeholder="Write your comment"
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button slot="close" type="submit">
                                            Update Comment
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditComment;