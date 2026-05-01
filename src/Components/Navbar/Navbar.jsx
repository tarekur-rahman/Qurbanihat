import Link from "next/link";

const Navbar = () => {

  return (

    <div className="bg-green-700 text-white">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">
          QurbaniHat
        </h1>

        <div className="flex gap-5">

          <Link href="/">
            Home
          </Link>

          <Link href="/all-animals">
            All Animals
          </Link>

          <Link href="/login">
            Login
          </Link>

          <Link href="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Navbar;