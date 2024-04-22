import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Instagrame from "./page/Instagrame";
import NavBar from "./component/NavBar";
import ErrorMessage from "./component/ErrorMessage";
import Footer from "./page/footer";
import Context from "./context/Context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Instagrame/:id" element={<Instagrame />} />
        <Route path="*" element={<ErrorMessage />} />
      </Route>
    )
  );

  return (
    <div className="App">
   
   <Context>
  <RouterProvider router={router} />
   </Context>
   <Footer/>
    </div>
  );
}

export default App;
