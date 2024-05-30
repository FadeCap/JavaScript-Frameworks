import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink";


export default function Footer() {
    return(
        
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-between p-4 bg-gray-800 border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">FadeCap</Link>. All Rights Reserved.
    </span>
        <li className="flex">
            <CustomLink to="/contact" className="hover:underline">Contact</CustomLink>
        </li>
    
</footer>

    )
};

