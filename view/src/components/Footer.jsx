import { SectionWrapper } from "../hoc";

const FooterContent = () => {
  return (
    <div className="text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">About</h5>
            <ul className="mb-0">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Priyank Khobragade
            </h5>
            <ul className="mb-0">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Full Stack Dev
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Contact
            </h5>
            <ul className="mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/priyank-khobragade"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/l0eb"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/loeb___"
                  className="text-gray-300 hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-gray-300">
              Stay Updated
            </h5>

            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="bg-gray-700 text-white rounded-md px-4 py-2 mt-2 focus:outline-none"
              />
              <input
                type="submit"
                value="Send"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-2 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-900 py-4 text-center text-gray-400">
        &copy; 2023 Company Name. All rights reserved.
      </div> */}
    </div>
  );
};

const WrappedFooter = SectionWrapper(FooterContent, "");
const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <WrappedFooter />
    </footer>
  );
};

export default Footer;
