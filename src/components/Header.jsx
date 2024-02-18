import { useState, useEffect, useRef } from "react";
import image from "../assets/imgs/logo.svg";

function Header() {
  const [Links] = useState(["Features", "Team", "SignIn"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0 ";
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center  mx-auto px-[30px] gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/dist">
          <img src={image} alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {Links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLocaleLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-all duration-700"
                >
                  {link == "SignIn" ? "Sign in" : link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
