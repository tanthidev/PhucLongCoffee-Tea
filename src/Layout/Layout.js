import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout({children}){
    return(
        <div>
            <Header/>
            <SideBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default DefaultLayout;