"use client";
import React, { useState, useEffect } from 'react';
import useRedirectIfLoggedIn from '@/utils/useRedirectIfLoggedIn';
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import Image from 'next/image';
import { RiArrowDownSLine, RiAuctionLine, RiCustomerServiceLine, RiPhoneLine, RiSafeLine, RiToolsLine } from 'react-icons/ri';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: RiToolsLine },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: RiCustomerServiceLine },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: RiSafeLine },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: RiToolsLine },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: RiAuctionLine },
];

const callsToAction = [
  { name: 'Contact sales', href: '#', icon: RiPhoneLine },
];

export default function Header() {
  const isLoggedIn = useRedirectIfLoggedIn('check');
  console.log(isLoggedIn);

  // Optionally handle the case where isLoggedIn is undefined (e.g., during the hook's execution)
  

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src='/images/logo/logo.png'
              alt="company logo"
              width={112}
              height={33}
              style={{ objectFit: 'contain' }}
              className='bg-black'
            />
          </a>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <RiArrowDownSLine aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* {!isLoggedIn && (
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 bg-cyan-400 px-3 py-2 rounded-2xl"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          )} */}
        </div>
      </nav>
    </header>
  );
}
