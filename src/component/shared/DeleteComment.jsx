'use client'
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
const DeleteComment = ({comment}) => {
  const {_id}=comment
    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:5000/comment/${_id}`,{
            method:'DELETE',
        })
        const data = await res.json()
        console.log(data);
        if (data.deletedCount>0) {
            toast.error('Idea Delete')
            redirect('/my-interactions')
        }
    }
    return (
        <AlertDialog>
            <Button variant="danger"><MdDelete /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>

    );
};

export default DeleteComment;