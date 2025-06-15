import Image from "next/image";
import LandingPageNavBar from "./_components/navbar";
type props = {
    children: React.ReactNode
}
export default function Layout({children}:props) {
  return (
<div className="flex flex-col py-10 px-10 xl:px-0 container">
<LandingPageNavBar/>
    {children}
</div>
  );
}
