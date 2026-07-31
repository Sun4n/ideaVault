"use client"
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/assest/logo.png'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
const NavBar = () => {
    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user
    // console.log(user?.image);
    const handleLogOut = async () => {
        await authClient.signOut();
    }
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
            <Link href="/my-idea">My Ideas</Link>
        </li>
        <li>
            <Link href='/my-interactions'>My Interactions</Link>
        </li>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#edede9]  backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between max-w-[1280px] mx-auto w-full px-6">
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
                    user ? <div className='flex items-center gap-4'>
                        <Avatar>
                            <Avatar.Image alt="user image" src={user?.image} />
                            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={handleLogOut} className='bg-black text-white'>LogOut</Button>
                    </div>
                        :
                        <div className="flex items-center gap-2">
                            <Link href="/login"><Button className='bg-black text-white'>Login</Button></Link>
                            <Link href="/singup"><Button className='bg-black text-white'>Sign Up</Button></Link>
                        </div>
                }

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