import React from 'react';
import topBanner from '../../../images/topBanner.jpg'

const TopBanner = () => {

    return (
        <div className="topBanner flex justify-center items-center xs:mt-14 md:mt-0">
            <div className="xs:-mt-14 lg:-mt-38 xl:-mt-48">
                <h1 className="font-miedinger
                xs:text-2xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                2xl:text-8xl">
                    meta <br />
                    <p className="mt-5"> WOLves CLUB</p>
                </h1>
                <div className="xs:mt-4 md:mt-8">
                    <button
                        className="rounded-full font-abel
                        xs:px-4 xs:py-2 xs:text-lg xs:mr-3
                        md:px-5 md:py-3 md:text-xl md:mr-8
                        lg:px-6 lg:py-3 lg:text-2xl lg:mr-14"
                        style={{ backgroundColor: '#FF06AA' }}>
                        DISCORD
                    </button>
                    <button
                        className="rounded-full font-abel
                        xs:px-4 xs:py-2 xs:text-lg xs:mr-3
                        md:px-5 md:py-3 md:text-xl
                        lg:px-6 lg:py-3 lg:text-2xl"
                        style={{ backgroundColor: '#FF06AA' }}>
                        TELEGRAM
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TopBanner;