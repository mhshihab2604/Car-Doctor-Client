import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title, price, img} = service;
    const {user} = useContext(AuthContext)
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;        
        const date = form.date.value;        
        const message = form.message.value;        
        const email = user?.email; 
        const booking = {
            customerName: name,
            email,
            img,
            date,
            message,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);  
        
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service Book Successfully')
            }
        })
    }
    return (
        <div>
            <section className="py-6 dark:text-gray-900 mt-20" style={{backgroundImage: 'url(https://i.ibb.co/tQB835P/checkout.png)', backgroundPosition: 'center center',backgroundSize:'cover'}}>
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left text-white">Check Out</h1>
                    <Link to="/"><button className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#FF3811] dark:text-gray-50">Home/Checkout</button></Link>
                </div>
            </section>
            <section className="p-6 dark:text-gray-800 bg-[#F3F3F3] rounded-md shadow mt-32 w-full">
            <h2 className="w-full text:xl lg:text-3xl font-bold leading-tight text-center">Booking Services: {title}</h2>
                <form onSubmit={handleBookService} className="container w-full  p-8 mx-auto space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                            <input id="name" name="name" defaultValue={user?.displayName} type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-1 ml-1">Date</label>
                            <input id="date" name="date" type="date" placeholder="Date" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                            <input id="email" name="email" defaultValue={user?.email} type="email" placeholder="Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block mb-1 ml-1">Deu Amount</label>
                            <input id="amount" defaultValue={price} type="amount" placeholder="Amount" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-[#FF3811] focus:dark:ring-[#FF3811] hover:dark:ring-[#FF3811] dark:text-gray-50">Order Confirm</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CheckOut;