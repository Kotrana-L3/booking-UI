import Link from "next/link"
import { NavItem } from "@/app/interface/navigation/navigationInterface"
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
export default function Header() {
    const navItem: NavItem[] = [
        { item: "Boutique", path: "/home" },
        { item: "Notre histoire", path: "/Notre histoire" },
        { item: "Blog", path: "/Blog" },
        { item: "Promo", path: "/Promo" },
        { item: "Contact", path: "/Contact" }
    ]
    return (
        <header className="flex flex-col items-center gap-20">
            <div className="bg-yellow-900 w-full text-center py-2">
                <h3 className="text-white font-light tracking-widest">LIVRAISON OFFERTE POUR +50$ D'ACHAT</h3>
            </div>
            <nav className="flex flex-row gap-48 w-full justify-center items-center">
                <ul className="flex flex-row gap-9">
                    {
                        navItem.map(navItem => (
                            <li className="uppercase font-light" key={navItem.item}>
                                <Link href={navItem.path}>{navItem.item}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="border-2 border-black px-5 py-1">
                    <Link href={'/home'} className="text-black text-3xl">
                        FRAIS
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <div className=" flex flex-row border-b-2 border-black items-center py-3 gap-2">
                        <IoSearchOutline className="text-2xl" />
                        <input type="text" placeholder="Rechercer..." />
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center gap-2">
                            <MdAccountCircle className="text-2xl" />
                            <p className="font-light ">Connexion</p>
                        </div>
                        <SlBasket />
                    </div>
                </div>

            </nav>
        </header>
    )
}