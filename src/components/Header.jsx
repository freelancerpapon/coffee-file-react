import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="text-xl space-x-5 text-center">
      <NavLink to='/'>home</NavLink>
      <NavLink to='/users'>User</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
      <NavLink to='/signin'>signin</NavLink>
    </div>
  );
};

export default Header;