import { ImageResponse } from "next/og"

export const alt = "Acoustic Treats — Premium Acoustic Panels & Soundproofing Malaysia"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const BARS = [4, 9, 15, 22, 18, 28, 20, 34, 18, 26, 14, 20, 10, 16, 8, 12, 18, 26, 30, 22, 16, 24, 30, 18, 12, 8, 14, 20]

const GOLD = "#b8953a"
const BLACK = "#080b0f"
const CREAM = "#e8e0d5"
const MUTED = "#9b958c"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `radial-gradient(120% 120% at 50% 0%, #10151b 0%, ${BLACK} 60%)`,
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        {/* hairline frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `1px solid rgba(184,149,58,0.28)`,
          }}
        />

        {/* top label + sound wave */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 600,
            }}
          >
            Precision Acoustics · Malaysia
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", height: 96, gap: 6 }}>
            {BARS.map((h, i) => (
              <div
                key={i}
                style={{
                  width: 7,
                  height: h * 2.7,
                  background: GOLD,
                  opacity: 0.3 + (h / 34) * 0.65,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 500,
              color: CREAM,
              lineHeight: 1,
              letterSpacing: -1,
            }}
          >
            Acoustic Treats
          </div>
          <div style={{ display: "flex", width: 88, height: 2, background: GOLD }} />
          <div style={{ display: "flex", fontSize: 32, color: MUTED, letterSpacing: 0.5 }}>
            Acoustic Panels · Diffusers · Soundproofing
          </div>
        </div>

        {/* footer row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            acoustic-treats.vercel.app
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 600,
            }}
          >
            Quote on WhatsApp →
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
