import React from 'react';
import minas from '../../../images/icons/-.png'
import plus from '../../../images/icons/+.png'

const JoinThePack = () => {
    return (
        <div className="mt-40">
            <h1 className="text-5xl font-miedinger mb-12">JOIN THE PACK</h1>

            <div className="p-12 rounded-3xl max-w-2xl mx-auto"
                style={{ backgroundColor: '#0C0E4E' }}>
                <div className="flex justify-around items-center ">
                    <div>
                        <h2 className="text-5xl font-thin font-abel tracking-widest">15</h2>
                        <p className="text-2xl font-abel tracking-widest">days</p>
                    </div>
                    <p className="text-5xl font-abel">:</p>
                    <div>
                        <h2 className="text-5xl font-thin font-abel tracking-widest">20</h2>
                        <p className="text-2xl font-abel tracking-widest">hours</p>
                    </div>
                    <p className="text-5xl font-abel">:</p>
                    <div>
                        <h2 className="text-5xl font-thin font-abel tracking-widest">48</h2>
                        <p className="text-2xl font-abel tracking-widest">minutes</p>
                    </div>
                    <p className="text-5xl font-abel">:</p>
                    <div>
                        <h2 className="text-5xl font-thin font-abel tracking-widest">18</h2>
                        <p className="text-2xl font-abel tracking-widest">seconds</p>
                    </div>
                </div>
            </div>

            <div className="-mt-5">
                <button
                    className="px-16 py-2 btnShadow rounded-full font-abel text-lg"
                >Join the Whitelist</button>
                <p className="font-abel text-lg mt-3 font-thin">Add remainder to your calendar</p>
            </div>

            <div style={{ backgroundColor: '#010106', border: '1px solid #FF00F5' }}
                className="w-72 rounded-xl mx-auto mt-16 p-3 flex justify-around items-center">
                <button className="text-6xl  font-abel">-</button>
                <p className="text-6xl font-abel m-0">10</p>
                <button className="text-6xl  font-abel">+</button>
            </div>

            <button className="px-12 py-2 rounded-full btnShadow text-xl mt-8">
                MINT
            </button>

        </div>
    );
};

export default JoinThePack;