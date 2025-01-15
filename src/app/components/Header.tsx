import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-800 text-sm p-4 text-white relative w-1/2 mx-auto mt-10 rounded flex items-center justify-between">
      {/* Logo */}
      <img
        src="/assets/icon.svg"
        alt="Logo"
        className="h-14 w-14 object-contain rounded-full"
      />

      {/* Navigation buttons */}
      <div className="flex space-x-6">
        <Link href="#home">
          <button className="hover:text-gray-300">HOME</button>
        </Link>
        <Link href="#events">
          <button className="hover:text-gray-300">EVENT</button>
        </Link>
        <Link href="#team">
          <button className="hover:text-gray-300">TEAM</button>
        </Link>
        <Link href="#contact-us">
          <button className="hover:text-gray-300">CONTACT US</button>
        </Link>
      </div>
    </div>
  );
}
