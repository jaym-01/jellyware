"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import styles from "@/styles/components/header.module.scss";
import { navData } from "@/utils/nav_data";
import Cursor from "../Home/Hero/Cursor";

interface NavItem {
  title: string;
  link: string;
}

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true);

  const handleResize = useCallback(() => {
    const isNowMobile = window.innerWidth <= 800;
    setIsMobileScreen(isNowMobile);

    if (!isNowMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const [brandData, ...navigationItems] = navData;

  return (
    <div className={`${styles.headerWrapper} ${className || ""}`}>
      <header className={styles.header} role="banner">
        <div className={styles.headerContent}>
          <Link
            href={brandData.link}
            className={styles.brand}
            onClick={handleNavClick}
            aria-label="Go to homepage"
          >
            <h1 className={styles.brandTitle}>
              <span
                style={{
                  paddingRight: 6,
                  fontWeight: "bold",
                }}
              >
                $
              </span>
              cd ~
              <Cursor blinking />
            </h1>
          </Link>

          <nav
            className={styles.desktopNav}
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((navItem: NavItem, index) => (
              <NavigationLink
                key={`desktop-${index}`}
                navItem={navItem}
                onClick={handleNavClick}
                className={styles.navLink}
              />
            ))}
          </nav>

          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMobileScreen && isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className={styles.mobileNav}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((navItem: NavItem, index) => (
              <NavigationLink
                key={`mobile-${index}`}
                navItem={navItem}
                onClick={handleNavClick}
                className={styles.mobileNavLink}
              />
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}

interface NavigationLinkProps {
  navItem: NavItem;
  onClick: () => void;
  className: string;
}

function NavigationLink({ navItem, onClick, className }: NavigationLinkProps) {
  const isInternalLink = navItem.link.startsWith("/");
  const isCV = navItem.link === "/cv";

  if (isInternalLink) {
    return (
      <Link
        href={navItem.link}
        className={className}
        onClick={onClick}
        {...(isCV ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {navItem.title}
      </Link>
    );
  }

  return (
    <a
      href={navItem.link}
      className={className}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {navItem.title}
    </a>
  );
}
