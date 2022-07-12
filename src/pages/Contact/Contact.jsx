import { useLocation } from 'react-router-dom';

export const Contact = () => {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');
  return (
    <div>
      <h2>Hey {name}, Contact us here</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Facere, animi! Accusamus, quam labore odio quod libero
        officiis explicabo assumenda ab distinctio. Architecto, quas
        quidem nisi sed illo adipisci dolor doloribus?
      </p>
    </div>
  );
};
