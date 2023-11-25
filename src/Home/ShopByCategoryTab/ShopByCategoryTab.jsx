import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Toy from '../Toy/Toy';

const ShopByCategoryTab = () => {
    const [activeBtn, setActiveBtn] = useState();
    const [toys, setToys] = useState();
    const [sportsCars, setSportsCars] = useState();
    const [roadStarCars, setRoadStarCars] = useState();
    const [regularCars, setRegularCars] = useState();

    useEffect(() => {
        fetch("http://localhost:5000")
            .then(req => req.json())
            .then(data => setToys(data))
    }, [])

    const setActiveBtnClass = (btnNumber) => {
        setActiveBtn(btnNumber);
        if (btnNumber === 1) {
            const filterSportsCars = toys.filter(toy => toy.sub_category === "Sports");
            setSportsCars(filterSportsCars);
        }
        else if (btnNumber === 2) {
            const filterRoadStarCars = toys.filter(toy => toy.sub_category === "Road star");
            setRoadStarCars(filterRoadStarCars);
        }
        else if (btnNumber === 3) {
            const filterRegularCars = toys.filter(toy => toy.sub_category === "Regular");
            setRegularCars(filterRegularCars);
        }

    }
    const setTextAndBg = (btnNumber) => {
        return btnNumber === activeBtn ? "m-2 btn-secondary text-white" : "m-2 bg-white text-black";
    }

    return (
        <div className='mt-3 mb-3'>
            <Button className={`${setTextAndBg(1)}`} onClick={() => setActiveBtnClass(1)}>Sports</Button>
            <Button className={`${setTextAndBg(2)}`} onClick={() => setActiveBtnClass(2)}>Road Star</Button>
            <Button className={`${setTextAndBg(3)}`} onClick={() => setActiveBtnClass(3)}>Regular</Button>
            <div className='row container mt-2 mb-2'>
                <div className='col-8'>
                    <div className='row'>
                        {activeBtn === 1
                            ? sportsCars.map(car =>
                                <Toy key={car._id} toy={car}>
                                </Toy>)
                            : activeBtn === 2
                                ? roadStarCars.map(car =>
                                    <Toy key={car._id} toy={car}>
                                    </Toy>)
                                : activeBtn === 3
                                    ? regularCars.map(car =>
                                        <Toy key={car._id} toy={car}>
                                        </Toy>)
                                    : toys && toys.map(toy =>
                                        <Toy key={toy._id} toy={toy}>
                                        </Toy>)
                        }

                    </div>
                </div>
                <div className='col-4'>

                </div>

            </div>

        </div>

    );
};

export default ShopByCategoryTab;