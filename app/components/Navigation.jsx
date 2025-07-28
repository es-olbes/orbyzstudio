'use client'
import  { useState} from "react"
import Image from "next/image";
import Link from "next/link";

export default function Navigation () {
  const [navOpen, setNavOpen] = useState(false)
  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Projects", href: "/projects" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  return (
    <nav 
        className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-black/80 border-b 
        border-black/[.400] dark:border-white/[.600] flex items-center justify-between 
        px-6 sm:px-12">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/light.svg"
            alt="Orbyz logo"
            width={100}
            height={100}
            priority
          />
          
        </Link>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setNavOpen(!navOpen)} className="sm:hidden">
          <Image
            className="dark:invert"
            src="/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            priority
          />
        </button>
        <ul className="hidden sm:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="text-sm font-medium">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {navOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white/80 dark:bg-black/80 border-b border-black/[.400] dark:border-white/[.600] flex flex-col items-center gap-4 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="text-sm font-medium">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
