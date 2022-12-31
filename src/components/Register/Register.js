import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, createUser} = useContext(AuthContext);
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
            console.log(user);
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
            navigate(from, {replace: true})
        })
        .catch(e => {
            console.log(e);
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
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
                  <span className='label-text'>Full Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='fullName'
                  className='input input-bordered'
                  required
                />
              </div>
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
                  <Link to='/login'
                    className='label-text-alt link link-hover'>
                    Already Have an Account? Login
                  </Link>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Register</button>
              </div>
            </form>
            <p className='text-center mb-4'>or use one of this options</p>
            <hr className='mt-4' />
            <div className='my-4  flex justify-evenly'>
              <button onClick={handleSignInWithGoogle} className='btn'><FaGoogle></FaGoogle></button>
              <button onClick={handleSignInWithFacebook} className='btn'><FaFacebook></FaFacebook></button>
              <button onClick={handleSignInWithGithub} className='btn'><FaGithub></FaGithub></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;