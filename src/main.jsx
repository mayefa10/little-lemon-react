
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './components/Header.jsx';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './pages/Highlights.jsx';

import About from './pages/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Home from './pages/Home.jsx';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Home/>
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
        path: '/hero',
        element: <Hero/>,
      },
      {
        path: '/highlights',
        element: <Highlights />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
);
