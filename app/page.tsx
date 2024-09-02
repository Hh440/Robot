

import dynamic from "next/dynamic";

const Robot = dynamic(()=>import('./component/Robot'),{
  ssr:false
})
export default function Home() {
  return (
   <main className="h-full">
    <Robot/>

   </main>
  );
}
