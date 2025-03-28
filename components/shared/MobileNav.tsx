"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'



const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className='header'>
        <Link href="/" className='flex items-center gap-2 md:py-2'>
          <Image src="/assets/images/logo-text.png" alt='logo' width={180} height={28} />
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <Sheet>
                    <SheetTrigger>
                        <Image src="/assets/icons/menu.svg" alt='menu' width={32} height={32}/>
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                       <>
                         <Image src="/assets/images/logo-text.png" alt='logo' width={152} height={23} />
                         <ul className='hidden-nav_elements'>
                                {navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                                        <Image src={link.icon} alt='logo' width={24} height={24} />
                                        {link.label}
                                        </Link>
                                    </li>
                                )
                                })}
                            </ul>
                            <ul className='sidebar-nav_elements'>
                                {navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                            <Link className='sidebar-link' href={link.route}>
                                            <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                                            {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                                <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName/>
                                </li>
                         </ul>
                       </>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav