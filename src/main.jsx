import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { Provider } from 'react-redux'
import { NotesAppStore } from './Store/NotesApp.store'

const Router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ]
  }, {
    path: "*", element: <PageNotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={NotesAppStore}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
)
