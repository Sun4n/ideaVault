import CommentSection from '@/component/shared/CommentSection';
import ShowingComment from '@/component/shared/ShowingComment';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { MdReportProblem } from 'react-icons/md';
const IdeaDetailPage = async ({ params }) => {
    const { id } = await params
    console.log(id);
    const res = await fetch(`http://localhost:5000/idea/${id}`)
    const idea = await res.json();
    console.log(idea);
    const { _id, imageUrl, ideaTitle, category, problemStatement, estimatedBudget, shortDescription, proposedSolution } = idea
    return (
        <div className='max-w-[1280px] mx-auto py-6'>
            <Card>
                <div className='flex flex-col md:flex-row gap-6 '>
                    <div>
                        <Image src={imageUrl} width={1100} height={400} alt='image' className='w-[1000px] h-[400px] object-cover rounded-md'></Image>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-bold text-3xl'>{ideaTitle}</h1>
                        <p className='text-[1rem] '>{shortDescription}</p>
                        <div className=''>
                            <span className='font-bold text-[20px] flex items-center gap-2'><MdReportProblem className='text-red-500'></MdReportProblem>Problem: </span>
                            <span className='text-[1rem]'>{problemStatement}</span>
                        </div>
                        <div className=''>
                            <span className='font-bold text-[20px] flex items-center gap-2'><FaExclamationCircle className='text-green-500'></FaExclamationCircle>Solution: </span>
                            <span className='text-[1rem]'>{proposedSolution}</span>
                        </div>
                        <div className='flex justify-between items-center font-bold text-[20px]'>
                            <p>Category:{category}</p>
                            <p>Budget:{estimatedBudget}</p>
                        </div>
                    </div>
                </div>

            </Card>
            <div className='w-[500px]'>
                <CommentSection id = {_id} ideaTitle={ideaTitle}></CommentSection>
            </div>
            <div>
                <ShowingComment id={_id}></ShowingComment>
            </div>
        </div>
    );
};

export default IdeaDetailPage;