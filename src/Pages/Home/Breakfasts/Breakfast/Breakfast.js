import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Breakfast = ({ breakfast }) => {
    const { img, description, price } = breakfast
    console.log(breakfast);
    return (
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
    );
};

export default Breakfast;