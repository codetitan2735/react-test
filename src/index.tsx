import React, { useState, useEffect, ChangeEvent } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
interface DataTypes {
  id: number;
  title: string;
  tournament: {
    id: number;
    shortName: string;
    name: string;
  };
  startTime: string;
  teams: TeamTypes[];
}

interface TeamTypes {
  id: number;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}
interface ScoreTypes {
  id: number;
  games: Teams[];
  series: {
    teams: Score[];
  };
}
interface Score {
  score: number;
}
interface Teams {
  teams: Score[];
}

export const App = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  const [results, setResults] = useState<DataTypes[]>([]);
  const [scores, setScores] = useState<ScoreTypes[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/series")
      .then((res) => {
        setResults(res.data);
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3001/liveGenerator")
      .then((res) => {
        setScores(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const res = data.filter((item) => {
      if (
        item.title
          .toLocaleUpperCase()
          .indexOf(e.target.value.toLocaleUpperCase()) > -1 ||
        item.tournament.shortName
          .toLocaleUpperCase()
          .indexOf(e.target.value.toLocaleUpperCase()) > -1
      )
        return item;
    });
    console.log(res);
    setResults(res);
  };
  return (
    <div>
      <h1>On Going Games</h1>
      <input
        type="text"
        onChange={handleChange}
        name="typeinput"
        placeholder="Filter on Title and Tournament"
      />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>TIME</th>
            <th>TEAM 1</th>
            <th></th>
            <th>TEAM 2</th>

            <th>TOURNAMENT</th>
          </tr>
        </thead>
        <tbody>
          {results &&
            scores &&
            results.map((item, index) => {
              return (
                <>
                  <tr className="">
                    <td>{item.title}</td>
                    <td>{item.startTime}</td>
                    <td>
                      {item.teams[0].name}
                      <img
                        src={item.teams[0].logoUrl}
                        style={{ paddingLeft: "9px" }}
                      />
                    </td>
                    <td>
                      <span>20</span>
                      <span style={{ padding: "0px 10px" }}>x</span>
                      <span>9</span>
                    </td>
                    <td>
                      <img
                        src={item.teams[1].logoUrl}
                        style={{ paddingRight: "9px" }}
                      />
                      {item.teams[1].name}
                    </td>
                    <td>{item.tournament.name}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
