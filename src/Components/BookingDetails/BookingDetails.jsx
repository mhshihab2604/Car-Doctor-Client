import CartDetails from "../CartDetails/CartDetails";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";

const BookingDetails = () => {
        const {user} = useContext(AuthContext);
        const [bookings, setBookings] = useState([])
        const url = `http://localhost:5000/bookings?email=${user?.email}`;

        useEffect(() =>{
            fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
        },[url]);

        const handleDelete = id => {
            const proceed = confirm('Are You Sure You Want To Delete');
            if(proceed){
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
            }
        }
        const handleBookingConfirm = id => {
            const proceed = confirm('Are You Sure You Want To Confirm');
            if(proceed){
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({status: 'confirm'})
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount > 0){
                        alert('Update Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);
                    }
                })
            }
        }
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-10">Booking Details: {bookings.length}</h1>
            <section className="py-6 dark:text-gray-900 mt-10" style={{backgroundImage: 'url(https://i.ibb.co/tQB835P/checkout.png)', backgroundPosition: 'center center',backgroundSize:'cover'}}>
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left text-white">Check Out</h1>
                    <Link to="/"><button className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#FF3811] dark:text-gray-50">Home/Checkout</button></Link>
                </div>
            </section>
             <div className="max-w-6xl mx-auto">
                <div className="mt-10 mx-2">
                    {bookings.map(booking => <CartDetails key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></CartDetails>)}
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;