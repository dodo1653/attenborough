export default function Header({ config, showToast }) {
  return (
    <nav className="header">
      <div className="header-wrap">
        <a href="#" className="header-logo">{config.ticker}</a>
        <a 
          href={config.buyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="header-btn"
        >
          Buy →
        </a>
      </div>
    </nav>
  )
}