import React from 'react';
import vector from '../../../images/icons/Vector.png'

const Rewards = () => {

    const rewardsData = [
        {
            id: 1,
            icon: vector,
            title: 'TO THE MOON!',
            description: 'Special NFT Wolf will get a “To The Moon Ticket”! a real Virgin Galactic ticket to the moon!! to live a one life time unforgettable experience!! The winner will be given also the option to get alternatively a monetary reward of 150k in ETH in his wallet.'
        },
        {
            id: 2,
            icon: vector,
            title: 'METAVERSE',
            description: '•	10 Special NFT Metaverse Wolves will receive immediately after the breading 10k $ in ETH in their wallets and a special ticket to join us in the first Private Live Event of the CWC (city TBA)'
        },
        {
            id: 3,
            icon: vector,
            title: 'VIP FOR LIFE',
            description: '•	90 Special NFT Ticket Wolves will receive a ticket for the First Private Life Event on the CWC (city TBA)'
        },
        {
            id: 4,
            icon: vector,
            title: '3d NFT',
            description: 'Special NFT Wolf will get a “To The Moon Ticket”! a real Virgin Galactic ticket to the moon!! to live a one life time unforgettable experience!! The winner will be given also the option to get alternatively a monetary reward of 150k in ETH in his wallet.'
        },
        {
            id: 5,
            icon: vector,
            title: 'ROYALTY',
            description: '•	10 Special NFT Metaverse Wolves will receive immediately after the breading 10k $ in ETH in their wallets and a special ticket to join us in the first Private Live Event of the CWC (city TBA)'
        },
    ]

    // id, icon, icon, description

    return (
        <div className="xs:mt-48 xl:mt-80" id="rewards">
            <h1 className="font-miedinger xs:text-3xl lg:text-5xl m-0">REWARDS</h1>
            <hr className="border-2 rounded-full w-52 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />


            <div className="mt-10 grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xs:w-11/12 mx-auto
            gap-10">
                {rewardsData.map(rewards =>
                    <div key={rewards.id}
                        style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.2)' }}
                        className="rounded-2xl p-5 flex flex-col justify-center items-center"
                    >
                        <img src={rewards.icon} alt="" className="mb-3" />
                        <h1 className="font-miedinger text-2xl font-thin my-3">{rewards.title}</h1>
                        <p className="text-base">{rewards.description}</p>
                    </div>
                )
                }
                <div
                    style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.2)' }}
                    className="rounded-2xl p-5 flex flex-col justify-center items-center">
                    <h1 className="font-miedinger xs:text-2xl md:text-3xl font-thin">
                        the best has <br /> yet to come!</h1>
                    <p className="font-thin mt-10">Stay tuned</p>
                </div>
            </div>
        </div>
    );
};

export default Rewards;