import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage from '../../../images/bannerbackground.png'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImage}
                        alt="First slide"
                    />
                    <Carousel.Caption className='border'>
                        <h3 className='text-dark'>Best Food Waiting For Your Belly</h3>
                        <input className=' p-2' type="search" name="" id="" 
                         value='search food items'
                        
                        />
                        <button className='' >Search</button>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>

        </div>
    );
};

export default Banner;