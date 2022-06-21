
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Result from './pages/Result'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/result' element={<Result />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
