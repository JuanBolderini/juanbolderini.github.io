import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PortfolioDetailsSite1 from './pages/PortfolioDetailsSite1'
import PortfolioDetailsSite2 from './pages/PortfolioDetailsSite2'
import PortfolioDetailsAnimalium from './pages/PortfolioDetailsAnimalium'
import PortfolioDetailsSacramentos from './pages/PortfolioDetailsSacramentos'
import PortfolioDetailsBraga from './pages/PortfolioDetailsBraga'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio-details-site1" element={<PortfolioDetailsSite1 />} />
      <Route path="/portfolio-details-site2" element={<PortfolioDetailsSite2 />} />
      <Route path="/portfolio-details-animalium" element={<PortfolioDetailsAnimalium />} />
      <Route path="/portfolio-details-sacramentos" element={<PortfolioDetailsSacramentos />} />
      <Route path="/portfolio-details-braga" element={<PortfolioDetailsBraga />} />
    </Routes>
  )
}

export default App

