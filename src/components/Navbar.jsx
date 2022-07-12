import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
// Style
import './Navbar.css';
import { useTheme } from '../hooks/useTheme';
export const Navbar = () => {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};
