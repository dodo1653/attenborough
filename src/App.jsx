import { useState } from 'react'
import { config } from './config'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import HowToBuy from './components/HowToBuy'
import Tokenomics from './components/Tokenomics'
import Community from './components/Community'
import Footer from './components/Footer'
import Toast from './components/Toast'

function App() {
  const [toast, setToast] = useState(null)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <div className="min-h-screen">
      <Header config={config} showToast={showToast} />
      <Hero config={config} showToast={showToast} />
      <Stats config={config} />
      <About config={config} />
      <HowToBuy config={config} showToast={showToast} />
      <Tokenomics config={config} />
      <Community config={config} />
      <Footer config={config} />
      {toast && <Toast message={toast} />}
    </div>
  )
}

export default App