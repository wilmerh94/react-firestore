import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //Im gonna get from this an params object from the URL of this page. From example any after the ":" its the param this case is "/:id" ID is the params
  const url = 'http://localhost:3000/articles/' + id;
  const { data: article, isPending, error } = useFetch(url); //using the hook useFetch I can take the data, loading and error from the url Im providing to it.
  useEffect(() => {
    //Im gonna use the If Statement to make sure this hook will be run immediately, just after error is true
    if (error) {
      //Redirect if any error happens and give few seconds to the user to read it
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};
