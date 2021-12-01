import React from 'react';
import JoinThePack from './JoinThePack/JoinThePack';
import Rewards from './Rewards/Rewards';
import TheCWC from './TheCWC/TheCWC';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {

    return (
        <div>
            <TopBanner />
            <JoinThePack />
            <TheCWC />
            <Rewards />
        </div>
    );
};

export default Home;