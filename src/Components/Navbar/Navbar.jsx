import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/univercity-logo.png";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashborad");
  const [activeDDLink, setDDActiveLink] = useState("teachers");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (value) => {
    setDDActiveLink(value);
    props.onLinkClick(value);
  };

  // updating active link while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="logo">
        <a href="#logo">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="navbar__wrapper">
        <div className="title__container">
          <h2>برنامه راهبردی دانشکده آمار ریاضی و رایانه</h2>
        </div>

        <div className="links__theme__container">
          <ul className={`links__container ${menuOpen ? "open" : ""}`}>
            <li>
              <select
                name=""
                id="dashborad"
                className="links__dropdown"
                value={activeDDLink}
                onChange={(e) => handleLinkClick(e.target.value)}
              >
                <option value="teachers">گروه ها</option>
                <option value="groups">استادان</option>
              </select>
            </li>

            <li>
              <a
                href="#history"
                className={activeLink === "history" ? "L__active" : ""}
              >
                تاریخچه
              </a>
            </li>

            <li>
              <a
                href="#introduction"
                className={activeLink === "introduction" ? "L__active" : ""}
              >
                معرفی
              </a>
            </li>

            <li>
              <a
                href="#majors"
                className={activeLink === "majors" ? "L__active" : ""}
              >
                رشته ها و گروه های درسی
              </a>
            </li>

            <li>
              <a
                href="#chart"
                className={activeLink === "chart" ? "L__active" : ""}
              >
                چارت سازمانی
              </a>
            </li>

            <li>
              <a
                href="#leaders"
                className={activeLink === "leaders" ? "L__active" : ""}
              >
                روسای قبلی دانشکده
              </a>
            </li>
          </ul>

          <span className="menu__toggle" onClick={toggleMenu}>
            <i className="bx bx-menu-alt-left menu__icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
