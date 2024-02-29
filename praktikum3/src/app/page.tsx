// import Image from "next/image";
// import Profile from "../components/profile";
// export default function Home() {
//     return (
//       <div>
//          <h2 className="text-center font-bold mb-4">Ilmuwan Yang Luar Biasa</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           <div className="flex justify-center">
//             <Profile></Profile>
//           </div>
//           <div className="flex justify-center">
//             <Profile></Profile>
//           </div>
//           <div className="flex justify-center">
//             <Profile></Profile>
//           </div>
//         </div>
//       </div>
//   );
// }


// import Image from "next/image";
// import { Gallery } from "@/components/gallery";
// export default function Home() {
//     return (
//       <div>
//          <h2 className="text-center font-bold mb-4">Ilmuwan Yang Luar Biasa</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           <div className="flex justify-center">
//             <Gallery/>
//           </div>
//         </div>
//       </div>
//   );
// }

import { Gallery } from "@/components/gallery";
import MyGallery from "@/components/mygallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <MyGallery />
    </section>
  );
}

