import React, { useState } from 'react';
import logo from '../../../images/logo.png'
// import twitterIcon from '../../../images/icons/Twitter.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import discordIcon from '../../../images/icons/discord.svg'
// import instragramIcon from '../../../images/icons/Instagram.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import { CSSTransition } from 'react-transition-group';
import closeIcon from '../../../images/icons/close.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [headerBg, setHeaderBg] = useState(false)

    let lastScrollTop = 100;
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById("navbar")
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            setHeaderBg(true)
        }
        else {
            setHeaderBg(false)
        }
    })

    function goTo(id) {
        let destination = document.querySelector(id);
        let yCoord = destination.offsetTop - 150;
        window.scrollTo({
            top: yCoord,
            behavior: "smooth"
        });
        setMenuOpen(false)
    }


    return (
        <div className={headerBg ? "sticky top-0" : "static"}
            style={{ zIndex: 99999 }}>

            {/* For Large Devices------- */}
            <nav className="lg:w-full absolute xs:hidden lg:block"
                style={headerBg ? {
                    backgroundColor: '#03031C',
                    zIndex: 99999
                } : {}}>

                <div className="lg:w-full 2xl:w-11/12 mx-auto py-2">
                    <div className="mainNavStyle">
                        <div className="mr-3">
                            <a href="#">
                                <img src={logo} alt="" className="lg:w-16 2xl:w-24" />
                            </a>
                        </div>
                        <div className="flex mr-auto justify-between">
                            <a className="navAstyle" onClick={() => goTo('#joinThePack')}>Buy a Wolf</a>
                            <a className="navAstyle" onClick={() => goTo("#theCWC")}>The CWC</a>
                            <a className="navAstyle" onClick={() => goTo("#rewards")}>REWARD</a>
                            <a className="navAstyle" onClick={() => goTo("#MeetTheWolves")}>Meet the Wolves</a>
                            <a className="navAstyle" onClick={() => goTo("#Roadmap")}>Roadmap</a>
                            <a className="navAstyle" onClick={() => goTo("#team")}>Team</a>
                            <a className="navAstyle" onClick={() => goTo("#faq")}>FAQ</a>
                        </div>
                        <div className="flex mr-auto">
                            <a href="https://twitter.com/MetaWolvesClub" target="_blank" rel="noreferrer" className="socialIconStyle">
                                {/* <img src={twitterIcon} alt="" className="lg:w-4 2xl:w-5" /> */}
                                <TwitterIcon   className="lg:w-4 2xl:w-5" />
                            </a>
                            <a href="https://linktr.ee/metawolvesclub" target="_blank" rel="noreferrer" className="socialIconStyle">
                                <img src={discordIcon} alt="" className="lg:w-4 2xl:w-5" />
                            </a>
                            <a href="https://www.instagram.com/metawolvesclub" target="_blank" rel="noreferrer" className="socialIconStyle">
                                {/* <img src={instragramIcon} alt="" className="lg:w-4 2xl:w-5" /> */}
                                <InstagramIcon className="lg:w-4 2xl:w-5" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://opensea.io/collection/metawolvesclub"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full font-abel
                                lg:px-3 lg:py-1 lg:text-base
                                xl:px-4 xl:text-lg
                                2xl:px-4 2xl:py-3 2xl:text-lg 2xl:font-bold
                                blueBtnShadow
                                "
                                style={{ backgroundColor: '#2081E2' }}>
                                OpenSea
                            </a>
                            <button
                                className="rounded-full  font-abel
                               lg:px-3 lg:py-1 lg:text-base lg:ml-3
                               xl:px-4 xl:text-lg
                                2xl:px-4 2xl:py-3 2xl:text-lg 2xl:ml-4 2xl:font-bold
                                orangeBtnShadow
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
                            <a href="#joinThePack" className="smallNavAStyle" onClick={() => goTo('#joinThePack')}>Buy a Wolf</a>
                            <a href="#theCWC" className="smallNavAStyle" onClick={() => goTo("#theCWC")}>The CWC</a>
                            <a href="#rewards" className="smallNavAStyle" onClick={() => goTo("#rewards")}>REWARD</a>
                            <a href="#MeetTheWolves" className="smallNavAStyle" onClick={() => goTo("#MeetTheWolves")}>Meet the Wolves</a>
                            <a href="#Roadmap" className="smallNavAStyle" onClick={() => goTo("#Roadmap")}>Roadmap</a>
                            <a href="#team" className="smallNavAStyle" onClick={() => goTo("#team")}>Team</a>
                            <a href="#faq" className="smallNavAStyle" onClick={() => goTo("#faq")}>FAQ</a>
                            <div className="flex" style={{alignItems: 'center'}}>
                                <a href="#" className="smallNavAStyle mr-8">
                                    {/* <img src={twitterIcon} alt="" className="w-5" /> */}
                                    <TwitterIcon className='w-5' />
                                </a>
                                <a href="#" className="smallNavAStyle mr-8">
                                    <img src={discordIcon} alt="" className="w-5" />
                                </a>
                                <a href="#" className="smallNavAStyle mr-8">
                                    {/* <img src={instragramIcon} alt="" className="w-5" /> */}
                                    <InstagramIcon className='w-5' />
                                </a>
                            </div>
                            <div>
                                <a
                                href="https://opensea.io/collection/metawolvesclub"
                                target="_blank"
                                rel="noreferrer"
                                    className="rounded-full font-abel blueBtnShadow
                              xs:px-2 sm:px-4 xs:py-2 md:px-8 md:text-xl  xs:text-xs sm:text-lg
                                "
                                    style={{ backgroundColor: '#5317FF' }}>
                                    OpenSea
                                </a>
                                <button
                                    className="rounded-full font-abel xs:ml-2 md:ml-5 orangeBtnShadow
                              xs:px-2 sm:px-4 xs:py-2 md:px-8 md:text-xl xs:text-xs sm:text-lg
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