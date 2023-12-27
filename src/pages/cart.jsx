import React, { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}

      <div>
        <div>
          <div>YOur Cart</div>
          <div>Summmay</div>
          <p>
            <span>Toal Items: {cart.length}</span>
          </p>
        </div>

        <div> Total Amount : ${totalAmount}</div>
      </div>
    </div>
  );
};

export default cart;
