import CommentSection from '@/component/shared/CommentSection';
import ShowingComment from '@/component/shared/ShowingComment';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { MdReportProblem } from 'react-icons/md';

export const dynamic = 'force-dynamic';

const IdeaDetailPage = async ({ params }) => {
    const { id } = await params
    const token = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })

    if (!res.ok) {
        return (
            <div className='w-full flex justify-center items-center py-20 font-bold text-[48px] text-center'>
                <div>Idea not found</div>
            </div>
        )
    }

    const idea = await res.json();

    if (!idea || !idea._id) {
        return (
            <div className='w-full flex justify-center items-center py-20 font-bold text-[48px] text-center'>
                <div>Idea not found</div>
            </div>
        )
    }

    const { _id, imageUrl, ideaTitle, category, problemStatement, estimatedBudget, shortDescription, proposedSolution } = idea

    return (
        <div className='max-w-[1280px] mx-auto px-4 sm:px-6 py-6 space-y-8 w-full '>
            <Card className='p-4 sm:p-6'>
                <div className='flex flex-col lg:flex-row gap-6 items-start'>
                    <div className='w-full lg:w-1/2 flex-shrink-0'>
                        <div className='relative w-full h-[250px] sm:h-[350px] lg:h-[400px]'>
                            <Image
                                src={imageUrl}
                                fill
                                alt='image'
                                className='object-cover rounded-md'
                                sizes='(max-width: 1024px) 100vw, 50vw'
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 space-y-4 '>
                        <h1 className='font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white'>{ideaTitle}</h1>
                        <p className='text-base text-gray-600 leading-relaxed dark:text-white'>{shortDescription}</p>

                        <div className='space-y-1'>
                            <span className='font-bold text-lg sm:text-xl flex items-center gap-2 text-gray-800 dark:text-white'>
                                <MdReportProblem className='text-red-500 shrink-0' /> Problem:
                            </span>
                            <p className='text-base text-gray-700 leading-relaxed dark:text-white'>{problemStatement}</p>
                        </div>

                        <div className='space-y-1'>
                            <span className='font-bold text-lg sm:text-xl flex items-center gap-2 text-gray-800 dark:text-white'>
                                <FaExclamationCircle className='text-green-500 shrink-0' /> Solution:
                            </span>
                            <p className='text-base text-gray-700 leading-relaxed dark:text-white'>{proposedSolution}</p>
                        </div>

                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-2 border-t font-semibold text-lg sm:text-xl text-gray-800'>
                            <p className='dark:text-white'><span className='font-bold dark:text-white'>Category:</span> {category}</p>
                            <p className='dark:text-white'><span className='font-bold dark:text-white'>Budget:</span> {estimatedBudget}</p>
                        </div>
                    </div>
                </div>
            </Card>
            <div className='space-y-6'>
                <div className='w-full max-w-full sm:max-w-[500px]'>
                    <CommentSection id={_id} ideaTitle={ideaTitle} />
                </div>
                <div className='w-full'>
                    <ShowingComment id={_id} />
                </div>
            </div>
        </div>
    );
};

export default IdeaDetailPage;