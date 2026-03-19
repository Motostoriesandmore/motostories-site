export default function Home() {
  return (
    <div style={{fontFamily:'Arial', padding:'40px', background:'#111', color:'#fff', minHeight:'100vh'}}>

      <h1 style={{fontSize:'48px', marginBottom:'10px'}}>
        MotoStories & More
      </h1>

      <p style={{fontSize:'20px', color:'#aaa', marginBottom:'40px'}}>
        Real motorcycles. Real stories. No BS.
      </p>

      <hr style={{border:'1px solid #333', margin:'40px 0'}} />

      <h2>Latest Video</h2>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/t6CKTT_KL08"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <p style={{color:'#aaa', marginTop:'10px'}}>
        New videos every week — builds, stories, reviews, and real rider insight.
      </p>

      <hr style={{border:'1px solid #333', margin:'40px 0'}} />

      <h2>Join the Crew</h2>

      <p>Get updates, behind-the-scenes content, and downloadable guides.</p>

      <input
        placeholder="Enter email"
        style={{padding:'12px', width:'250px', marginRight:'10px'}}
      />

      <button
        style={{
          padding:'12px 20px',
          background:'#ff3c00',
          color:'#fff',
          border:'none',
          cursor:'pointer'
        }}
      >
        Subscribe
      </button>

      <hr style={{border:'1px solid #333', margin:'40px 0'}} />

      <h2>Blog / Stories</h2>

      <p style={{color:'#aaa'}}>
        Stories from the road, builds in the garage, and thoughts from 500,000+ miles on two wheels.
      </p>

      <hr style={{border:'1px solid #333', margin:'40px 0'}} />

      <h2>Free Downloads</h2>

      <p>PDF guides, checklists, and gear breakdowns coming soon.</p>

    </div>
  );
}
