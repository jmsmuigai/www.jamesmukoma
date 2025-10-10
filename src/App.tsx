import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import Chatbot from './components/ai/Chatbot'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-blue text-text-light">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App