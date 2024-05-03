import About from "../About/About";
import Services from "../Services/Services";
import { Helmet } from 'react-helmet';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import ChosenSection from "../ChosenSection/ChosenSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <div className="carousel w-full mt-10">
                    <div
                        id="slide1"
                        className="hero carousel-item relative w-full h-full lg:h-[700px]"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/QQsnkkw/1.jpg)'
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5 text-[#FFFFFF] text-start">
                                <h1 className="mb-5 text-2xl lg:text-5xl font-semibold">Luxury
                                    <br/>
                                    Residence Here</h1>
                                <p className="mb-5">Whether you are looking to sell or let your home or want to
                                    buy or rent a home,we really are the people for you to come to</p>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Discover More</button>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Latest Project</button>
                            </div>
                        </div>
                        <div
                            className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="hero carousel-item relative w-full h-full lg:h-[700px]"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/C0hqkMk/2.jpg)'
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5 text-[#FFFFFF] text-start">
                                <h1 className="mb-5 text-2xl lg:text-5xl font-semibold">Luxury
                                    <br/>
                                    Residence Here</h1>
                                <p className="mb-5">Whether you are looking to sell or let your home or want to
                                    buy or rent a home,we really are the people for you to come to</p>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Discover More</button>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Latest Project</button>
                            </div>
                        </div>
                        <div
                            className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div
                        id="slide3"
                        className="hero carousel-item relative w-full h-full lg:h-[700px]"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/wYkzqMX/3.jpg)'
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5 text-[#FFFFFF] text-start">
                                <h1 className="mb-5 text-2xl lg:text-5xl font-semibold">Luxury
                                    <br/>
                                    Residence Here</h1>
                                <p className="mb-5">Whether you are looking to sell or let your home or want to
                                    buy or rent a home,we really are the people for you to come to</p>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Discover More</button>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Latest Project</button>
                            </div>
                        </div>
                        <div
                            className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div
                        id="slide4"
                        className="hero carousel-item relative w-full h-full lg:h-[700px]"
                        style={{
                            backgroundImage: 'url(https://i.ibb.co/BTgJRhm/4.jpg)'
                        }}>
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5 text-[#FFFFFF] text-start">
                                <h1 className="mb-5 text-2xl lg:text-5xl font-semibold">Luxury
                                    <br/>
                                    Residence Here</h1>
                                <p className="mb-5">Whether you are looking to sell or let your home or want to
                                    buy or rent a home,we really are the people for you to come to</p>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Discover More</button>
                                <button className="btn btn-ghost border-2 border-[#ff3811] hover:bg-[#ff3811]">Latest Project</button>
                            </div>
                        </div>
                        <div
                            className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <About></About>
                <Services></Services>
                <div className='container mx-auto flex justify-center mt-28'>
                    <div className="stats bg-[#151515] text-white shadow w-full h-40 rounded-lg p-5">
                        <div className="stat">
                            <div className="stat-figure">
                                <FaPhoneVolume className='text-[#ff3811] text-2xl'></FaPhoneVolume>
                            </div>
                            <div className="stat-title text-white">
                                <p>We are open monday-friday</p>
                            </div>
                            <div className="stat-value text-white">
                                <p className="text-xl">7:00 am - 9:00 pm</p>
                            </div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure">
                                <FaMagnifyingGlassLocation className='text-[#ff3811] text-3xl'></FaMagnifyingGlassLocation>
                            </div>
                            <div className="stat-title text-white">
                                <p>Have a question?</p>
                            </div>
                            <div className="stat-value text-white">
                                <p className="text-xl">+2546 251 2658</p>
                            </div>
                        </div>
                        
                        <div className="stat">
                            <div className="stat-figure">
                            
                            </div>
                            <div className="stat-title text-white">
                                <p>Need a repair? our address</p>
                            </div>
                            <div className="stat-value text-white">
                                <p className="text-xl">Liza Street, New York</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ChosenSection></ChosenSection>
            </div>
        </div>
    );
};

export default Home;