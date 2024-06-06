import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <div className="container flex justify-center align-center">
            <form className="w-full max-w-sm" action="/" method="POST">
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required minLength="3"/>

                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required minLength="3"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="body">Body:</label>
                    <textarea id="body" name="body" required minLength="3"></textarea>

                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}