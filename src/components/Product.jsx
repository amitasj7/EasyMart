import React, { useState } from "react";

function Product(post) {
  const [selected, setSeleted] = useState(false);
  return (
    <div>
      <div className="bg-teal-600 w-100 h-screen">
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={`${post.image}`} alt="" />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      <button>{selected ? <p>Remove Item</p> : <p>Add Item</p>}</button>
    </div>
  );
}

export default Product;
