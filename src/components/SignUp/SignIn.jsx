import React, { useState } from 'react';
import subtract from '../../assets/images/SignUpPage/Subtract.png';
import logo from '../../assets/images/logo.png';
import pie from '../../assets/images/SignUpPage/pie.png';
import up from '../../assets/images/SignUpPage/up.png';
import github from '../../assets/images/SignUpPage/github.png';
import gitlab from '../../assets/images/SignUpPage/gitlab.png';
import azur from '../../assets/images/SignUpPage/azur.png';
import key from '../../assets/images/SignUpPage/key.png';
import bitbucket from '../../assets/images/SignUpPage/bitbucket.png';
import Button from './Button';

const SignIn = () => {
    const [active, setActive] = useState(true); // SAAS is true by default

    const toggle = () => {
        setActive(!active); // Toggle between SAAS and Self Hosted
    };

    return (
        <div className="lg:flex justify-center items-center w-full">
            <div className="left-sec w-1/2 h-screen hidden bg-white relative lg:flex flex-col items-center justify-center">
                <div className="absolute bottom-0 left-0">
                    <img src={subtract} alt="Subtract Image" />
                </div>

                {/* main box */}
                <div className="text-[#081735] bg-white rounded-xl mb-32 w-max h-max shadow-boxShad">
                    <div className="title flex items-center p-5">
                        <img src={logo} alt="logo" />
                        <p className="font-bold">AI to Detect & Autofix Bad Code</p>
                    </div>
                    <div className="border-b border-hwhite"></div>
                    <div className="p-5 rounded-xl flex justify-between w-[400px]">
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">30+</p>
                            <p className="text-sm">Language Support</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">10K+</p>
                            <p className="text-sm">Developers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-lg">100K+</p>
                            <p className="text-sm">Hours Saved</p>
                        </div>
                    </div>
                </div>

                {/* sub box */}
                <div className="text-[#081735] bg-white rounded-xl mb-32 w-max h-max shadow-boxShad absolute right-[18%] bottom-[8%]">
                    <div className="title flex justify-between items-center px-5 py-2">
                        <img src={pie} alt="pie" />
                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
                                <img src={up} alt="up" />
                                <p className="font-bold text-[#0049C6] text-sm">14%</p>
                            </div>
                            <p>This week</p>
                        </div>
                    </div>
                    <div className="px-5 py-2 rounded-xl flex justify-between w-[250px]">
                        <div className="flex flex-col items-center">
                            <p className="text-sm">Issues Fixed</p>
                            <p className="font-bold text-lg">500K+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-sec lg:w-1/2 h-screen bg-hwhite flex justify-center items-center flex-col">
                <div className="box bg-white shadow-boxShad md:w-[600px] xm:w-[400px] xs:w-[350px]">
                    <div className="p-5">
                        <div className="title text-main md:text-3xl text-2xl">
                            <div className="flex items-center gap-2 justify-center">
                                <img src={logo} alt="logo" />
                                <p>CodeAnt AI</p>
                            </div>
                            <h1 className=" font-bold text-center mt-7">
                                Welcome to CodeAnt AI
                            </h1>
                        </div>
                        <div className="buttons mt-6 font-semibold text-xl flex">
                            <button
                                onClick={toggle}
                                className={`w-1/2 ${active ? 'bg-blue text-white' : 'bg-hwhite text-ash'
                                    } rounded-md sm:p-3 p-2 transition-all duration-300 md:text-xl text-lg font-semibold `}
                            >
                                SAAS
                            </button>
                            <button
                                onClick={toggle}
                                className={`w-1/2 ${!active ? 'bg-blue text-white' : 'bg-hwhite text-ash'
                                    } rounded-md sm:p-3  transition-all duration-300 md:text-xl text-lg font-semibold`}
                            >
                                Self Hosted
                            </button>
                        </div>
                    </div>
                    <div className="border-b border-hwhite mb-5"></div>
                    <div className="signup flex flex-col items-center gap-4 mb-6">
                        {active ? (
                            <>
                                <Button img={github} name="GitHub" />
                                <Button img={bitbucket} name="Bitbucket" />
                                <Button img={azur} name="Azure Devops" />
                                <Button img={gitlab} name="GitLab" />
                            </>
                        ) : (
                            <>
                                <Button img={gitlab} name="GitLab" />
                                <Button img={key} name="SSO" />
                            </>
                        )}
                    </div>
                </div>
                <p className='text-main mt-5'>
                By signing up you agree to the <span className='font-bold'>Privacy Policy.</span>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
