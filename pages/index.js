export default function Home({ latestVideo }) {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        maxWidth: "1000px",
        margin: "0 auto"
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

      {latestVideo ? (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              margin: "20px auto",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              background: "#000"
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${latestVideo.id}`}
              title={latestVideo.title}
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }}
            ></iframe>
          </div>

          <h3 style={{ marginTop: "20px" }}>{latestVideo.title}</h3>
        </>
      ) : (
        <p style={{ color: "#aaa" }}>
          Could not load the latest video right now.
        </p>
      )}

      <hr style={{ border: "1px solid #333", margin: "40px 0" }} />

      <h2>Join the Crew</h2>

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
          cursor: "pointer"
        }}
      >
        Subscribe
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const API_KEY = "AIzaSyCMrNmIHA1SNJjbtccv6FXWoDHX-cEDYyw";

    // 1. Get channel uploads playlist
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=MotoStoriesandmore&key=${API_KEY}`
    );
    const channelData = await channelRes.json();

    const uploads =
      channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploads) throw new Error("No uploads playlist");

    // 2. Get latest videos
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${uploads}&maxResults=5&key=${API_KEY}`
    );
    const playlistData = await playlistRes.json();

    const videoIds = playlistData.items.map(
      (item) => item.contentDetails.videoId
    );

    // 3. Get durations (filter Shorts)
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds.join(",")}&key=${API_KEY}`
    );
    const videosData = await videosRes.json();

    function getSeconds(duration) {
      const match = duration.match(/PT(?:(\\d+)M)?(?:(\\d+)S)?/);
      const minutes = parseInt(match?.[1] || "0");
      const seconds = parseInt(match?.[2] || "0");
      return minutes * 60 + seconds;
    }

    const video = videosData.items.find(
      (v) => getSeconds(v.contentDetails.duration) > 90
    );

    return {
      props: {
        latestVideo: video
          ? {
              id: video.id,
              title: video.snippet.title
            }
          : null
      }
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        latestVideo: null
      }
    };
  }
}
