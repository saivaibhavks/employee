import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:(
      <div>
        <h1>error</h1>
      </div>
    )
  },
  {
    path: "/about",
    element: <App />,
    errorElement: (
      <div>
        <h1>error</h1>
      </div>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
