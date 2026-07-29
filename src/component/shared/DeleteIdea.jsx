import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteIdea = () => {
    const {_id}=data
    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:5000/idea/${_id}`,{
            method:'DELETE',
        })
    }
    return (
        
    );
};

export default DeleteIdea;