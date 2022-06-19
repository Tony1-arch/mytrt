import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Image src="/log.jpg" alt='logo' width={100} height={100}/>
        
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/blog/"><a>Blog</a></Link>
    </nav>
);
}
 
export default Navbar;