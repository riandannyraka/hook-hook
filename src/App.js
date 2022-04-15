import './App.css';
import React from 'react'
import { useRoutes, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login navigate={useNavigate()} /> },
    { path: "/home", element: <Home /> },
    // { path: "dashboard", element: <Dashboard /> },
    // {
    //   path: "Groups",
    //   element: <Groups />,
    //   // Nested routes use a children property, which is also
    //   // the same as <Route>
    //   children: [
    //     { path: ":id", element: <Group /> },
    //     { path: "user", element: <UserGroup /> }
    //   ]
    // },
    // // Not found routes work as you'd expect
    // { path: "*", element: <NotFound /> }
  ]);
  return element
}

export default App;
