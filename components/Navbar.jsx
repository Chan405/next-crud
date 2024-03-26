import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href="/" className="text-white font-bold">
        Channie
      </Link>
      <Link href="/addtopic" className="bg-white p-2">
        Add Post
      </Link>
    </nav>
  );
}

export default Navbar;
