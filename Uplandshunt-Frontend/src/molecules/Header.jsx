import { Link } from "react-router-dom";

import { SectionWrapper } from "../Layout";

const Header = () => {
  return (
    <SectionWrapper>
      <header className="flex justify-between items-center mb-4">
        <p>Sample Logo</p>
        <nav>
          <ul className="flex justify-between items-center list-none text-primary font-semibold text-lg">
            <Link to="/legal/news">
              <li className="mr-6">Legal</li>
            </Link>
            <Link to="/about">
              <li className="mr-6">About Us</li>
            </Link>
            <Link to="/contactus">
              <li className="mr-6">Contact Us</li>
            </Link>
            <button className="border border-primary rounded-md py-2 px-4 mr-6">
              Register
            </button>
            <Link to="/login">
              <button className="text-white bg-primary rounded-md py-2 px-4 mr-6">
                Login
              </button>
            </Link>
          </ul>
        </nav>
      </header>
    </SectionWrapper>
  );
};

export { Header };
