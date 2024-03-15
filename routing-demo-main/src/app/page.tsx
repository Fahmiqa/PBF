import Blog from "@/blogs/page";
import About from "./about/page";
import Profile from "./about/profile";
import Link from "next/link";
export default function Home() {
    return (
    <div>
    <h1>Welcome to Home</h1>
    <Link href='/profile'>Profile</Link>
    <Link href='/about'>About</Link>
    <Link href='/blogs'>Blogs</Link>
    <Link href='/products'>Products</Link>
    <br />
    <About/>
    <br>
    </br>
    <Profile/>
    <Blog/>
    </div>
    );
  }