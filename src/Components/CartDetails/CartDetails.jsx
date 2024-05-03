const CartDetails = ({booking, handleDelete, handleBookingConfirm}) => {
    const {_id,img,date,price,customerName, status} = booking;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="p-5">
                                <button onClick={() => handleDelete(_id)} className="btn">X</button>
                            </td>
                            <td className="py-4 px-4 flex justify-start">
                                <img
                                    src={img}
                                    alt="table navigate ui"
                                    className="h-24 w-24 rounded-lg object-cover bg-gray-300"/>
                            </td>
                            <td className="py-4 px-6 border-b text-xl font-medium">
                                <h1>{customerName}</h1>
                            </td>
                            <td className="py-4 px-6 border-b text-xl font-medium">{price}</td>
                            <td className="py-4 px-6 border-b text-lg font-medium">{date}</td>
                            <td className="py-4 px-6 border-b text-end">
                                {
                                    status === 'confirm' ? <span className="font-bold text-primary">Confirm</span>:
                                    <button onClick={() => handleBookingConfirm(_id)}
                                    className="bg-[#FF3811] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Please Confirm</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartDetails;