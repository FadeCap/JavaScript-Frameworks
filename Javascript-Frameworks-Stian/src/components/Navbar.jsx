export default function Navbar () {
    return (<nav className="nav d-flex">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/CheckoutPage">Checkout</a>
            </li>
            <li>
                <a href="/CartPage">Cart</a>
            </li>
        </ul>
    </nav>
    )
}