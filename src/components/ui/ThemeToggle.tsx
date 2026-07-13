"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Button";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // true after hydration, false during SSR — avoids a wrong-icon flash.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Render a stable placeholder before hydration to avoid a theme flash.
  if (!mounted) {
    return <Button variant="outline" size="icon" aria-hidden="true" disabled />;
  }

  const isDark = resolvedTheme === "dark";
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
