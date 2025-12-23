import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 lg:justify-around">
      {/* Logo */}
      <Image src="/profile-pic.png" alt="Logo Of Website" width={60} height={80} className="py-2" />

      <button className="text-3xl text-black lg:hidden" aria-label="Menu">
        =
      </button>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <h1 className="text-black underline font-semibold">Get Us Services</h1>

        {/* <Link
          href="/blog"
          className="text-black underline hover:text-blue-800 transition duration-200"
        >
          <h2 className="font-semibold">Our Blog</h2>
        </Link> */}
      </div>
    </header>
  );
}
