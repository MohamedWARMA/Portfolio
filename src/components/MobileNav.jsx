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
                <dv className="mt-2 mb-14 text-center text-xl">
                    <Link href={'/'}>Mohamed<span className="text-accent">.</span></Link>
                </dv>

                <nav className="flex flex-col justify-center items-center gap-4">
                    {mylinks.map((mylink, index) =>{
                        return <Link href={mylink.path} key={index} className={`${mylink.path === pathname && "text-accent border-b-2 border-accent" } text-[13px] capitalize hover:text-accent transition-all `}>{mylink.name}</Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav