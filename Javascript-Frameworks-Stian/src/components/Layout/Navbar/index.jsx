import { Link } from "react-router-dom";
import CartButton from "../../ui/CartButton";
import CustomLink from "../../CustomLink";

export default function Navbar() {
  return (
    <nav className="nav flex justify-between gap-2 px-2">
      <Link to="/" className="site-title">
        FadeShop
      </Link>
      <ul className="navLinks flex p-0 m-0 gap-4 list-none">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Cart">
          <CartButton />
        </CustomLink>
      </ul>
    </nav>
  );
}


