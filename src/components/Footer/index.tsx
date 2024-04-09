import LOGO from "../../assets/Logo.svg";
const Footer = () => {
  return (
    <footer className="py-16 xl:py-24">
      <div className="container">
        <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <div className="flex flex-col gap-3 mt-4">
              <a className="text-sm font-semibold text-gray-400">Changelog</a>
              <a className="text-sm font-semibold text-gray-400">
                Customer stories
              </a>
              <a className="text-sm font-semibold text-gray-400">Security</a>
              <a className="text-sm font-semibold text-gray-400">Pricing</a>
              <a className="text-sm font-semibold text-gray-400">Solutions</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <div className="flex flex-col gap-3 mt-4">
              <a className="text-sm font-semibold text-gray-400">Changelog</a>
              <a className="text-sm font-semibold text-gray-400">
                Customer stories
              </a>
              <a className="text-sm font-semibold text-gray-400">Security</a>
              <a className="text-sm font-semibold text-gray-400">Pricing</a>
              <a className="text-sm font-semibold text-gray-400">Solutions</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <div className="flex flex-col gap-3 mt-4">
              <a className="text-sm font-semibold text-gray-400">Changelog</a>
              <a className="text-sm font-semibold text-gray-400">
                Customer stories
              </a>
              <a className="text-sm font-semibold text-gray-400">Security</a>
              <a className="text-sm font-semibold text-gray-400">Pricing</a>
              <a className="text-sm font-semibold text-gray-400">Solutions</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <div className="flex flex-col gap-3 mt-4">
              <a className="text-sm font-semibold text-gray-400">Changelog</a>
              <a className="text-sm font-semibold text-gray-400">
                Customer stories
              </a>
              <a className="text-sm font-semibold text-gray-400">Security</a>
              <a className="text-sm font-semibold text-gray-400">Pricing</a>
              <a className="text-sm font-semibold text-gray-400">Solutions</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Product</p>
            <div className="flex flex-col gap-3 mt-4">
              <a className="text-sm font-semibold text-gray-400">Changelog</a>
              <a className="text-sm font-semibold text-gray-400">
                Customer stories
              </a>
              <a className="text-sm font-semibold text-gray-400">Security</a>
              <a className="text-sm font-semibold text-gray-400">Pricing</a>
              <a className="text-sm font-semibold text-gray-400">Solutions</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 pt-6 border-t border-gray-200">
          <img src={LOGO} alt="" />
          <p className="text-sm font-semibold text-gray-400">
            ©2024 Polio LTD. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
