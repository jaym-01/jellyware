"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import styles from "@/styles/components/header.module.scss";
import { navData } from "@/utils/nav_data";

interface NavItem {
  title: string;
  link: string;
}

interface HeaderProps {
  className?: string;
}

/**
 * Header component inspired by zed.dev's minimal, sticky design
 * Features:
 * - Sticky positioning with dividing lines
 * - Content aligned to main grid system
 * - Responsive behavior that gracefully collapses
 * - Clean typography with balanced proportions
 * - Semantic HTML structure for accessibility
 */
export default function Header({ className }: HeaderProps) {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // Track screen size for responsive behavior
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true);

  /**
   * Handle window resize to determine mobile/desktop layout
   * Automatically closes mobile menu when switching to desktop
   */
  const handleResize = useCallback(() => {
    const isNowMobile = window.innerWidth <= 950;
    setIsMobileScreen(isNowMobile);

    // Close mobile menu when switching to desktop
    if (!isNowMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Set up resize listener for responsive behavior
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  /**
   * Close mobile menu when navigation occurs
   */
  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  /**
   * Toggle mobile menu state
   */
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Extract logo/brand data and navigation items
  const [brandData, ...navigationItems] = navData;

  return (
    // Sticky header wrapper with dividing lines (zed.dev style)
    <div className={`${styles.headerWrapper} ${className || ""}`}>
      <header className={styles.header} role="banner">
        {/* Content container aligned to main grid */}
        <div className={styles.headerContent}>
          {/* Brand/Logo section */}
          <Link
            href={`${brandData.link}/#terminal`}
            className={styles.brand}
            onClick={handleNavClick}
            aria-label="Go to homepage"
          >
            <h1 className={styles.brandTitle}>{brandData.title}</h1>
          </Link>

          {/* Desktop navigation - always visible on large screens */}
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

          {/* Mobile menu toggle button */}
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

        {/* Mobile navigation - conditionally rendered */}
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

/**
 * Reusable navigation link component with proper typing
 * Handles both internal and external links appropriately
 */
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
