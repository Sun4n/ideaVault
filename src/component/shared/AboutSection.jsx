import React from 'react';

const AboutSection = () => {
    return (
        <div className='max-w-[1280px] mx-auto text-center flex flex-col justify-center items-center py-4'>
            <h1 className='text-center text-[48px] font-bold'>About</h1>
            <p className='w-[400px] md:w-[600px] text-center  md:text-[1.2rem] font-medium'>
                IdeaVault is a platform built for dreamers, builders, and innovators.
                We believe every great startup begins with a single idea  and that
                idea deserves a place to grow, get feedback, and connect with the
                right people
            </p>
        </div>
    );
};

export default AboutSection;