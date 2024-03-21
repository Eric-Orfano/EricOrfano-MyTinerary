import Layout from "./views/Layout"
import Home from "./views/Home"
import Cities from "./views/Cities"
import Details from "./views/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useDispatch} from "react-redux"
import Registro from "./views/Register";
import Login from "./views/Login";
import { useEffect } from "react"
import authQueries from "./services/authQueries";
import alertas from "./utils/alertas";
import { login } from "./redux/actions/userAction"; 
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import AuthBlock from "./guard/AuthBlock"

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
            <Route element={<AuthBlock />}>
              <Route path="/Registro" element= {<Registro />} />
              <Route path="/Login" element= {<Login />} />
            </Route>  
          </Routes>
        </Layout>
        <ToastContainer /> 
    </BrowserRouter>
    
  )
}

export default App;


