import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Style
import './SearchBar.css';

export const SearchBar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    // Redirect the user with query
    navigate(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={e => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};
