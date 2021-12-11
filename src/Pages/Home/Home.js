import React from 'react';
import FAQ from './FAQ/FAQ';
import JoinThePack from './JoinThePack/JoinThePack';
import MeetTheWolves from './MeetTheWolves/MeetTheWolves';
import Rewards from './Rewards/Rewards';
import Roadmap from './Roadmap/Roadmap';
import SendMessage from './SendMessage/SendMessage';
import Team from './Team/Team';
import TheCWC from './TheCWC/TheCWC';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {

    return (
        <div>
            <TopBanner />
            <div className="max-w-screen-3xl mx-auto ">
                <JoinThePack />
                <TheCWC />
                <Rewards />
                <MeetTheWolves />
                <Roadmap />
                <Team />
                <FAQ />
                <SendMessage />
            </div>
        </div>
    );
};

export default Home;