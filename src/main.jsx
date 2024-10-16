
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './components/Header.jsx';
import { createBrowserRouter,  Outlet,  RouterProvider } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import BookingPAge from './components/BookingPage.jsx';
import Login from './pages/Login.jsx';
import Specials from './components/Specials.jsx';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/reservations',
        element: <BookingPAge />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/specials',
        element: <Specials />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
);
