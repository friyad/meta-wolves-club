import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const JoinThePack = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    const [mintCount, setMintCount] = useState(1);
    const handleMintCountChange = (value) => {
        if (value >= 1 && value <= 10) {
            setMintCount(value);
        }
    }


    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('Dec 25, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })


    return (
        <div className="xs:mt-20 lg:mt-40" id="joinThePack">
            <h1 className="xs:text-3xl lg:text-5xl font-miedinger mb-12
            ">JOIN THE PACK</h1>

            <div className="xs:p-8 md:p-12 rounded-3xl xs:w-11/12 md:max-w-2xl mx-auto"
                style={{ backgroundColor: '#0C0E4E' }}>
                <div className="flex justify-around items-start ">
                    <div>
                        <h2 className="xs:text-3xl lg:text-5xl font-thin font-abel tracking-widest">
                            {('0' + timerDays).slice(-2)}</h2>
                        <p className="xs:text-base md:text-xl lg:text-2xl font-abel tracking-widest mt-3">days</p>
                    </div>
                    <p className="xs:text-3xl lg:text-5xl font-abel xs:px-2 md:px-0">:</p>
                    <div>
                        <h2 className="xs:text-3xl lg:text-5xl font-thin font-abel tracking-widest">{('0' + timerHours).slice(-2)}</h2>
                        <p className="xs:text-base md:text-xl lg:text-2xl font-abel tracking-widest mt-3">hours</p>
                    </div>
                    <p className="xs:text-3xl lg:text-5xl font-abel">:</p>
                    <div>
                        <h2 className="xs:text-3xl lg:text-5xl font-thin font-abel tracking-widest">{('0' + timerMinutes).slice(-2)}</h2>
                        <p className="xs:text-base md:text-xl lg:text-2xl font-abel tracking-widest mt-3">minutes</p>
                    </div>
                    <p className="xs:text-3xl lg:text-5xl font-abel">:</p>
                    <div>
                        <h2 className="xs:text-3xl lg:text-5xl font-thin font-abel tracking-widest">{('0' + timerSeconds).slice(-2)}</h2>
                        <p className="xs:text-base md:text-xl lg:text-2xl font-abel tracking-widest mt-3">seconds</p>
                    </div>
                </div>
            </div>

            <div className="xs:-mt-3 md:-mt-5">
                <button
                    className="px-16 py-2 pinkBtnShadow rounded-full font-abel text-lg"
                    style={{ backgroundColor: '#FF06AA' }}
                >Join the Whitelist</button>
                <p className="font-abel text-lg mt-3 font-thin flex justify-center items-center mx-auto">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl mr-3" />
                    Add remainder to your calendar</p>
            </div>

            <div style={{ backgroundColor: '#010106', border: '1px solid #FF00F5' }}
                className="xs:w-44 md:w-72 rounded-xl mx-auto mt-16 p-3 flex justify-around items-center">
                <button className="xs:text-3xl md:text-6xl xs:w-8 md:w-14
                flex justify-center items-center xs:h-8  md:h-14 rounded-full font-abel plushMinasBtnShadow"
                    onClick={() => handleMintCountChange(mintCount - 1)}
                >-</button>
                <p className="xs:text-4xl md:text-6xl font-abel m-0">{mintCount}</p>
                <button className="xs:text-3xl md:text-6xl xs:w-8 md:w-14
                flex justify-center items-center xs:h-8  md:h-14 rounded-full font-abel plushMinasBtnShadow"
                    onClick={() => handleMintCountChange(mintCount + 1)}
                >+</button>
            </div>

            <button className="px-12 py-2 rounded-full pinkBtnShadow text-xl mt-8"
                style={{ backgroundColor: '#FF06AA' }}>
                MINT
            </button>
        </div>
    );
};

export default JoinThePack;