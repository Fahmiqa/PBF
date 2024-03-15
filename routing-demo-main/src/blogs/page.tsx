import FirstBlog from "./first/page";
import SecondBlog from "./first/second/page";

export default function Blog() {
    return (
        <div>
          <h1>Blog</h1>
          <FirstBlog/>
          <SecondBlog/>
        </div>
    );
  }