import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/test">Test page</NavLink>
            <NavLink to="/posts">Posts page</NavLink>
            <Outlet />
        </div>
    );
}

export default App;
