import * as React from 'react';

import ResponsiveLinkMenu from "./ResponsiveLinkMenu";
import MenuDropDownButton from "./MenuDropDownButton";
import {useState} from "react";
import {BellIcon} from "@heroicons/react/24/solid";

// TODO: Move it to a query
const menuItems = [
    {name: 'Art', isActive: true, route: '#'},
    {name: 'Blog', isActive: false, route: '#'},
    {name: 'Devs', isActive: false, route: '#'},
];

const ResponsiveMainNavbar = () => {
    const [isMenuDropDownButtonOpen, setIsMenuDropDownButtonOpen] = useState(false);
    const toggleMenu = () => setIsMenuDropDownButtonOpen(prev => !prev);

    return (
    <nav className="bg-teal-700">
        <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">

                <MenuDropDownButton isOpen={isMenuDropDownButtonOpen}
                                        setIsOpen={toggleMenu}/>

                <div className="flex flex-1 items-center">
                    <div className="flex w-full justify-center sm:w-auto sm:justify-start">
                        <a href="/" className="flex shrink-0 items-center">
                        <span
                            className="h-14 w-14 bg-gray-100"
                            role="img"
                            aria-label="Bat icon"
                            style={{
                                WebkitMaskImage: "url('/bat.svg')",
                                maskImage: "url('/bat.svg')",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                                WebkitMaskPosition: "center",
                                maskPosition: "center"
                            }}
                        />
                        </a>
                    </div>

                    {/*Menu Desktop*/}
                    <ResponsiveLinkMenu items={menuItems} isMobileMenu={false} setIsClosed={toggleMenu}/>
                </div>

                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                            className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>
                        {/*Heroicon name: outline/bell*/}
                        <BellIcon className="h-6 w-6 text-white"/>
                    </button>

                    {/*Profile dropdown*/}
                    {/*<ProfileDropDownMenu />*/}
                </div>
            </div>
        </div>

        {/*Show or dissapear menu*/}
        { isMenuDropDownButtonOpen && <ResponsiveLinkMenu items={menuItems} isMobileMenu={true} setIsClosed={toggleMenu} /> }
    </nav>
)
};

export default ResponsiveMainNavbar;
