import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Toy = ({ toy }) => {
    const { _id, picture_url, name, seller_name, seller_email, sub_category, category, price, rating, available_quantity, description } = toy;
    return (
        <Card className='col-5 me-4 mb-4'>
            <Card.Img className='p-3 rounded' variant="top" src={picture_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price : {price}</Card.Text>
                <Card.Text>Rating : {rating}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/viewdetails/${_id}`}>
                    View details
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Toy;