import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/Cartitem";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("printing cart value : ");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="h-screen">
      {cart.length > 0 ? (
        <div className=" flex flex-row justify-between max-w-6xl mx-auto min-h-[80vh]">
          <div className="flex flex-col justify-start gap-y-5">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col justify-between w-5/12 m-2">
            <div className="m-5 ">
              <div className="text-green-700 text-xl font-bold ">YOUR CART</div>
              <div className="text-green-700 text-[40px] font-bold  mb-3">
                SUMMARY
              </div>
              <p>
                <span className="mr-2 text-lg font-semibold text-gray-800">
                  Total Items :
                </span>
                <span className="text-[22px] font-bold ">{cart.length}</span>
              </p>
            </div>

            <div className="  m-5 mb-15">
              <div className="">
                <span className="text-xl font-semibold text-gray-700 mr-2">
                  Total Amount :
                </span>
                <span className="text-xl font-bold">{totalAmount} </span>
              </div>
              <br />
              <button
                onClick={() => {
                  return toast.success("Shopping Successfull");
                }}
                className="bg-green-700  w-11/12 py-2 rounded-md text-white text-lg font-semibold
                hover:scale-110 transition duration-200 ease-in
                "
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-gray-800">Cart Empty</h1>
          <Link to={"/"}>
            <button
              className="bg-green-700  text-white border-2 border-gray-700 rounded-full font-semibold text-[14px] p-1 px-3 mt-3 uppercase 
          hover:scale-150 hover:bg-green-500
          transition duration-200 ease-in"
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
