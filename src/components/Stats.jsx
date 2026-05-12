export default function Stats({ config }) {
  const stats = [
    { label: 'Chain', value: 'Solana', mono: false },
    { label: 'Total Supply', value: config.supply, mono: false },
    { label: 'Buy / Sell Tax', value: config.tax, mono: true },
    { label: 'Contract', value: config.ca === 'COMING SOON' ? 'COMING SOON' : 'DEPLOYED', mono: true },
  ]

  return (
    <section id="stats">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-cell">
            <div className={`stat-num ${stat.mono ? 'is-mono' : ''}`}>
              {stat.value === 'Solana' ? <em>{stat.value}</em> : stat.value}
            </div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}