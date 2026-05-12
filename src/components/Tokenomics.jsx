export default function Tokenomics({ config }) {
  return (
    <section className="section" id="tokenomics">
      <div className="section-wrap">
        <p className="section-tag">— No. 02</p>
        <h2 className="section-h">tokenomics.</h2>
        <p className="tk-line">
          <span className="gold">{config.supply}</span> supply
          <span className="dot">·</span> 
          <span className="gold">{config.tax}</span> tax
          <span className="dot">·</span> 
          <span className="gold">100%</span> LP burned
          <span className="dot">·</span> 
          mint <span className="gold">renounced</span>.
        </p>
      </div>
    </section>
  )
}