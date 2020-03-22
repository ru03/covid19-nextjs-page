import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div className="flex item-center text-white mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">COVID 19</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
