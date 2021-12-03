import React from 'react';

const Roadmap = () => {


    const roadmapData = [
        "Early December 2021 – all the CWC Social Medias pages will be launched, join our whitelist to get the chance to be able to get your wolfs in our Presale reserved only to early members!! (max buy per wallet 3 wolves)",
        "Mid December 2021 – Private Sale launch for whitelist members who have reserved their spot (price 0,1 ETH per Wolf)",
        "Late December 2021/early January 2022 – Public Sale opened to everyone but you will have to be fast because it will work on a FCFS basis! (price 0,15 ETH and max buy 2 wolves per wallet)",
        "Early February – The CWC open his door in the Members page, you will start to understand why this will be the most Exclusive Club in crypto space. The Floor price after this will start to grow exponentially so is better to get on board before see what this page reserve to their members!",
        "Mid-February 2022 – First LIVE event for our Crypto Wolf owner (the 10 Special NFT Metaverse wolves and the 90 Special NFT ticket Wolves have their reserve seat on this Exclusive and Fancy event, also other 100 spot will be available for the owner of at least 2 wolves, so hold your wolves you will never forget this party!)",
        "Early March 2022 – Launch of our clothing brand CWC (you want to own a NFT wolf before the ecommerce launches, trust us!)",
        "Mid June 2022 – The crypto wolf of wall street will approach the METAVERSE, you will  receive the 3D version of your NFT Wolf (if you will own at least 2 NFTs)",
    ]


    return (
        <div className="xs:mt-48 lg:mt-72 xs:w-11/12 lg:w-10/12 mx-auto" id="Roadmap">
            <h1 className="xs:text-3xl lg:text-5xl font-bold font-miedinger m-0">ROADMAP</h1>
            <hr className="border-2 rounded-full w-52 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />

            <div className="mt-10 relative">
                <div
                    className="w-1 bg-white h-full absolute
                    xs:left-5 md:left-9"
                ></div>
                {roadmapData.map(roadmap =>
                    <div key={roadmap} className="flex justify-start items-start mt-12 roadmapOverflow">
                        <div className="roadMapList ">
                            <p>{('0' + (roadmapData.indexOf(roadmap) + 1)).slice(-2)}</p>
                        </div>
                        <p className="xs:ml-4 md:ml-10 text-left xs:text-sm lg:text-base">{roadmap}</p>
                    </div>
                )
                }
            </div>

            <p className="font-miedinger mt-10 xs:text-sm lg:text-base">…ok ok, we have shared already too much for the moment.. After the Private & Public Sale ends we will reveal all the 2022 Roadmap just to the members of course!</p>
        </div>
    );
};

export default Roadmap;