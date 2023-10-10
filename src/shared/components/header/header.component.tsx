import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/sign-up">Registration</NavLink>
      <NavLink to="/sign-in">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products-list</NavLink>
      <NavLink to="/products/:id">Product</NavLink>
    </div>
  );
};

export default Header;
