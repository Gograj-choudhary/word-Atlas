import { Home } from "./Pages/Home"
import { AppLayout } from "./components/layout/AppLayout"
import { About } from "./Pages/About"
import { Country } from "./Pages/Country"
import { Contect } from "./Pages/Contect"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CountryDetails } from "./components/UI/CountryDetails"

const App =()=>{
     const router = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/country",
            element: <Country/>
          },
          {
            path: "/country/:id",
            element: <CountryDetails/>
          },
          {
            path: "/contect",
            element: <Contect/>

          }
        ]
      }
     ])
  return (
    <RouterProvider router={router} > </RouterProvider>
  )
}

export default App
