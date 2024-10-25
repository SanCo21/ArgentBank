import { Link } from 'react-router-dom'
import InputWrapper from '../components/InputWrapper';
import CheckboxWrapper from '../components/CheckboxWrapper';

const SignIn = () => {
    return (
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <InputWrapper label="Username" type="text" id="username" />
                <InputWrapper label="Password" type="password" id="password" />
                <CheckboxWrapper label="Remember me" id="remember-me" />
                <Link to="/User" className="sign-in-button">
                    Sign In
                </Link>
              {/* Utilise un bouton au lieu d'un lien pour soumettre le formulaire */}
              {/* <button type="submit" className="sign-in-button">Sign In</button> */}
            </form>
          </section>
        </main>
      );
    };

export default SignIn;