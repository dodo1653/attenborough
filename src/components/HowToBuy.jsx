export default function HowToBuy({ config, showToast }) {
  const copyCA = () => {
    if (config.ca === 'COMING SOON') return
    navigator.clipboard.writeText(config.ca)
    showToast('CA copied')
  }

  const steps = [
    { num: '01', title: 'Get a wallet', desc: 'Install Phantom for browser or mobile. Save the seed phrase somewhere only you remember.' },
    { num: '02', title: 'Fund with SOL', desc: 'Buy SOL on Binance, Coinbase, or Bybit. Send to your Phantom wallet address.' },
    { num: '03', title: 'Open Pump.fun', desc: 'Visit pump.fun. Connect Phantom. The $ATTENBOROUGH pair is ready.' },
    { num: '04', title: 'Swap', desc: 'Set slippage 15-25%. Confirm. The legend is now yours.' },
  ]

  return (
    <section className="section" id="buy">
      <div className="buy-head">
        <p className="section-tag">— No. 01</p>
        <h2 className="section-h">how to <em>buy</em>.</h2>
        <button className="buy-ca" onClick={copyCA}>
          <span className="buy-ca-label">CA</span>
          <span className="buy-ca-val">{config.ca}</span>
          <span>⧉</span>
        </button>
      </div>
      <div className="buy-body">
        {steps.map((step, i) => (
          <div key={i} className="buy-step">
            <div className="n">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}