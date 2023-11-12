import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-[80%] h-20 bg-red-900 bg-opacity-90 flex justify-between">
      <img
        src="https://www.pngall.com/wp-content/uploads/13/Fedex-Logo-PNG-Images-HD.png"
        alt="logo"
        className="w-28 mx-4"
      />
      <div>
        <ul className="flex m-2 font-semibold text-md text-white">
          <Link to="/">
            <li className="p-2 m-2">Home</li>
          </Link>
          <Link to="/shop">
            <li className="p-2 m-2">Shop</li>
          </Link>
          <Link to="/cart">
            <li className="p-2 m-2">Cart({cartItems.length})</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
