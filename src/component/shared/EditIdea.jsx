'use client'
import React from 'react';
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Select, Surface, TextArea, TextField } from "@heroui/react";
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
const EditIdea = ({ data }) => {
    const { _id, imageUrl, category, tag, estimatedBudget, shortDescription, problemStatement, proposedSolution, description, ideaTitle, targetAudience } = data
    const onSubmit = async(e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const ideas = Object.fromEntries(fromData.entries())
        console.log(ideas);
        
        const res = await fetch(`http://localhost:5000/idea/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ideas)
        })
        const data = await res.json()
        console.log(data);
        if (data. modifiedCount>0) {
            toast.success('Change Idea')
            redirect('/my-idea')
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
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField name="ideaTitle" isRequired defaultValue={ideaTitle}>
                                                    <Label>Idea Title</Label>
                                                    <Input placeholder="Idea Title" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField name="targetAudience" isRequired defaultValue={targetAudience}>
                                                <Label>Target Audience</Label>
                                                <Input placeholder="Target Audience" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select category" defaultValue={category}
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Social" textValue="Social">
                                                                Social
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="AI" textValue="AI">
                                                                AI
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Health" textValue="Health">
                                                                Health
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Education" textValue="Education">
                                                                Education
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Tech" textValue="Tech">
                                                                Tech
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Other" textValue="Other">
                                                                Other
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField name="estimatedBudget" type="number" isRequired defaultValue={estimatedBudget}>
                                                <Label>Estimated Budget</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField name="tag" isRequired defaultValue={tag}>
                                                <Label>Tag</Label>
                                                <Input
                                                    placeholder="Tag"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                            <TextField name="problemStatement" isRequired defaultValue={problemStatement}>
                                                <Label>Problem Statement
                                                </Label>
                                                <Input
                                                    placeholder="Problem Statement"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                            <TextField name="proposedSolution" isRequired defaultValue={proposedSolution}>
                                                <Label>Proposed Solution</Label>
                                                <Input
                                                    placeholder="Proposed Solution"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField name="shortDescription" isRequired defaultValue={shortDescription}>
                                                    <Label>Short Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField name="description" isRequired defaultValue={description}>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
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

export default EditIdea;