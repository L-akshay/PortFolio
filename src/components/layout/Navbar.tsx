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

const sectionLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
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
        scrolled ? "border-border bg-background/85" : "border-transparent bg-background/50",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 w-full max-w-[52rem] items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <span className="text-primary">~/</span>
          {profile.shortName}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex">
          {sectionLinks.map(({ id, label }) => (
            <a
              key={id}
              href={hrefFor(id)}
              aria-current={activeSection === id ? "true" : undefined}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                activeSection === id && isHome
                  ? "text-primary"
                  : "text-muted hover:text-foreground",
              )}
            >
              {label}
            </a>
          ))}
          <Button asChild variant="outline" size="sm" className="ml-2">
            <Link href="/resume">
              <FileText />
              Resume
            </Link>
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
                className="z-50 w-44 rounded-xl border border-border bg-surface p-1.5 shadow-lg data-[state=open]:animate-in"
              >
                {sectionLinks.map(({ id, label }) => (
                  <DropdownMenu.Item key={id} asChild>
                    <a
                      href={hrefFor(id)}
                      className="block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-[highlighted]:bg-elevated"
                    >
                      {label}
                    </a>
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item asChild>
                  <Link
                    href="/resume"
                    className="block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-[highlighted]:bg-elevated"
                  >
                    Resume
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}
