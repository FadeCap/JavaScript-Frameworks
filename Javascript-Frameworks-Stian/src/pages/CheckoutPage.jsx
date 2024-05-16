import { Link } from "react-router-dom";

export default function CheckoutPage() {
    return (
        <div className="Checkout-container flex align-middle">
            <div className="flex-col align-middle center-content">
                <h1>Checkout completed</h1>
                <Link to="/">Take me back to the store</Link>
            </div>
        </div>
    );
}
