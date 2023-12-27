import React, { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

      console.log("YOUR DATA IS : ", data);
    } catch (error) {
      console.log("YOUR ERROR IS WHEN FETCH API : ", error);
      setPosts([]);
    }

    setLoading(false);
  }

  // use useEffect hook to call fetchdata function after render screen
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length <= 0 ? (
        <div>No Data Found</div>
      ) : (
        <div>
          {posts.map((post) => {
            <Product key={post.id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
