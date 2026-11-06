import { Routes, Route } from 'react-router-dom';
import Navbar from './features/base/components/layout/Navbar';
import Footer from './features/base/components/layout/Footer';
import Landing from './features/base/pages/Landing/Landing';
import { LinkedInSection } from './features/linkedin/components/LinkedInSection';

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
