import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Signup from './Signup'
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='' element={<Navigate to='/' replace />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </HashRouter>
  )
}
export default App
