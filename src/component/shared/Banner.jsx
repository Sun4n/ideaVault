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
    const nextSlide = () => {
        if (slideIndex < heroData.length - 1) {
            setSlideIndex((prevIndex) => prevIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])
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
                <AnimatePresence mode="wait">

                    <motion.p className='absolute right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] z-20 text-white text-[22px] md:text-[48px] font-bold' key={heroData[slideIndex].text}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6 }}>Your Ideas, Locked In One Vault</motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">

                    <motion.div key={slideIndex + "-cta"}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}>
                        <Button className='bg-black absolute right-[60%] top-[60%] translate-y-[-50%] translate-x-[50%] z-20 text-white text-[16px] font-bold'> Explore Now<FaArrowRight /></Button>
                    </motion.div>
                </AnimatePresence>
                <div className='absolute z-20 bottom-[10%] right-[60%] translate-y-[-50%] translate-x-[50%] flex gap-2'>
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