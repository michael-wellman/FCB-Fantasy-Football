import React, { useState } from "react";
import data from "../data/fantasy-football-data.json";

const WeeklyRankings = () => {
  console.log(data.seasons[0]);
  const [standingYear, setStandingYear] = useState(0);
  const standings = data.seasons[standingYear].standings;

  function changeYear(evt) {
    console.log(standingYear);
    setStandingYear(Number(evt.target.value));
    console.log(standingYear);
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-500">FCB Weekly Rankings</h2>

      <form>
        <label htmlFor="dd-year">Select Your Year</label>
        <select
          name="dd-year"
          id="dd-year"
          onChange={(event) => changeYear(event)}
          value={standingYear}
        >
          <option value="0">2023</option>
          <option value="1">2024</option>
        </select>
      </form>

      <table className="bg-gray-600 p-4 rounded w-full border-1">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Ties</th>
            <th>Points Forced</th>
            <th>Points Allowed</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => {
            return (
              <tr className="odd:bg-gray-300 even:bg-gray-600">
                <td>{team.ranking}</td>
                <td>{team.owner}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.ties}</td>
                <td>{team.pointsFor}</td>
                <td>{team.pointsAgainst}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default WeeklyRankings;