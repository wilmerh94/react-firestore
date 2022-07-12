import { Navigate, Route, Routes } from 'react-router-dom';

//Page Components
import { Navbar } from './components/Navbar';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Create } from './pages/Create/Create';
import { Home } from './pages/Home/Home';
import { Recipe } from './pages/Recipe/Recipe';
import { Search } from './pages/Search/Search';
import { ThemeSelector } from './components/ThemeSelector';

// Style
import './App.css';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
