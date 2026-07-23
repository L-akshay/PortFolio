"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { resumePdfHref } from "@/data/site-constants";

const sectionLinks = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (homepage only).
  useEffect(() => {
    if (!isHome) return;
    const sections = sectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85"
          : "bg-background/50 border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <span className="text-secondary">~/</span>
          {profile.shortName}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "rounded-md px-2.5 py-1.5 text-sm transition-colors",
              pathname === "/" ? "text-foreground font-medium" : "text-muted hover:text-foreground",
            )}
          >
            Home
          </Link>
          {sectionLinks.map(({ id, label }) => (
            <a
              key={id}
              href={hrefFor(id)}
              aria-current={activeSection === id ? "true" : undefined}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                activeSection === id && isHome
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground",
              )}
            >
              {label}
            </a>
          ))}
          <Button asChild variant="outline" size="sm" className="ml-2">
            <a href={resumePdfHref} download>
              <FileText />
              Resume
            </a>
          </Button>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: theme toggle + dropdown menu */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <Menu />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                sideOffset={8}
                className="border-border bg-surface data-[state=open]:animate-in z-50 w-44 rounded-xl border p-1.5 shadow-lg"
              >
                <DropdownMenu.Item asChild>
                  <Link
                    href="/"
                    className="data-[highlighted]:bg-elevated block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none"
                  >
                    Home
                  </Link>
                </DropdownMenu.Item>
                {sectionLinks.map(({ id, label }) => (
                  <DropdownMenu.Item key={id} asChild>
                    <a
                      href={hrefFor(id)}
                      className="data-[highlighted]:bg-elevated block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none"
                    >
                      {label}
                    </a>
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Separator className="bg-border my-1 h-px" />
                <DropdownMenu.Item asChild>
                  <a
                    href={resumePdfHref}
                    download
                    className="data-[highlighted]:bg-elevated block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none"
                  >
                    Resume
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}
