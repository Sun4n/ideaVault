"use client"
import bannerImage1 from '../../../public/assest/bannerImage1.png';
import bannerImage2 from '../../../public/assest/bannerImage2.jpg';
import bannerImage3 from '../../../public/assest/bannerImage3.jpg';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const heroData = [
    {
        text: "Your Ideas, Locked In One Vault",
        image: bannerImage1
    },
    {
        text: "Capture, organize, and never lose a great idea again.",
        image: bannerImage2
    },
    {
        text: "Get Started",
        image: bannerImage3
    },
]

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % heroData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='w-full'>
            <div className='relative h-[610px] w-full'>
                <Image
                    src={heroData[slideIndex].image}
                    alt='bannerImage'
                    fill
                    className='object-cover z-0'
                />
                <div className='absolute inset-0 bg-black/50 z-10'></div>
                <div className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 text-center px-4'>
                    <AnimatePresence mode="wait">
                        <motion.p
                            className='text-white text-[22px] md:text-[48px] font-bold'
                            key={heroData[slideIndex].text}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                        >
                            {heroData[slideIndex].text}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slideIndex + "-cta"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Button className='bg-black text-white text-[16px] font-bold'>
                                Explore Now <FaArrowRight />
                            </Button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className='absolute z-20 bottom-[8%] left-1/2 -translate-x-1/2 flex gap-2'>
                    {
                        heroData.map((data, index) => {
                            return <span
                                key={index}
                                onClick={() => setSlideIndex(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === slideIndex ? 'bg-teal-600' : 'bg-white/60 hover:bg-white'
                                    }`}
                            ></span>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;