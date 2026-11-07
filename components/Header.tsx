"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function key(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (event.shiftKey && document.activeElement === links[0]) {
          event.preventDefault();
          toggle.current?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === links[links.length - 1]
        ) {
          event.preventDefault();
          toggle.current?.focus();
        } else if (document.activeElement === toggle.current) {
          event.preventDefault();
          (event.shiftKey ? links[links.length - 1] : links[0]).focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="Project Rebirth home">
          <Image src="/logo.png" alt="" width={64} height={64} priority />
          <span>
            Project Rebirth<small>Communities. Dignity. Opportunity.</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about-us">About us</Link>
          <Link href="/community-programmes">Programmes</Link>
          <Link href="/economic-opportunities">Opportunities</Link>
          <Link href="/impact-and-learning">Impact</Link>
        </nav>
        <div className="header-actions">
          <Link href="/get-involved" className="button-primary header-cta">
            Get involved <ArrowUpRight size={16} />
          </Link>
          <button
            ref={toggle}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            className="menu-toggle"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          ref={panel}
          id="site-menu"
          className="site-menu"
          aria-label="All pages"
        >
          <div className="site-container menu-grid">
            {navigation.map(([href, label], i) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <small>{String(i + 1).padStart(2, "0")}</small>
                {label}
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
