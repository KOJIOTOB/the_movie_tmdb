
import {Outlet} from "react-router-dom";
import {NavBar} from "../../component";


const MainLayout = () => {

    return (
        <div>
           <NavBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};