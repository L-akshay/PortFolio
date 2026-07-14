import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated share image — matches the site's neutral + pink identity. */
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
        background: "#0a0a0c",
        color: "#f2f2f2",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -100,
          width: 700,
          height: 500,
          borderRadius: 9999,
          background:
            "radial-gradient(circle at 30% 40%, rgba(236,72,153,0.35) 0%, rgba(219,39,119,0.18) 45%, transparent 75%)",
          filter: "blur(60px)",
          display: "flex",
        }}
      />
      <div style={{ display: "flex", fontSize: 26, color: "#ec4899" }}>
        ~/{profile.shortName}
      </div>
      <div style={{ display: "flex", fontSize: 68, fontWeight: 700, marginTop: 20 }}>
        Hi, I&apos;m {profile.name}.
      </div>
      <div style={{ display: "flex", fontSize: 32, color: "#a3a3a3", marginTop: 14 }}>
        {profile.role}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#8a8a8a",
          marginTop: 28,
          maxWidth: 920,
          lineHeight: 1.4,
        }}
      >
        {profile.tagline}
      </div>
    </div>,
    size,
  );
}
