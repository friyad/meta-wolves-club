import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { CSSTransition } from "react-transition-group";
import twitterIcon from '../../../images/icons/Twitter.png'
import discordIcon from '../../../images/icons/Discord.png'
import instragramIcon from '../../../images/icons/Instagram.png'

import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import 'dna-responsive-nav/dist/dna-rn.css'

const Header = () => {
    const [headerBg, setHeaderBg] = useState(false)

    const handleHeaderBG = e => {
        if (window.scrollY >= 500) {
            setHeaderBg(true)
        }
        else {
            setHeaderBg(false)
        }
    }
    window.addEventListener('scroll', handleHeaderBG)


    const links = (
        <ul className="">
            <li key='Buy-a-Wolf'>
                <a href="#joinThePack">Buy a Wolf</a>
            </li>
            <li key='The-CWC'>
                <a href="#">The CWC</a>
            </li>
            <li key='REWARD'>
                <a href="#">REWARD</a>
            </li>
            <li key='Meet-the-Wolves'>
                <a href="#">Meet the Wolves</a>
            </li>
            <li key='Roadmap'>
                <a href="#">Roadmap</a>
            </li>
            <li key='Team'>
                <a href="#">Team</a>
            </li>
            <li key='FAQ'>
                <a href="#">FAQ</a>
            </li>
            <li key='icons' className="ml-10 lg:mr-16 2xl:mr-0">
                <a href="#" className="inline-block rounded-full">
                    <img src={twitterIcon} alt="" />
                </a>
                <a href="#" className="inline-block rounded-full ml-6">
                    <img src={discordIcon} alt="" />
                </a>
                <a href="#" className="inline-block rounded-full ml-6">
                    <img src={instragramIcon} alt="" />
                </a>
            </li>
            <li className="3xl:ml-16">
                <button className="px-6 py-3 lg:text-xl rounded-full font-abel"
                    style={{ backgroundColor: '#5317FF' }}>
                    Open Sea
                </button>
                <button className="px-6 py-3 ml-3 lg:text-xl rounded-full font-abel"
                    style={{ backgroundColor: '#FD9535' }}>
                    Connect Metamask
                </button>
            </li>
        </ul>
    )


    return (
        <div className="lg:fixed xs:sticky xs:top-0 xs:w-full max-w-screen-3xl"
            style={headerBg ? { backgroundColor: '#03031C' } : {}}>
            <div className="xs:w-11/12 mx-auto">
                <ResponsiveHeader
                    links={links}
                    logo={logo}

                />
            </div>
        </div>
    );
};





















/* 
  <CSSTransition
                in={menuOpen}
                unmountOnExit
                timeout={{ appear: 0, enter: 800, exit: 800 }}
                classNames="alert">
                 */

export default Header;