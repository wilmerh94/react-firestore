// import { Link } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';

// // Style
// import './Home.css';

// export const Home = () => {
//   const { data: articles, isPending, error } = useFetch(
//     'http://localhost:3000/articles'
//   );
//   return (
//     <div className="home">
//       <h2>Articles</h2>
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {articles &&
//         articles.map(article => (
//           <div key={article.id} className="card">
//             <h3>{article.title}</h3>
//             <p>{article.author}</p>
//             <Link to={`/articles/${article.id}`}>Read more...</Link>
//             {/* Right above you have an example of to make a route dynamically with the id, in the main route(APP.JSX) this will be "/articles/:id" that way it will be able for the router to read the dynamically generated
//              */}
//           </div>
//         ))}
//     </div>
//   );
// };
