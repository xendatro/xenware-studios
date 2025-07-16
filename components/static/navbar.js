"use client"

import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Navbar */}
            <nav className="md:hidden bg-zinc-900 shadow-2xl h-20 flex items-center justify-between px-4 z-10 fixed w-full">
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl text-zinc-50  cursor-pointer">
                        Xenware Studios
                    </h1>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="rounded-full cursor-pointer">
                    {isOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    }
                    
                </button>
            </nav>
            {/* Desktop Navbar */}
            <nav className="hidden bg-zinc-900 shadow-2xl h-20 md:flex items-center justify-between px-12 z-10">
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl text-zinc-50  cursor-pointer">
                        Xenware Studios
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center md:flex-row md:space-x-6 cursor-pointer">
                    <Link href="#home" className="text-zinc-50 text-lg hover:text-zinc-500 transition duration-200">Home</Link>
                    <Link href="#about" className="text-zinc-50 text-lg hover:text-zinc-500 transition duration-200">About Us</Link>
                    <Link href="#connect" className="prm-btn">Connect</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                className={`md:hidden bg-zinc-900 shadow-lg fixed top-16 left-0 w-full flex flex-col items-center space-y-4 py-4 z-10
                `}
                >
                <Link href="#home" className="text-zinc-50 text-lg hover:text-zinc-500 transition duration-200">Home</Link>
                <Link href="#about" className="text-zinc-50 text-lg hover:text-zinc-500 transition duration-200">About Us</Link>
                <Link href="#connect" className="prm-btn">Connect</Link>
                </div>
            )}
        </>
    )
}