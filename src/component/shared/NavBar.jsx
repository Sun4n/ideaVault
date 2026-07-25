"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/assest/logo.png'
import Image from 'next/image';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const link = <>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/idea">Ideas</Link>
        </li>
        <li>
            <Link href="/add-idea">Add Idea</Link>
        </li>
        <li>
            <Link href="#">My Ideas</Link>
        </li>
        <li>
            <Link href="#">My Interactions</Link>
        </li>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#edede9]  backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between max-w-[1280px] mx-auto w-full px-6">
                <div className="flex w-full justify-between items-center gap-4">
                    <Image src={logo} width={120} height={120} alt='logo' className='text-white'></Image>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className="hidden w-full items-center gap-4 md:flex">
                    {link}
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                    <Link href="#"><Button className='bg-black text-white'>Login</Button></Link>
                    <Button className='bg-black text-white'>Sign Up</Button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {link}
                    </ul>
                    <div className='flex flex-col w-full gap-2 ml-2'>
                        <Link href="#"><Button>Login</Button></Link>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;