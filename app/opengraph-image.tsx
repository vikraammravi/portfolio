import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Vikram Ravi — Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b1020 0%, #1e1b4b 55%, #3b0764 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            letterSpacing: "3px",
            color: "#c7d2fe",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: "6px",
              height: "36px",
              background:
                "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
              borderRadius: "3px",
            }}
          />
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: "84px",
            fontWeight: 700,
            marginTop: "60px",
            lineHeight: 1,
          }}
        >
          Vikram Ravi
        </div>

        <div
          style={{
            fontSize: "44px",
            fontWeight: 600,
            marginTop: "16px",
            background:
              "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Applied AI Engineer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            color: "#cbd5e1",
            fontSize: "26px",
            lineHeight: 1.4,
          }}
        >
          <div>7+ years building Agentic RAG, LangGraph</div>
          <div>multi-agent systems, and LLM apps.</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "44px",
            fontSize: "20px",
            color: "#e0e7ff",
            fontWeight: 500,
          }}
        >
          {["Claude API", "LangGraph", "Agentic RAG", "FastAPI", "React"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 24px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(165,180,252,0.4)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          vikramportfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
