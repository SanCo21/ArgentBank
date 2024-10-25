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

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../API/userService';
// import InputWrapper from '../components/InputWrapper';
// import CheckboxWrapper from '../components/CheckboxWrapper';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(formData);
//       console.log(data);
//       navigate('/User'); // Redirect to User page on successful login
//     } catch (error) {
//       console.error('Error during sign in:', error);
//     }
//   };

//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <i className="fa fa-user-circle sign-in-icon"></i>
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <InputWrapper label="Username" type="text" id="username" name="username" onChange={handleChange} />
//           <InputWrapper label="Password" type="password" id="password" name="password" onChange={handleChange} />
//           <CheckboxWrapper label="Remember me" id="remember-me" />
//           <button type="submit" className="sign-in-button">Sign In</button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default SignIn;