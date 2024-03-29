import React, { useState } from 'react';
import './FAQ.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {

    const faqData = [
        {
            id: 1,
            question: 'How much is a CWC NFT?',
            answere: 'For the Whitelist Private Sale the price will be 0,1 ETH + gas price and you will be able to mint a max of 3 Wolves. For the Public Sale the price will be 0,15 ETH + gas price and you will be able to mint a max of 10 Wolves.',
        },
        {
            id: 2,
            question: 'Where can I see my CWC NFT?',
            answere: 'Once the Public Sale is completed, you will be able to see your Mystery Wolf on your OpenSea profile by simply connecting your wallet to the OpenSea website. The hatch will happen 2 days after the public sale.',
        },
        {
            id: 3,
            question: 'When will be able to mint a CWC NFT?',
            answere: 'The whitelist Private Sale will start on December 20th at 6 PM UTC time and the Public Sale will be in the …',
        },
        {
            id: 4,
            question: 'Why do I have to own a CWC NFT?',
            answere: 'CWC NFTs will be your pass for the membership in the most Exclusive Club in the Crypto space. You will enjoy privileges, private events, be a share owner of a CWC land in metaverse space (another spoiler), private parties, crypto project and get to know all the others owners in Members group or in the live events. Furthermore, if you’ll be lucky enough, you will get the chance to go to the moon with other business rich men that can afford a 150k ticket to get the one life time experience and see the earth from the space!',
        },
        {
            id: 5,
            question: 'Are there secondary royalty fee?',
            answere: 'Yes, there is a 10% secondary royalty fee, but guess what? This will be used ALL for the club, the Team will not even take the 1% of it. All the fees will be used to further invest in the CWC and make it the strongest Crypto Club ever! A huge amount of that will also be used for Marketing proposals in order to make worldwide awareness of the amazing project and push up the floor price and the Wolves growth!',
        },
        {
            id: 6,
            question: 'Do I need to know something else?',
            answere: 'Believe us; you do not want to miss this Chance. The Team is in the crypto space from the early 2014 and knows what crypto investors want! Make A LOT of money and have fun! You’ll not regret joining us! We will reach crypto punk floor price and own NFT crypto space!',
        },
    ]


    return (
        <div className="mt-44" id="faq">
            <h1 className="xs:text-3xl lg:text-5xl font-bold font-miedinger m-0">FAQ</h1>
            <hr className="border-2 rounded-full w-24 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />

            <div>
                <div>
                    <div className="w-full lg:w-4/5 xl:w-3/5 mx-auto p-8">
                        <div className="shadow-md">
                            {faqData.map(faq =>
                                <div key={faq.id} className="tab w-full text-left mt-5 relative">
                                    <input
                                        className="absolute opacity-0"
                                        id={`tab-multi-${faq.id}`}
                                        type="checkbox" name="tabs" />
                                    <label
                                        className="block p-5 leading-normal cursor-pointer"
                                        htmlFor={`tab-multi-${faq.id}`}>
                                        <p className="questions xs:text-sm lg:text-base xs:pr-14 ">{faq.question}</p>
                                    </label>

                                    <label htmlFor={`tab-multi-${faq.id}`}
                                        className="absolute right-5 top-3 downArrow">
                                        <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
                                    </label>



                                    <div className="tab-content overflow-hidden leading-normal">
                                        <p className="p-5 xs:text-xs lg:text-base">{faq.answere}</p>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;























/*
 <div key={faq.id} className="tab w-full text-left mt-5">
                                    <input
                                        className="absolute opacity-0"
                                        id={`tab-multi-${faq.id}`}
                                        type="checkbox" name="tabs" />
                                    <label
                                        className="block p-5 leading-normal cursor-pointer xs:text-sm lg:text-base"
                                        htmlFor={`tab-multi-${faq.id}`}>
                                        {faq.question}
                                    </label>
                                    <div className="tab-content overflow-hidden leading-normal">
                                        <p className="p-5 xs:text-xs lg:text-base">{faq.answere}</p>
                                    </div>
                                </div> */