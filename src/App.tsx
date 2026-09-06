import { Routes, Route } from 'react-router-dom';
import Navbar from './features/base/components/layout/Navbar.tsx';
import Footer from './features/base/components/layout/Footer.tsx';
import Landing from './features/base/pages/Landing/Landing.tsx';
import { LinkedInSection } from './features/linkedin/components/LinkedInSection.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <Landing>
                <LinkedInSection />
            </Landing>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
