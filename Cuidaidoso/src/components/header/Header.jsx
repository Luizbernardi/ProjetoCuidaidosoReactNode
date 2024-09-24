// components/header/Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
    return (
        <header>
            <nav className="fixed flex items-center justify-between h-24 w-full p-5 bg-[#3b3b3b] bg-opacity-20 shadow-sm">
                <Logo />
                <NavBar />
            </nav>
        </header>
    );
}