import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import Swal from'sweetalert2';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const { currentUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const [createOrder, { isLoading }] = useCreateOrderMutation();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const onSubmit = async (data) => {
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
        }
        
        try {
            await createOrder(newOrder).unwrap();
            Swal.fire({
                title: "Confirmed Order",
                text: "Your order placed successfully!",
                icon: "success",
                confirmButtonColor: "#3085d6"
            });
            navigate("/orders")
        } catch (error) {
            console.error("Error placing order", error);
            alert("Failed to place order")
        }
    };

    if (isLoading) return <div>Loading....</div>;

    return (
        <section className="mt-20"> {/* 👈 Added margin-top so content appears below navbar */}
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 mt-10">

                        {/* Left Side - Cash On Delivery */}
                        <div className="flex-1 bg-white rounded shadow-lg p-6">
                            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
                            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
                            <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                                <input {...register("name", { required: true })} placeholder="Full Name" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input type="text" value={currentUser?.email} disabled className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("phone", { required: true })} placeholder="Phone Number" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("address", { required: true })} placeholder="Street Address" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("city", { required: true })} placeholder="City" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("state", { required: true })} placeholder="State" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("country", { required: true })} placeholder="Country" className="h-10 border rounded px-4 w-full bg-gray-50" />
                                <input {...register("zipcode", { required: true })} placeholder="Zip Code" className="h-10 border rounded px-4 w-full bg-gray-50" />

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} />
                                    <span>I agree to <Link className="underline text-blue-600">Terms & Conditions</Link></span>
                                </label>

                                <button disabled={!isChecked} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Place Order (COD)
                                </button>
                            </form>
                        </div>

                        {/* Right Side - Online Payment */}
                        <div className="flex-1 bg-white rounded shadow-lg p-6 flex flex-col items-center justify-center">
                            <h2 className="font-semibold text-xl text-gray-600 mb-4">Want to Pay Online?</h2>
                            <p className="text-gray-500 mb-6">Securely pay using card, UPI, or net banking.</p>
                            <button 
                                onClick={() => navigate("/online-payment")} 
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                                Go to Online Payment
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckoutPage;
