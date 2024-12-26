
import React, { useState } from 'react';
import book from '../../assets/images/Repository/book.png';
import cloud from '../../assets/images/Repository/cloud.png';
import code from '../../assets/images/Repository/code.png';
import settings from '../../assets/images/Repository/gear.png';
import home from '../../assets/images/Repository/home.png';
import down from '../../assets/images/Repository/down.png';
import close from '../../assets/images/Repository/close.png';
import signout from '../../assets/images/Repository/signout.png';
import phone from '../../assets/images/Repository/phone.png';
import logo from '../../assets/images/logo.png';
import bar from '../../assets/images/Repository/bars.png';

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [isDropDownOpen, setIDropDownOpen] = useState(false);
    const [activeMenuIndex, setActiveMenuIndex] = useState(0);
    const [activeHelpIndex, setActiveHelpIndex] = useState(null);

    const toggleDropdown = () => {
        setIDropDownOpen(!isDropDownOpen);
    };

    const menuItems = [
        { id: 0, icon: home, label: 'Repositories' },
        { id: 1, icon: code, label: 'AI Code Review' },
        { id: 2, icon: cloud, label: 'Cloud Security' },
        { id: 3, icon: book, label: 'How to Use' },
        { id: 4, icon: settings, label: 'Settings' },
    ];

    const helpItems = [
        { id: 0, icon: phone, label: 'Support' },
        { id: 1, icon: signout, label: 'Logout' },
    ];

    return (
        <>
            {/* Sidebar */}
            <div
                className={`side-bar fixed top-0 left-0 z-10 w-full lg:w-[20%] md:w-[30%] bg-white md:h-full flex flex-col items-center pt-6 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
            >
                {/* Close button for mobile */}
                <div className="flex items-center justify-between w-full px-4">
                    <button
                        className="absolute top-8 right-4 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <img src={close} alt="close" />
                    </button>

                    <div className="flex items-center gap-2 justify-center font-satosh text-xl">
                        <img src={logo} alt="logo" className="w-8 h-8" />
                        <p>CodeAnt AI</p>
                    </div>
                </div>

                {/* Sidebar elements */}
                <div className="ele flex flex-col h-full items-center md:justify-between w-full">
                    {/* Main menu */}
                    <div className="main-ele mt-10 w-full px-4 font-semibold text-ash">
                        <ul className="flex flex-col gap-2">
                            {/* Dropdown */}
                            <div className="drop border-2 border-borderCol rounded-lg w-full mb-4">
                                <div className="relative inline-block w-full">
                                    <button
                                        onClick={toggleDropdown}
                                        className="w-full px-4 py-2 flex items-center justify-between gap-2 text-main font-normal"
                                    >
                                        <span className="md:max-w-[150px] max-w-[200px] truncate">
                                            UtkarshDhairyaPanwar
                                        </span>
                                        <img src={down} alt="" />
                                    </button>

                                    {isDropDownOpen && (
                                        <div className="absolute left-0 mt-2 w-full shadow-md bg-white rounded-lg z-10">
                                            <p className="px-4 py-2">UtkarshDhairyaPanwar</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {menuItems.map((item) => {
                                const btnBg = activeMenuIndex === item.id ? 'bg-blue rounded-lg text-white' : '';
                                const imgFilter = activeMenuIndex === item.id ? 'filter invert brightness-50' : '';

                                return (
                                    <button
                                        key={item.id}
                                        className={btnBg}
                                        onClick={() => {
                                            setActiveMenuIndex(item.id);
                                            setActiveHelpIndex(null);
                                        }}
                                    >
                                        <li className="flex items-center gap-2 cursor-pointer py-2 px-5">
                                            <img src={item.icon} alt={item.label} className={imgFilter} />
                                            <span>{item.label}</span>
                                        </li>
                                    </button>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Help section at the bottom */}
                    <div className="help-ele w-full px-4 font-semibold text-ash mb-4 mt-2">
                        <ul className="flex flex-col gap-2">
                            {helpItems.map((item) => {
                                const btnBg = activeHelpIndex === item.id ? 'bg-blue rounded-lg text-white' : '';
                                const imgFilter = activeHelpIndex === item.id ? 'filter invert brightness-50' : '';

                                return (
                                    <button
                                        key={item.id}
                                        className={btnBg}
                                        onClick={() => {
                                            setActiveHelpIndex(item.id);
                                            setActiveMenuIndex(null);
                                        }}
                                    >
                                        <li className="flex items-center gap-2 cursor-pointer py-2 px-5">
                                            <img src={item.icon} alt={item.label} className={imgFilter} />
                                            <span>{item.label}</span>
                                        </li>
                                    </button>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Small Screen */}
            <div className="flex-1 md:ml-[20%]">
                <div className="flex justify-between items-center bg-white px-4 py-2 shadow-md md:hidden">
                    <div className="flex items-center gap-2 justify-center font-satosh text-xl">
                        <img src={logo} alt="logo" className="w-8 h-8" />
                        <p>CodeAnt AI</p>
                    </div>
                    <button
                        className="block md:hidden"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <img src={bar} alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideBar;
