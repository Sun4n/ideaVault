'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Select, Input, Label, TextField, ListBox, TextArea } from '@heroui/react';
import { div } from 'framer-motion/client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AddIdeaPage = () => {
    const {
            data: session,
        } = authClient.useSession()
        const user = session?.user
    const onSubmit = async(e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const ideas = Object.fromEntries(fromData.entries())
        console.log(ideas);
        const myIdea = {
            userName: user?.name,
            userId: user?.id,
            userImage: user?.image,
            ...ideas
        }
        console.log(myIdea);
        const res = await fetch('http://localhost:5000/idea',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(myIdea)
        })
        const data = await res.json()
        if (data.acknowledged) {
            toast.success('Idea added')
            redirect('/my-idea')  
        }
        console.log(data);

    }
    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-2xl'>Add Idea</h1>
            <div className='w-3xl'>
                <form onSubmit={onSubmit}
                    className="p-10 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="ideaTitle" isRequired>
                                <Label>Idea Title</Label>
                                <Input placeholder="Idea Title" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="targetAudience" isRequired>
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
                                placeholder="Select category"
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
                        <TextField name="estimatedBudget" type="number" isRequired>
                            <Label>Estimated Budget</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="tag" isRequired>
                            <Label>Tag</Label>
                            <Input
                                placeholder="Tag"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                        <TextField name="problemStatement" isRequired>
                            <Label>Problem Statement
                            </Label>
                            <Input
                                placeholder="Problem Statement"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                        <TextField name="proposedSolution" isRequired>
                            <Label>Proposed Solution</Label>
                            <Input
                                placeholder="Proposed Solution"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="shortDescription" isRequired>
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
                            <TextField name="imageUrl" isRequired>
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
                            <TextField name="description" isRequired>
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

                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-full bg-cyan-500 text-white"
                    >
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddIdeaPage;