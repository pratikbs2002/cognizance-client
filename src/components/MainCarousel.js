import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/bg1.png";
import logo2 from "../assets/bg2.jpeg";
import logo3 from "../assets/bg3.png";
import logo4 from "../assets/bg4.png";
import "./MainCarousal.css"

export default function MainCarousel() {
    return (
        <Carousel
            // indicatorLabels={[]}
            ind
            indicators={false}
        >
            <Carousel.Item interval={1000}>
                <img
                    className="home-carousel-image"
                    src={logo}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="home-carousel-image"
                    src={logo3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="home-carousel-image"
                    src={logo2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="home-carousel-image"
                    src={logo4}
                    alt="First slide"
                />

            </Carousel.Item>

        </Carousel>
    );
}
