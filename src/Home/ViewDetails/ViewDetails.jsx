import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const singleToy = useLoaderData();
    const { _id, picture_url, name, seller_name, seller_email, sub_category, category, price, rating, available_quantity, description } = singleToy;
    return (
        <div className='container w-25 mt-4 mb-4' >
            <Card>
                <Card.Img variant="top" src={picture_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Seller name : {seller_name}</Card.Text>
                    <Card.Text>Seller email : {seller_email}</Card.Text>
                    <Card.Text>Price : {price}</Card.Text>
                    <Card.Text>Rating : {rating}</Card.Text>
                    <Card.Text>Quantity : {available_quantity}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ViewDetails;