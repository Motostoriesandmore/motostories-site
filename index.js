
export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        color: "#f5f5f5",
        fontFamily: 'Arial, Helvetica, sans-serif',
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 64px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
            borderBottom: "1px solid #262626",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "0.5px" }}>
              MotoStories & More
            </div>
            <div style={{ color: "#b3b3b3", marginTop: "6px", fontSize: "15px" }}>
              Real motorcycles. Real stories. No BS.
            </div>
          </div>

          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://www.youtube.com/@MotoStoriesandmore" target="_blank" rel="noreferrer" style={navButton}>
              YouTube Channel
            </a>
            <a href="https://www.youtube.com/c/MotoStorieswithUnkiePhil/videos" target="_blank" rel="noreferrer" style={navButton}>
              Latest Videos
            </a>
            <a href="https://www.youtube.com/c/MotoStorieswithUnkiePhil/playlists" target="_blank" rel="noreferrer" style={navButton}>
              Playlists
            </a>
          </nav>
        </header>

        <section
          style={{
            marginTop: "32px",
            border: "1px solid #262626",
            borderRadius: "24px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #141414 0%, #1c1c1c 45%, #2a1208 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              padding: "42px 28px",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "28px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#ff5a1f",
                  color: "#111",
                  fontWeight: 700,
                  fontSize: "12px",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  marginBottom: "18px",
                }}
              >
                RIDER-FIRST MOTORCYCLE MEDIA
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px, 6vw, 68px)",
                  lineHeight: 1.02,
                  margin: "0 0 18px",
                  fontWeight: 900,
                }}
              >
                Stories from the road,
                <br />
                the garage,
                <br />
                and 500,000+ miles.
              </h1>

              <p
                style={{
                  color: "#c7c7c7",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  maxWidth: "700px",
                  marginBottom: "24px",
                }}
              >
                MotoStories & More is for riders who care about truth, experience,
                weird bikes, real-world reviews, and the stories that make motorcycles
                worth loving in the first place.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#featured-video" style={primaryButton}>
                  Watch Featured Video
                </a>

                <a
                  href="https://www.youtube.com/@MotoStoriesandmore"
                  target="_blank"
                  rel="noreferrer"
                  style={secondaryButton}
                >
                  Visit the Channel
                </a>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "22px",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#ff9a73",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                WHAT YOU’LL FIND HERE
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "14px" }}>
                {[
                  "Motorcycle stories with actual perspective",
                  "Honest product and bike reviews",
                  "Garage builds, weird finds, and event coverage",
                  "Podcast links, downloads, and rider resources",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      padding: "14px 16px",
                      color: "#ddd",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="featured-video" style={{ marginTop: "40px" }}>
          <div style={sectionTitle}>Featured Video</div>

          <div
            style={{
              background: "#151515",
              border: "1px solid #262626",
              borderRadius: "24px",
              padding: "22px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "18px",
                background: "#000",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MotoStories and More Featured Video"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              ></iframe>
            </div>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "6px" }}>
                  Latest spotlight from the channel
                </div>
                <div style={{ color: "#b8b8b8", lineHeight: 1.6, maxWidth: "760px" }}>
                  Swap the featured video later if you want. This version is stable and won’t break the site.
                </div>
              </div>

              <a
                href="https://www.youtube.com/c/MotoStorieswithUnkiePhil/videos"
                target="_blank"
                rel="noreferrer"
                style={primaryButton}
              >
                See All Videos
              </a>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <div style={cardEyebrow}>NEWSLETTER</div>
            <h3 style={cardTitle}>Join the Crew</h3>
            <p style={cardText}>
              Get updates, behind-the-scenes notes, new video alerts, and future PDF downloads.
            </p>
            <input placeholder="Enter your email" style={inputStyle} />
            <button style={primaryButtonFull}>Subscribe</button>
          </div>

          <div style={cardStyle}>
            <div style={cardEyebrow}>BLOG / STORIES</div>
            <h3 style={cardTitle}>Road Notes & Garage Thoughts</h3>
            <p style={cardText}>
              A place for stories, event recaps, bike thoughts, and the kind of stuff
              that doesn’t fit neatly into a video.
            </p>
            <div style={comingSoon}>Coming soon</div>
          </div>

          <div style={cardStyle}>
            <div style={cardEyebrow}>DOWNLOADS</div>
            <h3 style={cardTitle}>Free Guides & PDFs</h3>
            <p style={cardText}>
              Bike checklists, event prep sheets, buying guides, and whatever else helps riders out.
            </p>
            <div style={comingSoon}>Coming soon</div>
          </div>
        </section>

        <footer
          style={{
            marginTop: "46px",
            borderTop: "1px solid #262626",
            paddingTop: "26px",
            color: "#9d9d9d",
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>© MotoStories & More</div>
          <div>Built for riders, not algorithms.</div>
        </footer>
      </div>
    </div>
  );
}

const navButton = {
  textDecoration: "none",
  color: "#f5f5f5",
  border: "1px solid #303030",
  background: "#181818",
  padding: "10px 14px",
  borderRadius: "999px",
  fontSize: "14px",
};

const primaryButton = {
  display: "inline-block",
  textDecoration: "none",
  background: "#ff5a1f",
  color: "#111",
  padding: "14px 18px",
  borderRadius: "999px",
  fontWeight: 800,
};

const secondaryButton = {
  display: "inline-block",
  textDecoration: "none",
  background: "transparent",
  color: "#fff",
  padding: "14px 18px",
  borderRadius: "999px",
  border: "1px solid #3a3a3a",
  fontWeight: 700,
};

const primaryButtonFull = {
  width: "100%",
  border: 0,
  background: "#ff5a1f",
  color: "#111",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: 800,
  cursor: "pointer",
  marginTop: "12px",
};

const sectionTitle = {
  fontSize: "30px",
  fontWeight: 900,
  marginBottom: "18px",
};

const cardStyle = {
  background: "#151515",
  border: "1px solid #262626",
  borderRadius: "22px",
  padding: "24px",
};

const cardEyebrow = {
  color: "#ff9a73",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "1px",
  marginBottom: "10px",
};

const cardTitle = {
  margin: "0 0 10px",
  fontSize: "24px",
  fontWeight: 800,
};

const cardText = {
  color: "#b8b8b8",
  lineHeight: 1.6,
  marginBottom: "16px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 14px",
  borderRadius: "14px",
  border: "1px solid #303030",
  background: "#0f0f0f",
  color: "#fff",
  outline: "none",
};

const comingSoon = {
  display: "inline-block",
  marginTop: "8px",
  padding: "10px 12px",
  borderRadius: "999px",
  border: "1px solid #333",
  color: "#ddd",
};
