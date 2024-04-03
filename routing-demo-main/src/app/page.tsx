import Blog from "@/blogs/page";
import About from "./about/page";
import Profile from "./about/profile";
import Link from "next/link";
export default function Home() {
    return (
    <div>
    <h1>Welcome to Home</h1>
    <Link href='/profile'>Profile</Link>
    <br />
    <Link href='/about'>About</Link>
    <br />
    <Link href='/blogs'>Blogs</Link>
    <br />
    <Link href='/products'>Products</Link>
    <About/>
    <br>
    </br>
    <Profile/>
    <Blog/>
    </div>
    );
  }