import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 border-2">
                <figure><img className="h-[250px] w-[400px] rounded-lg"
                    src={img}
                    alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF3811] font-semibold">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkOut/${_id}`}><button className="btn text-[#FF3811] text-xl"><FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;