import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Arena — Contained AI Competition Through Physical Isolation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c1917",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.15), transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 500,
            color: "#dc2626",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          A Proposal
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            color: "#fafaf9",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          THE ARENA
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "rgba(220, 38, 38, 0.6)", display: "flex" }} />
          <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "rgba(220, 38, 38, 0.6)", display: "flex" }} />
          <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "rgba(220, 38, 38, 0.6)", display: "flex" }} />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a8a29e",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Contained AI Competition Through Physical Isolation
        </div>
      </div>
    ),
    { ...size }
  );
}
