import Link from "next/link";

const Navbar = () => {

  return (
    <div className="bg-black px-20 flex justify-between text-white py-3 mb-10">
        <Link href='/'>
            Home
        </Link>
        <Link href='/cart'>
            Cart
        </Link>
    </div>
  );
}
export default Navbar;
