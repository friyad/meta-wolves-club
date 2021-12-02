import React from 'react';

const Footer = () => {
    return (
        <div className="mt-44">
            <div className="grid xs:grid-cols-1 md:grid-cols-3 justify-center items-center py-5">
                <p></p>
                <p className="font-abel text-lg tracking-wider">© 2021 All rights reserved by Claimify</p>
                <div className="space-x-6 flex mx-auto">
                    <a className="font-abel text-lg tracking-wider text-white"
                        href="#"> Privacy Policy</a>
                    <a className="font-abel text-lg tracking-wider text-white"
                        href="#"> Disclaimer</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;