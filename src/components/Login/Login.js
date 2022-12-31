import React, { useContext } from 'react';
import { FaGoogle, FaFacebook, FaGithub, FaMailBulk } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {signInWithGoogle, signInWithGithub, signInWithFacebook, signInUser} = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, {replace: true})
        })
        .catch(e => {
            console.log(e);
        })
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, {replace: true})
        })
        .catch(e => {
            console.log(e);
        })
    }
    const handleSignInWithGithub = () => {
        signInWithGithub()
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, {replace: true})
        })
        .catch(e => {
            console.log(e);
        })
    }
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => {
            console.log(e);
        })
    }
  return (
    <div className='hero min-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign in or Login now!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                required
                className='input input-bordered'
              />
              <label className='label'>
                <a
                  href='#'
                  className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
          </form>
          <p className='text-center mb-4'>or use one of this options</p>
          <hr className='mt-4' />
          <div className='my-4  flex justify-evenly'>
            <Link to='/register' className='btn'><FaMailBulk></FaMailBulk></Link>
            <button onClick={handleSignInWithGoogle} className='btn'><FaGoogle></FaGoogle></button>
            <button onClick={handleSignInWithFacebook} className='btn'><FaFacebook></FaFacebook></button>
            <button onClick={handleSignInWithGithub} className='btn'><FaGithub></FaGithub></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
