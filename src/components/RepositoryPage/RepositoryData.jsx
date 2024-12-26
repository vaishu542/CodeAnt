import React from 'react'
import database from '../../assets/images/Repository/database.png';
import dot from '../../assets/images/Repository/dot.png';
import { useState } from 'react';

const RepositoryData = ({ name, language, data, days, publicStatus }) => {
    return (
        <>
            <div className="repo-data space-y-3 border-b border-hwhite px-6 py-5 text-main">
                <div className="repo-name flex gap-2">
                    <p className=' font-medium text-xl'>{name}</p>
                    {
                        publicStatus ?
                            <span className='border-2 border-[#B2DDFF] bg-[#EFF8FF] px-2 py-0.5 text-sm text-[#175CD3] rounded-full'>
                                Public
                            </span>
                            :
                            <span className='border-2 border-[#B2DDFF] bg-[#EFF8FF] px-2 py-0.5 text-sm text-[#175CD3] rounded-full'>
                                Private
                            </span>
                    }
                </div>
                <div className="repo-info flex items-center xm:gap-10 gap-4 text-sm">
                    <div className="react gap-2 flex items-center">
                        <p>{language}</p>
                        <img src={dot} alt="dot" className='w-2 h-2' />
                    </div>
                    <div className="data  gap-2 flex items-center">
                        <span><img src={database} alt="database" /></span>
                        <p>{data}</p>
                    </div>
                    <div className="date">
                        <p>Updated {days} day ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RepositoryData