const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

function parseISODurationToSeconds(duration) {
  const match = duration.match(/PT(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+)S)?/);

  if (!match) return 0;

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  return hours * 3600 + minutes * 60 + seconds;
}

async function youtubeFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("YouTube API error");
  return res.json();
}

export async function getLatestLongFormVideo() {
  const apiKey = "AIzaSyCMrNmIHA1SNJjbtccv6FXWoDHX-cEDYyw";

  // 1. Get channel
  const channelData = await youtubeFetch(
    `${YOUTUBE_API_BASE}/channels?part=contentDetails&forHandle=MotoStoriesandmore&key=${apiKey}`
  );

  const uploadsPlaylistId =
    channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) return null;

  // 2. Get uploads
  const playlistData = await youtubeFetch(
    `${YOUTUBE_API_BASE}/playlistItems?part=contentDetails&playlistId=${uploadsPlaylistId}&maxResults=10&key=${apiKey}`
  );

  const videoIds = playlistData.items
    .map((item) => item.contentDetails.videoId)
    .join(",");

  // 3. Get durations
  const videosData = await youtubeFetch(
    `${YOUTUBE_API_BASE}/videos?part=contentDetails,snippet&id=${videoIds}&key=${apiKey}`
  );

  const videos = videosData.items;

  const longForm = videos.find((video) => {
    const duration = video.contentDetails.duration;
    return parseISODurationToSeconds(duration) > 90;
  });

  return longForm
    ? {
        id: longForm.id,
        title: longForm.snippet.title,
      }
    : null;
}
