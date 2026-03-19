export default function Home({ latestVideoId }) {
  const videoId = latestVideoId || "dQw4w9WgXcQ";

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        MotoStories & More
      </h1>

      <p style={{ fontSize: "20px", color: "#aaa", marginBottom: "40px" }}>
        Real motorcycles. Real stories. No BS.
      </p>

      <hr style={{ border: "1px solid #333", margin: "40px 0" }} />

      <h2>Latest Video</h2>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          margin: "20px auto",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          background: "#000",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Latest MotoStories and More video"
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

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        New videos every week — builds, stories, reviews, and real rider insight.
      </p>

      <hr style={{ border: "1px solid #333", margin: "40px 0" }} />

      <h2>Join the Crew</h2>
      <p>Get updates, behind-the-scenes content, and downloadable guides.</p>

      <input
        placeholder="Enter email"
        style={{ padding: "12px", width: "250px", marginRight: "10px" }}
      />

      <button
        style={{
          padding: "12px 20px",
          background: "#ff3c00",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>

      <hr style={{ border: "1px solid #333", margin: "40px 0" }} />

      <h2>Blog / Stories</h2>
      <p style={{ color: "#aaa" }}>
        Stories from the road, builds in the garage, and thoughts from 500,000+
        miles on two wheels.
      </p>

      <hr style={{ border: "1px solid #333", margin: "40px 0" }} />

      <h2>Free Downloads</h2>
      <p>PDF guides, checklists, and gear breakdowns coming soon.</p>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://www.youtube.com/@MotoStoriesandmore/videos", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    const html = await res.text();

    // Grab the first /watch?v=... found on the channel videos page
    const match = html.match(/\\/watch\\?v=([a-zA-Z0-9_-]{11})/);

    return {
      props: {
        latestVideoId: match ? match[1] : null,
      },
    };
  } catch (error) {
    return {
      props: {
        latestVideoId: null,
      },
    };
  }
}
