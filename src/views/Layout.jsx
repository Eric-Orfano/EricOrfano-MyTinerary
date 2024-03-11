import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
     <Header />
        {props.children}
      <Footer />
    </div>
  );
}

export default Layout