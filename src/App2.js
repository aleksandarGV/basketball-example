import { useState } from "react";
import "./App.css";
import { splitStringToArray, formatArrayToMatrix } from "./utils/dataUtils";
import { NavLink, Outlet } from "react-router-dom";

function App() {
    const [data, setData] = useState([]);

    function handleFileUpload(e) {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        const errors = [];

        reader.readAsText(file);
        reader.onload = function () {
            const dataArr = splitStringToArray(reader.result);
            const dataMatrix = formatArrayToMatrix(dataArr);

            dataMatrix.forEach((row, index) => {
                if (row.length !== 4) {
                    errors.push(index + 1);
                }
            });

            if (errors.length) {
                errors.forEach((error) =>
                    console.error(`Data on row ${error} is invalid`)
                );
            }

            setData(dataMatrix);
        };
    }

    return (
        <div className="App">
            <h1>Home Page</h1>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/test-page">Test page</NavLink>
            <NavLink to={"/team-table"} state={{ data: data }}>
                Team page
            </NavLink>
            <NavLink to={"/overall-stats"} state={{ data: data }}>
                Overall stats
            </NavLink>
            <NavLink to={"/most-points"} state={{ data: data }}>
                Most points
            </NavLink>
            <NavLink to={"/most-points-per-time"} state={{ data: data }}>
                Most points per time played
            </NavLink>

            <input type="file" onChange={handleFileUpload} />

            {!!data.length && <Outlet />}
        </div>
    );
}

export default App;
