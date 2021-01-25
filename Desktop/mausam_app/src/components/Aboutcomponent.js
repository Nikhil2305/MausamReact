import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


class About extends Component {

    render() {

        return (

            <div  style={{ backgroundColor: 'rgba(0,0,0,0.95)'}} id="About">
                <h1 className="aboutitem">About Us</h1>
                <Carousel >
                    <Carousel.Item interval={3000} style={{ maxHeight: 600 }}>
                        <Image 
                          className="d-block w-100"
                          src="/Images/coro1.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h2>“Just for the record, the weather today is calm and sunny, but the air is full of bullshit.”</h2>
                          <h5>― Chuck Palahniuk</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                            
                    <Carousel.Item interval={3000} style={{ maxHeight: 600 }}>
                        <Image
                          className="d-block w-100"
                          src="/Images/coro5.jpg"
                          alt="second slide"
                        />
                        <Carousel.Caption>
                          <div className='row'>
                            <h1>Check</h1><h4> WEATHER </h4><h1>Now</h1>
                          </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                            
                    <Carousel.Item interval={3000} style={{ maxHeight: 600 }}>
                        <Image
                          className="d-block w-100"
                          src="/Images/coro3.jpg"
                                alt="third slide"
                        />
                        <Carousel.Caption>
                          <h1>It's Rainy Outside</h1>
                          <p>Correct Time to Wash your Dear car</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                            
                    <Carousel.Item interval={3000} style={{ maxHeight: 600 }}>
                        <Image
                          className="d-block w-100"
                          src="/Images/coro4.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h1>YES, Human Error Can Play a Role.</h1>
                          <p> Because Humans are fallible</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div class="container">
                    <br/>
                    <h5 className="aboutitem">Mausam Provide WEATHER & AIR Forecasts and Warnings for the protection of life and property and enhancement of the national economy.</h5>
                    <br/>
                    <h5 className="aboutitem">And our aim is to alert the people of country and spread awareness about the climate and their effects on living life.
                        Also want to achieve a ultimate goal to have a society that is 
                        prepared for and responds to weather event.</h5>
                    <br/>   
                </div>
            </div>

        );
    }
}

export default About;