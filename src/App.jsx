import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import LayOut from './Components/LayOut/LayOut';
import NotFound from './Components/NotFound/NotFound';


const routing = createBrowserRouter([
  {path : '/' , element : <LayOut />, children : [
    {index : true , element : <Home/>},
    {path : 'about', element : <About/>},
    {path : 'portfolio', element : <Portfolio/>},
    {path : 'contact', element : <Contact/>},
    {path : '*', element : <NotFound />},
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App