import { Button } from "@/components/ui/button";
import { MenuIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageNavBar() {
  return (
<div className="flex w-full justify-between items-center">
    <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-8 h-8"/>
        <Image alt="logo" src="/innerlich-logo.svg"
        width={40} height={40}/>
        Innerlich
    </div>
    <div className="hidden items-center lg:flex gap-x-10">
        <Link 
        className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
        href="/">Home</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
    </div>
    <Link href="/auth/sign-in">
    
    <Button className="text-base flex gap-x-2"><User fill="#000"/> Login</Button></Link>
</div>
  );
}