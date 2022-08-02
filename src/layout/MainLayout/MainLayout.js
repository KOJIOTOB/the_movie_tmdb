
import {Outlet} from "react-router-dom";
import {NavBar} from "../../component";
import Search from "../../pages/Search";


const MainLayout = () => {

    return (
        <div>
           <NavBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};