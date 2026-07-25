import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#edede9] w-full px-4 py-10 md:py-14'>
            <div className='max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div>
                    <h1 className='text-xl md:text-[30px] font-bold mb-2'>Platform</h1>
                    <div className='text-[1rem] font-medium space-y-2'>
                        <p>Ideas</p>
                        <p>Categories</p>
                        <p>Trending</p>
                        <p>Submit Idea</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl md:text-[30px] font-bold mb-2'>Contact info</h1>
                    <div className='font-medium space-y-2'>
                        <p>Email: abc@gmail.com</p>
                        <p>Phone: 12345***</p>
                        <p>Location: Bangladesh</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl md:text-[30px] font-bold mb-2'>Social links</h1>
                    <div className='flex gap-3 text-xl md:text-2xl'>
                        <FaGithub />
                        <FaLinkedin />
                        <FaTwitter />
                        <FaFacebook />
                    </div>
                </div>

                <div>
                    <h1 className='text-xl md:text-[30px] font-bold mb-2'>IdeaVault</h1>
                    <p className='text-[1rem]'>
                        Share innovative startup ideas, explore creativity, and collaborate with others to build the future.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;