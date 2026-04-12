import { ImageResponse } from "next/og";

export const alt = "Contexly — See what's behind the post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1a12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="10" fill="#10b981" />
            <path
              d="M12 20a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M20 16v4l2.5 2.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#f0f4f1",
              letterSpacing: "-0.02em",
            }}
          >
            Contexly
          </span>
        </div>
        <span
          style={{
            fontSize: 32,
            color: "#a8b8ae",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          AI-powered context notes for social media.
        </span>
        <span
          style={{
            fontSize: 24,
            color: "#10b981",
            marginTop: "16px",
          }}
        >
          One click. Real sources. No bias.
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
