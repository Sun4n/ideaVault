import { Card } from '@heroui/react';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react';

const IdeaCard = ({ idea }) => {
    const { imageUrl, ideaTitle,tag } = idea
    return (
        <div className='w-full p-4'>

            <Card className='w-full p-4'>
                <Image src={imageUrl} alt='image' width={200} height={200} className='w-full h-full object-contain rounded'></Image>
                <div>
                    <h1 className='uppercase text-[30px] font-bold'>{tag}</h1>
                    <p></p>

                </div>
            </Card>
        </div>
    );
};

export default IdeaCard;