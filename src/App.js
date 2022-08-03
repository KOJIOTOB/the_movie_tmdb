import './App.css';

import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";

import {Home, Movie, Person, PersonInfo, Tv, TvMovie} from "./pages";
import Search from "./pages/Search";

const App = () => {
    return (
        <div className={'App'}>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='tv' element={<Tv/>}/>
                    <Route path='person' element={<Person/>}/>
                    <Route path='movie/:id' element={<Movie/>}/>
                    <Route path='tv/:id' element={<TvMovie/>}/>
                    <Route path='person/:id' element={<PersonInfo/>}/>
                    <Route path='search' element={<Search/>}/>
                </Route>

            </Routes>
        </div>
    )
}

export default App;
