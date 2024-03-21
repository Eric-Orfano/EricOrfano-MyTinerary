import Layout from "./views/Layout"
import Home from "./views/Home"
import Cities from "./views/Cities"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useDispatch} from "react-redux"
import Registro from "./views/Registro";
import Login from "./views/Login";
import { useEffect } from "react"
import authQueries from "./services/authQueries";
import alertas from "./utils/alertas";
import { login } from "./redux/actions/userAction"; 


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data));
        alertas.success("Welcome" + res.data.first_name);
      }
    });
  }, []);

  return (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/Cities" element={<Cities />} />
            <Route path="/Cities/:id" element= {<Details />} />
            <Route path="/Registro" element= {<Registro />} />
            <Route path="/Login" element= {<Login />} />
          </Routes>
        </Layout>
    </BrowserRouter>
    
  )
}

export default App;


