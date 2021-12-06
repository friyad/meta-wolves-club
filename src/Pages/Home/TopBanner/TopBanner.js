import React from 'react';

const TopBanner = () => {

    return (
        <div className="topBanner flex justify-center items-center xs:mt-14 md:mt-0">
            <div className="xs:-mt-6 lg:-mt-10 xl:-mt-0">
                <h1 className="font-miedinger
                xs:text-2xl
                md:text-4xl
                lg:text-6xl
                xl:text-7xl
                ">
                    meta <br />
                    <p className="mt-5"> WOLVES CLUB</p>
                </h1>
                <div className="xs:mt-4 md:mt-8 xl:mt-14">
                    <button
                        className="rounded-full font-abel pinkBtnShadow
                        xs:px-4 xs:py-2 xs:text-lg xs:mr-3
                        md:px-5 md:py-3 md:text-xl md:mr-8
                        lg:px-6 lg:py-3 lg:text-2xl lg:mr-14"
                        style={{ backgroundColor: '#FF06AA' }}>
                        DISCORD
                    </button>
                    <button
                        className="rounded-full font-abel pinkBtnShadow
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