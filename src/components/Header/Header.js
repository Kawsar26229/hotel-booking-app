import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, signOutWithAll } = useContext(AuthContext);
  // console.log(user);
  const handleSingOut = () => {
    signOutWithAll()
    .then(() => {
      navigate('/login');
    })
    .catch(e => {
      console.log(e);
    })
  }
  return (
    <div>
        <h3>Name: {user?.displayName}</h3>
      <div className='navbar bg-neutral text-neutral-content justify-around'>
        <div>
          <Link
            to='/'
            className='btn btn-ghost normal-case text-xl'>
            Home
          </Link>
          <Link
            to='/book'
            className='btn btn-ghost normal-case text-xl'>
            Book
          </Link>
          <Link
            to='/inventory'
            className='btn btn-ghost normal-case text-xl'
          >Inventory</Link>
        </div>
        <div>
          {
            user?.uid && <h3>{user.displayName}</h3>
          }
          {user?.uid ? (
            <button onClick={handleSingOut} className='btn'>Log Out</button>
          ) : (
            <>
              <Link
                to='/register'
                className='btn btn-ghost normal-case text-xl'>
                Register
              </Link>
              <Link
                to='/login'
                className='btn btn-ghost normal-case text-xl'>
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
