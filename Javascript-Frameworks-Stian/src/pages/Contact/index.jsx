import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        body: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        setFormData({
            name: '',
            subject: '',
            email: '',
            body: '',
        });
    };

    return (
        <div className="container flex justify-center align-center">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <label htmlFor="name" className="block mb-2">Full Name:</label>
                    <input type="text" id="name" name="name" required minLength="3" className="w-full p-2 mb-4" value={formData.name} onChange={handleChange} />

                    <label htmlFor="subject" className="block mb-2">Subject:</label>
                    <input type="text" id="subject" name="subject" required minLength="3" className="w-full p-2 mb-4" value={formData.subject} onChange={handleChange} />

                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 mb-4" value={formData.email} onChange={handleChange} />

                    <label htmlFor="body" className="block mb-2">Body:</label>
                    <textarea id="body" name="body" required minLength="3" className="w-full p-2 mb-4" value={formData.body} onChange={handleChange}></textarea>

                    <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded-md" />
                </div>
            </form>
        </div>
    );
}