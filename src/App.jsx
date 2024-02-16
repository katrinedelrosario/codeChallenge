import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/mainLayout.jsx'
import { PageNotFound } from './pages/404Page/404Page.jsx'
import { Frontpage } from './pages/Frontpage.jsx'



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,


      children: [
       {path: "/", element: <Frontpage />}
      ],
    },
    {
      path: "*",
      element: <PageNotFound />
    }
  ])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App


