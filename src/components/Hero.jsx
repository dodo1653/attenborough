export default function Hero({ config, showToast }) {
  const copyCA = () => {
    if (config.ca === 'COMING SOON') return
    navigator.clipboard.writeText(config.ca)
    showToast('CA copied')
  }

  return (
    <section className="hero">
      <div className="hero-wrap">
        <div className="hero-art">
          <img src={config.image} alt={config.name} />
        </div>
        <p className="hero-eyebrow">On Solana</p>
        <h1 className="hero-title">attenborough</h1>
        <p className="hero-tagline">{config.tagline}</p>
        <div className="hero-actions">
          <button className="hero-ca" onClick={copyCA}>
            <span className="label">CA</span>
            <span className="val">{config.ca}</span>
            <span>⧉</span>
          </button>
          <a href="#buy" className="hero-cta">How to buy →</a>
        </div>
      </div>
    </section>
  )
}