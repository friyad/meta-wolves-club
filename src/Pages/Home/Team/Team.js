import React from 'react';
import teamWolf from '../../../images/team Wolf.png'

const Team = () => {

    const teamData = [
        {
            id: 1,
            photoUrl: teamWolf,
            name: 'SKIRO',
            designation: 'CEO and co-founder'
        },
        {
            id: 2,
            photoUrl: teamWolf,
            name: 'EDITION',
            designation: 'CEO and co-founder'
        },
        {
            id: 3,
            photoUrl: teamWolf,
            name: 'SILLO',
            designation: 'Developer'
        },
        {
            id: 4,
            photoUrl: teamWolf,
            name: 'ROB',
            designation: 'Community Manager'
        },
        {
            id: 5,
            photoUrl: teamWolf,
            name: 'ANNA',
            designation: 'Marketing Managers'
        },
        {
            id: 6,
            photoUrl: teamWolf,
            name: 'KASIA',
            designation: 'Designer'
        }
    ]

    return (
        <div className="xs:w-11/12 md:w-10/12 lg:9/12 xl:8/12 mx-auto mt-32" id="team">
            <h1 className="xs:text-3xl lg:text-5xl font-bold font-miedinger m-0">TEAM</h1>
            <hr className="border-2 rounded-full w-52 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14
            justify-center items-center gap-16">
                {teamData.map(teamMem =>
                    <div key={teamMem.id} className="flex flex-col justify-center items-center "
                    >
                        <img src={teamMem.photoUrl} alt="" className="w-56" />
                        <div className="w-56">
                            <h3 className="font-miedinger text-3xl m-0 mt-5">{teamMem.name}</h3>
                            <p className="font-miedinger xs:text-sm lg:text-base m-0 mt-2">{teamMem.designation}</p>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Team;