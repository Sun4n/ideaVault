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
    const onSubmit = async (e) => {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myIdea)
        })
        const data = await res.json()
        if (data.acknowledged) {
            toast.success('Idea added')
            redirect('/my-idea')
        }
        console.log(data);

    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm p-4 sm:p-8 md:p-10 border border-gray-100">
                <h1 className="font-bold text-2xl sm:text-3xl text-center mb-6 sm:mb-8 text-gray-800">
                    Add Idea
                </h1>

                <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">


                        <div className="md:col-span-2">
                            <TextField name="ideaTitle" isRequired>
                                <Label>Idea Title</Label>
                                <Input placeholder="Idea Title" className="rounded-2xl w-full" />
                                <FieldError />
                            </TextField>
                        </div>


                        <TextField name="targetAudience" isRequired>
                            <Label>Target Audience</Label>
                            <Input placeholder="Target Audience" className="rounded-2xl w-full" />
                            <FieldError />
                        </TextField>


                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Category</Label>
                                <Select.Trigger className="rounded-2xl w-full">
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


                        <TextField name="estimatedBudget" type="number" isRequired>
                            <Label>Estimated Budget</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl w-full"
                            />
                            <FieldError />
                        </TextField>


                        <TextField name="tag" isRequired>
                            <Label>Tag</Label>
                            <Input
                                placeholder="Tag"
                                className="rounded-2xl w-full"
                            />
                            <FieldError />
                        </TextField>


                        <TextField name="problemStatement" isRequired>
                            <Label>Problem Statement</Label>
                            <Input
                                placeholder="Problem Statement"
                                className="rounded-2xl w-full"
                            />
                            <FieldError />
                        </TextField>


                        <TextField name="proposedSolution" isRequired>
                            <Label>Proposed Solution</Label>
                            <Input
                                placeholder="Proposed Solution"
                                className="rounded-2xl w-full"
                            />
                            <FieldError />
                        </TextField>


                        <div className="md:col-span-2">
                            <TextField name="shortDescription" isRequired>
                                <Label>Short Description</Label>
                                <TextArea
                                    placeholder="Describe the short summary..."
                                    className="rounded-3xl w-full"
                                />
                                <FieldError />
                            </TextField>
                        </div>


                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="rounded-2xl w-full"
                                />
                                <FieldError />
                            </TextField>
                        </div>


                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe your idea in detail..."
                                    className="rounded-3xl w-full"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>


                    <Button
                        type="submit"
                        className="rounded-2xl w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 transition-colors"
                    >
                        Add Idea
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddIdeaPage;