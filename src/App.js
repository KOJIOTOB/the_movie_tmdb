import './App.css';

import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {Home, Movie} from "./pages";
import Search from "./pages/Search";


const App = () => {
    return (
        <div className={'App'}>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='movie/:id' element={<Movie/>}/>
                    <Route path='search' element={<Search/>}/>
ц
                </Route>
            </Routes>
        </div>
    )
}

export default App;
