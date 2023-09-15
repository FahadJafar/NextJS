import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({children}) => {
    return ( 
        <div className="Content">
<Navbar/>
{ children }
<Footer/>
        </div>
     );
}
 
export default Layout;
