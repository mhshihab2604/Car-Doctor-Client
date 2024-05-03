import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className='text-center space-y-4'>
                    <p className='text-[#ff3811] font-bold'>Service</p>
                    <h1 className='text-4xl font-semibold'>Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}>

                    </ServiceCard>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <button className="btn border-2 border-[#ff3811] hover:text-white hover:bg-[#ff3811]">More Services</button>
            </div>
        </div>
    );
};

export default Services;