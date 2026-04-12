import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1a12",
          borderRadius: "22%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          fill="none"
          width="140"
          height="140"
        >
          <path d="M16 18h22v14H30v64h8v14H16z" fill="#10b981" />
          <path d="M112 18H90v14h8v64h-8v14h22z" fill="#10b981" />
          <path
            d="M80 40a28 28 0 1 0 0 48"
            stroke="#1b4332"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
