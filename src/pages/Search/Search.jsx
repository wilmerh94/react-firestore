import { useLocation } from 'react-router-dom';
import { RecipeList } from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
//Component
// Style
import './Search.css';
export const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:3000/recipes?q=' + query;

  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes Including "{query}"</h2>
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
