import img from "../../assets/images/checkout/one.png"
import img2 from "../../assets/images/checkout/three.png"
import img3 from "../../assets/images/checkout/four.png"
import img4 from "../../assets/images/checkout/six.png"
const ChosenSection = () => {
    return (
        <div>
            <div className='text-center space-y-4 mt-40'>
                    <p className='text-[#ff3811] font-bold'>Core Features</p>
                    <h1 className='text-4xl font-semibold'>Why Choose Us</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20">
                <div className="card w-52 bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="w-16 h-16 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Expert Team</h2>
                    </div>
                </div>
                <div className="card w-52 bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="w-16 h-16 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">24/7 Support</h2>
                    </div>
                </div>
                <div className="card w-52 bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="w-16 h-16 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Best Equipment</h2>
                    </div>
                </div>
                <div className="card w-52 bg-base-100 shadow-xl border-2">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="w-16 h-16 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Timely Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChosenSection;