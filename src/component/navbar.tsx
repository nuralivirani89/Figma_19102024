import Link from "next/link";


export default function Navbar(){
    return(
        <div className="navbar">
            <ul className="navLinks">
                    <li className="link"><Link href="#works"> Works</Link></li>
                    <li className="link"><Link href="#Blog">Blog</Link></li>
                    <li className="link"><Link href="#Contact">Contact</Link></li>  
            </ul>
        </div>
    )
}