export default function Footer({ config }) {
  return (
    <footer>
      <div className="ft-wrap">
        <div className="ft-mega">{config.ticker}.</div>
        <div className="ft-meta">
          <div>{config.ticker} is a meme coin · not financial advice.</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}