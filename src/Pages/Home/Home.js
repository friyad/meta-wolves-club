import React from 'react';
import FAQ from './FAQ/FAQ';
import JoinThePack from './JoinThePack/JoinThePack';
import MeetTheWolves from './MeetTheWolves/MeetTheWolves';
import Rewards from './Rewards/Rewards';
import Roadmap from './Roadmap/Roadmap';
import Team from './Team/Team';
import TheCWC from './TheCWC/TheCWC';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {

    return (
        <div>
            <TopBanner />
            <JoinThePack />
            <TheCWC />
            <Rewards />
            <MeetTheWolves />
            <Roadmap />
            <Team />
            <FAQ />
        </div>
    );
};

export default Home;