import React from 'react';
import banner_back from "../assets/backdrop_two.png"
import Button from './Button';


const JourneyBanner = () => {
    return (
        <section className="journey_Banner relative mt-20">
            <div
                className="relative flex items-center justify-center bg-cover bg-center h-[20rem] sm:h-[30rem] md:h-[25rem] lg:h-[25rem] w-full"
                style={{ backgroundImage: `url(${banner_back})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/80"></div>
                <div className="flex flex-col lg:flex-row justify-between max-w-screen-lg w-full mx-auto items-center px-4 lg:px-8 z-10">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl">
                            Rent a Car Dubai Online <br />
                            Today & <b>Enjoy These Perks</b>
                        </h3>
                        <Button
                            text={"Start Your Journey"}
                            type={"submit"}
                            style={
                                "bg-black hover:bg-primary uppercase mt-6 lg:mt-10 text-center text-white font-medium py-3 px-6 rounded inline-flex items-center"
                            }
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <p className="text-white font-light text-sm sm:text-base lg:text-lg text-justify leading-6 sm:leading-7">
                            We offer premier car rental services with the best high-end and inexpensive vehicles. Our service guarantees
                            convenience, smooth journey, and the best deals on rental vehicles and services. Enjoy a spectacular car hire
                            experience in Dubai Marina.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default JourneyBanner