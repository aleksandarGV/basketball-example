import { useLocation } from "react-router-dom";

function MostPointsScoredByTimePlayedTable() {
    const location = useLocation();
    const data = location.state["data"];

    const dataModified = data.map((row) => {
        row.push(row[3] / row[2]);
        return row;
    });

    const sortedData = dataModified.sort((a, b) => {
        return b[4] - a[4];
    });

    return (
        <>
            <h2>Most Points Scored by Time Played in a single game</h2>
            <table>
                <thead>
                    <tr>
                        <th>Placement</th>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Time played(s)</th>
                        <th>Points Scored</th>
                        <th>Points Per Second Scored</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                                <td>{row[4]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default MostPointsScoredByTimePlayedTable;
