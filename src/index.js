import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App2";
import TestPage from "./components/pages/TestPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Posts from "./components/pages/Posts";
import MostPointsScoredByTeamTable from "./components/MostPointsScoredByTeamTable";
import DataTable from "./components/DataTable";
import MostPointsScoredTable from "./components/MostPointsScoredTable";
import MostPointsScoredByTimePlayedTable from "./components/MostPointsScoredByTimePlayedTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//     },
//     {
//         path: "/test",
//         element: <TestPage />,
//     },
// ]);

// root.render(<RouterProvider router={router} />);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/test" element={<TestPage />} />
                <Route path="/posts" element={<Posts />} />
                <Route
                    path="/team-table"
                    element={<MostPointsScoredByTeamTable />}
                />
                <Route path="/overall-stats" element={<DataTable />} />
                <Route
                    path="/most-points"
                    element={<MostPointsScoredTable />}
                />
                <Route
                    path="/most-points-per-time"
                    element={<MostPointsScoredByTimePlayedTable />}
                />
            </Route>
            <Route path="/test-page" element={<TestPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
