import React from 'react';
import Lunch from '../Lunch/Lunch';







const Lunches = () => {
    const lunchesData = [
        {
            'id': '1',
            'img':'https://i.ibb.co/YTCxt3B/lunch1.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '2',
            'img': 'https://i.ibb.co/6YHLWnP/lunch2.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '3',
            'img':'https://i.ibb.co/5Bh3H6L/lunch3.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '4',
            'img':'https://i.ibb.co/nPvMqBn/lunch4.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '5',
            'img': 'https://i.ibb.co/4fGHn83/lunch5.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '6',
            'img': 'https://i.ibb.co/SRR8Wqf/lunch6.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },


    ]
    return (
        <div>
            <div className="container">
                <h1>Lunch</h1>
                <div className="row">
                    {lunchesData.map(lunch=><Lunch 
                    key={lunch.id}
                    lunch={lunch}
                    ></Lunch>)}
                </div>
            </div>
        </div>
    );
};

export default Lunches;