import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

import { remove } from "../redux/slice/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };
  return (
    <div className=" m-5 flex flex-col h-[200px]">
      <div className="flex flex-row justify-evenly gap-5 h-full w-full">
        <div className="h-full w-4/12">
          <img className="h-full" src={item.image} alt="Your Product" />
        </div>
        <div className=" w-8/12 flex flex-col justify-evenly">
          <h1 className="text-2xl font-bold text-gray-800 ">{item.title}</h1>
          <h1 className="text-gray-400 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div
            className="flex flex-row justify-between gap-12 items-center w-full mt-5
          
          "
          >
            <p className="text-green-600 font-bold text-xl">$ {item.price}</p>
            <div
              className="w-[30px] h-[30px] rounded-full bg-red-300 flex justify-center items-center
              hover:scale-125 transition duration-200 ease-in 
              cursor-pointer
              "
              onClick={removeFromCart}
            >
              <MdDelete className="text-red-900 " />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className="border-solid border-black h-5" />
    </div>
  );
};

export default CartItem;
