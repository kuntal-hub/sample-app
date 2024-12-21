import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { makeStore } from './store/store.ts'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthLayout from './components/AuthLayout.tsx'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={
        <AuthLayout authentication={true}>
          <Home />
        </AuthLayout>
      } />

      <Route path="dashboard" element={
        <AuthLayout authentication={true}>
          <Home />
        </AuthLayout>
      } />

      <Route path="login" element={
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      } />
    </Route>
  )
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={makeStore()}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
