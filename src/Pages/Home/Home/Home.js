import React from 'react';
import Banner from '../Banner/Banner';
import Breakfasts from '../Breakfasts/Breakfasts/Breakfasts';
import Dinners from '../Breakfasts/Dinners/Dinners';
import Lunches from '../Breakfasts/Lunches/Lunches';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Breakfasts></Breakfasts>
            <Lunches></Lunches>
            <Dinners></Dinners>
        </div>
    );
};

export default Home;