import { Button, Card } from '@heroui/react';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const IdeaCard = ({ idea }) => {
    const { _id, imageUrl, category, tag, estimatedBudget, shortDescription } = idea
    return (
        <Card className=' h-full p-4'>
            <Image src={imageUrl} alt='image' width={400} height={200} className='w-full h-[200px] object-cover rounded'></Image>
            <div className='space-y-2'>
                <h1 className='capitalize text-[20px] font-bold'>{tag}</h1>
                <p className='text-[1rem] '>{shortDescription}</p>
                <div className='flex justify-between items-center text-[1rem] font-medium'>
                    <p>Category:{category}</p>
                    <p>Budget:{estimatedBudget}</p>
                </div>
                <Link href={`/idea/${_id}`}>
                    <Button className={"rounded-md"}>Detail <LuArrowUpRight /></Button>
                </Link>
            </div>
        </Card>

    );
};

export default IdeaCard;