import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeView from './views/HomeView.jsx'
import AboutView from './views/AboutView.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Header title="SPA Lab" />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
      <Footer />
    </div>
  )
}
