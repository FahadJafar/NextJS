import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <nav>
                <div className="Heading">
                    <Image src="/next.svg" height={65} width={135}/>
                    {/* <h2>Next.JS</h2> */}
                </div>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Lists">Lists</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;
