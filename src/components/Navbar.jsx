import { FaShoppingCart } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-teal-50">
      <div className="flex flex-row justify-between bg-red-50">
        <NavLink to="/">
          <div>
            <img
              className="bg-orange"
              src="../assets/logo/factom2k.png"
              alt="Facto M2k LOGO"
            />
          </div>
        </NavLink>

        <div className="flex flex-col justify-evenly bg-orange-500">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
