"use client";
import { useState, useEffect } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
import logo from "../../../assets/images/logo/logo.svg";
import Container from "../Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "@/provider/LanguageProvider";
import {
  Home,
  Info,
  Work,
  Book,
  Event,
  Language,
  VolunteerActivism,
  School,
  HealthAndSafety,
  Agriculture,
  WaterDrop,
  Forest,
  KeyboardArrowDown,
  DonutLarge,
  People,
  Description,
  Campaign,
} from "@mui/icons-material";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleMobileDropdown = (name: string) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  const navItems = [
    { nameEn: "Home", nameBn: "প্রচ্ছদ", href: "/", icon: <Home /> },
    {
      nameEn: "Who We Are",
      nameBn: "আমাদের সম্পর্কে",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          nameEn: "Message of President",
          nameBn: "প্রেসিডেন্ট এর বাণী",
          href: "/message-of-president",
          icon: <Campaign />,
        },
        {
          nameEn: "Message of Vice President",
          nameBn: "ভাইস প্রেসিডেন্ট এর বাণী",
          href: "/message-of-vice-president",
          icon: <Campaign />,
        },
        {
          nameEn: "Message of Executive Director",
          nameBn: "নির্বাহী পরিচালক এর বাণী",
          href: "/message-of-director",
          icon: <Campaign />,
        },
        {
          nameEn: "Committee",
          nameBn: "কমিটি",
          href: "/committee",
          icon: <People />,
        },
        {
          nameEn: "About Us",
          nameBn: "আমাদের সম্পর্কে",
          href: "/about",
          icon: <Info />,
        },
        {
          nameEn: "Our Volunteers",
          nameBn: "আমাদের স্বেচ্ছাসেবক",
          href: "/volunteer",
          icon: <VolunteerActivism />,
        },
      ],
    },
    {
      nameEn: "What We Do",
      nameBn: "আমাদের কার্যক্রম",
      href: "#",
      hasDropdown: true,
      icon: <Work />,
      dropdownItems: [
        {
          nameEn: "Our Projects",
          nameBn: "আমাদের প্রকল্প",
          href: "/our-projects",
          icon: <Work />,
        },
        {
          nameEn: "ZRF Education Programs",
          nameBn: "জেডআরএফ শিক্ষা কার্যক্রম",
          href: "/education",
          icon: <School />,
        },
        {
          nameEn: "ZRF Rehabilitation Programs",
          nameBn: "জেডআরএফ পুনর্বাসন কার্যক্রম",
          href: "/whatwedo/rehabilitation",
          icon: <VolunteerActivism />,
        },
        {
          nameEn: "Covid Programs",
          nameBn: "কোভিড কার্যক্রম",
          href: "/whatwedo/covid",
          icon: <HealthAndSafety />,
        },
        {
          nameEn: "Climate Change Programs",
          nameBn: "জলবায়ু পরিবর্তন কার্যক্রম",
          href: "/climate-change",
          icon: <Forest />,
        },
        {
          nameEn: "Health Services Programs",
          nameBn: "স্বাস্থ্য সেবা কার্যক্রম",
          href: "/health-services",
          icon: <HealthAndSafety />,
        },
        {
          nameEn: "Our Initiatives",
          nameBn: "আমাদের উদ্যোগ",
          href: "/whatwedo/initiatives",
          icon: <Agriculture />,
        },
        {
          nameEn: "Our Programs",
          nameBn: "আমাদের কর্মসূচি",
          href: "/program",
          icon: <WaterDrop />,
        },
      ],
    },
    {
      nameEn: "Biography",
      nameBn: "জীবনী",
      href: "/ziaur-rahman",
      icon: <Description />,
    },
    { nameEn: "E-Books", nameBn: "ই-বুক", href: "/ebooks", icon: <Book /> },
    {
      nameEn: "Upcoming Programs",
      nameBn: "আসন্ন প্রোগ্রাম",
      href: "/news",
      icon: <Event />,
    },
  ];

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <Container>
          <div className="header-container">
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              className="logo-link"
              onClick={closeMobileMenu}
            >
              <div className="logo-wrapper">
                <div className="logo-image-wrapper">
                  <Image
                    src={logo}
                    alt="Ziaur Rahman Foundation Logo"
                    className="logo-image"
                    width={60}
                    height={60}
                    priority
                  />
                  <div className="logo-glow"></div>
                </div>
              </div>
            </Box>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <ul className="nav-list">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${item.hasDropdown ? "has-dropdown" : ""}`}
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(item.nameEn)
                    }
                    onMouseLeave={() =>
                      item.hasDropdown && setActiveDropdown(null)
                    }
                  >
                    <Link
                      href={item.href}
                      className="nav-link"
                      onClick={closeMobileMenu}
                    >
                      {/* <span className="nav-icon">{item.icon}</span> */}
                      <span>
                        {language === "ENG" ? item.nameEn : item.nameBn}
                      </span>
                      {item.hasDropdown && (
                        <KeyboardArrowDown className="dropdown-icon" />
                      )}
                    </Link>

                    {item.hasDropdown && (
                      <ul
                        className={`dropdown-menu ${activeDropdown === item.nameEn ? "active" : ""}`}
                      >
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <li key={subIndex} className="dropdown-item">
                            <Link href={subItem.href} onClick={closeMobileMenu}>
                              <span className="dropdown-icon-small">
                                {subItem.icon}
                              </span>
                              <span>
                                {language === "ENG"
                                  ? subItem.nameEn
                                  : subItem.nameBn}
                              </span>
                              <span className="dropdown-arrow">
                                <KeyboardArrowDown />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Switcher */}
            <div className="language-switcher ">
              <button
                onClick={() => setLanguage("ENG")}
                className={`lang-btn ${language === "ENG" ? "active" : ""}`}
              >
                <Language className="lang-icon" />
                <span>ENG</span>
              </button>
              <button
                onClick={() => setLanguage("BNG")}
                className={`lang-btn ${language === "BNG" ? "active" : ""}`}
              >
                <span>বাংলা</span>
              </button>
            </div>

            {/* Donate Button */}
            <Link href="/donations">
              <button className="donate-btn ">
                <DonutLarge className="donate-icon" />
                <span>{language === "ENG" ? "Donate Now" : "দান করুন"}</span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <div className="mobile-logo-image">
              <Image src={logo} alt="Logo" width={40} height={40} />
            </div>
            <div>
              <div className="mobile-logo-title">Ziaur Rahman</div>
              <div className="mobile-logo-subtitle">Foundation</div>
            </div>
          </div>
          <button className="mobile-close-btn" onClick={closeMobileMenu}>
            <CloseIcon />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="mobile-nav-item">
              {item.hasDropdown ? (
                <>
                  <div
                    className={`mobile-nav-link mobile-dropdown-trigger ${activeMobileDropdown === item.nameEn ? "active" : ""}`}
                    onClick={() => toggleMobileDropdown(item.nameEn)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span>
                      {language === "ENG" ? item.nameEn : item.nameBn}
                    </span>
                    <KeyboardArrowDownIcon className="dropdown-icon-mobile" />
                  </div>
                  <ul
                    className={`mobile-dropdown ${activeMobileDropdown === item.nameEn ? "active" : ""}`}
                  >
                    {item.dropdownItems?.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} onClick={closeMobileMenu}>
                          <span className="dropdown-icon-small">
                            {subItem.icon}
                          </span>
                          <span>
                            {language === "ENG"
                              ? subItem.nameEn
                              : subItem.nameBn}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{language === "ENG" ? item.nameEn : item.nameBn}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-donate ">
          <Link href="/donation" onClick={closeMobileMenu}>
            <button className="mobile-donate-btn">
              <DonutLarge />
              <span>{language === "ENG" ? "Donate Now" : "দান করুন"}</span>
            </button>
          </Link>
        </div>

        <div className="mobile-language">
          <button
            onClick={() => {
              setLanguage("ENG");
              closeMobileMenu();
            }}
            className={`mobile-lang-btn ${language === "ENG" ? "active" : ""}`}
          >
            English
          </button>
          <button
            onClick={() => {
              setLanguage("BNG");
              closeMobileMenu();
            }}
            className={`mobile-lang-btn ${language === "BNG" ? "active" : ""}`}
          >
            বাংলা
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
