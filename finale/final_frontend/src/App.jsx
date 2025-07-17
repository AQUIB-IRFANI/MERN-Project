import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AddBlog from "./components/AddBlog"
import ShowBlog from "./components/ShowBlog"
import UpdateBlog from "./components/UpdateBlog"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/:id" element={<ShowBlog />} />
          <Route path="/update/:id" element={ <UpdateBlog/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
