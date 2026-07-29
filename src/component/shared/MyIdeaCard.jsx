import React from 'react';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import { LuArrowUpRight } from 'react-icons/lu';
import EditIdea from './EditIdea';
import DeleteIdea from './DeleteIdea';
const MyIdeaCard = ({ data }) => {
    const { _id, imageUrl, category, tag, estimatedBudget, shortDescription } = data
    return (
        <Card className=' w-full h-full p-4'>
            <Image src={imageUrl} alt='image' width={400} height={200} className='w-full h-[200px] object-cover rounded'></Image>
            <div className='space-y-2'>
                <h1 className='capitalize text-[20px] font-bold'>{tag}</h1>
                <p className='text-[1rem] '>{shortDescription}</p>
                <div className='flex justify-between items-center text-[1rem] font-medium'>
                    <p>Category:{category}</p>
                    <p>Budget:{estimatedBudget}</p>
                </div>
                <div className='flex justify-between'>
                    <Link href={`/idea/${_id}`}>
                        <Button className={"rounded-md"}>Detail <LuArrowUpRight /></Button>
                    </Link>
                    <div className='flex gap-2'>
                        <EditIdea data={data}></EditIdea>
                        <DeleteIdea data={data}></DeleteIdea>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default MyIdeaCard;