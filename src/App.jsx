
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout.jsx'
import { Frontpage } from './pages/frontpage/frontpage.jsx'
import Breadcrumb from './components/breadcrumb/index.jsx';

function App() {
  return (
    <>
      <Router>
        <Breadcrumb />
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


