"use client"
import mylinks from "@/components/utils/MyLinks"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link";

function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <dv className="mt-32 mb-32 text-center text-2xl">
                    <Link href={'/'}>Mohamed W.</Link>
                </dv>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {mylinks.map((mylink, index) =>{
                        return <Link href={mylink.path} key={index} className={`${mylink.path === pathname && "text-accent border-b-2 border-accent" } text-xl capitalize hover:text-accent transition-all`}>{mylink.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav