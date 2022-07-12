import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';
// style
import './Recipe.css';
export const Recipe = () => {
  const { mode } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    try {
      // Fetch FireStore data/ Only Read 1 Item from the DB
      const data = async () => {
        const ref = await doc(db, 'recipes', id);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
          setIsPending(false);
          setRecipe(docSnap.data());
        } else {
          setIsPending(false);
          setError('Could not find recipe  ');
        }
      };
      data();
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">Process: {recipe.method}</p>
        </>
      )}
    </div>
  );
};
