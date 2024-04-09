import Logo from "../../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1025) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="border-b-gray-100 border h-20 z-10">
      <div className="container">
        <div className="flex gap-10 items-center">
          <img src={Logo} alt="" />

          <nav
            className={` ${
              toggle
                ? "flex flex-col absolute top-20 right-0 bg-white border border-gray-100 rounded-lg p-4 mt-2 mr-2 shadow"
                : "hidden lg:flex lg:gap-8"
            }`}
          >
            <a
              className={`font-semibold text-gray-900 hover:text-gray-900 ${
                toggle ? "px-6 py-2 rounded  hover:bg-gray-50" : ""
              }`}
              href="#home"
            >
              Home
            </a>
            <a
              className={`font-semibold text-gray-900 hover:text-gray-900 ${
                toggle ? "px-6 py-2 rounded  hover:bg-gray-50" : ""
              }`}
              href="#customers"
            >
              Customers
            </a>
            <a
              className={`font-semibold text-gray-900 hover:text-gray-900 ${
                toggle ? "px-6 py-2 rounded  hover:bg-gray-50" : ""
              }`}
              href="#feature"
            >
              Features
            </a>
            <a
              className={`font-semibold text-gray-900 hover:text-gray-900 ${
                toggle ? "px-6 py-2 rounded  hover:bg-gray-50" : ""
              }`}
              href="#pricing"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-normal gap-3">
          <Button variant="secondary" size="small" className="hidden lg:block">
            Sign in
          </Button>
          <Button variant="primary" size="small" className="hidden lg:block">
            Start for Free
          </Button>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="w-10 h-10 inline-flex lg:hidden items-center justify-center rounded-lg hover:bg-gray-200"
          >
            {toggle ? (
              <AiOutlineClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
