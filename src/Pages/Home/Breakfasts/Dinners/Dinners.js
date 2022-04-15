import React from 'react';
import Dinner from '../Dinner/Dinner';
const Dinners = () => {
    const dinnersData = [
        {
            'id': '1',
            'img':'https://i.ibb.co/WFg9cQh/dinner1.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '2',
            'img': 'https://i.ibb.co/b5R1F29/dinner2.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '3',
            'img':'https://i.ibb.co/nQnwdd6/dinner3.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '4',
            'img':'https://i.ibb.co/Lk6Ly64/dinner4.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '5',
            'img': 'https://i.ibb.co/r6YfwFG/dinner5.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },
        {
            'id': '6',
            'img': 'https://i.ibb.co/PWYB5M4/dinner6.png',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptas.',
            'price': '$6'

        },


    ]
    return (
        <div>
            <div className="container">
            <h1>Dinner</h1>
            <div className='row gy-4'>
            {
                dinnersData.map(dinner => <Dinner 
                key={dinner.id}
                dinner={dinner}
                ></Dinner>)
            }
            </div>
        </div>
        </div>


    );
};

export default Dinners;