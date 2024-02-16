
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout.jsx'
import { Frontpage } from './pages/frontpage/frontpage.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route index element={<Frontpage />} />
          <Route path='/forside' element={<Frontpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


