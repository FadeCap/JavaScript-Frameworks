import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav flex justify-between gap-2 px-2">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul className="navLinks flex p-0 m-0 gap-4 list-none">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Checkout">Checkout</CustomLink>
        <CustomLink to="/Cart">Cart</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
