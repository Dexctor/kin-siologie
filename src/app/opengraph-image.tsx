import { ImageResponse } from "next/og";

export const alt =
  "Estelle Declercq, kinésiologie et maderothérapie à Dunkerque";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#fffbf7",
        color: "#2d211b",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        padding: 64,
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#f8f0e8",
          border: "2px solid #e7cfc3",
          borderRadius: 40,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "58px 64px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "#9e4526",
            borderRadius: 999,
            height: 310,
            opacity: 0.09,
            position: "absolute",
            right: -70,
            top: -95,
            width: 310,
          }}
        />
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
          Estelle Declercq
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 890,
            }}
          >
            Kinésiologie &amp; maderothérapie à Dunkerque
          </div>
          <div style={{ color: "#665348", display: "flex", fontSize: 29 }}>
            Stress, douleurs physiques et reconnexion au corps
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            color: "#9e4526",
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            gap: 14,
          }}
        >
          <span>19 Rue du Baron Coppens</span>
          <span>—</span>
          <span>59240 Dunkerque</span>
        </div>
      </div>
    </div>,
    size,
  );
}
