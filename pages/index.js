
export default function Home() {
  return (
    <div style={{fontFamily:'Arial',padding:'40px'}}>
      <h1>MotoStories & More</h1>
      <p>Your website is LIVE 🎉</p>

      <h2>Latest Video</h2>
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen>
      </iframe>

      <h2>Newsletter Signup</h2>
      <input placeholder="Enter email" style={{padding:'10px'}} />
      <button style={{marginLeft:'10px'}}>Subscribe</button>

      <h2>Blog</h2>
      <p>Coming soon...</p>

      <h2>PDF Upload (Admin Demo)</h2>
      <input type="file" />
    </div>
  );
}
