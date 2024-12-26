import React, { useEffect, useState } from 'react';

import plus from '../../assets/images/Repository/plus.png';
import refresh from '../../assets/images/Repository/refresh.png';
import search from '../../assets/images/Repository/search.png';
import SideBar from './SideBar';
import RepositoryData from './RepositoryData';

const Repository = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 768px)').matches) {
                setIsSidebarOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* Main Repository Section */}
            <div
                className={`repo-sec w-full md:w-[70%] lg:w-[80%] h-max bg-hwhite md:px-5 md:py-4 transition-opacity duration-300 `}
            >
                <div className={`repo w-full h-max  rounded-lg ${isSidebarOpen ? '  bg-[#6C6C6C4D]' : ' bg-white'
                    } `}>
                    <div className="repo-ele">
                        <div className="repo-head px-6 py-4 flex flex-col gap-4">
                            <div className="repo-top flex flex-col gap-5 lg:flex-row lg:items-center justify-between">
                                <div className="repo-total">
                                    <h3 className="text-2xl font-semibold text-main">Repositories</h3>
                                    <p className="text-sm text-ash">33 total repositories</p>
                                </div>
                                <div className="repo-btn text-sm text-ash flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-borderCol">
                                        <img src={refresh} alt="refresh" />
                                        <span>Refresh All</span>
                                    </button>
                                    <button className="bg-blue flex items-center gap-2 px-4 py-2 rounded-lg text-white border-2 border-[#157FFF]">
                                        <img src={plus} alt="add repo" />
                                        <span>Add Repository</span>
                                    </button>
                                </div>
                            </div>
                            <div className="search flex items-center gap-3 border-2 border-borderCol rounded-lg w-max px-2 py-1">
                                <img src={search} alt="search" />
                                <input
                                    type="text"
                                    placeholder="Search Repositories"
                                    className="placeholder:text-ash focus:outline-0"
                                />
                            </div>
                        </div>
                        <div className="repo-deatils border-y border-hwhite">
                            <RepositoryData name={"design-system"} language={"React"} data={"7320 KB"} days={1} publicStatus={true} />
                            <RepositoryData name={"codeant-ci-app"} language={"Javascript"} data={"5871 KB"} days={2} />
                            <RepositoryData name={"analytics-dashboard"} language={"Python"} data={"4521 KB"} days={5} />
                            <RepositoryData name={"mobile-app"} language={"Swift"} data={"3096 KB"} days={3} publicStatus={true} />
                            <RepositoryData name={"e-commerce-platform"} language={"Java"} data={"6210 KB"} days={6} />
                            <RepositoryData name={"blog-website"} language={"HTML/CSS"} data={"1876 KB"} days={4} publicStatus={true} />
                            <RepositoryData name={"social-network"} language={"PHP"} data={"5432 KB"} days={7} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Repository;
