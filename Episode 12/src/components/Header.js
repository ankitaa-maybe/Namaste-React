import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to out store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-purple-100">
      <div className="flex">
        <img className="w-48" src={LOGO_URL} />
      </div>

      <div className="flex text-2xl">
        <div className="p-4 m-4">
          <ul className="flex items-center p-3 m-2">
            <li className="p-4">
              Online Status: {onlineStatus ? "✅" : "❗️ "}
            </li>
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-4 text-3xl">
              <Link to="/cart">🛒 ({cartItems.length})</Link>
            </li>
            <li>{loggedInUser}</li>
          </ul>
        </div>

        <div className="flex items-center">
          <button
            className="border-box bg-purple-300 px-5 py-2 border-solid rounded-lg mr-4 border "
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
