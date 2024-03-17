import Layout from "./views/Layout"
import Home from "./views/Home"
import Cities from "./views/Cities"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from './redux/store'
import {Provider} from "react-redux"

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/Cities/:id" element= {<Details />}/>
        </Routes>
      </Layout>
    </Provider>
  </BrowserRouter>

  )
}

export default App;


