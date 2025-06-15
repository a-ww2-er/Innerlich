import Image from "next/image";
// import LandingPageNavBar from "./_components/navbar";
type props = {
    children: React.ReactNode
}
export default function Layout({children}:props) {
  return (
<div className="flex justify-center h-screen items-center container">
{/* <LandingPageNavBar/> */}
    {children}
</div>
  );
}
