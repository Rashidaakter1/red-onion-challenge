import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Dinner = ({dinner}) => {
    const { img, description, price } = dinner
    return (
        <div>
           <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div> 
        </div>
    );
};

export default Dinner;