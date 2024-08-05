import Link from "next/link";
import React from "react";

export default function NavBar({ navlinks }) {
  return (
    <nav>
      <ul className="flex gap-4">
        {navlinks.map((link, index) => (
          <li key={index}>
            <Link href={`/#${link.href}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
