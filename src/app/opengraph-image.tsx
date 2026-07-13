import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated share image — no static asset to maintain. */
export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#090b10",
        color: "#f5f7fa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#8b7cff" }}>
        ~/{profile.shortName}
      </div>
      <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 24 }}>
        Hi, I&apos;m {profile.name}.
      </div>
      <div style={{ display: "flex", fontSize: 36, color: "#55d6d0", marginTop: 16 }}>
        {profile.role}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#98a2b3",
          marginTop: 32,
          maxWidth: 900,
        }}
      >
        {profile.tagline}
      </div>
    </div>,
    size,
  );
}
