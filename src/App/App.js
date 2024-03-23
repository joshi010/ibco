import React, { lazy, useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
const NotFound = lazy(() => import('../Components/NotFound'));
const Home = lazy(() => import('../Components/Home/Home'));
const Materias = lazy(() => import('../Components/Materias/Materias'));
const Contacto = lazy(() => import('../Components/Contacto/Contacto'));

const telefono = '+52 33 38 12 16 14';

const routes = [
  {path: '*', element: <NotFound />},
  {path: '/', element: <Home />},
  {path:'/materias', element:<Materias />},
  {path: '/contacto', element: <Contacto telefono={telefono} />}
]


function App() {
  const location = useLocation();
  
  useEffect(() => {
  window.scrollTo(0, 0);
  }, [location]);
  const element = useRoutes(routes);
  return element;
}

export default App;
