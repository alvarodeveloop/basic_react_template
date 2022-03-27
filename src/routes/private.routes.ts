import { lazy } from 'react'

// pages container.
const Pages = {
  // Login: lazy(() => import('pages/login')),
  //Unauthorized: lazy(() => import('pages/unauthorized')),
  Home: lazy(() => import('../pages/home')),
}

/**
 * Objeto con la definición de las diferentes rutas de la plataforma para iniciar sesión
 */
export default [
  {
    key: 'login-page',
    title: 'Home principal',
    path: '/home',
    Child: Pages.Home,
    // Child: Pages.Login
    // },
    // {
    //   key: 'unauthorized-page',
    //   title: 'No Autorizado',
    //   path: '/403',
    //   Child: Pages.Unauthorized,
    // },
    // blank html page for load authentication iframe to refresh the token,
    // also, you should set REACT_APP_AAD_LOGIN_ACTION_REDIRECT as '/auth' route.
    // {
    //   key: 'auth-page',
    //   title: 'Autenticando',
    //   path: '/auth',
    //   Child: () => null,
    // },
  },
]
