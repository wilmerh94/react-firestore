import { useEffect, useState } from 'react';
// FireBase - FireStore
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
// Components
import { RecipeList } from '../../components/RecipeList';
// style
import './Home.css';
export const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    try {
      // Fetch FireStore data/ Only Read
      const data = async () => {
        const querySnapshot = await getDocs(
          collection(db, 'recipes')
        );
        if (querySnapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          querySnapshot.forEach(doc => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      };
      data();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
