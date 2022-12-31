import { createBrowserRouter } from 'react-router-dom';
import Book from '../../components/Book/Book';
import Home from '../../components/Home/Home';
import Inventory from '../../components/Inventory/Inventory';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Main from '../../layout/Main';
import PrivateRoutes from '../private/PrivateRoutes';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: async () => {
          return fetch('https://dummyjson.com/products');
        },
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/book',
        element: (
          <PrivateRoutes>
            <Book></Book>
          </PrivateRoutes>
        ),
      },
      {
        path: '/inventory',
        element: (
            <PrivateRoutes>
                <Inventory></Inventory>
            </PrivateRoutes>
        )
      }
    ],
  },
]);
