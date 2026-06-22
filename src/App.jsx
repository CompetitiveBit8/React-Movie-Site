import './css/App.css'
import Favorites from './pages/Favourites';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './cotexts/MovieContext';

function App() {
  const movieNumber = 1;

  return (
      <MovieProvider>
        <NavBar />
          <main className='main-context'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<Favorites />} />
            </Routes>
          </main>
      </MovieProvider>
  )
} 

export default App
