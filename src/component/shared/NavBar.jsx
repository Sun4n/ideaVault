"use client"
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/assest/logo.png'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { ThemeSwitch } from './ThemeSwitch';
import { redirect } from 'next/navigation';

const NavBar = () => {
    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user
    // console.log(user?.image);
    const handleLogOut = async () => {
        await authClient.signOut();
        redirect('/')
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen);
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
            <Link href="/my-idea">My Ideas</Link>
        </li>
        <li>
            <Link href='/my-interactions'>My Interactions</Link>
        </li>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#edede9]  backdrop-blur-lg dark:bg-gray-900">
            <header className="flex h-16 items-center justify-between max-w-[1280px] mx-auto w-full px-6 gap-2">
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
                <div className="flex w-full justify-between items-center gap-4">
                    <Image src={logo} width={120} height={120} alt='logo' className='text-white'></Image>
                </div>
                <ul className="hidden w-full items-center gap-4 md:flex">
                    {link}
                </ul>

                {
                    user ? <div className='relative'>
                        <Avatar >
                            <Avatar.Image alt="user image" src={user?.image}
                                onClick={() => setIsOpen(!isOpen)} />
                            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                        </Avatar>
                        {
                            isOpen && <div className='absolute right-0 top-[calc(100%+8px)] w-48 rounded-lg bg-white shadow-lg border border-gray-200 p-3 z-50'>
                                <div className='px-2 pb-2 border-b border-gray-100'>
                                    <Link href={'/profile'}>Profile</Link>
                                </div>
                                <Button
                                    onClick={handleLogOut}
                                    className='w-full mt-2 bg-black text-white'
                                >
                                    LogOut
                                </Button>
                            </div>
                        }
                    </div>
                        :
                        <div className="flex items-center gap-2">
                            <Link href="/login"><Button className='bg-black text-white'>Login</Button></Link>
                            <Link href="/singup"><Button className='bg-black text-white'>Sign Up</Button></Link>
                        </div>
                }

                <div>
                    <ThemeSwitch></ThemeSwitch>
                </div>

            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {link}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;