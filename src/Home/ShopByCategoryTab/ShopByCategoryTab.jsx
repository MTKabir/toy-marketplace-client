import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ShopByCategoryTab = () => {
    const[activeBtn,setActiveBtn] = useState();
    const setActiveBtnClass = (btnNumber) =>{
        setActiveBtn(btnNumber);
    }
    const setTextAndBg = (btnNumber) =>{
        return btnNumber === activeBtn ? "m-2 btn-secondary text-white": "m-2 bg-white text-black";
    }

    return (
        <div className='mt-3 mb-3'>
            <Button className={`${setTextAndBg(1)}`} onClick={()=> setActiveBtnClass(1)}>Supar cars</Button>
            <Button className={`${setTextAndBg(2)}`} onClick={()=> setActiveBtnClass(2)}>Truck</Button>
            <Button className={`${setTextAndBg(3)}`} onClick={()=> setActiveBtnClass(3)}>Regular car</Button>
        </div>

    );
};

export default ShopByCategoryTab;