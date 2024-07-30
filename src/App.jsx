
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'

function App() {
  let routers = createBrowserRouter([
    {path : '' , element : <Layout/>, children : [
        {index : true , element : <Home/>},
        {path : 'about' , element : <About/>},
        {path : 'portfolio' , element : <Portfolio/>},
        {path : 'contact' , element : <Contact/>},
        {path : '*' , element : <NotFound/>},
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
