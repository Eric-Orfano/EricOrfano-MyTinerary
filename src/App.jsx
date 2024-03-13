import Layout from "./views/Layout"
import Home from "./views/Home"
import Cities from "./views/Cities"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Cities/:id" element= {<Details />}/>
      </Routes>
    </Layout>
  </BrowserRouter>

  )
}

export default App;


