import React from 'react';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const breakFastData = [
        {
            'id': '1',
            'img':'https://i.ibb.co/2gQJ3B0/breakfast1.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '2',
            'img': 'https://i.ibb.co/KsWSs9Y/breakfast2.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '3',
            'img':'https://i.ibb.co/chTqGXL/breakfast3.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '4',
            'img':'https://i.ibb.co/NWHwDt0/breakfast4.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '5',
            'img': 'https://i.ibb.co/DkghMX5/breakfast5.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '6',
            'img': 'https://i.ibb.co/zsVPSzM/breakfast6.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },


    ]
    return (
        <div>

            <div className="container">
                <h1>BreakFast</h1>
                <div className="row gy-4">
                {
                    breakFastData.map(breakfast => <Breakfast
                        key={breakfast.id}
                        breakfast={breakfast}

                    ></Breakfast>)
                }
                </div>
            </div>
        </div>
    );
};

export default Breakfasts;