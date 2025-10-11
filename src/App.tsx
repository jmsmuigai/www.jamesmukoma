import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { ScrollToTop } from './components/ui/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ServicesPage } from './pages/ServicesPage';
import { DashboardPage } from './pages/DashboardPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Project Pages
import { ProjectASALPage } from './pages/projects/ProjectASALPage';
import { ProjectMathengePage } from './pages/projects/ProjectMathengePage';
import { ProjectFloodWarningPage } from './pages/projects/ProjectFloodWarningPage';
import { ProjectCowRecognitionPage } from './pages/projects/ProjectCowRecognitionPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen aura-bg">
          <ParticleBackground />
          <Navbar />
          
          <main className="relative z-10">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Project Pages */}
              <Route path="/projects/asal-integrated-platform" element={<ProjectASALPage />} />
              <Route path="/projects/mathenge-detection" element={<ProjectMathengePage />} />
              <Route path="/projects/flood-early-warning" element={<ProjectFloodWarningPage />} />
              <Route path="/projects/cow-recognition" element={<ProjectCowRecognitionPage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          <Footer />
          <ScrollToTop />
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#111111',
                color: '#F8FAFC',
                border: '1px solid #00F5D4',
              },
              success: {
                iconTheme: {
                  primary: '#00F5D4',
                  secondary: '#0A192F',
                },
              },
              error: {
                iconTheme: {
                  primary: '#FF6B00',
                  secondary: '#0A192F',
                },
              },
            }}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;