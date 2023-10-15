import React from "react";
import Astronaut from "../../assets/AstronautIcon2.png";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const top = document.querySelector("#btn-top");

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
      top.classList.remove("hidden");
      top.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      top.classList.add("hidden");
      top.classList.remove("flex");
    }
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link
                to="/"
                className="font-bold text-lg text-sky-600 block py-2"
              >
                <img src={Astronaut} className="w-1/4" alt="Astronaut" />
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={this.toggleMenu}
              >
                <span
                  className={`hamburger-menu transition duration-300 ease-in-out origin-top-left ${
                    isMenuOpen ? "active" : ""
                  }`}
                ></span>
                <span
                  className={`hamburger-menu transition duration-300 ease-in-out ${
                    isMenuOpen ? "active" : ""
                  }`}
                ></span>
                <span
                  className={`hamburger-menu transition duration-300 ease-in-out origin-bottom-left ${
                    isMenuOpen ? "active" : ""
                  }`}
                ></span>
              </button>
              <nav
                id="nav-menu"
                className={`${
                  isMenuOpen ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      to="/"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/about"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/experience"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      Experience
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/skills"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/interest"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      Interest
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/awards"
                      className="text-base font-bold text-dark py-2 mx-8 flex hover:text-primary"
                    >
                      Awards
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
