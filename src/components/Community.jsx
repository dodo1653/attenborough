export default function Community({ config }) {
  return (
    <section id="community">
      <p className="section-tag">— No. 03</p>
      <h2 className="com-h">join the <em>movement</em>.</h2>
      <p className="com-sub">@{config.twitterHandle}</p>
      
      <a 
        href={`https://x.com/${config.twitterHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="com-link-btn"
      >
        𝕏 @{config.twitterHandle}
      </a>

      {config.twitterPostId && (
        <div className="com-embed">
          <div className="com-embed-card">
            <div className="com-embed-header">
              <div className="com-embed-avatar" />
              <div>
                <div className="com-embed-name">ATTENBOROUGH</div>
                <div className="com-embed-handle">@{config.twitterHandle}</div>
              </div>
            </div>
            <p className="com-embed-text">
              🎂 100 years of legends. The voice that taught us to respect nature — now onchain. $ATTENBOROUGH
            </p>
            <p className="com-embed-date">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}