import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <p>La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
};

export default Error;