import { Link } from "react-router-dom";

export default function CheckoutPage() {
    return (
        <div className="Checkout-container flex items-center justify-center py-10 my-10">
            <div className="flex flex-col items-center">
                <h1 className="text-center">Checkout completed</h1>
                <Link to="/" className="text-center underline hover:no-underline text-blue-500 my-4">Take me back to the store</Link>
            </div>
        </div>
    );
}
