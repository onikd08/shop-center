import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src={"./assets/svg/menu.svg"}
            width={20}
            height={20}
            alt="menu icon"
            className="lg:hidden"
          />

          <Link href="/">
            <Image
              priority
              src={"./assets/lws-logo-black.svg"}
              height={40}
              width={120}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src={"./assets/svg/avatar.svg"}
          width={18}
          height={18}
          alt="login account avatar"
          className="hidden lg:block"
        />
        <Image
          src={"./assets/svg/shopping-Cart.svg"}
          width={20}
          height={20}
          alt="shopping cart icon"
          className="block"
        />
      </div>
    </nav>
  );
}
