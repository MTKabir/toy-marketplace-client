import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"


const Banner = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block img-style"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Buy your baby's best toy</h5>
                    <p>You will get everything you need for your baby</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-style"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Buy your baby's best toy</h5>
                    <p>You will get everything you need for your baby</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-style"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Buy your baby's best toy</h5>
                    <p>You will get everything you need for your baby</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-style"
                    src={banner4}
                    alt="Forth slide"
                />
                <Carousel.Caption>
                    <h5>Buy your baby's best toy</h5>
                    <p>You will get everything you need for your baby</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;