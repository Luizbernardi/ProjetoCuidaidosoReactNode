// components/header/NavItem.jsx
import React from 'react';

const NavItem = ({ href, children }) => {
    return (
        <li className="text-black font-bold text-lg">
            <a href={href}>{children}</a>
        </li>
    );
};

export default NavItem;