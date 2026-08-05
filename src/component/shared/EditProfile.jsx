'use client'
import React from 'react';
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Select, Surface, TextArea, TextField } from "@heroui/react";
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
const EditProfile = ({ data }) => {
    const {_id}=data
    console.log(data);
    const onSubmit = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const editedUser = Object.fromEntries(fromData.entries())
        console.log(editedUser);
        console.log(_id);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedUser)
        })
        const editdata = await res.json()
        console.log(editdata);
        if (data.modifiedCount > 0) {
            toast.success('Update Profile')
            redirect('/profile')
        }

    }

return (
    <div>
        <Modal>
            <Button variant="secondary"><FaEdit /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-full max-w-3xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6 w-full">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        <div className="md:col-span-2">
                                            <TextField name="name" isRequired defaultValue={data?.name}>
                                                <Label>Name</Label>
                                                <Input placeholder="Idea Title" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>


                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField name="image" isRequired defaultValue={data?.image}>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>


                                    </div>

                                    {/* Buttons */}


                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type='submit' slot="close">Save Change</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    </div>
);
};

export default EditProfile;