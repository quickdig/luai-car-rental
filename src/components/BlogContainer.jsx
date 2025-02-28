import React from 'react'
import BlogCard from './BlogCard'
import img1 from "../assets/bImageOne.jpg"
import img2 from "../assets/bImageTwo.jpg"
import img3 from "../assets/bImageThree.jpg"
import img4 from "../assets/bImageFour.jpg"
import img5 from "../assets/bImageFive.jpg"
import Button from './Button'

const BlogContainer = () => {
    return (
        <section className="blog_Container relative mt-10">
            <div className="main__container h-[45rem] md:h-[35rem] lg:h-[33rem] sm:h-[50rem] bg-gradient-to-r from-[#BABBBD]/80 to-[#A7A9AB]/20">
                {/* Corner Triangles */}
                <div className="group">
                    <div className="absolute top-0 right-0 w-0 h-0 z-10 border-solid border-t-0 border-r-[110px] border-b-[60px] border-l-0 border-transparent border-r-[#FF4532]"></div>
                    <div className="absolute top-0 right-0 w-0 h-0 border-solid border-t-0 border-r-[128px] border-b-[70px] border-l-0 border-transparent border-r-[#ffffff]"></div>
                </div>

                <div className="group">
                    <div className="absolute bottom-0 left-0 w-0 h-0 z-10 border-solid border-t-0 border-r-[110px] border-b-[60px] border-l-0 border-transparent border-r-[#FF4532] rotate-180"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-solid border-t-0 border-r-[128px] border-b-[70px] border-l-0 border-transparent border-r-[#ffffff] rotate-180"></div>
                </div>

                {/* Header Section */}
                <div className="text_area">
                    <div className="flex flex-col justify-center max-w-screen-lg w-full mx-auto px-4">
                        <h4 className="text-left text-2xl md:text-3xl mt-8">
                            Our <b>Blogs</b>
                        </h4>
                    </div>
                </div>

                {/* Blog Cards Section */}
                <div className="blog_cardArea mt-0 md:mt-5">
                    <div className="flex flex-col justify-center items-center max-w-screen-lg w-full mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">

                            {/* First Column */}
                            <div className="first_col col-span-1 lg:col-span-1 rounded-md">
                                <div className="first_card relative">
                                    <BlogCard
                                        dateStyle="bg-white text-sm px-2 py-1 absolute top-3 left-3 rounded-full"
                                        headerStyle="absolute bottom-4 text-xl text-white text-justify px-5 font-medium"
                                        style="w-full h-[10rem] lg:h[18.5rem] md:h-[18.5rem] sm:h-[10rem] bg-cover bg-center rounded-md"
                                        image={img1}
                                        date="12th April"
                                        title="Exceptional Car Rental Services Company in Dubai"
                                    />
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="sec_col col-span-1 lg:col-span-1 rounded-md">
                                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                                    {/* Smaller Blog Cards */}
                                    <div className="sec_card col-span-2 rounded-md relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-md text-white text-justify px-5 font-medium"
                                            style="w-full h-[8.5rem] bg-cover bg-center rounded-md"
                                            image={img2}
                                            date="12th April"
                                            title="LuaI Drive for All The Right Reasons"
                                        />
                                    </div>

                                    <div className="third_card col-span-1 rounded-md relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-xs text-white text-left px-5 font-medium"
                                            style="w-full h-[8.5rem] bg-cover bg-center rounded-md"
                                            image={img3}
                                            date="12th April"
                                            title="Premium Nissan Kicks Rental Services in Dubai"
                                        />
                                    </div>

                                    <div className="forth_card col-span-1 rounded-md mt-5 lg:mt-0 relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-xs text-white text-left px-5 font-medium"
                                            style="w-full h-[8.5rem] bg-cover bg-center rounded-md"
                                            image={img2}
                                            date="12th April"
                                            title="LuaI Drive for All The Right Reasons"
                                        />
                                    </div>

                                    <div className="five_card col-span-2 rounded-md mt-5 lg:mt-0 relative">
                                        <BlogCard
                                            dateStyle="bg-white text-xs px-2 py-1 absolute top-3 left-3 rounded-full"
                                            headerStyle="absolute bottom-4 text-md text-white text-justify px-5 font-medium"
                                            style="w-full h-[8.5rem] bg-cover bg-center rounded-md"
                                            image={img3}
                                            date="12th April"
                                            title="Premium Nissan Kicks Rental Services in Dubai"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Button
                    text={"Blogs"}
                    type={"submit"}
                    style={
                        "bg-black hover:bg-primary uppercase mt-6 lg:mt-10 text-center text-white font-medium py-3 px-6 rounded inline-flex items-center"
                    }
                /> */}
            </div>
        </section>

    )
}


export default BlogContainer