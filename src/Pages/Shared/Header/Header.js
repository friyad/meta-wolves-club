import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import twitterIcon from '../../../images/icons/Twitter.png'
import discordIcon from '../../../images/icons/Discord.png'
import instragramIcon from '../../../images/icons/Instagram.png'
import { CSSTransition } from 'react-transition-group';
import closeIcon from '../../../images/icons/close.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className="">
            {/* For Large Devices------- */}
            <nav className="lg:w-full max-w-screen-3xl absolute top-2 
            xs:hidden lg:block">
                <div className="lg:w-full 2xl:w-11/12 mx-auto py-2">
                    <div className="mainNavStyle">
                        <div className="mr-3">
                            <a href="#">
                                <img src={logo} alt="" className="lg:w-16 2xl:w-24" />
                            </a>
                        </div>
                        <div className="flex mr-auto justify-between">
                            <a className="navAstyle" href="#joinThePack">Buy a Wolf</a>
                            <a className="navAstyle" href="#theCWC">The CWC</a>
                            <a className="navAstyle" href="#rewards">REWARD</a>
                            <a className="navAstyle" href="#MeetTheWolves">Meet the Wolves</a>
                            <a className="navAstyle" href="#Roadmap">Roadmap</a>
                            <a className="navAstyle" href="#team">Team</a>
                            <a className="navAstyle" href="#faq">FAQ</a>
                        </div>
                        <div className="flex mr-auto">
                            <a href="#" className="socialIconStyle">
                                <img src={twitterIcon} alt="" className="lg:w-4 2xl:w-5" />
                            </a>
                            <a href="#" className="socialIconStyle">
                                <img src={discordIcon} alt="" className="lg:w-4 2xl:w-5" />
                            </a>
                            <a href="#" className="socialIconStyle">
                                <img src={instragramIcon} alt="" className="lg:w-4 2xl:w-5" />
                            </a>
                        </div>
                        <div>
                            <button
                                className="rounded-full font-abel
                                lg:px-3 lg:py-1 lg:text-base
                                xl:px-4 xl:text-lg
                                2xl:px-4 2xl:py-3 2xl:text-lg 2xl:font-bold
                                "
                                style={{ backgroundColor: '#5317FF' }}>
                                Open Sea
                            </button>
                            <button
                                className="rounded-full  font-abel
                               lg:px-3 lg:py-1 lg:text-base lg:ml-3
                               xl:px-4 xl:text-lg
                                2xl:px-4 2xl:py-3 2xl:text-lg 2xl:ml-4 2xl:font-bold
                                "
                                style={{ backgroundColor: '#FD9535' }}>
                                Connect Metamask
                            </button>
                        </div>
                    </div>
                </div>
            </nav>



            {/* Fot Mobile and Tablets---------- */}
            <div className="lg:hidden relative">
                <div
                    className="p-2 fixed top-0 w-full px-10"
                    style={{ backgroundColor: '#03031C', zIndex: 99999 }}>
                    <div className="flex justify-center items-center">
                        <div>
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                                {menuOpen
                                    ? <img src={closeIcon} alt="" />
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="rgb(255, 255, 255)" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>}
                            </button>
                        </div>
                        <div className="flex-1 justify-center items-center flex">
                            <a href="#">
                                <img src={logo} alt="" className="w-14" />
                            </a>
                        </div>
                    </div>
                </div>

                <CSSTransition
                    in={menuOpen}
                    unmountOnExit
                    timeout={{ appear: 0, enter: 500, exit: 300 }}
                    classNames="alert"
                >
                    <div
                        className="fixed top-16 h-full w-full"
                        style={{ backgroundColor: '#03031C', zIndex: 99999 }}>

                        <div className="flex flex-col space-y-3  text-left p-5 px-9 ">
                            <a className="smallNavAStyle" href="#joinThePack">Buy a Wolf</a>
                            <a className="smallNavAStyle" href="#theCWC">The CWC</a>
                            <a className="smallNavAStyle" href="#rewards">REWARD</a>
                            <a className="smallNavAStyle" href="#MeetTheWolves">Meet the Wolves</a>
                            <a className="smallNavAStyle" href="#Roadmap">Roadmap</a>
                            <a className="smallNavAStyle" href="#team">Team</a>
                            <a className="smallNavAStyle" href="#faq">FAQ</a>
                            <div className="flex">
                                <a href="#" className="smallNavAStyle mr-8">
                                    <img src={twitterIcon} alt="" className="w-5" />
                                </a>
                                <a href="#" className="smallNavAStyle mr-8">
                                    <img src={discordIcon} alt="" className="w-5" />
                                </a>
                                <a href="#" className="smallNavAStyle mr-8">
                                    <img src={instragramIcon} alt="" className="w-5" />
                                </a>
                            </div>
                            <div>
                                <button
                                    className="rounded-full font-abel
                              xs:px-4 xs:py-2 md:px-8 md:text-xl xs:text-lg
                                "
                                    style={{ backgroundColor: '#5317FF' }}>
                                    Open Sea
                                </button>
                                <button
                                    className="rounded-full  font-abel ml-5
                              xs:px-4 xs:py-2 md:px-8 md:text-xl xs:text-lg
                                "
                                    style={{ backgroundColor: '#FD9535' }}>
                                    Connect Metamask
                                </button>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};


export default Header;