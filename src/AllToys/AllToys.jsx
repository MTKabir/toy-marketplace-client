import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState();
    useEffect(() => {
        fetch("http://localhost:5000")
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className='container mt-2 mb-4'>
            <Table striped="columns">
                <thead>
                    <tr className='text-center'>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Subcategory</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys && allToys.map(toy =>
                            <tr className='text-center' key={toy._id}>
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.available_quantity}</td>
                                <td >
                                    <Link className='bg-white'><Button>View Details</Button></Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllToys;