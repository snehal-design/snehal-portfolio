import { navItems } from "@portfolio/navigation/nav_items";
import Link from "next/link";

export default function NavList() {
  return (
    <ul className="list-none flex gap-5">
     {navItems.map((item, index) => {
        return(
            <li key={index}><Link href={item.link}>{item.name}</Link></li>
        )
     })}
    </ul>
  );
}
